import sys
import os
import io

# Fix Windows console encoding for box characters
if sys.platform == "win32":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

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
    parser.add_argument("--gui", action="store_true", help="Launch the Phase 9 Desktop Controller GUI")
    parser.add_argument("--json", action="store_true", help="Output device and sensor info in JSON format (FR-24)")
    args = parser.parse_args()

    if args.wifi:
        transport = WifiTransport(args.wifi)
    else:
        transport = AdbTransport()
        
    service = DetectorService(transport)
    
    if args.gui:
        import tkinter as tk
        from src.ui.gui import ControllerGUI
        root = tk.Tk()
        app = ControllerGUI(root, service)
        root.mainloop()
    elif args.json:
        cli = CLI(service)
        cli.run_json()
    else:
        cli = CLI(service)
        cli.run()

if __name__ == "__main__":
    main()
