import tkinter as tk
from tkinter import ttk
import threading
import queue
import time
from src.service.detector import DetectorService
from src.model.models import DetectorResult
from src.service.mapper import InputMapper
import traceback
from src.ui.mapping_utils import load_mapping, save_mapping, load_profiles, save_profiles
from src.service.window_utils import get_active_window_exe

class ControllerGUI:
    def __init__(self, root, service: DetectorService):
        self.root = root
        self.service = service
        self.root.title("GyroPad Desktop Host")
        self.root.geometry("820x720")
        self.root.minsize(700, 580)
        
        self.device = None
        self.streaming = False
        self.thread = None
        self.l2_pressed_time = 0.0
        self.r2_pressed_time = 0.0
        self.queue = queue.Queue()
        self.profiles_data = load_profiles()
        self.mapping = load_mapping()
        self._test_pad = None
        
        self.create_widgets()
        
        # Start looking for device
        self.refresh_device()
        self.root.after(100, self.process_queue)
        
        # Start background window monitor for profile switching
        self.monitor_thread = threading.Thread(target=self.monitor_active_window, daemon=True)
        self.monitor_thread.start()
        
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
            if bt_ip != "DISCONNECTED":
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
        
        self.btn_qr = ttk.Button(f_controls, text="📱 QR Pair", command=self.show_qr)
        self.btn_qr.pack(side=tk.LEFT, padx=5)
        
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
        
        ttk.Label(self.frame_middle, text="Phone Orientation:").grid(row=1, column=0, padx=5, pady=5, sticky=tk.W)
        self.profile_var = tk.StringVar(value="landscape")
        self.profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.profile_var, values=["landscape", "portrait", "standard"], state="readonly", width=14)
        self.profile_combo.grid(row=1, column=1, padx=5, pady=5, sticky=tk.W)
        
        self.btn_edit_map = ttk.Button(self.frame_middle, text="Edit Mapping", command=self.open_mapping_editor)
        self.btn_edit_map.grid(row=1, column=2, padx=10, pady=5, sticky=tk.W)
        
        # New Game Profile UI
        ttk.Label(self.frame_middle, text="Game Profile:").grid(row=2, column=0, padx=5, pady=5, sticky=tk.W)
        
        self.game_profile_var = tk.StringVar(value=self.profiles_data.get("active_profile", "Default"))
        profile_names = [p["name"] for p in self.profiles_data.get("profiles", [])]
        self.game_profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.game_profile_var, values=profile_names, state="readonly", width=28)
        self.game_profile_combo.grid(row=2, column=1, padx=5, pady=5, sticky=tk.W)
        self.game_profile_combo.bind("<<ComboboxSelected>>", self.on_game_profile_change)
        
        f_profile_btns = ttk.Frame(self.frame_middle)
        f_profile_btns.grid(row=2, column=2, padx=10, pady=5, sticky=tk.W)
        self.btn_manage_profiles = ttk.Button(f_profile_btns, text="Manage Profiles", command=self.open_profile_manager)
        self.btn_manage_profiles.pack(side=tk.LEFT, padx=(0, 5))
        
        self.auto_switch_var = tk.BooleanVar(value=self.profiles_data.get("auto_switch", True))
        self.chk_auto_switch = ttk.Checkbutton(f_profile_btns, text="Auto-Switch", variable=self.auto_switch_var, command=self.on_auto_switch_toggle)
        self.chk_auto_switch.pack(side=tk.LEFT)
        
        # Vibration Filter
        self.block_small_motor_var = tk.BooleanVar(value=True)
        self.chk_block_small_motor = ttk.Checkbutton(
            self.frame_middle, 
            text="Block continuous engine/brake vibrations (Racing Games)", 
            variable=self.block_small_motor_var
        )
        self.chk_block_small_motor.grid(row=3, column=0, columnspan=3, padx=5, pady=5, sticky=tk.W)

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
        # Bug #10: Prevent transport switch while stream is active — would cause state corruption
        if self.streaming:
            self.log("Cannot change transport while streaming. Stop the controller first.")
            # Revert the combobox to the current mode
            if hasattr(self.service.transport, "transport_name"):
                tn = self.service.transport.transport_name
                if tn == "Bluetooth":
                    self.transport_var.set("Bluetooth (PAN)")
                elif tn == "Wi-Fi":
                    self.transport_var.set("Wi-Fi")
                else:
                    self.transport_var.set("USB (Cable)")
            else:
                self.transport_var.set("USB (Cable)")
            return
        mode = self.transport_var.get()
        if mode == "Bluetooth (PAN)":
            from src.transport.wifi import WifiTransport, get_bluetooth_pan_ip
            bt_ip = get_bluetooth_pan_ip()
            if bt_ip == "DISCONNECTED":
                self.log("ERROR: Windows Bluetooth PAN is not connected to the phone!")
                self.log("Go to Windows Settings -> Bluetooth & devices -> Devices -> find your phone, click the '...', and select 'Connect'.")
                self.service.transport = WifiTransport("127.0.0.1", transport_name="Bluetooth")
            else:
                self.service.transport = WifiTransport(bt_ip, transport_name="Bluetooth")
                self.log(f"Switched to Bluetooth PAN mode (Auto-detected Phone IP: {bt_ip}).")
                self.log("Ensure Bluetooth Tethering is ON on your phone and PC is connected.")
        elif mode == "Wi-Fi":
            from src.transport.wifi import WifiTransport
            from tkinter import simpledialog
            from src.ui.mapping_utils import load_config, save_config
            
            config = load_config()
            last_ip = config.get("last_wifi_ip", "")
            
            ip = simpledialog.askstring("Wi-Fi Setup", "Enter Phone IP address (from app screen):", initialvalue=last_ip, parent=self.root)
            if ip and ip.strip():
                ip = ip.strip()
                config["last_wifi_ip"] = ip
                save_config(config)
                self.service.transport = WifiTransport(ip, transport_name="Wi-Fi")
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
            if save_mapping(self.mapping):
                self.log("Button mapping saved.")
            else:
                self.log("ERROR: Could not save mapping file. Check disk space and permissions.")
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
        

    def apply_profile_calibration(self):
        active_name = self.game_profile_var.get()
        for p in self.profiles_data.get("profiles", []):
            if p["name"] == active_name:
                accel = p.get("accel_offset", [0.0, 0.0, 0.0])
                gyro = p.get("gyro_offset", [0.0, 0.0, 0.0])
                self.mapper.set_calibration(accel, gyro)
                break
                
    def on_game_profile_change(self, event=None):
        new_active = self.game_profile_var.get()
        self.profiles_data["active_profile"] = new_active
        save_profiles(self.profiles_data)
        self.mapping = load_mapping()
        self.apply_profile_calibration()
        self.log(f"Switched active game profile to: {new_active}")
        
    def on_auto_switch_toggle(self):
        self.profiles_data["auto_switch"] = self.auto_switch_var.get()
        save_profiles(self.profiles_data)
        
    def monitor_active_window(self):
        last_exe = None
        while True:
            time.sleep(1.0)
            if not self.auto_switch_var.get():
                continue
                
            exe_name = get_active_window_exe()
            if exe_name and exe_name != last_exe:
                last_exe = exe_name
                # Check if this exe matches any profile
                for p in self.profiles_data.get("profiles", []):
                    target = p.get("exe_name", "")
                    if target and target.lower() == exe_name.lower():
                        current = self.game_profile_var.get()
                        if current != p["name"]:
                            self.root.after(0, self.switch_profile_from_background, p["name"], exe_name)
                        break

    def switch_profile_from_background(self, profile_name, exe_name):
        self.game_profile_var.set(profile_name)
        self.profiles_data["active_profile"] = profile_name
        save_profiles(self.profiles_data)
        self.mapping = load_mapping()
        self.apply_profile_calibration()
        self.log(f"Auto-switched to profile '{profile_name}' (Detected {exe_name})")

    def open_profile_manager(self):
        pm = tk.Toplevel(self.root)
        pm.title("Manage Game Profiles")
        pm.geometry("400x300")
        
        ttk.Label(pm, text="Profiles:").pack(pady=5)
        
        listbox = tk.Listbox(pm, width=40, height=8)
        listbox.pack(pady=5)
        
        def refresh_list():
            listbox.delete(0, tk.END)
            for p in self.profiles_data.get("profiles", []):
                exe = p.get("exe_name", "")
                display = f"{p['name']} [{exe}]" if exe else p['name']
                listbox.insert(tk.END, display)
                
        refresh_list()
        
        def new_profile():
            import tkinter.simpledialog as sd
            name = sd.askstring("New Profile", "Enter profile name:", parent=pm)
            if not name: return
            exe = sd.askstring("New Profile", "Enter executable name (e.g. game.exe) or leave blank:", parent=pm)
            if exe is None: exe = ""
            
            # Copy default mapping for new profile
            from src.ui.mapping_utils import DEFAULT_MAPPING
            self.profiles_data["profiles"].append({
                "name": name,
                "exe_name": exe.strip(),
                "mapping": DEFAULT_MAPPING.copy()
            })
            save_profiles(self.profiles_data)
            refresh_list()
            self.game_profile_combo['values'] = [p["name"] for p in self.profiles_data.get("profiles", [])]
            
        def delete_profile():
            sel = listbox.curselection()
            if not sel: return
            idx = sel[0]
            p_name = self.profiles_data["profiles"][idx]["name"]
            if p_name == "Default":
                from tkinter import messagebox
                messagebox.showerror("Error", "Cannot delete Default profile.")
                return
                
            del self.profiles_data["profiles"][idx]
            if self.profiles_data["active_profile"] == p_name:
                self.profiles_data["active_profile"] = "Default"
                self.game_profile_var.set("Default")
                self.mapping = load_mapping()
                
            save_profiles(self.profiles_data)
            refresh_list()
            self.game_profile_combo['values'] = [p["name"] for p in self.profiles_data.get("profiles", [])]
            
        def export_profile():
            sel = listbox.curselection()
            if not sel: return
            idx = sel[0]
            p_data = self.profiles_data["profiles"][idx]
            from tkinter import filedialog, messagebox
            f_path = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")], initialfile=f"{p_data['name']}.json", parent=pm)
            if f_path:
                try:
                    import json
                    with open(f_path, "w") as out_f:
                        json.dump(p_data, out_f, indent=4)
                    messagebox.showinfo("Export", "Profile exported successfully.")
                except Exception as e:
                    messagebox.showerror("Error", f"Could not export: {e}")

        def import_profile():
            from tkinter import filedialog, messagebox
            f_path = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")], parent=pm)
            if f_path:
                try:
                    import json
                    with open(f_path, "r") as in_f:
                        p_data = json.load(in_f)
                    if "name" in p_data and "mapping" in p_data:
                        # Append a unique name if exists
                        base_name = p_data["name"]
                        existing_names = [p["name"] for p in self.profiles_data.get("profiles", [])]
                        new_name = base_name
                        counter = 1
                        while new_name in existing_names:
                            new_name = f"{base_name} ({counter})"
                            counter += 1
                        
                        p_data["name"] = new_name
                        self.profiles_data.setdefault("profiles", []).append(p_data)
                        save_profiles(self.profiles_data)
                        refresh_list()
                        self.game_profile_combo['values'] = [p["name"] for p in self.profiles_data.get("profiles", [])]
                        messagebox.showinfo("Import", f"Imported profile '{new_name}'.")
                    else:
                        messagebox.showerror("Error", "Invalid profile format.")
                except Exception as e:
                    messagebox.showerror("Error", f"Could not import: {e}")

        f_btns = ttk.Frame(pm)
        f_btns.pack(pady=5)
        ttk.Button(f_btns, text="New Profile", command=new_profile).pack(side=tk.LEFT, padx=5)
        ttk.Button(f_btns, text="Delete Selected", command=delete_profile).pack(side=tk.LEFT, padx=5)
        
        f_io_btns = ttk.Frame(pm)
        f_io_btns.pack(pady=5)
        ttk.Button(f_io_btns, text="Import Profile", command=import_profile).pack(side=tk.LEFT, padx=5)
        ttk.Button(f_io_btns, text="Export Selected", command=export_profile).pack(side=tk.LEFT, padx=5)

    def calibrate(self):
        if self.streaming:
            self.mapper.set_calibration(self.last_raw_accel, self.last_raw_gyro)
            
            active_name = self.game_profile_var.get()
            for p in self.profiles_data.get("profiles", []):
                if p["name"] == active_name:
                    p["accel_offset"] = self.mapper.accel_offset
                    p["gyro_offset"] = self.mapper.gyro_offset
                    break
            save_profiles(self.profiles_data)
            self.log(f"Calibrated neutral position & saved to profile '{active_name}'.")
        else:
            self.log("Must be streaming to calibrate.")
            
    def refresh_device(self, silent=False):
        if not silent:
            self.lbl_status.config(text="Status: Detecting...", foreground="blue")

        mode = self.transport_var.get()
        is_wireless = hasattr(self.service.transport, "target_ip")

        # FREEZE FIX: run blocking network probe in a background thread to avoid
        # blocking the Tkinter main loop for 0.6s every 2s.
        def _detect_worker():
            result = self.service.detect()
            self.root.after(0, lambda: self._on_detect_result(result, mode, is_wireless, silent))

        threading.Thread(target=_detect_worker, daemon=True).start()

    def _on_detect_result(self, result, mode, is_wireless, silent):
        """Called on the main thread after background detection completes."""
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
        
        self.apply_profile_calibration()
        
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
            
            try:
                import vgamepad as vg
                if self._test_pad is not None:
                    # Reuse the test pad so Windows/Chrome doesn't see a disconnect
                    gamepad = self._test_pad
                    # We still keep self._test_pad alive
                else:
                    gamepad = vg.VDS4Gamepad() if is_ps else vg.VX360Gamepad()
                vg_available = True
                pad_name = "PlayStation (DualShock 4 / PS5)" if is_ps else "Xbox 360"
                self.log(f"Virtual {pad_name} controller initialized.")
            except (ImportError, Exception) as e:
                gamepad = None
                vg_available = False
                self.log(f"Virtual controller disabled: {e}. (Install ViGEmBus to enable controller emulation).")
                
            reconnect_delay = 0
            while self.streaming:
                if reconnect_delay > 0:
                    self.log(f"Reconnecting in {reconnect_delay}s...")
                    time.sleep(reconnect_delay)
                    if not self.streaming: break
                
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.settimeout(3.0)
                
                if reconnect_delay == 0:
                    self.log(f"Connecting to socket at {target_ip}:5050...")
                try:
                    s.connect((target_ip, 5050))
                    
                    if vg_available and gamepad:
                        self.last_rumble_time = 0
                        self.is_rumbling = False
                        
                        self.pending_vib_duration = None
                        
                        def rumble_cb(client, target, large_motor, small_motor, led_number, user_data):
                            if not getattr(self, 'streaming', False): return
                            try:
                                import time
                                current_time = time.time()
                                
                                if getattr(self, 'block_small_motor_var', None) and self.block_small_motor_var.get():
                                    intensity = large_motor
                                else:
                                    intensity = max(large_motor, small_motor)
                                
                                if intensity > 0:
                                    if current_time - getattr(self, 'last_rumble_time', 0) > 0.25:
                                        duration = int((intensity / 255.0) * 300)
                                        self.pending_vib_duration = duration
                                        self.last_rumble_time = current_time
                                        self.is_rumbling = True
                                elif getattr(self, 'is_rumbling', False):
                                    self.pending_vib_duration = 0
                                    self.is_rumbling = False
                                    self.last_rumble_time = current_time
                            except Exception:
                                pass
                        try:
                            gamepad.register_notification(callback_function=rumble_cb)
                        except Exception as e:
                            self.log(f"Could not register rumble: {e}")
                            
                except Exception as e:
                    if reconnect_delay == 0:
                        self.log(f"Connection failed to {target_ip}:5050 ({e}).")
                        self.log("💡 Tip: Ensure the GyroPad app is actively OPEN on your phone screen!")
                        self.streaming = False
                        self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                        s.close()
                        return
                    else:
                        s.close()
                        reconnect_delay = 2
                        continue
                
                # Auth — validate PIN format before sending
                pin = self.pin_var.get().strip()
                if not pin or not pin.isdigit() or len(pin) != 4:
                    self.log("ERROR: Invalid PIN. Check the phone screen.")
                    s.close()
                    self.streaming = False
                    self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                    return
                    
                try:
                    s.sendall(f"AUTH {pin}\n".encode('utf-8'))
                    auth_resp = s.recv(1024).decode('utf-8').strip()
                except Exception as e:
                    s.close()
                    reconnect_delay = 2
                    continue
                    
                if auth_resp != "AUTH_OK":
                    self.log(f"Authentication failed: {auth_resp}")
                    s.close()
                    self.streaming = False
                    self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
                    return
                
                if reconnect_delay > 0:
                    self.log("Reconnected successfully!")
                else:
                    self.log("Connected and Authenticated!")
                
                reconnect_delay = 2 # Set for future drops
                s.setblocking(False)
                last_ping = 0
                buffer = ""
                
                while self.streaming:
                    now = time.time()
                    if now - last_ping > 0.01:
                        try:
                            if getattr(self, 'pending_vib_duration', None) is not None:
                                duration = self.pending_vib_duration
                                self.pending_vib_duration = None
                                s.sendall(f"VIB:{duration}\n".encode('utf-8'))
                            else:
                                s.sendall(b"ping\n")
                        except Exception:
                            break # Break inner loop to trigger reconnect
                        last_ping = now
                    
                    try:
                        ready = select.select([s], [], [], 0.01)
                        if ready[0]:
                            data = s.recv(4096)
                            if not data:
                                break # EOF, trigger reconnect
                            
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
                                        ly = joystick_left['y']
                                        rx = joystick_right['x']
                                        ry = joystick_right['y']
                                        
                                        final_lx = lx if (abs(lx) > 0.01 or abs(ly) > 0.01) else st
                                        final_ly = ly if (abs(lx) > 0.01 or abs(ly) > 0.01) else th
                                        
                                        is_analog = payload.get('analog_triggers', False)
                                        lt_raw = bool(buttons.get('L2'))
                                        rt_raw = bool(buttons.get('R2'))
                                        
                                        if is_analog:
                                            if lt_raw: self.l2_pressed_time = min(0.5, self.l2_pressed_time + 0.01)
                                            else: self.l2_pressed_time = 0.0 # instant release
                                            
                                            if rt_raw: self.r2_pressed_time = min(0.5, self.r2_pressed_time + 0.01)
                                            else: self.r2_pressed_time = 0.0
                                            
                                            final_lt = self.l2_pressed_time / 0.5
                                            final_rt = self.r2_pressed_time / 0.5
                                        else:
                                            final_lt = 1.0 if lt_raw else 0.0
                                            final_rt = 1.0 if rt_raw else 0.0
                                        
                                        if vg_available:
                                            if is_ps:
                                                # PlayStation DualShock 4 / PS5 Emulation
                                                gamepad.left_joystick_float(x_value_float=final_lx, y_value_float=final_ly)
                                                gamepad.right_joystick_float(x_value_float=rx, y_value_float=ry)
                                                
                                                # Analog Triggers (L2 / R2)
                                                gamepad.left_trigger_float(value_float=final_lt)
                                                gamepad.right_trigger_float(value_float=final_rt)
                                                
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
                                                
                                                # Aggregate digital buttons to prevent duplicate-mapping conflicts
                                                xbox_buttons_pressed = set()
                                                
                                                for f_btn, x_btn in self.mapping.items():
                                                    is_pressed = bool(buttons.get(f_btn))
                                                    if x_btn == "LEFT_TRIGGER":
                                                        if f_btn == 'L2': lt_val = final_lt
                                                        elif is_pressed: lt_val = 1.0
                                                    elif x_btn == "RIGHT_TRIGGER":
                                                        if f_btn == 'R2': rt_val = final_rt
                                                        elif is_pressed: rt_val = 1.0
                                                    elif x_btn != "NONE" and hasattr(vg.XUSB_BUTTON, x_btn):
                                                        if is_pressed:
                                                            xbox_buttons_pressed.add(x_btn)
                                                            
                                                # Apply all digital buttons
                                                for x_btn in [b for b in dir(vg.XUSB_BUTTON) if b.startswith('XUSB_GAMEPAD')]:
                                                    btn_val = getattr(vg.XUSB_BUTTON, x_btn)
                                                    if x_btn in xbox_buttons_pressed:
                                                        gamepad.press_button(button=btn_val)
                                                    else:
                                                        gamepad.release_button(button=btn_val)
                                                        
                                                gamepad.left_trigger_float(value_float=lt_val)
                                                gamepad.right_trigger_float(value_float=rt_val)
                                                gamepad.update()
                                            

                                    except json.JSONDecodeError:
                                        pass
    
                    except BlockingIOError:
                        pass  # expected — non-blocking socket has no data yet
                    except Exception as e:
                        # Stream error, trigger reconnect
                        break

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
            # Bug #7: clean up test pad if streaming ends unexpectedly
            if self._test_pad is not None:
                try:
                    self._test_pad.reset()
                    self._test_pad.update()
                except Exception:
                    pass
                self._test_pad = None
            self.log("Stream stopped.")
            self.streaming = False
            self.root.after(0, lambda: self.btn_start.config(text="Start Controller"))
            self.root.after(0, lambda: self.btn_calibrate.config(state=tk.DISABLED))

    def show_qr(self):
        try:
            import qrcode
            from PIL import Image, ImageTk
            import threading
            
            # Get local PC IP
            pc_ip = socket.gethostbyname(socket.gethostname())
            qr_data = f"gyropad://pair?pc_ip={pc_ip}&port=5051"
            
            qr = qrcode.QRCode(version=1, box_size=10, border=4)
            qr.add_data(qr_data)
            qr.make(fit=True)
            img = qr.make_image(fill_color="black", back_color="white")
            
            qr_win = tk.Toplevel(self.root)
            qr_win.title("QR Code Pairing")
            qr_win.geometry("400x450")
            
            from tkinter import ttk
            ttk.Label(qr_win, text=f"Scan to pair with PC ({pc_ip})", font=("Arial", 12, "bold")).pack(pady=10)
            
            # Keep reference
            qr_win.qr_img = ImageTk.PhotoImage(img)
            import tkinter as tk
            tk.Label(qr_win, image=qr_win.qr_img).pack()
            
            ttk.Label(qr_win, text="Waiting for phone to scan...").pack(pady=10)
            
            # Start temp listener
            def listen_for_pairing():
                pair_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                pair_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
                pair_sock.bind(("0.0.0.0", 5051))
                pair_sock.listen(1)
                pair_sock.settimeout(30.0) # wait up to 30s
                
                try:
                    conn, addr = pair_sock.accept()
                    data = conn.recv(1024).decode('utf-8')
                    conn.close()
                    pair_sock.close()
                    
                    if "PIN:" in data:
                        # Extract IP from socket connection
                        phone_ip = addr[0]
                        phone_pin = data.split("PIN:")[1].strip()
                        
                        # Auto-fill and start
                        self.root.after(0, lambda: self._on_paired(phone_ip, phone_pin, qr_win))
                except Exception as e:
                    pair_sock.close()
                    self.log("QR Pairing cancelled or timed out.")
            
            threading.Thread(target=listen_for_pairing, daemon=True).start()
            
        except ImportError:
            self.log("QR Code packages not installed. Run: pip install qrcode[pil] Pillow")

    def _on_paired(self, phone_ip, phone_pin, qr_win):
        from src.transport.wifi import WifiTransport
        from src.ui.mapping_utils import load_config, save_config
        
        qr_win.destroy()
        
        # Save IP to history
        config = load_config()
        config["last_wifi_ip"] = phone_ip
        save_config(config)
        
        self.transport_var.set("Wi-Fi")
        self.service.transport = WifiTransport(phone_ip, transport_name="Wi-Fi")
        self.device = phone_ip
        
        self.pin_var.set(phone_pin)
        self.log(f"QR Pairing Successful! Phone IP: {phone_ip}")
        
        # Start stream automatically
        if not self.streaming:
            self.toggle_stream()
