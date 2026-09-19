import re
from typing import List, Optional
from src.model.models import Sensor, VerificationStatus

class SensorParser:
    def __init__(self):
        # Regex to match the main sensor line
        # e.g.: 0x00000001) lsm6dso_acc               | st              | ver: 1 | type: android.sensor.accelerometer(1) | perm: n/a | flags: 0x00000000
        self.main_line_pattern = re.compile(
            r'^\s*(0x[0-9a-fA-F]+)\)\s*(.*?)\s*\|\s*(.*?)\s*\|\s*ver:\s*(\d+)\s*\|\s*type:\s*(.*?)\((\d+)\)\s*\|'
        )
        
        # Regex to match the details line
        # e.g.: 	continuous | minRate=12.50Hz | maxRate=400.00Hz | FIFO (max,reserved) = (4500, 3000) events | non-wakeUp | 
        # (Wait, details like power and resolution might be present in some OEMs, we will parse them if found)
        self.detail_pattern = re.compile(
            r'power=([\d.]+)\s*mA.*?resolution=([\d.]+)'
        )

    def _get_friendly_type(self, raw_type: str) -> str:
        mapping = {
            "android.sensor.accelerometer": "Accelerometer",
            "android.sensor.magnetic_field": "Magnetometer",
            "android.sensor.orientation": "Orientation",
            "android.sensor.gyroscope": "Gyroscope",
            "android.sensor.light": "Light",
            "android.sensor.proximity": "Proximity",
            "android.sensor.gravity": "Gravity",
            "android.sensor.linear_acceleration": "Linear Acceleration",
            "android.sensor.rotation_vector": "Rotation Vector",
            "android.sensor.magnetic_field_uncalibrated": "Uncalibrated Magnetometer",
            "android.sensor.game_rotation_vector": "Game Rotation Vector",
            "android.sensor.gyroscope_uncalibrated": "Uncalibrated Gyroscope",
            "android.sensor.significant_motion": "Significant Motion",
            "android.sensor.step_detector": "Step Detector",
            "android.sensor.step_counter": "Step Counter",
            "android.sensor.geomagnetic_rotation_vector": "Geomagnetic Rotation Vector",
            "android.sensor.device_orientation": "Device Orientation",
            "android.sensor.accelerometer_uncalibrated": "Uncalibrated Accelerometer",
            "android.sensor.pressure": "Pressure",
            "android.sensor.ambient_temperature": "Ambient Temperature",
        }
        # default to capitalizing the words in the type name if unknown
        if raw_type in mapping:
             return mapping[raw_type]
        # fallback
        parts = raw_type.replace("android.sensor.", "").split("_")
        return " ".join([p.capitalize() for p in parts])
        
    def _get_android_type_constant(self, raw_type: str) -> str:
        # e.g. android.sensor.accelerometer -> TYPE_ACCELEROMETER
        # For non-standard ones, we just uppercase and prefix with TYPE_
        base = raw_type.replace("android.sensor.", "").upper()
        return f"TYPE_{base}"

    def _get_friendly_type_from_constant(self, constant: str) -> str:
        """Maps TYPE_GAME_ROTATION_VECTOR → 'Game Rotation Vector' directly from the
        constant name without the brittle android.sensor. round-trip transform.
        Bug #9: this replaces the previous approach which failed for any constant
        not present in the _get_friendly_type dict after re-transformation."""
        parts = constant.replace("TYPE_", "").split("_")
        return " ".join(p.capitalize() for p in parts)

    def parse_dump(self, dump_text: str) -> List[Sensor]:
        sensors = []
        in_sensor_list = False
        
        lines = dump_text.splitlines()
        
        current_sensor = None
        
        for line in lines:
            if line.startswith("Sensor List:"):
                in_sensor_list = True
                continue
            elif in_sensor_list and line.startswith("Fusion States:"):
                # End of sensor list
                break
                
            if not in_sensor_list:
                continue
                
            # Check if this is a main sensor line
            match = self.main_line_pattern.match(line)
            if match:
                handle_hex, name, vendor, version_str, raw_type, type_id = match.groups()
                
                name = name.strip()
                vendor = vendor.strip()
                version = int(version_str) if version_str.isdigit() else None
                handle = int(handle_hex, 16)
                
                # Check for empty vendor string which can happen if it's just whitespace
                if not vendor:
                    vendor = None
                    
                current_sensor = Sensor(
                    name=name,
                    friendly_type=self._get_friendly_type(raw_type),
                    android_type=self._get_android_type_constant(raw_type),
                    vendor=vendor,
                    version=version,
                    handle=handle,
                    range=None,
                    resolution=None,
                    power_ma=None,
                    min_delay_us=None,
                    available=True,
                    source="dumpsys_sensorservice",
                    verification_status=VerificationStatus.NEEDS_VERIFICATION # Since we might miss some fields
                )
                sensors.append(current_sensor)
            elif current_sensor and line.startswith("\t"):
                # Details line for the current sensor
                # Parse power, resolution, minDelay if they exist (though not in the dump we saw, we'll try)
                
                # We can check minDelay/maxDelay
                delay_match = re.search(r'minDelay=([\-\d]+)us', line)
                if delay_match:
                    delay_val = int(delay_match.group(1))
                    if delay_val > 0:
                        current_sensor.min_delay_us = delay_val
                        
                # Look for other fields if they exist in other OEM formats
                power_match = re.search(r'power=([\d.]+)\s*mA', line)
                if power_match:
                    current_sensor.power_ma = float(power_match.group(1))
                    
                res_match = re.search(r'resolution=([\d.]+)', line)
                if res_match:
                    current_sensor.resolution = float(res_match.group(1))
                    
                range_match = re.search(r'maxRange=([\d.]+)', line)
                if range_match:
                    current_sensor.range = float(range_match.group(1))

        # Check for expected sensors not in list
        expected_types = [
            "TYPE_ACCELEROMETER", "TYPE_GYROSCOPE", "TYPE_MAGNETIC_FIELD",
            "TYPE_ROTATION_VECTOR", "TYPE_GAME_ROTATION_VECTOR",
            "TYPE_PRESSURE", "TYPE_AMBIENT_TEMPERATURE"
        ]
        
        found_types = {s.android_type for s in sensors}
        for expected in expected_types:
             if expected not in found_types:
                 # Add an "absent" sensor for the UI to display 'X'
                 # ✅ Bug #9: use _get_friendly_type_from_constant to avoid the brittle
                 # TYPE_ → android.sensor. → _get_friendly_type round-trip that breaks
                 # for any constant not present in the lookup dict.
                 friendly = self._get_friendly_type_from_constant(expected)
                 sensors.append(Sensor(
                     name=friendly,
                     friendly_type=friendly,
                     android_type=expected,
                     vendor=None,
                     version=None,
                     handle=None,
                     range=None,
                     resolution=None,
                     power_ma=None,
                     min_delay_us=None,
                     available=False,
                     source="dumpsys_sensorservice",
                     verification_status=VerificationStatus.CONFIRMED
                 ))
                 
        # Sort so that available sensors are first, then unavailable, and within that alphabetically
        sensors.sort(key=lambda s: (not s.available, s.friendly_type))

        return sensors
