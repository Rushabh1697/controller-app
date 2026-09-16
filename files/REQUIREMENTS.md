# Requirements

This document defines what the Android Sensor Detector must do, split by phase, and what quality it must have. Every functional requirement is tagged with **how** it's satisfied, so it's always clear whether something is achievable with ADB alone or needs more.

**Source tags used below:**
- `[ADB]` — achievable using `adb devices` / `adb shell getprop` / `adb shell dumpsys` alone, no app needed.
- `[ADB — NEEDS VERIFICATION]` — achievable via ADB in principle, but the exact output format/availability is not guaranteed across Android versions and OEMs, and must be confirmed against a real device during implementation.
- `[APP REQUIRED]` — requires an Android companion application (Phase 3+); not possible through ADB shell commands alone.
- `[SOFTWARE]` — pure application logic, not dependent on the phone.

## Phase 1 — Functional Requirements

| ID | Requirement | Source |
|---|---|---|
| FR-1 | Detect whether an Android phone is connected via USB/ADB | `[ADB]` |
| FR-2 | Detect and enumerate multiple connected devices | `[ADB]` |
| FR-3 | Identify a specific connected device (by serial number) | `[ADB]` |
| FR-4 | Display device manufacturer | `[ADB]` (`ro.product.manufacturer`) |
| FR-5 | Display device model | `[ADB]` (`ro.product.model`) |
| FR-6 | Display Android version | `[ADB]` (`ro.build.version.release`) |
| FR-7 | Display SDK/API level | `[ADB]` (`ro.build.version.sdk`) |
| FR-8 | Display device CPU architecture/ABI | `[ADB]` (`ro.product.cpu.abi`, `ro.product.cpu.abilist`) |
| FR-9 | Detect available Android sensors | `[ADB — NEEDS VERIFICATION]` (`dumpsys sensorservice`; format is an internal debug dump, not a stable public API) |
| FR-10 | Display sensor name | `[ADB — NEEDS VERIFICATION]` |
| FR-11 | Display sensor type (Android sensor type constant + friendly name) | `[ADB — NEEDS VERIFICATION]` |
| FR-12 | Display sensor vendor | `[ADB — NEEDS VERIFICATION]` |
| FR-13 | Display sensor version | `[ADB — NEEDS VERIFICATION]` |
| FR-14 | Display sensor resolution, if exposed | `[ADB — NEEDS VERIFICATION]`, not all OEMs populate this field |
| FR-15 | Display other sensor capabilities (range, power draw, min delay), if exposed | `[ADB — NEEDS VERIFICATION]` |
| FR-16 | Determine whether a given sensor is available/usable on this device | `[ADB]` (present in dump = reported present) |
| FR-17 | Handle a sensor that is missing/unavailable gracefully (no crash, clear "not available" indicator) | `[SOFTWARE]` |
| FR-18 | Handle a disconnected device gracefully (before or during a command) | `[SOFTWARE]` + `[ADB]` (detect via empty/error `adb` output) |
| FR-19 | Handle ADB errors gracefully (`adb` not found, server not running, unauthorized device, ambiguous multi-device commands) | `[SOFTWARE]` |
| FR-20 | Present all of the above in a readable terminal UI | `[SOFTWARE]` |

## Phase 2 — Functional Requirements

| ID | Requirement | Source |
|---|---|---|
| FR-21 | Refresh detection results on demand without restarting the tool | `[SOFTWARE]` |
| FR-22 | Select between multiple connected devices interactively | `[SOFTWARE]` + `[ADB]` |
| FR-23 | Cache/re-query sensor list efficiently (avoid unnecessary repeated ADB calls) | `[SOFTWARE]` |
| FR-24 | Structured, machine-readable output mode (e.g. `--json`) for reuse by future tooling | `[SOFTWARE]` |

## Future — Functional Requirements

| ID | Requirement | Source |
|---|---|---|
| FR-25 | Live sensor value readings (continuously updating gyroscope/accelerometer numbers) | `[APP REQUIRED]` — no generic ADB shell command streams live sensor values; see [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md#limitations-for-real-time-sensor-streaming) |
| FR-26 | Stream sensor data from phone to laptop over USB without Wi-Fi | `[APP REQUIRED]` + `[ADB]` (`adb forward`/`adb reverse` tunnels the socket, but the phone-side app must exist to produce the data) |
| FR-27 | Stream sensor data over Wi-Fi | `[APP REQUIRED]` |
| FR-28 | Stream sensor data over Bluetooth | `[APP REQUIRED]` |
| FR-29 | Latency measurement for streamed sensor data | `[APP REQUIRED]` + `[SOFTWARE]` |
| FR-30 | Translate sensor/touch input into normalized controller input | `[SOFTWARE]`, out of scope for the detector itself — see [`FUTURE_CONTROLLER_ARCHITECTURE.md`](FUTURE_CONTROLLER_ARCHITECTURE.md) |
| FR-31 | Emit a virtual game controller to Windows | `[SOFTWARE]`, requires a virtual controller driver/library, out of scope for the detector |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-1 | **No elevated privileges.** Phase 1 must not require root on the phone or admin rights on Windows. |
| NFR-2 | **Fast detection.** A full detection pass (device + sensors) should complete in a few seconds on a typical USB 2.0 connection. |
| NFR-3 | **Resilience to format drift.** If `dumpsys sensorservice` output changes shape on a given Android version/OEM, the parser must degrade gracefully (partial results + a warning) rather than crashing. |
| NFR-4 | **Transport-agnostic core.** Detection/data-model logic must not directly depend on ADB internals, so a future transport (Wi-Fi/Bluetooth) can be substituted — see [`ARCHITECTURE.md`](ARCHITECTURE.md). |
| NFR-5 | **Clear error messages.** Every failure mode in [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md) must map to a specific, human-readable message, not a raw stack trace. |
| NFR-6 | **Cross-device compatibility.** Should work across a reasonable range of manufacturers and Android versions without code changes; anything OEM-specific must be isolated and documented. |
| NFR-7 | **Testability.** Core parsing logic must be unit-testable without a physical device attached (via captured sample output). See [`TESTING.md`](TESTING.md). |
| NFR-8 | **No unnecessary permissions or network exposure.** Phase 1 opens no network ports and requests no Android app permissions (there is no app yet). See [`SECURITY.md`](SECURITY.md). |
| NFR-9 | **Portability of data model.** Data structures defined in [`DATA_MODEL.md`](DATA_MODEL.md) must be reusable, unmodified in concept, by the future controller application. |
| NFR-10 | **Documentation parity.** Any new capability added later must be reflected in these docs before or alongside the code (this repo's own convention). |

## Explicit Non-Goals for Phase 1

To keep scope honest, Phase 1 explicitly does **not** attempt to:
- Read live sensor values.
- Install or require anything on the phone beyond enabling USB debugging.
- Communicate over Wi-Fi or Bluetooth.
- Emulate any kind of input device.
- Support iOS or any non-Android device.
