import socket
from typing import List, Dict, Any
from .interface import TransportInterface

class WifiTransport(TransportInterface):
    def __init__(self, target_ip: str):
        self.target_ip = target_ip
        self.port = 5050
        self.name = "Wi-Fi"

    def list_devices(self) -> List[Dict[str, Any]]:
        if not self.target_ip:
            return []
            
        try:
            # Quick check to see if the port is open
            with socket.create_connection((self.target_ip, self.port), timeout=1.0):
                return [{"serial": self.target_ip, "state": "device"}]
        except OSError:
            return [{"serial": self.target_ip, "state": "offline"}]

    def get_device_info(self, device_id: str) -> Dict[str, str]:
        return {
            "manufacturer": "Wi-Fi",
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
