# ADB Protocol

This document specifies exactly how the laptop talks to the phone through ADB — precisely enough to implement against, and precise about what is **not** possible.

## Required Setup

1. Install **Android SDK Platform Tools** on the laptop (provides `adb.exe`).
2. Add the platform-tools folder to the Windows `PATH` environment variable.
3. On the phone: **Settings → About phone → tap "Build number" 7 times** to unlock Developer Options.
4. **Settings → System → Developer options → enable "USB debugging."**
5. Connect the phone to the laptop with a data-capable USB cable (not charge-only).
6. On first connection, the phone shows an **"Allow USB debugging?"** dialog with an RSA key fingerprint. Tap **Allow** (optionally check "Always allow from this computer" to skip this in future sessions).

## `adb devices`

Lists all devices the ADB server currently sees, one per line:

```
List of devices attached
R58N30XXXXX    device
```

Possible states per device:

| State | Meaning |
|---|---|
| `device` | Connected and authorized — ready to use |
| `unauthorized` | Connected, but the "Allow USB debugging?" prompt hasn't been accepted yet |
| `offline` | Connected at the USB level but the ADB handshake hasn't completed (often transient) |
| `no permissions` | (Rare, more common on Linux) — insufficient host-side permission to access the USB device |
| *(absent)* | No device connected, USB debugging disabled, or cable is charge-only |

`adb devices -l` adds extra columns (`product:`, `model:`, `device:`, `transport_id:`), which can be used as a quick secondary identity check but should not replace explicit `getprop` calls for the fields required by [`REQUIREMENTS.md`](REQUIREMENTS.md).

## Device Identification

The **serial number** (first column of `adb devices`) is the canonical identifier for a device for the duration of a session. When more than one device is attached, every subsequent command must be scoped with `-s <serial>`:

```
adb -s R58N30XXXXX shell getprop ro.product.model
```

If `-s` is omitted while multiple devices are attached, `adb` returns an error (`more than one device/emulator`) instead of guessing — the detector must handle this explicitly (see FR-3, FR-22 in [`REQUIREMENTS.md`](REQUIREMENTS.md)).

## Running Shell Commands

`adb shell <command>` executes `<command>` inside the phone's shell, running as the restricted `shell` Unix user (not root). This is sufficient for the read-only property and diagnostic-dump commands Phase 1 needs, but it does mean:

- Some `dumpsys` sections may be restricted on certain OEM builds or newer Android versions — treat this as `NEEDS VERIFICATION` per device, and fail gracefully rather than assuming access.
- No filesystem writes, package installs, or privileged operations are attempted or needed in Phase 1.

### Device property reads

```
adb shell getprop ro.product.manufacturer
adb shell getprop ro.product.model
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.product.cpu.abi
adb shell getprop ro.product.cpu.abilist
```

Each returns a single value on its own line. `getprop` with no argument dumps every property at once (`[key]: [value]` format) — useful for debugging, but the detector should query specific keys for reliability. Property keys are considered stable across Android versions (they are part of the long-standing AOSP build property convention), but exact **values** naturally vary by device and should never be hardcoded or assumed.

### Sensor listing

```
adb shell dumpsys sensorservice
```

This dumps internal state from Android's sensor service, including a sensor list section with per-sensor metadata (name, vendor, version, handle, type, and — depending on OEM — range, resolution, power). This is an **undocumented diagnostic dump**, not a stable public API:

> `NEEDS VERIFICATION`: The exact text format of `dumpsys sensorservice` is not part of the official Android API surface. It has been consistent enough across many stock/AOSP-based Android versions to be a widely used technique for sensor inspection, but formatting, field availability, and access permissions can vary by Android version and OEM skin. The parser must be written defensively (tolerate missing fields, unexpected line formats) and this must be validated against real target devices during implementation.

## Error Handling

| Condition | Detection method | Expected handling |
|---|---|---|
| `adb` not installed / not on PATH | Launching `adb` raises "command not found" (OS-level) | Report `ADB_NOT_FOUND`, point to install/PATH steps |
| ADB server not running | First `adb` command auto-starts it; failure here is rare but possible (e.g. port conflict) | Report `ADB_SERVER_ERROR`, suggest `adb kill-server && adb start-server` |
| No device connected | `adb devices` returns only the header line | Report `NO_DEVICE_CONNECTED` |
| Device unauthorized | State is `unauthorized` in `adb devices` | Report `DEVICE_UNAUTHORIZED`, instruct user to accept the on-phone prompt |
| Device offline | State is `offline` | Report `DEVICE_OFFLINE`, suggest replugging |
| Multiple devices, no `-s` given | `adb shell ...` returns `error: more than one device/emulator` | Report `AMBIGUOUS_DEVICE`, prompt for device selection |
| Device disconnects mid-command | Command fails/times out or returns `error: device offline`/`error: closed` | Report `DEVICE_DISCONNECTED`, do not crash the whole session |
| `dumpsys` output unparseable | Parser doesn't match expected structure | Report `PARSE_WARNING`, return partial results rather than failing entirely |

## Multiple Devices

The detector must always enumerate with `adb devices -l` first, and treat the result as a list of candidates. If exactly one device is present, it can be used directly. If more than one is present, the tool must require explicit selection (interactive prompt or CLI flag) before running any device-scoped command.

## Device Disconnection

Because a USB connection can drop at any point (cable movement, phone sleep/lock behavior on some OEMs, port power management), every device-scoped command should be wrapped so that a mid-command failure is caught and reported as `DEVICE_DISCONNECTED` rather than propagating a raw exception to the user.

## ADB Server

The `adb` server is a background process (`adb.exe`, typically on `localhost:5037`) that mediates between the `adb` command-line client and any connected devices. It starts automatically on the first `adb` command in a session and persists across commands. The detector does not need to manage it explicitly beyond being able to recover from `adb kill-server` / `adb start-server` if a stuck state is detected.

## Port Forwarding

Not used in Phase 1. Reserved for Phase 3+, once a companion Android app exists:

```
adb forward tcp:<laptop_port> tcp:<phone_port>
```

This maps a local TCP port on the laptop to a TCP port the companion app listens on inside the phone, tunneled entirely over the existing USB/ADB connection — no Wi-Fi required. `adb reverse` does the same in the opposite direction (phone connects out to a laptop-side port). This is documented here now so the Transport Interface in [`ARCHITECTURE.md`](ARCHITECTURE.md) can plan for it, even though Phase 1 doesn't use it.

## Limitations for Real-Time Sensor Streaming

To state it once, clearly, and reference it everywhere else:

- There is **no** ADB shell command that streams live sensor values the way `SensorManager.registerListener()` does on-device.
- `dumpsys sensorservice` is a **snapshot diagnostic dump**, not a subscription/streaming feed, and its content is not guaranteed to reflect real-time values reliably across devices.
- Polling `dumpsys sensorservice` repeatedly to simulate streaming would be slow (each `adb shell` call has meaningful process-spawn overhead) and is not a supported access pattern.
- **Conclusion:** live sensor data (FR-25 in [`REQUIREMENTS.md`](REQUIREMENTS.md)) requires a companion Android app using the real Android Sensor APIs, communicating back to the laptop over a channel such as an `adb forward`-tunneled socket (Phase 3–4) or, eventually, Wi-Fi/Bluetooth (Phase 8).
