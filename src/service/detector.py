from typing import Optional
from datetime import datetime
from src.model.models import (
    DetectorResult, Device, Connection, Error, ErrorCategory,
    ConnectionState, ConnectionStatus, TransportType
)
from src.transport.interface import TransportInterface

class DetectorService:
    def __init__(self, transport: TransportInterface):
        self.transport = transport

    def detect(self, target_serial: Optional[str] = None) -> DetectorResult:
        timestamp = datetime.utcnow().isoformat() + "Z"
        errors = []
        
        transport_label = getattr(self.transport, "transport_name", None)
        if transport_label == "Bluetooth":
            transport_type = TransportType.BLUETOOTH
        elif transport_label == "Wi-Fi" or hasattr(self.transport, "target_ip"):
            transport_type = TransportType.WIFI
        else:
            transport_type = TransportType.ADB
        
        try:
            devices = self.transport.list_devices()
        except RuntimeError as e:
            error_msg = str(e)
            if "ADB_NOT_FOUND" in error_msg:
                errors.append(Error("ADB_NOT_FOUND", "adb command not found. Please install Android SDK Platform Tools.", ErrorCategory.CONNECTION, False))
            elif "ADB_SERVER_ERROR" in error_msg:
                errors.append(Error("ADB_SERVER_ERROR", "ADB server error.", ErrorCategory.CONNECTION, True))
            else:
                errors.append(Error("UNKNOWN", error_msg, ErrorCategory.UNKNOWN, False))
            
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, "", ConnectionStatus.DISCONNECTED, timestamp),
                errors=errors,
                timestamp=timestamp
            )

        if not devices:
            errors.append(Error("NO_DEVICE_CONNECTED", "No device connected.", ErrorCategory.CONNECTION, True))
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, "", ConnectionStatus.DISCONNECTED, timestamp),
                errors=errors,
                timestamp=timestamp
            )
            
        target = None
        if target_serial:
            for d in devices:
                if d["serial"] == target_serial:
                    target = d
                    break
            if not target:
                errors.append(Error("DEVICE_NOT_FOUND", f"Target device {target_serial} not found.", ErrorCategory.CONNECTION, False))
                return DetectorResult(
                    device=None,
                    sensors=[],
                    connection=Connection(transport_type, target_serial, ConnectionStatus.DISCONNECTED, timestamp),
                    errors=errors,
                    timestamp=timestamp
                )
        elif len(devices) > 1:
            errors.append(Error("AMBIGUOUS_DEVICE", "Multiple devices connected. Please specify one.", ErrorCategory.CONNECTION, False))
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, "", ConnectionStatus.DISCONNECTED, timestamp),
                errors=errors,
                timestamp=timestamp
            )
        else:
            target = devices[0]

        serial = target["serial"]
        raw_state = target["state"]

        if raw_state == "unauthorized":
            errors.append(Error("DEVICE_UNAUTHORIZED", "Device is unauthorized. Accept prompt on phone.", ErrorCategory.PERMISSION, True))
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, serial, ConnectionStatus.UNAUTHORIZED, timestamp),
                errors=errors,
                timestamp=timestamp
            )
        elif raw_state == "offline":
            errors.append(Error("DEVICE_OFFLINE", "Device is offline. Try replugging.", ErrorCategory.CONNECTION, True))
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, serial, ConnectionStatus.OFFLINE, timestamp),
                errors=errors,
                timestamp=timestamp
            )
        elif raw_state == "no permissions":
            errors.append(Error("NO_PERMISSIONS", "No permissions to access USB device.", ErrorCategory.PERMISSION, False))
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, serial, ConnectionStatus.DISCONNECTED, timestamp),
                errors=errors,
                timestamp=timestamp
            )
        elif raw_state != "device":
             errors.append(Error("UNKNOWN_STATE", f"Unknown device state: {raw_state}", ErrorCategory.CONNECTION, False))
             return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, serial, ConnectionStatus.DISCONNECTED, timestamp),
                errors=errors,
                timestamp=timestamp
            )

        # Device is authorized and online
        try:
            info = self.transport.get_device_info(serial)
            device = Device(
                serial=serial,
                manufacturer=info.get("manufacturer", ""),
                model=info.get("model", ""),
                brand=info.get("brand"),
                android_version=info.get("android_version", ""),
                sdk_level=info.get("sdk_level", 0),
                abi=info.get("abi", ""),
                abilist=info.get("abilist", []),
                connection_state=ConnectionState.DEVICE
            )
            connection = Connection(transport_type, serial, ConnectionStatus.CONNECTED, timestamp)
            
            # Phase 2: Sensor Detection
            try:
                from src.service.parser import SensorParser
                dump_text = self.transport.get_sensor_dump(serial)
                parser = SensorParser()
                sensors = parser.parse_dump(dump_text)
            except RuntimeError as e:
                # If sensor dump fails (e.g. permission issue), we still return the device
                sensors = []
                errors.append(Error("SENSOR_DUMP_FAILED", f"Could not fetch sensors: {str(e)}", ErrorCategory.PERMISSION, False))
            except Exception as e:
                sensors = []
                errors.append(Error("PARSE_WARNING", f"Failed to parse sensors: {str(e)}", ErrorCategory.PARSING, False))

            return DetectorResult(
                device=device,
                sensors=sensors,
                connection=connection,
                errors=errors,
                timestamp=timestamp
            )
        except RuntimeError as e:
            error_msg = str(e)
            if "DEVICE_UNAUTHORIZED" in error_msg:
                 errors.append(Error("DEVICE_UNAUTHORIZED", "Device became unauthorized.", ErrorCategory.PERMISSION, True))
                 conn_status = ConnectionStatus.UNAUTHORIZED
            elif "DEVICE_DISCONNECTED" in error_msg:
                 errors.append(Error("DEVICE_DISCONNECTED", "Device disconnected mid-command.", ErrorCategory.CONNECTION, True))
                 conn_status = ConnectionStatus.DISCONNECTED
            else:
                 errors.append(Error("UNKNOWN", error_msg, ErrorCategory.UNKNOWN, False))
                 conn_status = ConnectionStatus.DISCONNECTED
                 
            return DetectorResult(
                device=None,
                sensors=[],
                connection=Connection(transport_type, serial, conn_status, timestamp),
                errors=errors,
                timestamp=timestamp
            )
