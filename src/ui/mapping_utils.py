import os
import json

MAPPING_FILE = os.path.join(os.path.dirname(__file__), "mapping.json")

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
