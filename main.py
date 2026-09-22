import sys
import os
import io
import atexit

# Fix Windows console encoding for box characters (safe for --windowed mode)
if sys.platform == "win32":
    if sys.stdout is not None and hasattr(sys.stdout, "buffer"):
        try:
            sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
        except Exception:
            pass
    elif sys.stdout is None:
        # Running in PyInstaller windowed mode (no console attached)
        # Bug #12: register atexit to close handles so they are properly released
        _devnull_out = open(os.devnull, 'w', encoding='utf-8')
        _devnull_err = open(os.devnull, 'w', encoding='utf-8')
        sys.stdout = _devnull_out
        sys.stderr = _devnull_err
        atexit.register(_devnull_out.close)
        atexit.register(_devnull_err.close)

# Add src to Python path so imports work
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from src.transport.adb import AdbTransport
from src.transport.wifi import WifiTransport
from src.service.detector import DetectorService
from src.ui.cli import CLI
import argparse

def main():
    parser = argparse.ArgumentParser(description="GyroPad Desktop Host / Controller Receiver")
    parser.add_argument("--wifi", type=str, help="IP address of the phone for Wi-Fi transport (e.g. 192.168.1.10)")
    parser.add_argument("--bluetooth", action="store_true", help="Connect via Bluetooth Tethering (PAN) - ensures phone is tethered via Bluetooth")
    parser.add_argument("--gui", action="store_true", help="Launch the Phase 9 Desktop Controller GUI (default)")
    parser.add_argument("--cli", action="store_true", help="Launch terminal CLI mode instead of GUI")
    parser.add_argument("--json", action="store_true", help="Output device and sensor info in JSON format (FR-24)")
    args = parser.parse_args()

    if args.wifi:
        transport = WifiTransport(args.wifi)
    elif args.bluetooth:
        from src.transport.wifi import get_bluetooth_pan_ip
        bt_ip = get_bluetooth_pan_ip()
        if bt_ip == "DISCONNECTED":
            print("ERROR: Windows Bluetooth PAN is not connected to the phone! (Check Windows Settings -> Bluetooth -> Connect)")
            bt_ip = "127.0.0.1"
        else:
            print(f"Using Bluetooth PAN Transport (Auto-detected Phone IP: {bt_ip})")
        transport = WifiTransport(bt_ip, transport_name="Bluetooth")  # ✅ Bug #12
    else:
        transport = AdbTransport()
        
    service = DetectorService(transport)
    
    if args.cli:
        cli = CLI(service)
        cli.run()
    elif args.json:
        cli = CLI(service)
        cli.run_json()
    else:
        import tkinter as tk
        from src.ui.gui import ControllerGUI
        root = tk.Tk()
        app = ControllerGUI(root, service)
        root.mainloop()

if __name__ == "__main__":
    main()
