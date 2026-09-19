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

        # ✅ Bug #7: use connect_ex (non-blocking probe) instead of create_connection
        # which completes a full handshake and then immediately drops the socket,
        # flooding the Flutter server with half-connections.
        sock = _socket.socket(_socket.AF_INET, _socket.SOCK_STREAM)
        sock.settimeout(1.0)
        result = sock.connect_ex((self.target_ip, self.port))
        sock.close()
        if result == 0:
            return [{"serial": self.target_ip, "state": "device"}]
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
