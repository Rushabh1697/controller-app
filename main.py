import sys
import os

# Add src to Python path so imports work
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from src.transport.adb import AdbTransport
from src.transport.wifi import WifiTransport
from src.service.detector import DetectorService
from src.ui.cli import CLI
import argparse

def main():
    parser = argparse.ArgumentParser(description="Android Sensor Detector / Controller Host")
    parser.add_argument("--wifi", type=str, help="IP address of the phone for Wi-Fi transport (e.g. 192.168.1.10)")
    args = parser.parse_args()

    if args.wifi:
        transport = WifiTransport(args.wifi)
    else:
        transport = AdbTransport()
        
    service = DetectorService(transport)
    cli = CLI(service)
    cli.run()

if __name__ == "__main__":
    main()
