import socket as _socket
from typing import List, Dict, Any
from .interface import TransportInterface

class WifiTransport(TransportInterface):
    def __init__(self, target_ip: str, transport_name: str = "Wi-Fi"):
        self.target_ip = target_ip
        self.port = 5050
        self.name = transport_name
        self.transport_name = transport_name  # ✅ Bug #12: expose name for detector

    def list_devices(self) -> List[Dict[str, Any]]:
        if not self.target_ip:
            return []

        # Connect with short timeout to verify phone app socket is listening
        try:
            sock = _socket.create_connection((self.target_ip, self.port), timeout=0.6)
            sock.close()
            return [{"serial": self.target_ip, "state": "device"}]
        except Exception:
            return [{"serial": self.target_ip, "state": "offline"}]

    def get_device_info(self, device_id: str) -> Dict[str, str]:
        return {
            "manufacturer": self.transport_name,  # reflects Wi-Fi or Bluetooth
            "model": "Device",
            "android_version": "?",
            "sdk_level": 0,
            "abi": ""
        }

    def get_sensor_dump(self, device_id: str) -> str:
        return "Sensor dump over Wi-Fi is not supported in this phase."

    def run_command(self, device_id: str, command: str) -> str:
        raise NotImplementedError("run_command not supported in WifiTransport")

    def open_stream(self, device_id: str, local_port: int, remote_port: int):
        # No port forwarding needed for Wi-Fi.
        pass

    def close_stream(self, device_id: str, local_port: int):
        pass


def get_bluetooth_pan_ip() -> str:
    """Auto-detects the phone's gateway IP on Windows Bluetooth Network Connection using ipconfig."""
    try:
        import subprocess
        import re
        out = subprocess.check_output(['ipconfig'], text=True, errors='ignore')
        lines = out.split('\n')
        in_bt = False
        for line in lines:
            line_str = line.strip()
            if 'Bluetooth' in line and 'adapter' in line.lower():
                in_bt = True
                continue
            if in_bt:
                if 'adapter' in line.lower() and ':' in line:
                    break
                if 'Default Gateway' in line:
                    match = re.search(r'([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})', line)
                    if match:
                        return match.group(1)
    except Exception:
        pass
    return "192.168.44.1"
