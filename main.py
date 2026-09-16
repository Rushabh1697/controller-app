import sys
import os

# Add src to Python path so imports work
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from src.transport.adb import AdbTransport
from src.service.detector import DetectorService
from src.ui.cli import CLI

def main():
    transport = AdbTransport()
    service = DetectorService(transport)
    cli = CLI(service)
    cli.run()

if __name__ == "__main__":
    main()
