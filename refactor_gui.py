import re

with open("src/ui/gui.py", "r", encoding="utf-8") as f:
    content = f.read()

# We need to replace the entire create_widgets function body up to the end of frame_bottom pack.
# Wait, actually we can just manually rewrite it using a script that outputs the new method and patches it in.

new_create_widgets = '''    def create_widgets(self):
        # Hero Header
        self.frame_hero = ttk.Frame(self.root)
        self.frame_hero.pack(fill=tk.X, padx=20, pady=(20, 10))
        
        if hasattr(self, '_window_icon'):
            self._hero_icon = self._window_icon.subsample(2, 2)
            lbl_logo = ttk.Label(self.frame_hero, image=self._hero_icon)
            lbl_logo.pack(side=tk.LEFT, padx=(0, 15))
            
        lbl_title = ttk.Label(self.frame_hero, text="GYROPAD", font=("Segoe UI", 32, "bold"), foreground="#0078D4")
        lbl_title.pack(side=tk.LEFT)
        lbl_subtitle = ttk.Label(self.frame_hero, text="HOST", font=("Segoe UI", 32, "normal"), foreground="#AAAAAA")
        lbl_subtitle.pack(side=tk.LEFT, padx=(8, 0))

        # Main 2-Column Dashboard Layout
        self.frame_dashboard = ttk.Frame(self.root)
        self.frame_dashboard.pack(fill=tk.BOTH, expand=True, padx=20, pady=5)
        
        # Left Column (Controls & Connection)
        self.col_left = ttk.Frame(self.frame_dashboard)
        self.col_left.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 10))
        
        # Right Column (Config & Terminal)
        self.col_right = ttk.Frame(self.frame_dashboard)
        self.col_right.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True, padx=(10, 0))

        # --- LEFT COLUMN ---
        self.frame_top = ttk.LabelFrame(self.col_left, text="Device Connection")
        self.frame_top.pack(fill=tk.X, pady=(0, 15))
        
        f_status = ttk.Frame(self.frame_top)
        f_status.pack(fill=tk.X, padx=15, pady=10)
        
        self.lbl_status = ttk.Label(f_status, text="Status: Disconnected", font=("Segoe UI", 12, "bold"))
        self.lbl_status.pack(side=tk.LEFT)
        
        self.btn_refresh = ttk.Button(f_status, text="Refresh", command=self.refresh_device)
        self.btn_refresh.pack(side=tk.RIGHT)
        
        f_mode = ttk.Frame(self.frame_top)
        f_mode.pack(fill=tk.X, padx=15, pady=(0, 10))
        
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

        ttk.Label(f_mode, text="Transport Mode:").pack(side=tk.LEFT)
        self.transport_var = tk.StringVar(value=init_mode)
        self.combo_transport = ttk.Combobox(f_mode, textvariable=self.transport_var, values=["USB (Cable)", "Bluetooth (PAN)", "Wi-Fi"], state="readonly", width=18)
        self.combo_transport.pack(side=tk.RIGHT)
        self.combo_transport.bind("<<ComboboxSelected>>", self.on_transport_change)
        
        f_controls = ttk.Frame(self.frame_top)
        f_controls.pack(fill=tk.X, padx=15, pady=(0, 15))
        
        ttk.Label(f_controls, text="PIN:", font=("Segoe UI", 10, "bold")).pack(side=tk.LEFT)
        self.pin_var = tk.StringVar()
        self.pin_entry = ttk.Entry(f_controls, textvariable=self.pin_var, width=6, font=("Consolas", 14, "bold"), justify="center")
        self.pin_entry.pack(side=tk.LEFT, padx=10)
        self.pin_entry.bind("<Return>", lambda e: self.toggle_stream())
        
        self.btn_start = ttk.Button(f_controls, text="START CONTROLLER", command=self.toggle_stream, state=tk.DISABLED)
        self.btn_start.pack(side=tk.RIGHT, fill=tk.X, expand=True)

        self.btn_qr = ttk.Button(self.frame_top, text="📱 QR Pair Device", command=self.show_qr)
        self.btn_qr.pack(fill=tk.X, padx=15, pady=(0, 15))
        
        # --- RIGHT COLUMN ---
        self.frame_middle = ttk.LabelFrame(self.col_right, text="Controller Configuration")
        self.frame_middle.pack(fill=tk.X, pady=(0, 15))
        
        # Grid layout for config
        self.frame_middle.columnconfigure(1, weight=1)
        
        ttk.Label(self.frame_middle, text="Emulation:").grid(row=0, column=0, padx=15, pady=(15, 5), sticky=tk.W)
        self.controller_type_var = tk.StringVar(value="PlayStation (DualShock 4 / PS5)")
        self.controller_type_combo = ttk.Combobox(self.frame_middle, textvariable=self.controller_type_var, values=["PlayStation (DualShock 4 / PS5)", "Xbox 360"], state="readonly")
        self.controller_type_combo.grid(row=0, column=1, padx=15, pady=(15, 5), sticky=tk.EW)
        
        ttk.Label(self.frame_middle, text="Orientation:").grid(row=1, column=0, padx=15, pady=5, sticky=tk.W)
        self.profile_var = tk.StringVar(value="landscape")
        self.profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.profile_var, values=["landscape", "portrait", "standard"], state="readonly")
        self.profile_combo.grid(row=1, column=1, padx=15, pady=5, sticky=tk.EW)
        
        ttk.Label(self.frame_middle, text="Game Profile:").grid(row=2, column=0, padx=15, pady=5, sticky=tk.W)
        self.game_profile_var = tk.StringVar(value=self.profiles_data.get("active_profile", "Default"))
        profile_names = [p["name"] for p in self.profiles_data.get("profiles", [])]
        self.game_profile_combo = ttk.Combobox(self.frame_middle, textvariable=self.game_profile_var, values=profile_names, state="readonly")
        self.game_profile_combo.grid(row=2, column=1, padx=15, pady=5, sticky=tk.EW)
        self.game_profile_combo.bind("<<ComboboxSelected>>", self.on_game_profile_change)
        
        f_prof_actions = ttk.Frame(self.frame_middle)
        f_prof_actions.grid(row=3, column=0, columnspan=2, padx=15, pady=5, sticky=tk.EW)
        self.btn_edit_map = ttk.Button(f_prof_actions, text="Edit Mapping", command=self.open_mapping_editor)
        self.btn_edit_map.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=(0, 5))
        self.btn_manage_profiles = ttk.Button(f_prof_actions, text="Manage Profiles", command=self.open_profile_manager)
        self.btn_manage_profiles.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=(5, 0))
        
        f_extras = ttk.Frame(self.frame_middle)
        f_extras.grid(row=4, column=0, columnspan=2, padx=15, pady=5, sticky=tk.EW)
        self.auto_switch_var = tk.BooleanVar(value=self.profiles_data.get("auto_switch", True))
        self.chk_auto_switch = ttk.Checkbutton(f_extras, text="Auto-Switch Profile", variable=self.auto_switch_var, command=self.on_auto_switch_toggle)
        self.chk_auto_switch.pack(side=tk.LEFT)
        self.btn_calibrate = ttk.Button(f_extras, text="Calibrate Neutral", command=self.calibrate, state=tk.DISABLED)
        self.btn_calibrate.pack(side=tk.RIGHT)
        
        self.btn_test_gamepad = ttk.Button(self.frame_middle, text="Test / Wake Gamepad", command=self.test_wake_gamepad)
        self.btn_test_gamepad.grid(row=5, column=0, columnspan=2, padx=15, pady=(5, 15), sticky=tk.EW)
        
        self.block_small_motor_var = tk.BooleanVar(value=True)
        self.chk_block_small_motor = ttk.Checkbutton(self.col_left, text="Block continuous engine/brake vibrations (Racing)", variable=self.block_small_motor_var)
        self.chk_block_small_motor.pack(fill=tk.X, pady=(5, 15))

        # Terminal / Live Console at the bottom spanning both
        self.frame_bottom = ttk.LabelFrame(self.root, text="Live Output")
        self.frame_bottom.pack(fill=tk.BOTH, expand=True, padx=20, pady=(0, 20))
        
        self.txt_console = tk.Text(
            self.frame_bottom, 
            state=tk.DISABLED, 
            bg="#121212", 
            fg="#00FF00", 
            font=("Consolas", 11),
            relief="flat",
            padx=15, 
            pady=15,
            selectbackground="#264F78",
            height=8
        )
        self.txt_console.pack(fill=tk.BOTH, expand=True, padx=2, pady=2)
'''

start_idx = content.find("    def create_widgets(self):")
end_idx = content.find("        self.last_raw_accel = [0.0, 0.0, 0.0]")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_create_widgets + content[end_idx:]
    with open("src/ui/gui.py", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("GUI refactored successfully.")
else:
    print("Could not find insertion points.")
