# Troubleshooting

Common problems and how to diagnose them, organized so each entry stands alone.

| Problem | Likely Cause | Diagnosis / Fix |
|---|---|---|
| **`'adb' is not recognized as an internal or external command`** | Platform Tools not installed, or not added to `PATH` | Download [Android SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools), extract it, add the folder to your Windows `PATH`, restart the terminal, verify with `adb version` |
| **Device shows `unauthorized`** | The "Allow USB debugging?" prompt on the phone hasn't been accepted, or a previous authorization was revoked | Unlock the phone and look for the dialog; tap **Allow** (optionally "Always allow from this computer"). If it doesn't appear, go to Developer Options → **Revoke USB debugging authorizations**, then unplug/replug |
| **Device doesn't appear in `adb devices` at all** | USB debugging disabled, charge-only cable, faulty cable/port, missing Windows driver | Confirm the Developer Options toggle is on; try a known-good data cable and a different USB port; install the manufacturer's USB driver (or Google's universal ADB driver); run `adb kill-server && adb start-server` and retry |
| **USB debugging is disabled and the toggle is greyed out or missing** | Developer Options itself not unlocked | Settings → About phone → tap **Build number** 7 times, then return to Settings → System → Developer options |
| **Windows doesn't recognize the phone (Device Manager shows an unknown device)** | Missing or incorrect USB driver | Check Device Manager for a device with a warning icon; install the OEM's official USB driver, or Google's universal ADB driver; reinstall via Device Manager → Update driver |
| **`error: more than one device/emulator`** | Multiple devices/emulators connected simultaneously | Specify the target explicitly with `adb -s <serial> ...`, or disconnect the extra device(s) |
| **Device disconnects mid-session** | Loose cable, aggressive USB power-saving settings, some OEMs disable debugging when the screen locks | Use a shorter/higher-quality cable, keep the phone unlocked during testing, check Windows USB power management settings for that port |
| **A sensor shows as `✗ Not available`** | The device's hardware genuinely doesn't include that sensor (e.g. no barometer) | Expected behavior, not a bug — cross-check with a trusted third-party sensor-listing app on the phone if in doubt |
| **`dumpsys sensorservice` returns nothing useful, or an unexpected format** | Command/format not supported the same way on this Android version or OEM skin — `dumpsys sensorservice` is an internal diagnostic dump, not a stable public API | Mark as `NEEDS VERIFICATION`; run `adb shell dumpsys sensorservice` manually and inspect the raw output; adjust the parser defensively rather than assuming a fixed format (see [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md)) |
| **Sensor data (live values) unavailable through shell** | By design — ADB shell has no generic command to stream sensor values | Expected in Phase 1/2. Live values require the companion app (Phase 3+) — see [`SENSOR_DETECTION.md`](SENSOR_DETECTION.md#the-core-limitation-presence-vs-live-values) |
| **Permission-denied style output from a `dumpsys` call** | Some OEM builds or newer Android versions restrict certain `dumpsys` sections to system/root callers | Mark as `NEEDS VERIFICATION` for that device; the detector should degrade gracefully (partial result + warning) rather than crash — see [`TESTING.md`](TESTING.md#permission-tests) |

## General Diagnostic Habit

Whenever a `dumpsys` or `getprop` call behaves unexpectedly on a specific device, the fastest path is to run the exact `adb shell` command manually in a terminal and read the raw output directly — this immediately tells you whether the issue is device-side formatting/permissions (mark `NEEDS VERIFICATION` and adapt the parser) or a connection issue (see the ADB-specific rows above).
