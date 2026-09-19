import tkinter as tk
from tkinter import ttk
import threading
import queue
import time
from src.service.detector import DetectorService
from src.model.models import DetectorResult
from src.service.mapper import InputMapper
import traceback

class ControllerGUI:
    def __init__(self, root, service: DetectorService):
        self.root = root
        self.service = service
        self.root.title("GyroPad Desktop Host")
        self.root.geometry("800x600")
        
        self.device = None
        self.streaming = False
        self.thread = None
        self.queue = queue.Queue()
        
        self.create_widgets()
        
        # Start looking for device
        self.refresh_device()
        self.root.after(100, self.process_queue)
        
    def create_widgets(self):
        # Top Frame: Device Info
        self.frame_top = ttk.LabelFrame(self.root, text="Device Connection")
        self.frame_top.pack(fill=tk.X, padx=10, pady=5)
        
        self.lbl_status = ttk.Label(self.frame_top, text="Status: Disconnected", font=("Arial", 12, "bold"))
        self.lbl_status.pack(side=tk.LEFT, padx=10, pady=10)
        
        self.btn_refresh = ttk.Button(self.frame_top, text="Refresh", command=self.refresh_device)
        self.btn_refresh.pack(side=tk.RIGHT, padx=10, pady=10)
        
        # Middle Frame: Profiles and Config
        self.frame_middle = ttk.LabelFrame(self.root, text="Controller Configuration (Phase 9)")
        self.frame_middle.pack(fill=tk.X, padx=10, pady=5)
        
        ttk.Label(self.frame_middle, text="Profile:").grid(row=0, column=0, padx=5, pady=5, sticky=tk.W)
        self.profile_var = tk.StringVar(value="landscape")
        self.profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.profile_var, values=["landscape", "portrait", "standard"])
        self.profile_combo.grid(row=0, column=1, padx=5, pady=5, sticky=tk.W)
        
        ttk.Label(self.frame_middle, text="Steering Deadzone:").grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)
        self.steer_deadzone = tk.DoubleVar(value=0.10)
        self.scale_steer_dz = ttk.Scale(self.frame_middle, from_=0.0, to_=0.5, orient=tk.HORIZONTAL, variable=self.steer_deadzone)
        self.scale_steer_dz.grid(row=1, column=1, padx=5, pady=5, sticky=tk.W)
        
        ttk.Label(self.frame_middle, text="Throttle Deadzone:").grid(row=2, column=0, padx=5, pady=5, sticky=tk.W)
        self.throttle_deadzone = tk.DoubleVar(value=0.15)
        self.scale_throttle_dz = ttk.Scale(self.frame_middle, from_=0.0, to_=0.5, orient=tk.HORIZONTAL, variable=self.throttle_deadzone)
        self.scale_throttle_dz.grid(row=2, column=1, padx=5, pady=5, sticky=tk.W)
        
        # Bottom Frame: Live Data
        self.frame_bottom = ttk.LabelFrame(self.root, text="Live Output")
        self.frame_bottom.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        
        self.txt_console = tk.Text(self.frame_bottom, state=tk.DISABLED, bg="black", fg="white", font=("Consolas", 10))
        self.txt_console.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Actions
        self.frame_actions = ttk.Frame(self.root)
        self.frame_actions.pack(fill=tk.X, padx=10, pady=10)
        
        self.btn_start = ttk.Button(self.frame_actions, text="Start Controller", command=self.toggle_stream, state=tk.DISABLED)
        self.btn_start.pack(side=tk.LEFT, padx=5)
        
        self.btn_calibrate = ttk.Button(self.frame_actions, text="Calibrate Neutral", command=self.calibrate, state=tk.DISABLED)
        self.btn_calibrate.pack(side=tk.LEFT, padx=5)
        
        self.last_raw_accel = [0.0, 0.0, 0.0]
        self.last_raw_gyro = [0.0, 0.0, 0.0]
        self.mapper = InputMapper(mode="landscape")
        
    def log(self, msg):
        self.queue.put(("log", msg))
        
    def process_queue(self):
        while not self.queue.empty():
            msg_type, data = self.queue.get()
            if msg_type == "log":
                self.txt_console.config(state=tk.NORMAL)
                self.txt_console.insert(tk.END, data + "\n")
                self.txt_console.see(tk.END)
                # Keep only last 50 lines
                lines = int(self.txt_console.index('end-1c').split('.')[0])
                if lines > 50:
                    self.txt_console.delete('1.0', f'{lines-50}.0')
                self.txt_console.config(state=tk.DISABLED)
            elif msg_type == "ui":
                self.update_live_ui(data)
        
        self.root.after(100, self.process_queue)
        
    def calibrate(self):
        if self.streaming:
            self.mapper.set_calibration(self.last_raw_accel, self.last_raw_gyro)
            self.log("Calibrated neutral position.")
        else:
            self.log("Must be streaming to calibrate.")
            
    def refresh_device(self):
        self.lbl_status.config(text="Status: Detecting...", foreground="blue")
        self.root.update()
        
        result = self.service.detect()
        if result.errors:
            self.lbl_status.config(text="Status: Error or None", foreground="red")
            self.btn_start.config(state=tk.DISABLED)
            self.log("Errors detected:")
            for err in result.errors:
                self.log(f"- {err.message}")
        else:
            self.device = result.device
            self.lbl_status.config(text=f"Status: Connected to {self.device.model}", foreground="green")
            self.btn_start.config(state=tk.NORMAL)
            self.log(f"Device found: {self.device.manufacturer} {self.device.model} (Android {self.device.android_version})")

    def toggle_stream(self):
        if self.streaming:
            self.streaming = False
            self.btn_start.config(text="Start Controller")
            self.btn_calibrate.config(state=tk.DISABLED)
        else:
            self.streaming = True
            self.btn_start.config(text="Stop Controller")
            self.btn_calibrate.config(state=tk.NORMAL)
            self.thread = threading.Thread(target=self.stream_loop, daemon=True)
            self.thread.start()
            
    def stream_loop(self):
        self.log(f"Starting stream for {self.device.serial}...")
        
        try:
            is_wifi = hasattr(self.service.transport, "target_ip")
            target_ip = getattr(self.service.transport, "target_ip", '127.0.0.1')
            
            if not is_wifi:
                self.service.transport.open_stream(self.device.serial, 5050, 5050)
                
            import socket
            import json
            import select
            
            # Phase 7: Virtual Controller (vgamepad)
            try:
                import vgamepad as vg
                gamepad = vg.VX360Gamepad()
                vg_available = True
                self.log("Virtual gamepad initialized.")
            except ImportError:
                gamepad = None
                vg_available = False
                self.log("vgamepad not installed! Controller emulation disabled.")
                
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(2.0)
            
            self.log(f"Connecting to {target_ip}:5050...")
            s.connect((target_ip, 5050))
            self.log("Connected to Companion App!")
            
            s.setblocking(False)
            
            last_ping = 0
            buffer = ""
            
            while self.streaming:
                now = time.time()
                if now - last_ping > 0.05:
                    try:
                        s.sendall(b"ping\n")
                    except Exception:
                        break
                    last_ping = now
                
                try:
                    ready = select.select([s], [], [], 0.01)
                    if ready[0]:
                        data = s.recv(4096)
                        if not data:
                            break
                        
                        buffer += data.decode('utf-8')
                        while '\n' in buffer:
                            line, buffer = buffer.split('\n', 1)
                            if line.strip():
                                try:
                                    payload = json.loads(line)
                                    acc = payload['accel']
                                    gyr = payload['gyro']
                                    buttons = payload.get('buttons', {})
                                    joystick_left = payload.get('joystick_left', {'x': 0.0, 'y': 0.0})
                                    joystick_right = payload.get('joystick_right', {'x': 0.0, 'y': 0.0})
                                    touchpad_delta = payload.get('touchpad_delta', {'x': 0.0, 'y': 0.0})
                                    
                                    self.last_raw_accel = acc
                                    self.last_raw_gyro = gyr
                                    
                                    # Profile dynamically
                                    if self.mapper.mode != self.profile_var.get():
                                        old_accel = self.mapper.accel_offset
                                        old_gyro = self.mapper.gyro_offset
                                        self.mapper = InputMapper(mode=self.profile_var.get())
                                        self.mapper.set_calibration(old_accel, old_gyro)
                                        
                                    self.mapper.steering.deadzone = self.steer_deadzone.get()
                                    self.mapper.throttle.deadzone = self.throttle_deadzone.get()
                                    
                                    mapped = self.mapper.process(acc, gyr)
                                    st = mapped["steering"]
                                    th = mapped["throttle"]
                                    
                                    lx = joystick_left['x']
                                    ly = -joystick_left['y']
                                    rx = joystick_right['x']
                                    ry = -joystick_right['y']
                                    
                                    final_lx = lx if (abs(lx) > 0.01 or abs(ly) > 0.01) else st
                                    final_ly = ly if (abs(lx) > 0.01 or abs(ly) > 0.01) else th
                                    
                                    if vg_available:
                                        gamepad.left_joystick_float(x_value_float=final_lx, y_value_float=final_ly)
                                        gamepad.right_joystick_float(x_value_float=rx, y_value_float=ry)
                                        if buttons.get('Cross'): gamepad.press_button(button=vg.XUSB_BUTTON.XUSB_GAMEPAD_A)
                                        else: gamepad.release_button(button=vg.XUSB_BUTTON.XUSB_GAMEPAD_A)
                                        gamepad.update()
                                        
                                    # Print minimal status instead of full flood
                                    if int(now * 10) % 5 == 0:  # Update log ~2 times a sec
                                        self.log(f"LStick: {final_lx:.2f}, {final_ly:.2f} | RStick: {rx:.2f}, {ry:.2f}")
                                except json.JSONDecodeError:
                                    pass

                except BlockingIOError:
                    pass
                except Exception as e:
                    pass

        except Exception as e:
            self.log(f"Stream error: {e}")
        finally:
            try:
                s.close()
            except:
                pass
            if not is_wifi:
                self.service.transport.close_stream(self.device.serial, 5050)
            self.log("Stream stopped.")
            self.streaming = False
            self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
            self.root.after(0, lambda: self.btn_calibrate.config(state=tk.DISABLED))
