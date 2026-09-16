# Data Model

Conceptual data structures for the detector, designed so the exact same shapes can be reused, unmodified in concept, by the future controller application (see [`FUTURE_CONTROLLER_ARCHITECTURE.md`](FUTURE_CONTROLLER_ARCHITECTURE.md)). Field names use `snake_case` throughout for consistency if the project later spans Python and Kotlin/Flutter components.

These are conceptual models, not implementation code — at build time they map naturally onto Python `dataclasses` or `pydantic` models.

## `Device`

Identity and static facts about the connected phone.

| Field | Type | Notes |
|---|---|---|
| `serial` | string | Canonical identifier from `adb devices` |
| `manufacturer` | string | `ro.product.manufacturer` |
| `model` | string | `ro.product.model` |
| `brand` | string \| null | `ro.product.brand`, optional |
| `android_version` | string | `ro.build.version.release` |
| `sdk_level` | integer | `ro.build.version.sdk` |
| `abi` | string | `ro.product.cpu.abi` |
| `abilist` | string[] | `ro.product.cpu.abilist`, comma-split |
| `connection_state` | enum | `device` \| `unauthorized` \| `offline` \| `no_permissions` |

```json
{
  "serial": "R58N30XXXXX",
  "manufacturer": "samsung",
  "model": "SM-S928B",
  "brand": "samsung",
  "android_version": "14",
  "sdk_level": 34,
  "abi": "arm64-v8a",
  "abilist": ["arm64-v8a", "armeabi-v7a", "armeabi"],
  "connection_state": "device"
}
```

## `Sensor`

Static metadata about one sensor the device reports.

| Field | Type | Notes |
|---|---|---|
| `name` | string | Human-readable sensor name as reported |
| `friendly_type` | string | Normalized name, e.g. `"Accelerometer"` |
| `android_type` | string | Raw Android sensor type constant, e.g. `"TYPE_ACCELEROMETER"` |
| `vendor` | string \| null | As reported, if available |
| `version` | integer \| null | As reported, if available |
| `handle` | integer \| null | Internal sensor handle, if available |
| `range` | number \| null | Max measurable value, if exposed |
| `resolution` | number \| null | Smallest detectable change, if exposed |
| `power_ma` | number \| null | Power draw in mA, if exposed |
| `min_delay_us` | integer \| null | Minimum sample interval in microseconds, if exposed |
| `available` | boolean | Whether it was found on this device |
| `source` | string | Always `"dumpsys_sensorservice"` in Phase 1 |
| `verification_status` | enum | `"confirmed"` \| `"needs_verification"` — flags fields the OEM's dump didn't clearly populate |

```json
{
  "name": "LSM6DSV Accelerometer",
  "friendly_type": "Accelerometer",
  "android_type": "TYPE_ACCELEROMETER",
  "vendor": "STMicroelectronics",
  "version": 1,
  "handle": 65552,
  "range": 78.4532,
  "resolution": 0.0023956299,
  "power_ma": 0.13,
  "min_delay_us": 2500,
  "available": true,
  "source": "dumpsys_sensorservice",
  "verification_status": "confirmed"
}
```

## `SensorReading` *(Phase 3+, not used in Phase 1)*

A single timestamped sample from a live sensor, once the companion app exists.

| Field | Type | Notes |
|---|---|---|
| `android_type` | string | e.g. `"TYPE_GYROSCOPE"` |
| `timestamp_ns` | integer | Device-side event timestamp (nanoseconds, sensor clock) |
| `values` | number[] | 1–6 values depending on sensor type |
| `accuracy` | integer | Android accuracy constant (0–3) |

```json
{
  "android_type": "TYPE_GYROSCOPE",
  "timestamp_ns": 1234567890123,
  "values": [0.023, -1.284, 0.087],
  "accuracy": 3
}
```

## `Connection`

State of the communication channel itself, independent of device identity.

| Field | Type | Notes |
|---|---|---|
| `transport` | enum | `"adb"` in Phase 1; `"wifi"` \| `"bluetooth"` in later phases |
| `serial` | string | Matches `Device.serial` |
| `status` | enum | `"connected"` \| `"unauthorized"` \| `"offline"` \| `"disconnected"` |
| `established_at` | string (ISO 8601) | When the connection was confirmed |

```json
{
  "transport": "adb",
  "serial": "R58N30XXXXX",
  "status": "connected",
  "established_at": "2026-09-16T10:12:03Z"
}
```

## `DetectorResult`

The top-level object the detector produces — everything the UI needs for one detection pass.

| Field | Type | Notes |
|---|---|---|
| `device` | `Device` \| null | Null if no device could be identified |
| `sensors` | `Sensor[]` | Empty array if none could be detected |
| `connection` | `Connection` | Always present, even on failure |
| `errors` | `Error[]` | Empty array on full success |
| `timestamp` | string (ISO 8601) | When this result was generated |

```json
{
  "device": { "serial": "R58N30XXXXX", "manufacturer": "samsung", "model": "SM-S928B", "brand": "samsung", "android_version": "14", "sdk_level": 34, "abi": "arm64-v8a", "abilist": ["arm64-v8a", "armeabi-v7a", "armeabi"], "connection_state": "device" },
  "sensors": [ { "name": "LSM6DSV Accelerometer", "friendly_type": "Accelerometer", "android_type": "TYPE_ACCELEROMETER", "vendor": "STMicroelectronics", "version": 1, "handle": 65552, "range": 78.4532, "resolution": 0.0023956299, "power_ma": 0.13, "min_delay_us": 2500, "available": true, "source": "dumpsys_sensorservice", "verification_status": "confirmed" } ],
  "connection": { "transport": "adb", "serial": "R58N30XXXXX", "status": "connected", "established_at": "2026-09-16T10:12:03Z" },
  "errors": [],
  "timestamp": "2026-09-16T10:12:05Z"
}
```

## `Error`

Structured error information, used both for hard failures and soft warnings.

| Field | Type | Notes |
|---|---|---|
| `code` | string | Machine-readable, e.g. `"DEVICE_UNAUTHORIZED"` (see [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md)) |
| `message` | string | Human-readable explanation |
| `category` | enum | `"connection"` \| `"parsing"` \| `"permission"` \| `"unknown"` |
| `recoverable` | boolean | Whether a retry/refresh could resolve it |

```json
{
  "code": "DEVICE_UNAUTHORIZED",
  "message": "Device is connected but not authorized. Accept the 'Allow USB debugging?' prompt on your phone.",
  "category": "connection",
  "recoverable": true
}
```

## Design Notes

- All models are intentionally **flat and serializable** (pure JSON-compatible types) so they can cross process/language boundaries cleanly — laptop Python process now, potentially a Kotlin/Flutter companion app and a separate controller process later.
- `Sensor.verification_status` exists specifically because [`SENSOR_DETECTION.md`](SENSOR_DETECTION.md) and [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md) both flag `dumpsys sensorservice` field availability as `NEEDS VERIFICATION` — the data model surfaces that uncertainty to the UI instead of hiding it.
- `SensorReading` is defined now, ahead of Phase 3, purely so the eventual streaming feature doesn't require inventing a new top-level shape — it simply starts populating a model already accounted for in the design.
