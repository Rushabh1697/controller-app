from abc import ABC, abstractmethod
from typing import List, Dict, Any

class TransportInterface(ABC):
    @abstractmethod
    def list_devices(self) -> List[Dict[str, Any]]:
        """
        List devices and their raw connection states.
        Should return a list of dicts with at least 'serial' and 'state' keys.
        """
        pass

    @abstractmethod
    def get_device_info(self, device_id: str) -> Dict[str, str]:
        """
        Get raw key/value properties for a device.
        """
        pass

    @abstractmethod
    def get_sensor_dump(self, device_id: str) -> str:
        """
        Get raw sensor listing text/data for a device.
        """
        pass

    @abstractmethod
    def run_command(self, device_id: str, command: str) -> str:
        """
        Generic escape hatch for running a command.
        """
        pass

    @abstractmethod
    def open_stream(self, device_id: str, *args, **kwargs):
        """
        (Phase 3+) Opens a channel for continuous data.
        """
        pass
