import os
import sys
import json


def _get_data_dir() -> str:
    """Returns a writable, user-specific directory that survives PyInstaller packaging.
    On Windows: C:\\Users\\<user>\\AppData\\Roaming\\GyroPad
    On other platforms: ~/.GyroPad
    """
    if sys.platform == "win32":
        base = os.environ.get("APPDATA", os.path.expanduser("~"))
    else:
        base = os.path.expanduser("~")
    data_dir = os.path.join(base, "GyroPad")
    os.makedirs(data_dir, exist_ok=True)
    return data_dir


# ✅ Bug #8: Write to %APPDATA%\GyroPad\mapping.json instead of __file__-relative path.
# Using __file__ inside a PyInstaller onefile .exe resolves to a temp read-only extraction
# directory that is deleted on exit, making custom mappings impossible to persist.
MAPPING_FILE = os.path.join(_get_data_dir(), "mapping.json")

DEFAULT_MAPPING = {
    "Cross": "XUSB_GAMEPAD_A",
    "Circle": "XUSB_GAMEPAD_B",
    "Square": "XUSB_GAMEPAD_X",
    "Triangle": "XUSB_GAMEPAD_Y",
    "DpadUp": "XUSB_GAMEPAD_DPAD_UP",
    "DpadDown": "XUSB_GAMEPAD_DPAD_DOWN",
    "DpadLeft": "XUSB_GAMEPAD_DPAD_LEFT",
    "DpadRight": "XUSB_GAMEPAD_DPAD_RIGHT",
    "L1": "XUSB_GAMEPAD_LEFT_SHOULDER",
    "R1": "XUSB_GAMEPAD_RIGHT_SHOULDER",
    "L2": "LEFT_TRIGGER",
    "R2": "RIGHT_TRIGGER",
    "L3": "XUSB_GAMEPAD_LEFT_THUMB",
    "R3": "XUSB_GAMEPAD_RIGHT_THUMB",
    "Options": "XUSB_GAMEPAD_START",
    "Share": "XUSB_GAMEPAD_BACK",
    "Touchpad": "NONE",
    "PS": "XUSB_GAMEPAD_GUIDE",
    "GP": "XUSB_GAMEPAD_GUIDE"
}


def load_mapping():
    if os.path.exists(MAPPING_FILE):
        try:
            with open(MAPPING_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
    return DEFAULT_MAPPING.copy()


def save_mapping(mapping):
    with open(MAPPING_FILE, "w") as f:
        json.dump(mapping, f, indent=4)
