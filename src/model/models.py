from dataclasses import dataclass, field
from typing import List, Optional
from enum import Enum

class ConnectionState(str, Enum):
    DEVICE = "device"
    UNAUTHORIZED = "unauthorized"
    OFFLINE = "offline"
    NO_PERMISSIONS = "no_permissions"

@dataclass
class Device:
    serial: str
    manufacturer: str
    model: str
    brand: Optional[str]
    android_version: str
    sdk_level: int
    abi: str
    abilist: List[str]
    connection_state: ConnectionState

class VerificationStatus(str, Enum):
    CONFIRMED = "confirmed"
    NEEDS_VERIFICATION = "needs_verification"

@dataclass
class Sensor:
    name: str
    friendly_type: str
    android_type: str
    vendor: Optional[str]
    version: Optional[int]
    handle: Optional[int]
    range: Optional[float]
    resolution: Optional[float]
    power_ma: Optional[float]
    min_delay_us: Optional[int]
    available: bool
    source: str
    verification_status: VerificationStatus

class TransportType(str, Enum):
    ADB = "adb"
    WIFI = "wifi"
    BLUETOOTH = "bluetooth"

class ConnectionStatus(str, Enum):
    CONNECTED = "connected"
    UNAUTHORIZED = "unauthorized"
    OFFLINE = "offline"
    DISCONNECTED = "disconnected"

@dataclass
class Connection:
    transport: TransportType
    serial: str
    status: ConnectionStatus
    established_at: str

class ErrorCategory(str, Enum):
    CONNECTION = "connection"
    PARSING = "parsing"
    PERMISSION = "permission"
    UNKNOWN = "unknown"

@dataclass
class Error:
    code: str
    message: str
    category: ErrorCategory
    recoverable: bool

@dataclass
class DetectorResult:
    device: Optional[Device]
    sensors: List[Sensor]
    connection: Connection
    errors: List[Error]
    timestamp: str
