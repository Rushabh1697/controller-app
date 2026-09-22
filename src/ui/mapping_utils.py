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


MAPPING_FILE = os.path.join(_get_data_dir(), "mapping.json")
PROFILES_FILE = os.path.join(_get_data_dir(), "profiles.json")
CONFIG_FILE = os.path.join(_get_data_dir(), "config.json")

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

def load_profiles():
    """Loads all profiles, migrating from mapping.json if necessary."""
    if os.path.exists(PROFILES_FILE):
        try:
            with open(PROFILES_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
            
    # Default profiles structure
    default_profiles = {
        "active_profile": "Default",
        "auto_switch": True,
        "profiles": [
            {
                "name": "Default",
                "exe_name": "",
                "mapping": DEFAULT_MAPPING.copy()
            }
        ]
    }
    
    # Migrate old mapping if it exists
    if os.path.exists(MAPPING_FILE):
        try:
            with open(MAPPING_FILE, "r") as f:
                old_map = json.load(f)
                default_profiles["profiles"][0]["mapping"] = old_map
        except Exception:
            pass
            
    return default_profiles

def save_profiles(profiles_data) -> bool:
    """Saves the entire profiles structure."""
    try:
        with open(PROFILES_FILE, "w") as f:
            json.dump(profiles_data, f, indent=4)
        return True
    except OSError as e:
        print(f"Warning: Could not save profiles: {e}")
        return False

# Keep for backward compatibility with other modules if any, though gui.py will use profiles now
def load_mapping():
    data = load_profiles()
    active_name = data.get("active_profile", "Default")
    for p in data.get("profiles", []):
        if p["name"] == active_name:
            return p.get("mapping", DEFAULT_MAPPING.copy())
    return DEFAULT_MAPPING.copy()

def save_mapping(mapping) -> bool:
    data = load_profiles()
    active_name = data.get("active_profile", "Default")
    for p in data.get("profiles", []):
        if p["name"] == active_name:
            p["mapping"] = mapping
            return save_profiles(data)
    # If active profile not found, add it
    data.setdefault("profiles", []).append({
        "name": active_name,
        "exe_name": "",
        "mapping": mapping
    })
    return save_profiles(data)


def load_config():
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_config(config) -> bool:
    try:
        with open(CONFIG_FILE, "w") as f:
            json.dump(config, f, indent=4)
        return True
    except OSError as e:
        print(f"Warning: Could not save config: {e}")
        return False
