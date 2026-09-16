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
            print("Sensor detection is not yet implemented (Phase 2).")
            print()
            print("[r] Refresh   [l] Live mode (not available yet)   [q] Quit")
        else:
            print("⚠ Unknown state. No device details.")
            print()
            print("[r] Retry   [q] Quit")

    def run(self):
        while True:
            # Clear screen (simple hack)
            print("\033c", end="")
            self.render()
            
            try:
                cmd = input("> ").strip().lower()
                if cmd == 'q':
                    break
                elif cmd == 'r':
                    continue
                elif cmd == 'l':
                    print("\033c", end="")
                    self.print_header()
                    print("LIVE MODE")
                    print("Live sensor mode requires the Android companion app (Phase 3+).")
                    print("Not available yet. See DEVELOPMENT_PLAN.md.")
                    print()
                    print("[q] Back")
                    input("> ")
            except EOFError:
                break
            except KeyboardInterrupt:
                break
