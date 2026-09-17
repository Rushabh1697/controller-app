from typing import Optional
from src.service.detector import DetectorService
from src.model.models import DetectorResult, ConnectionStatus

class CLI:
    def __init__(self, service: DetectorService):
        self.service = service

    def print_header(self):
        print("╔══════════════════════════════════════╗")
        print("║       ANDROID SENSOR DETECTOR        ║")
        print("╚══════════════════════════════════════╝")
        print()

    def render(self):
        self.print_header()
        
        result = self.service.detect()
        
        if result.errors:
            # Handle multiple devices or no device
            error_codes = [e.code for e in result.errors]
            if "AMBIGUOUS_DEVICE" in error_codes:
                print("Multiple devices detected:")
                print()
                devices = self.service.transport.list_devices()
                for i, dev in enumerate(devices):
                    print(f"  [{i+1}] {dev['serial']}    ({dev['state']})")
                print()
                print("Select a device (1-X) not fully supported in this simple render yet, or [q] to quit")
                return
            else:
                for error in result.errors:
                    print(f"⚠ {error.message}")
                print()
                print("[r] Retry   [q] Quit")
                return
                
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
            print("[r] Refresh   [l] Live mode (not available yet)   [q] Quit")
        else:
            print("⚠ Unknown state. No device details.")
            print()
            print("[r] Retry   [q] Quit")

    def run_live_mode(self, device):
        print("\033c", end="")
        self.print_header()
        print("LIVE MODE (Phase 3 & 4)")
        print(f"Connecting to {device.serial} via adb forward...")
        
        try:
            # Forward port 5050
            self.service.transport.open_stream(device.serial, 5050, 5050)
            
            import socket
            import time
            import json
            import select
            
            # Connect to local port 5050
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(2.0)
            
            print("Connecting to socket...")
            try:
                s.connect(('127.0.0.1', 5050))
            except ConnectionRefusedError:
                print("Connection refused. Is the Companion App running on the phone?")
                print("Press Enter to go back.")
                input("> ")
                return

            print("Connected! Streaming data... (Press Ctrl+C to stop)")
            
            s.setblocking(False)
            
            last_ping = 0
            
            while True:
                # Poor man's non-blocking input check
                # Note: this doesn't work well on Windows natively without msvcrt, 
                # so we just rely on Ctrl+C to break out, or handle it via a timeout stream.
                
                now = time.time()
                # Phase 4 streaming: stream at ~50Hz by pinging
                if now - last_ping > 0.05:
                    try:
                        s.sendall(b"ping\n")
                    except Exception:
                        break
                    last_ping = now
                
                try:
                    ready = select.select([s], [], [], 0.01)
                    if ready[0]:
                        data = s.recv(1024)
                        if not data:
                            break
                        
                        text = data.decode('utf-8').strip()
                        # Could be multiple JSONs if they bundled up
                        for line in text.split('\n'):
                            if line.strip():
                                payload = json.loads(line)
                                acc = payload['accel']
                                gyr = payload['gyro']
                                
                                # Move cursor up to overwrite
                                print("\033[6A")
                                print("GYROSCOPE")
                                print(f"X: {gyr[0]:6.2f} rad/s")
                                print(f"Y: {gyr[1]:6.2f} rad/s")
                                print(f"Z: {gyr[2]:6.2f} rad/s")
                                print()
                                print("ACCELEROMETER")
                                print(f"X: {acc[0]:6.2f} m/s²")
                                print(f"Y: {acc[1]:6.2f} m/s²")
                                print(f"Z: {acc[2]:6.2f} m/s²")
                                print()
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
            try:
                s.close()
            except:
                pass
            self.service.transport.close_stream(device.serial, 5050)

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
                    result = self.service.detect()
                    if result.device:
                        # Give it some space to write the live lines the first time
                        print("\n\n\n\n\n\n\n\n")
                        self.run_live_mode(result.device)
                    else:
                        print("No device connected. Cannot enter live mode.")
                        input("Press Enter to go back.")
            except EOFError:
                break
            except KeyboardInterrupt:
                break
