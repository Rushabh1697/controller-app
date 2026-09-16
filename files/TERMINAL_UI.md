# Terminal UI

Design for the detector's command-line interface: what Phase 1 actually shows, and how the future live mode will extend it.

## Phase 1: Static Detection View

Rendered once at launch, and re-rendered on manual refresh (`r`). This is a **snapshot**, not a live feed — see [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md#limitations-for-real-time-sensor-streaming) for why live values aren't part of Phase 1.

```
╔══════════════════════════════════════╗
║       ANDROID SENSOR DETECTOR        ║
╚══════════════════════════════════════╝

DEVICE
Connection  : USB / ADB
Manufacturer: samsung
Model       : SM-S928B
Android     : 14
SDK         : 34
ABI         : arm64-v8a

SENSORS
✓ Accelerometer        (STMicroelectronics, v1)
✓ Gyroscope             (STMicroelectronics, v1)
✓ Magnetometer          (AKM, v2)
✓ Rotation Vector       (fused)
✓ Game Rotation Vector  (fused)
✗ Pressure              (not available on this device)
✗ Ambient Temperature   (not available on this device)

[r] Refresh   [l] Live mode (not available yet)   [q] Quit
```

Design rules:
- `✓` = sensor present and reported by `dumpsys sensorservice`.
- `✗` = sensor reported absent — displayed plainly, never as an error.
- Any field the device didn't populate (e.g. missing resolution) is simply omitted from that sensor's line rather than shown as `null` or `0`.
- If `Sensor.verification_status` is `"needs_verification"` for a field, the UI should mark it distinctly (e.g. a trailing `?`) rather than presenting it with false confidence.

## Multi-Device Selection View

Shown instead of the above when more than one device is attached (FR-2, FR-22):

```
╔══════════════════════════════════════╗
║       ANDROID SENSOR DETECTOR        ║
╚══════════════════════════════════════╝

Multiple devices detected:

  [1] R58N30XXXXX   samsung SM-S928B     (device)
  [2] 9AY6X21ABCDE   Google Pixel 8       (unauthorized)

Select a device (1-2), or [q] to quit:
```

## Error / Empty States

```
╔══════════════════════════════════════╗
║       ANDROID SENSOR DETECTOR        ║
╚══════════════════════════════════════╝

⚠ No device connected.

  - Confirm the phone is plugged in with a data-capable USB cable
  - Confirm USB debugging is enabled (Settings → Developer options)
  - Run 'adb devices' manually to verify

[r] Retry   [q] Quit
```

Every `Error` (per [`DATA_MODEL.md`](DATA_MODEL.md#error)) maps to a short, specific message like this — never a raw exception. See [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md) for the full set of conditions this view must cover.

## Future: Live Sensor Mode (Phase 4+, requires companion app)

Not implemented in Phase 1. Selecting `[l]` before a companion app exists should show a clear placeholder, not a broken or fake feature:

```
LIVE MODE
Live sensor mode requires the Android companion app (Phase 3+).
Not available yet. See DEVELOPMENT_PLAN.md.

[q] Back
```

Once implemented (Phase 4 onward), live mode is expected to look like:

```
GYROSCOPE
X:  0.023 rad/s
Y: -1.284 rad/s
Z:  0.087 rad/s

ACCELEROMETER
X:  0.12 m/s²
Y:  9.72 m/s²
Z:  0.31 m/s²

Sample rate: ~95 Hz    Latency: ~14 ms (estimated)

[c] Calibrate (future)   [q] Back
```

This view depends on `SensorReading` streaming (see [`DATA_MODEL.md`](DATA_MODEL.md#sensorreading-phase-3-not-used-in-phase-1)) and is out of scope until that exists.

## Keyboard Commands

| Key | Action | Available in Phase 1? |
|---|---|---|
| `q` | Quit the application | ✅ Yes |
| `r` | Refresh detection (re-run device + sensor detection) | ✅ Yes |
| `l` | Enter live sensor mode | ❌ Placeholder only — requires companion app (Phase 3+) |
| `c` | Calibration mode | ❌ Not available — belongs to the future controller, see [`FUTURE_CONTROLLER_ARCHITECTURE.md`](FUTURE_CONTROLLER_ARCHITECTURE.md) |
| `1`–`9` | Select a device when multiple are attached | ✅ Yes |
| `h` | Show help / keyboard shortcut list | ✅ Yes (recommended addition) |

## Implementation Note (non-binding)

A Python library such as `rich` would comfortably support this layout (boxes, checkmarks, colored status) without custom terminal-control code — a recommendation to consider at implementation time, not a decision made here.
