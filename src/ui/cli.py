from typing import Optional
from src.service.detector import DetectorService
from src.model.models import DetectorResult, ConnectionStatus
from src.service.mapper import InputMapper
from src.ui.mapping_utils import load_mapping

class CLI:
    def __init__(self, service: DetectorService):
        self.service = service
        self.target_serial = None
        self.ambiguous_devices = []
        self.mapping = load_mapping()
        self.current_profile = "landscape"  # ✅ Bug #6: track profile for live mode

    def print_header(self):
        print("╔══════════════════════════════════════╗")
        print("║       ANDROID SENSOR DETECTOR        ║")
        print("╚══════════════════════════════════════╝")
        print()

    def render(self):
        self.print_header()
        
        result = self.service.detect(self.target_serial)
        
        if result.errors:
            # Handle multiple devices or no device
            error_codes = [e.code for e in result.errors]
            if "AMBIGUOUS_DEVICE" in error_codes:
                print("Multiple devices detected:")
                print()
                self.ambiguous_devices = self.service.transport.list_devices()
                for i, dev in enumerate(self.ambiguous_devices):
                    print(f"  [{i+1}] {dev['serial']}    ({dev['state']})")
                print()
                print("Select a device by typing its number, or [q] to quit")
                return
            else:
                for error in result.errors:
                    print(f"⚠ {error.message}")
                print()
                print("[r] Retry   [q] Quit")
                self.ambiguous_devices = []
                return
                
        self.ambiguous_devices = []
                
        device = result.device
        if device:
            print("DEVICE")
            print(f"Connection  : {result.connection.transport.name} / {result.connection.status.name}")
            print(f"Manufacturer: {device.manufacturer}")
            print(f"Model       : {device.model}")
            print(f"Android     : {device.android_version}")
            print(f"SDK         : {device.sdk_level}")
            print(f"ABI         : {device.abi}")
            print()
            print("SENSORS")
            if result.sensors:
                for sensor in result.sensors:
                    if sensor.available:
                        # Append metadata if available
                        meta = []
                        if sensor.vendor:
                            meta.append(sensor.vendor)
                        if sensor.version:
                            meta.append(f"v{sensor.version}")
                        
                        meta_str = f"({', '.join(meta)})" if meta else ""
                        
                        # Add verification status flag if needed
                        verify_flag = "?" if sensor.verification_status.value == "needs_verification" else ""
                        
                        print(f"✓ {sensor.friendly_type:<20} {verify_flag} {meta_str}")
                    else:
                        print(f"✗ {sensor.friendly_type:<20} (not available on this device)")
            else:
                print("No sensors detected or sensor parsing failed.")
            print()
            print("[r] Refresh   [l] Live mode   [q] Quit")
        else:
            print("⚠ Unknown state. No device details.")
            print()
            print("[r] Retry   [q] Quit")

    def run_json(self):
        import json
        from dataclasses import asdict
        result = self.service.detect()
        out = {
            "device": asdict(result.device) if result.device else None,
            "connection": {
                "transport": result.connection.transport.name,
                "status": result.connection.status.name,
                "serial": result.connection.serial,
                "established_at": result.connection.established_at
            } if result.connection else None,
            "sensors": [asdict(s) for s in result.sensors] if result.sensors else [],
            "errors": [asdict(e) for e in result.errors] if result.errors else []
        }
        print(json.dumps(out, indent=2))

    def run_live_mode(self, device, profile="landscape"):
        print("\033c", end="")
        self.print_header()
        print("LIVE MODE & LATENCY (Phase 3-5)")
        print(f"Connecting to {device.serial} via adb forward...")
        
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
            # Forward port 5050 if ADB
            is_wifi = hasattr(self.service.transport, "target_ip")
            target_ip = getattr(self.service.transport, "target_ip", '127.0.0.1')
            
            if not is_wifi:
                self.service.transport.open_stream(device.serial, 5050, 5050)
            
            import socket
            import time
            import json
            import select
            import collections
            
            # Phase 7: Virtual Controller (vgamepad)
            try:
                import vgamepad as vg
                gamepad = vg.VX360Gamepad()
                vg_available = True
            except ImportError:
                gamepad = None
                vg_available = False
            
            # Connect to socket
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(2.0)
            
            print(f"Connecting to socket at {target_ip}:5050...")
            try:
                s.connect((target_ip, 5050))
            except ConnectionRefusedError:
                print("Connection refused. Is the Companion App running on the phone?")
                print("Press Enter to go back.")
                input("> ")
                return

            print("Connected!")
            
            pin = input("Enter the 4-digit PIN displayed on the app: ").strip()
            s.sendall(f"AUTH {pin}\n".encode('utf-8'))
            auth_resp = s.recv(1024).decode('utf-8').strip()
            if auth_resp != "AUTH_OK":
                print(f"Authentication failed: {auth_resp}")
                print("Press Enter to go back.")
                input("> ")
                s.close()
                return

            print("Authenticated! Streaming data... (Press Ctrl+C to stop)")
            if not vg_available:
                print("⚠ vgamepad not installed! Run 'pip install vgamepad' to enable Windows controller emulation.")
            else:
                print("🎮 Virtual Xbox 360 Controller Active!")
            
            s.setblocking(False)
            
            last_ping = 0
            ping_queue = collections.deque()
            latencies = []
            mapper = InputMapper(mode=profile)  # ✅ use selected profile
            buffer = ""
            
            while True:
                now = time.time()
                # Phase 4 streaming: stream at ~50Hz by pinging
                if now - last_ping > 0.05:
                    try:
                        s.sendall(b"ping\n")
                        ping_queue.append(now)
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
                                receive_time = time.time()
                                try:
                                    payload = json.loads(line)
                                except json.JSONDecodeError:
                                    continue
                                
                                acc = payload['accel']
                                gyr = payload['gyro']
                                buttons = payload.get('buttons', {})
                                joystick_left = payload.get('joystick_left', {'x': 0.0, 'y': 0.0})
                                joystick_right = payload.get('joystick_right', {'x': 0.0, 'y': 0.0})
                                touchpad_delta = payload.get('touchpad_delta', {'x': 0.0, 'y': 0.0})
                                
                                # Mouse control via Touchpad
                                if has_mouse_api:
                                    t_dx = float(touchpad_delta.get('x', 0.0))
                                    t_dy = float(touchpad_delta.get('y', 0.0))
                                    # Clamp delta to prevent wild jumps or OS hook timeouts
                                    dx = max(-60, min(60, int(t_dx * 1.5)))
                                    dy = max(-60, min(60, int(t_dy * 1.5)))
                                    if dx != 0 or dy != 0:
                                        try:
                                            user32.mouse_event(0x0001, dx, dy, 0, 0)
                                        except Exception:
                                            pass
                                
                                # Phase 5: Latency Measurement
                                rtt = 0.0
                                if ping_queue:
                                    sent_time = ping_queue.popleft()
                                    rtt = (receive_time - sent_time) * 1000.0
                                    latencies.append(rtt)
                                    if len(latencies) > 2000:
                                        # Keep a rolling window so it doesn't grow infinitely
                                        latencies.pop(0)
                                        
                                if latencies:
                                    min_lat = min(latencies)
                                    avg_lat = sum(latencies) / len(latencies)
                                    sorted_lats = sorted(latencies)
                                    p95_lat = sorted_lats[int(len(sorted_lats) * 0.95)]
                                else:
                                    min_lat = avg_lat = p95_lat = 0.0
                                
                                # Phase 6: Input Mapping
                                mapped = mapper.process(acc, gyr)
                                st = mapped["steering"]
                                th = mapped["throttle"]
                                
                                # Process On-Screen Joysticks
                                lx = joystick_left['x']
                                ly = -joystick_left['y'] # Y is usually inverted on screen vs gamepad
                                rx = joystick_right['x']
                                ry = -joystick_right['y']
                                
                                # If the on-screen left joystick is being used, override the gyro
                                final_lx = lx if (abs(lx) > 0.01 or abs(ly) > 0.01) else st
                                final_ly = ly if (abs(lx) > 0.01 or abs(ly) > 0.01) else th
                                
                                # Phase 7: Emit to Windows
                                if vg_available:
                                    # Map Left and Right Joysticks
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
                                
                                # Visual bar helper for axes [-1.0, 1.0]
                                def make_bar(val, width=20):
                                    chars = int(abs(val) * width)
                                    if val < 0:
                                        left = ("#" * chars).rjust(width, "-")
                                        right = "-" * width
                                    else:
                                        left = "-" * width
                                        right = ("#" * chars).ljust(width, "-")
                                    return f"[{left}|{right}]"
                                    
                                # Buttons visual helper
                                btn_cross = "[ × ]" if buttons.get('Cross') else "  ×  "
                                btn_circle = "[ ○ ]" if buttons.get('Circle') else "  ○  "
                                btn_square = "[ □ ]" if buttons.get('Square') else "  □  "
                                btn_triangle = "[ △ ]" if buttons.get('Triangle') else "  △  "
                                btn_dpad = "D-PAD" if any([buttons.get('DpadUp'), buttons.get('DpadDown'), buttons.get('DpadLeft'), buttons.get('DpadRight')]) else "     "
                                btn_shoulders = f"{'L1' if buttons.get('L1') else '  '} {'L2' if buttons.get('L2') else '  '} | {'R1' if buttons.get('R1') else '  '} {'R2' if buttons.get('R2') else '  '}"
                                
                                # Move cursor to a fixed row (e.g. line 10) to avoid scrolling glitches
                                print("\033[10;1H", end="")
                                print(f"GYROSCOPE".ljust(75))
                                print(f"X: {gyr[0]:6.2f} rad/s".ljust(75))
                                print(f"Y: {gyr[1]:6.2f} rad/s".ljust(75))
                                print(f"Z: {gyr[2]:6.2f} rad/s".ljust(75))
                                print("".ljust(75))
                                print(f"ACCELEROMETER".ljust(75))
                                print(f"X: {acc[0]:6.2f} m/s²".ljust(75))
                                print(f"Y: {acc[1]:6.2f} m/s²".ljust(75))
                                print(f"Z: {acc[2]:6.2f} m/s²".ljust(75))
                                print("".ljust(75))
                                print(f"VIRTUAL CONTROLLER AXES & BUTTONS (Phase 6 & 7 & 9)".ljust(75))
                                print(f"Left Stck: {final_lx:6.2f} {make_bar(final_lx)}".ljust(75))
                                print(f"L. Thrott: N/A (disabled)                              ".ljust(75))
                                print(f"Right Stk: {rx:6.2f} {make_bar(rx)}".ljust(75))
                                print(f"Face Btns: {btn_square} {btn_triangle} {btn_cross} {btn_circle}".ljust(75))
                                print(f"D-Pad    : {btn_dpad}    Shoulders: {btn_shoulders}".ljust(75))
                                print("".ljust(75))
                                print(f"LATENCY | RTT: {rtt:5.1f}ms | Min: {min_lat:4.1f}ms | Avg: {avg_lat:4.1f}ms | p95: {p95_lat:4.1f}ms".ljust(75), end="", flush=True)
                except BlockingIOError:
                    pass
                except json.JSONDecodeError:
                    pass
                    
        except KeyboardInterrupt:
            pass
        except Exception as e:
            print(f"Error: {e}")
            input("Press Enter to go back.")
        finally:
            if s is not None:
                try:
                    s.close()
                except Exception:
                    pass
            if not is_wifi and device and hasattr(self.service.transport, "close_stream"):
                try:
                    self.service.transport.close_stream(device.serial, 5050)
                except Exception:
                    pass

    def run(self):
        while True:
            print("\033c", end="")
            self.render()
            
            try:
                cmd = input("> ").strip().lower()
                if cmd == 'q':
                    break
                elif cmd == 'r':
                    continue
                elif cmd == 'l':
                    result = self.service.detect(self.target_serial)
                    if result.device:
                        # Give it some space to write the live lines the first time
                        print("\n\n\n\n\n\n\n\n\n\n\n\n")
                        self.run_live_mode(result.device, profile=self.current_profile)
                    else:
                        print("No device connected. Cannot enter live mode.")
                        input("Press Enter to go back.")
                elif cmd.isdigit() and self.ambiguous_devices:
                    idx = int(cmd) - 1
                    if 0 <= idx < len(self.ambiguous_devices):
                        self.target_serial = self.ambiguous_devices[idx]["serial"]
                    else:
                        print("Invalid selection.")
                        input("Press Enter to continue.")
            except EOFError:
                break
            except KeyboardInterrupt:
                break
