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

        # Bug #6: Use raw socket with settimeout + connect_ex to probe liveness.
        # create_connection() completes a full TCP 3-way handshake — that floods the
        # Flutter server with dropped connections every 2 seconds.
        # settimeout + connect_ex does NOT do WSAEWOULDBLOCK on Windows (only non-blocking
        # sockets without a timeout do that).
        try:
            sock = _socket.socket(_socket.AF_INET, _socket.SOCK_STREAM)
            sock.settimeout(0.6)
            result = sock.connect_ex((self.target_ip, self.port))
            sock.close()
            return [{"serial": self.target_ip, "state": "device" if result == 0 else "offline"}]
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
        ip_address = None
        
        for line in lines:
            # Check for new adapter sections (no leading spaces)
            if not line.startswith(' ') and not line.startswith('\r') and line.strip() != '' and ':' in line:
                if 'bluetooth' in line.lower():
                    in_bt = True
                else:
                    in_bt = False
                continue
            
            if in_bt:
                # Fallback: if we find an IPv4 address, the phone gateway is usually .1 on that subnet
                if 'IPv4 Address' in line or 'IPv4' in line:
                    match = re.search(r'([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)[0-9]{1,3}', line)
                    if match:
                        ip_address = match.group(1) + '1'
                
                # Preferred: if Windows provides the exact Default Gateway, use it immediately
                if 'Default Gateway' in line:
                    match = re.search(r'([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})', line)
                    if match:
                        return match.group(1)
        
        if ip_address:
            return ip_address
            
    except Exception:
        pass
    return "DISCONNECTED"
