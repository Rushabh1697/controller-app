import tkinter as tk
from tkinter import ttk
import threading
import queue
import time
from src.service.detector import DetectorService
from src.model.models import DetectorResult
from src.service.mapper import InputMapper
import traceback
from src.ui.mapping_utils import load_mapping, save_mapping

class ControllerGUI:
    def __init__(self, root, service: DetectorService):
        self.root = root
        self.service = service
        self.root.title("GyroPad Desktop Host")
        self.root.geometry("820x650")
        self.root.minsize(700, 500)
        
        self.device = None
        self.streaming = False
        self.thread = None
        self.queue = queue.Queue()
        self.mapping = load_mapping()
        self._test_pad = None
        
        self.create_widgets()
        
        # Start looking for device
        self.refresh_device()
        self.root.after(100, self.process_queue)
        
    def create_widgets(self):
        # Top Frame: Device Connection & Controls
        self.frame_top = ttk.LabelFrame(self.root, text="Device Connection & Controls")
        self.frame_top.pack(fill=tk.X, padx=10, pady=5)
        
        # Row 1: Connection status, Transport mode & Refresh button
        f_status = ttk.Frame(self.frame_top)
        f_status.pack(fill=tk.X, padx=10, pady=(8, 4))
        
        self.lbl_status = ttk.Label(f_status, text="Status: Disconnected", font=("Arial", 11, "bold"))
        self.lbl_status.pack(side=tk.LEFT)
        
        self.btn_refresh = ttk.Button(f_status, text="Refresh", command=self.refresh_device)
        self.btn_refresh.pack(side=tk.RIGHT, padx=(5, 0))
        
        # Smart detect initial mode: check if BT PAN has an active gateway
        from src.transport.wifi import get_bluetooth_pan_ip, WifiTransport
        init_mode = "USB (Cable)"
        if hasattr(self.service.transport, "transport_name"):
            if self.service.transport.transport_name == "Bluetooth":
                init_mode = "Bluetooth (PAN)"
            elif self.service.transport.transport_name == "Wi-Fi":
                init_mode = "Wi-Fi"
        else:
            bt_ip = get_bluetooth_pan_ip()
            if bt_ip != "192.168.44.1":
                self.service.transport = WifiTransport(bt_ip, transport_name="Bluetooth")
                init_mode = "Bluetooth (PAN)"

        self.transport_var = tk.StringVar(value=init_mode)
        self.combo_transport = ttk.Combobox(f_status, textvariable=self.transport_var, values=["USB (Cable)", "Bluetooth (PAN)", "Wi-Fi"], state="readonly", width=16)
        self.combo_transport.pack(side=tk.RIGHT, padx=5)
        self.combo_transport.bind("<<ComboboxSelected>>", self.on_transport_change)
        
        ttk.Label(f_status, text="Mode:").pack(side=tk.RIGHT, padx=2)
        
        # Row 2: 4-Digit PIN & Start Controller
        f_controls = ttk.Frame(self.frame_top)
        f_controls.pack(fill=tk.X, padx=10, pady=(4, 10))
        
        ttk.Label(f_controls, text="4-Digit PIN:", font=("Arial", 10, "bold")).pack(side=tk.LEFT, padx=(0, 6))
        self.pin_var = tk.StringVar()
        self.pin_entry = ttk.Entry(f_controls, textvariable=self.pin_var, width=8, font=("Consolas", 12, "bold"), justify="center")
        self.pin_entry.pack(side=tk.LEFT, padx=(0, 15))
        self.pin_entry.bind("<Return>", lambda e: self.toggle_stream())
        
        self.btn_start = ttk.Button(f_controls, text="Start Controller", command=self.toggle_stream, state=tk.DISABLED)
        self.btn_start.pack(side=tk.LEFT, padx=5)
        
        self.btn_calibrate = ttk.Button(f_controls, text="Calibrate Neutral", command=self.calibrate, state=tk.DISABLED)
        self.btn_calibrate.pack(side=tk.LEFT, padx=5)
        
        # Middle Frame: Profiles and Config
        self.frame_middle = ttk.LabelFrame(self.root, text="Controller Configuration")
        self.frame_middle.pack(fill=tk.X, padx=10, pady=5)
        
        ttk.Label(self.frame_middle, text="Emulation:").grid(row=0, column=0, padx=5, pady=5, sticky=tk.W)
        self.controller_type_var = tk.StringVar(value="PlayStation (DualShock 4 / PS5)")
        self.controller_type_combo = ttk.Combobox(
            self.frame_middle,
            textvariable=self.controller_type_var,
            values=["PlayStation (DualShock 4 / PS5)", "Xbox 360"],
            state="readonly",
            width=28
        )
        self.controller_type_combo.grid(row=0, column=1, padx=5, pady=5, sticky=tk.W)
        
        self.btn_test_gamepad = ttk.Button(self.frame_middle, text="Test / Wake Gamepad", command=self.test_wake_gamepad)
        self.btn_test_gamepad.grid(row=0, column=2, padx=10, pady=5, sticky=tk.W)
        
        ttk.Label(self.frame_middle, text="Profile:").grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)
        self.profile_var = tk.StringVar(value="landscape")
        self.profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.profile_var, values=["landscape", "portrait", "standard"], state="readonly", width=14)
        self.profile_combo.grid(row=1, column=1, padx=5, pady=5, sticky=tk.W)
        
        self.btn_edit_map = ttk.Button(self.frame_middle, text="Edit Mapping", command=self.open_mapping_editor)
        self.btn_edit_map.grid(row=1, column=2, padx=10, pady=5, sticky=tk.W)
        
        ttk.Label(self.frame_middle, text="Steering Deadzone:").grid(row=2, column=0, padx=5, pady=5, sticky=tk.W)
        self.steer_deadzone = tk.DoubleVar(value=0.10)
        self.scale_steer_dz = ttk.Scale(self.frame_middle, from_=0.0, to_=0.5, orient=tk.HORIZONTAL, variable=self.steer_deadzone)
        self.scale_steer_dz.grid(row=2, column=1, padx=5, pady=5, sticky=tk.W)
        
        # Bottom Frame: Live Data
        self.frame_bottom = ttk.LabelFrame(self.root, text="Live Output")
        self.frame_bottom.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        
        self.txt_console = tk.Text(self.frame_bottom, state=tk.DISABLED, bg="black", fg="white", font=("Consolas", 10))
        self.txt_console.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        self.last_raw_accel = [0.0, 0.0, 0.0]
        self.last_raw_gyro = [0.0, 0.0, 0.0]
        self.mapper = InputMapper(mode="landscape")
        
    def test_wake_gamepad(self):
        """Attaches a virtual PlayStation (or Xbox) gamepad and sends an initial button tap
        so hardwaretester.com/gamepad and Windows immediately see the controller."""
        try:
            import vgamepad as vg
            is_ps = self.controller_type_var.get().startswith("PlayStation")
            pad = vg.VDS4Gamepad() if is_ps else vg.VX360Gamepad()
            pad_name = "PlayStation (DualShock 4 / PS5)" if is_ps else "Xbox 360"
            self.log(f"Attaching virtual {pad_name} controller to Windows...")
            if is_ps:
                pad.press_button(vg.DS4_BUTTONS.DS4_BUTTON_CROSS)
                pad.update()
                time.sleep(0.05)
                pad.release_button(vg.DS4_BUTTONS.DS4_BUTTON_CROSS)
                pad.update()
            else:
                pad.press_button(vg.XUSB_BUTTON.XUSB_GAMEPAD_A)
                pad.update()
                time.sleep(0.05)
                pad.release_button(vg.XUSB_BUTTON.XUSB_GAMEPAD_A)
                pad.update()
            self.log(f"✓ {pad_name} is active in Windows! Open hardwaretester.com/gamepad to see it.")
            self._test_pad = pad
        except Exception as e:
            self.log(f"Gamepad initialization failed: {e}")

    def on_transport_change(self, event=None):
        mode = self.transport_var.get()
        if mode == "Bluetooth (PAN)":
            from src.transport.wifi import WifiTransport, get_bluetooth_pan_ip
            bt_ip = get_bluetooth_pan_ip()
            self.service.transport = WifiTransport(bt_ip, transport_name="Bluetooth")
            self.log(f"Switched to Bluetooth PAN mode (Auto-detected Phone IP: {bt_ip}).")
            self.log("Ensure Bluetooth Tethering is ON on your phone and PC is connected.")
        elif mode == "Wi-Fi":
            from src.transport.wifi import WifiTransport
            from tkinter import simpledialog
            ip = simpledialog.askstring("Wi-Fi Setup", "Enter Phone IP address (from app screen):", parent=self.root)
            if ip and ip.strip():
                self.service.transport = WifiTransport(ip.strip(), transport_name="Wi-Fi")
                self.log(f"Switched to Wi-Fi mode ({ip.strip()}).")
            else:
                self.transport_var.set("USB (Cable)")
                return
        else:
            from src.transport.adb import AdbTransport
            self.service.transport = AdbTransport()
            self.log("Switched to USB (Cable) mode.")
            
        self.device = None
        self.refresh_device()
        
    def open_mapping_editor(self):
        editor = tk.Toplevel(self.root)
        editor.title("Edit Button Mapping")
        editor.geometry("400x500")
        
        canvas = tk.Canvas(editor)
        scrollbar = ttk.Scrollbar(editor, orient="vertical", command=canvas.yview)
        scrollable_frame = ttk.Frame(canvas)

        scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )

        canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        XBOX_BUTTONS = [
            "XUSB_GAMEPAD_A", "XUSB_GAMEPAD_B", "XUSB_GAMEPAD_X", "XUSB_GAMEPAD_Y",
            "XUSB_GAMEPAD_DPAD_UP", "XUSB_GAMEPAD_DPAD_DOWN", "XUSB_GAMEPAD_DPAD_LEFT", "XUSB_GAMEPAD_DPAD_RIGHT",
            "XUSB_GAMEPAD_LEFT_SHOULDER", "XUSB_GAMEPAD_RIGHT_SHOULDER",
            "XUSB_GAMEPAD_LEFT_THUMB", "XUSB_GAMEPAD_RIGHT_THUMB",
            "XUSB_GAMEPAD_START", "XUSB_GAMEPAD_BACK", "XUSB_GAMEPAD_GUIDE",
            "LEFT_TRIGGER", "RIGHT_TRIGGER", "NONE"
        ]
        
        map_vars = {}
        row = 0
        for flutter_btn, xbox_btn in self.mapping.items():
            ttk.Label(scrollable_frame, text=flutter_btn).grid(row=row, column=0, padx=10, pady=5, sticky="w")
            var = tk.StringVar(value=xbox_btn)
            combo = ttk.Combobox(scrollable_frame, textvariable=var, values=XBOX_BUTTONS, state="readonly", width=30)
            combo.grid(row=row, column=1, padx=10, pady=5)
            map_vars[flutter_btn] = var
            row += 1
            
        def save():
            for f_btn, var in map_vars.items():
                self.mapping[f_btn] = var.get()
            save_mapping(self.mapping)
            self.log("Button mapping saved.")
            editor.destroy()
            
        ttk.Button(scrollable_frame, text="Save", command=save).grid(row=row, column=0, columnspan=2, pady=20)

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
            
    def refresh_device(self, silent=False):
        if not silent:
            self.lbl_status.config(text="Status: Detecting...", foreground="blue")
            self.root.update()
        
        mode = self.transport_var.get()
        is_wireless = hasattr(self.service.transport, "target_ip")
        
        result = self.service.detect()
        if result.errors:
            if not self.device:
                self.lbl_status.config(text="Status: Searching for device...", foreground="orange")
                # In wireless modes, keep button enabled so user can attempt connect with PIN
                self.btn_start.config(state=tk.NORMAL if is_wireless else tk.DISABLED)
                if not silent:
                    if mode == "Bluetooth (PAN)":
                        bt_ip = getattr(self.service.transport, "target_ip", "192.168.44.1")
                        self.log(f"Searching for Bluetooth phone at {bt_ip}... Ensure Bluetooth Tethering is ON and phone is paired.")
                    elif mode == "Wi-Fi":
                        wifi_ip = getattr(self.service.transport, "target_ip", "")
                        self.log(f"Searching for Wi-Fi phone at {wifi_ip}... Ensure phone and PC are on the same Wi-Fi.")
                    else:
                        self.log("Waiting for device... Ensure phone is connected with USB Debugging enabled.")
            # Auto-retry detection every 2 seconds if not streaming
            if not self.streaming:
                self.root.after(2000, lambda: self.refresh_device(silent=True))
        else:
            prev_device = self.device
            self.device = result.device
            self.lbl_status.config(text=f"Status: Connected to {self.device.model}", foreground="green")
            self.btn_start.config(state=tk.NORMAL)
            if prev_device is None or prev_device.serial != self.device.serial:
                self.log(f"Device found: {self.device.manufacturer} {self.device.model} (Android {self.device.android_version})")
                self.log("Enter the 4-digit PIN shown on your phone screen and click 'Start Controller'.")

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
        is_wifi = hasattr(self.service.transport, "target_ip")
        if not self.device:
            if is_wifi:
                # Create device placeholder for Bluetooth or Wi-Fi
                target_ip = getattr(self.service.transport, "target_ip", "127.0.0.1")
                from src.model.models import Device, ConnectionState
                self.device = Device(
                    serial=target_ip,
                    manufacturer=getattr(self.service.transport, "transport_name", "Wireless"),
                    model="Phone",
                    brand="Android",
                    android_version="?",
                    sdk_level=0,
                    abi="",
                    abilist=[],
                    connection_state=ConnectionState.DEVICE
                )
            else:
                self.log("ERROR: No USB device connected. Plug in phone or switch to Bluetooth mode.")
                self.streaming = False
                self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                return

        self.log(f"Starting stream for {self.device.serial}...")
        
        s = None
        is_wifi = False
        
        # Configure safe Windows mouse event API
        has_mouse_api = False
        user32 = None
        try:
            import ctypes
            from ctypes import wintypes
            user32 = ctypes.windll.user32
            user32.mouse_event.argtypes = [
                wintypes.DWORD,
                wintypes.LONG,
                wintypes.LONG,
                wintypes.DWORD,
                ctypes.c_size_t
            ]
            user32.mouse_event.restype = None
            has_mouse_api = True
        except Exception:
            has_mouse_api = False

        try:
            is_wifi = hasattr(self.service.transport, "target_ip")
            target_ip = getattr(self.service.transport, "target_ip", '127.0.0.1')
            
            if not is_wifi:
                self.service.transport.open_stream(self.device.serial, 5050, 5050)
                
            import socket
            import json
            import select
            
            # Phase 7: Virtual Controller (vgamepad)
            is_ps = self.controller_type_var.get().startswith("PlayStation")
            if self._test_pad is not None:
                try:
                    del self._test_pad
                except Exception:
                    pass
                self._test_pad = None

            try:
                import vgamepad as vg
                gamepad = vg.VDS4Gamepad() if is_ps else vg.VX360Gamepad()
                vg_available = True
                pad_name = "PlayStation (DualShock 4 / PS5)" if is_ps else "Xbox 360"
                self.log(f"Virtual {pad_name} controller initialized.")
            except (ImportError, Exception) as e:
                gamepad = None
                vg_available = False
                self.log(f"Virtual controller disabled: {e}. (Install ViGEmBus to enable controller emulation).")
                
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(3.0)
            
            self.log(f"Connecting to socket at {target_ip}:5050...")
            try:
                s.connect((target_ip, 5050))
            except Exception as e:
                self.log(f"Connection failed to {target_ip}:5050 ({e}).")
                self.log("💡 Tip: Ensure the GyroPad app is actively OPEN on your phone screen!")
                s.close()
                self.streaming = False
                self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                return
            
            # Auth — validate PIN format before sending
            pin = self.pin_var.get().strip()
            if not pin:
                self.log("ERROR: PIN is required. Check the phone screen.")
                s.close()
                self.streaming = False
                self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                return
            if not pin.isdigit() or len(pin) != 4:
                self.log("ERROR: PIN must be exactly 4 digits (e.g. 3847). Check the phone screen.")
                s.close()
                self.streaming = False
                self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                return
                
            s.sendall(f"AUTH {pin}\n".encode('utf-8'))
            auth_resp = s.recv(1024).decode('utf-8').strip()
            if auth_resp != "AUTH_OK":
                self.log(f"Authentication failed: {auth_resp}")
                s.close()
                self.streaming = False
                self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                return
            
            self.log("Connected and Authenticated!")
            
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
                                    
                                    # Mouse control via Touchpad
                                    if has_mouse_api:
                                        t_dx = float(touchpad_delta.get('x', 0.0))
                                        t_dy = float(touchpad_delta.get('y', 0.0))
                                        dx = max(-60, min(60, int(t_dx * 1.5)))
                                        dy = max(-60, min(60, int(t_dy * 1.5)))
                                        if dx != 0 or dy != 0:
                                            try:
                                                user32.mouse_event(0x0001, dx, dy, 0, 0)
                                            except Exception:
                                                pass
                                    
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
                                        if is_ps:
                                            # PlayStation DualShock 4 / PS5 Emulation
                                            gamepad.left_joystick_float(x_value_float=final_lx, y_value_float=final_ly)
                                            gamepad.right_joystick_float(x_value_float=rx, y_value_float=ry)
                                            
                                            # Analog Triggers (L2 / R2)
                                            lt_pressed = bool(buttons.get('L2'))
                                            rt_pressed = bool(buttons.get('R2'))
                                            gamepad.left_trigger_float(value_float=1.0 if lt_pressed else 0.0)
                                            gamepad.right_trigger_float(value_float=1.0 if rt_pressed else 0.0)
                                            
                                            # Face & Shoulder Buttons
                                            ds4_map = {
                                                'Cross': vg.DS4_BUTTONS.DS4_BUTTON_CROSS,
                                                'Circle': vg.DS4_BUTTONS.DS4_BUTTON_CIRCLE,
                                                'Square': vg.DS4_BUTTONS.DS4_BUTTON_SQUARE,
                                                'Triangle': vg.DS4_BUTTONS.DS4_BUTTON_TRIANGLE,
                                                'L1': vg.DS4_BUTTONS.DS4_BUTTON_SHOULDER_LEFT,
                                                'R1': vg.DS4_BUTTONS.DS4_BUTTON_SHOULDER_RIGHT,
                                                'L3': vg.DS4_BUTTONS.DS4_BUTTON_THUMB_LEFT,
                                                'R3': vg.DS4_BUTTONS.DS4_BUTTON_THUMB_RIGHT,
                                                'Options': vg.DS4_BUTTONS.DS4_BUTTON_OPTIONS,
                                                'Share': vg.DS4_BUTTONS.DS4_BUTTON_SHARE,
                                            }
                                            for f_btn, d_btn in ds4_map.items():
                                                if buttons.get(f_btn):
                                                    gamepad.press_button(button=d_btn)
                                                else:
                                                    gamepad.release_button(button=d_btn)
                                                    
                                            # Special Buttons: Touchpad and PS / GP
                                            if buttons.get('Touchpad'):
                                                gamepad.press_special_button(special_button=vg.DS4_SPECIAL_BUTTONS.DS4_SPECIAL_BUTTON_TOUCHPAD)
                                            else:
                                                gamepad.release_special_button(special_button=vg.DS4_SPECIAL_BUTTONS.DS4_SPECIAL_BUTTON_TOUCHPAD)
                                                
                                            if buttons.get('PS') or buttons.get('GP'):
                                                gamepad.press_special_button(special_button=vg.DS4_SPECIAL_BUTTONS.DS4_SPECIAL_BUTTON_PS)
                                            else:
                                                gamepad.release_special_button(special_button=vg.DS4_SPECIAL_BUTTONS.DS4_SPECIAL_BUTTON_PS)
                                                
                                            # D-Pad
                                            u = bool(buttons.get('DpadUp'))
                                            d = bool(buttons.get('DpadDown'))
                                            l = bool(buttons.get('DpadLeft'))
                                            r = bool(buttons.get('DpadRight'))
                                            if u and r:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_NORTHEAST)
                                            elif u and l:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_NORTHWEST)
                                            elif d and r:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_SOUTHEAST)
                                            elif d and l:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_SOUTHWEST)
                                            elif u:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_NORTH)
                                            elif d:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_SOUTH)
                                            elif l:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_WEST)
                                            elif r:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_EAST)
                                            else:
                                                gamepad.directional_pad(direction=vg.DS4_DPAD_DIRECTIONS.DS4_BUTTON_DPAD_NONE)
                                                
                                            gamepad.update()
                                        else:
                                            # Xbox 360 Emulation
                                            gamepad.left_joystick_float(x_value_float=final_lx, y_value_float=final_ly)
                                            gamepad.right_joystick_float(x_value_float=rx, y_value_float=ry)
                                            
                                            lt_val = 0.0
                                            rt_val = 0.0
                                            for f_btn, x_btn in self.mapping.items():
                                                is_pressed = bool(buttons.get(f_btn))
                                                if x_btn == "LEFT_TRIGGER":
                                                    if is_pressed: lt_val = 1.0
                                                elif x_btn == "RIGHT_TRIGGER":
                                                    if is_pressed: rt_val = 1.0
                                                elif x_btn != "NONE" and hasattr(vg.XUSB_BUTTON, x_btn):
                                                    btn_val = getattr(vg.XUSB_BUTTON, x_btn)
                                                    if is_pressed: gamepad.press_button(button=btn_val)
                                                    else: gamepad.release_button(button=btn_val)
                                                    
                                            gamepad.left_trigger_float(value_float=lt_val)
                                            gamepad.right_trigger_float(value_float=rt_val)
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
            if s is not None:
                try:
                    s.close()
                except Exception:
                    pass
            if not is_wifi and self.device and hasattr(self.service.transport, "close_stream"):
                try:
                    self.service.transport.close_stream(self.device.serial, 5050)
                except Exception:
                    pass
            self.log("Stream stopped.")
            self.streaming = False
            self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
            self.root.after(0, lambda: self.btn_calibrate.config(state=tk.DISABLED))
