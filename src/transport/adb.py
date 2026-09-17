import subprocess
import os
import shutil
import re
from typing import List, Dict, Any
from .interface import TransportInterface

class AdbTransport(TransportInterface):
    def __init__(self):
        self.adb_path = self._resolve_adb_path()
        
    def _resolve_adb_path(self):
        # 1. Check if adb is in PATH
        if shutil.which("adb"):
            return "adb"
            
        # 2. Check common Android SDK location on Windows
        local_app_data = os.environ.get("LOCALAPPDATA")
        if local_app_data:
            common_path = os.path.join(local_app_data, "Android", "Sdk", "platform-tools", "adb.exe")
            if os.path.exists(common_path):
                return common_path
                
        # 3. Fallback to just "adb" (which will throw FileNotFoundError later)
        return "adb"
    def list_devices(self) -> List[Dict[str, Any]]:
        try:
            result = subprocess.run([self.adb_path, "devices", "-l"], capture_output=True, text=True, check=True)
            lines = result.stdout.strip().split('\n')
            devices = []
            for line in lines[1:]: # Skip header "List of devices attached"
                if not line.strip():
                    continue
                parts = line.split()
                if len(parts) >= 2:
                    serial = parts[0]
                    state = parts[1]
                    devices.append({"serial": serial, "state": state})
            return devices
        except FileNotFoundError:
            raise RuntimeError("ADB_NOT_FOUND: adb command not found. Please install Android SDK Platform Tools and add it to PATH.")
        except subprocess.CalledProcessError as e:
            raise RuntimeError(f"ADB_SERVER_ERROR: ADB command failed with error: {e.stderr}")

    def get_device_info(self, device_id: str) -> Dict[str, str]:
        properties = {
            "ro.product.manufacturer": "manufacturer",
            "ro.product.model": "model",
            "ro.product.brand": "brand",
            "ro.build.version.release": "android_version",
            "ro.build.version.sdk": "sdk_level",
            "ro.product.cpu.abi": "abi",
            "ro.product.cpu.abilist": "abilist"
        }
        info = {}
        for prop, key in properties.items():
            try:
                result = subprocess.run([self.adb_path, "-s", device_id, "shell", "getprop", prop], capture_output=True, text=True, check=True)
                info[key] = result.stdout.strip()
            except subprocess.CalledProcessError as e:
                # Handle error if device disconnects or is unauthorized
                if "unauthorized" in e.stderr:
                    raise RuntimeError("DEVICE_UNAUTHORIZED")
                elif "offline" in e.stderr or "closed" in e.stderr:
                    raise RuntimeError("DEVICE_DISCONNECTED")
                else:
                    info[key] = ""
        
        # Parse abilist if present
        if "abilist" in info and info["abilist"]:
            info["abilist"] = [abi.strip() for abi in info["abilist"].split(",")]
        else:
            info["abilist"] = []
            
        # Parse sdk_level to int
        if "sdk_level" in info and info["sdk_level"].isdigit():
            info["sdk_level"] = int(info["sdk_level"])
        else:
            info["sdk_level"] = 0

        return info

    def get_sensor_dump(self, device_id: str) -> str:
        try:
            result = subprocess.run([self.adb_path, "-s", device_id, "shell", "dumpsys", "sensorservice"], capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
             if "unauthorized" in e.stderr:
                 raise RuntimeError("DEVICE_UNAUTHORIZED")
             elif "offline" in e.stderr or "closed" in e.stderr:
                 raise RuntimeError("DEVICE_DISCONNECTED")
             raise RuntimeError(f"Command failed: {e.stderr}")

    def run_command(self, device_id: str, command: str) -> str:
        try:
            cmd = [self.adb_path, "-s", device_id, "shell"] + command.split()
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
            raise RuntimeError(f"Command failed: {e.stderr}")

    def open_stream(self, device_id: str, local_port: int, remote_port: int):
        try:
            # adb forward tcp:local tcp:remote
            subprocess.run([self.adb_path, "-s", device_id, "forward", f"tcp:{local_port}", f"tcp:{remote_port}"], capture_output=True, text=True, check=True)
            return True
        except subprocess.CalledProcessError as e:
            raise RuntimeError(f"Forwarding failed: {e.stderr}")
            
    def close_stream(self, device_id: str, local_port: int):
        try:
            subprocess.run([self.adb_path, "-s", device_id, "forward", "--remove", f"tcp:{local_port}"], capture_output=True, text=True, check=True)
        except subprocess.CalledProcessError:
            pass
