# 🧭 GyroPad — Universal Project Handoff & State Guide

> **IMPORTANT INSTRUCTION FOR AI ASSISTANT:**  
> When the user starts a new conversation and asks you to read `handoff.md`, **read this entire file thoroughly**. It contains the complete ground-truth state of the project, all architectural and design decisions, working conventions, current status, and pending tasks.  
> **MANDATORY RULE:** Every time you make any change, bug fix, feature addition, or file modification in this repository, **you must update both `handoff.md` and `SETUP_GUIDE.md` by default** before finishing your response so the state and user guides stay synchronized for future sessions.

---

## 1. Project Overview & Repository Identity

* **Project Name:** **GyroPad** (formerly Controller-app / Companion App)
* **GitHub Repository:** [`https://github.com/Rushabh1697/controller-app`](https://github.com/Rushabh1697/controller-app)
* **Purpose:** Turns any modern Android smartphone into a high-performance virtual Xbox 360 controller for Windows 10/11 PC.
* **Key Capabilities:**
  * Real-time 6-axis Gyro tilt-steering (for racing/sim games)
  * Dual virtual analog thumbsticks & full console layout (D-Pad, Cross/Circle/Square/Triangle, L1/R1, L2/R2 analog triggers)
  * Integrated PC Trackpad with mouse emulation for menu & desktop navigation
  * Tri-Mode Connectivity: USB (ADB sub-2ms), Wi-Fi (local network), Bluetooth (PAN tethering)
  * Dynamic 4-Digit Security PIN generated per session on the phone
  * In-App Button Remapping GUI saved to `mapping.json`
  * Official animated, responsive landing & download website with Vercel deployment support
  * **Agentation Integration:** Visual UI feedback & annotation toolbar embedded directly on the website for AI pair programming.

---

## 2. Current Status & Where We Left Off (As of Sept 21, 2026)

### ✅ Completed & Fully Operational:
1. **Companion App (Flutter/Android):**
   * Package name updated to `gyropad`.
   * Custom controller icon registered in `pubspec.yaml` and generated via `flutter_launcher_icons`.
   * PS button renamed to **"GP"** button in HUD and maps to both `'GP'` and `'PS'`.
   * Generates a 4-digit PIN on launch, starts TCP server on port 5050, requires `AUTH <PIN>\n` before streaming.
   * Touchpad delta accumulation bug fixed (`+= details.delta.dx`).
   * Production Release APK built: `Release/GyroPad-Android.apk` (~42.1 MB). Tested with `flutter analyze` (0 issues) and `flutter test` (all tests passed).
   * **[Bug #3 Fixed]** TCP stream is now line-buffered per client using `StringBuffer` — AUTH no longer fails when packets arrive fragmented over Wi-Fi or Bluetooth.
   * **[Bug #5 Fixed]** Touchpad delta now resets to `0.0` when all clients disconnect — prevents wild mouse jump on first connection.
   * **[Bug #11 Fixed]** Sensor events (`_accelSub`, `_gyroSub`) no longer call `setState` — eliminates 100 Hz widget rebuilds and jank.
   * **[Bug #13 Fixed]** `_clients.remove()` in `onDone`/`onError` is now guarded with `.contains()` to avoid unnecessary `setState`.
   * **[Android Release INTERNET Permission Fixed]** Added `INTERNET`, `ACCESS_NETWORK_STATE`, `ACCESS_WIFI_STATE`, and `HIGH_SAMPLING_RATE_SENSORS` to main manifest.
   * **[FULL_AUDIT Bug #5 Fixed]** `ServerSocket.bind()` now uses `shared: true` (SO_REUSEADDR) — prevents `EADDRINUSE` on hot-restart.
   * **[FULL_AUDIT Bug #2/#11 Fixed]** Single-client enforcement: new connections are rejected with `BUSY` if `_clients.isNotEmpty`.
   * **[FULL_AUDIT Bug #8 Fixed]** Failed auth attempt counter per IP with 5-attempt lockout and 500ms artificial delay on AUTH_FAIL.
   * **[FULL_AUDIT Bug #15 Fixed]** L3 and R3 thumbsticks wrapped in `RepaintBoundary` — limits rebuild propagation from touch events.
   * **[FULL_AUDIT Bug #18 Fixed]** `applicationId` and `namespace` changed from `com.example.companion_app` to `com.gyropad.app` in `build.gradle.kts`.
2. **Desktop Host (Python/Windows):**
   * Window title and argument parsers updated to "GyroPad Desktop Host".
   * Tilt throttle detection **completely removed** (games use their own triggers; tilt controls horizontal steering only).
   * **Critical Windows Mouse Freeze Fix:** Replaced untyped `ctypes.windll.user32.mouse_event` with typed `argtypes` and clamped deltas to `[-60, 60]`.
   * Wi-Fi 4-digit PIN authentication field added to Tkinter GUI and CLI.
   * Dynamic Button Remapping Studio (`src/ui/mapping_utils.py` + `src/ui/gui.py`) with dropdown editor saving to `%APPDATA%\GyroPad\mapping.json`.
   * Bluetooth PAN transport flag added (`--bluetooth`) routing to auto-detected phone IP.
   * Standalone Windows executable built with PyInstaller: `Release/GyroPadHost-Windows.exe` (~13.6 MB).
   * **[FULL_AUDIT Bug #3 Fixed]** `stream_loop` inner `except Exception: pass` replaced with specific handlers — `BlockingIOError` silenced, unexpected exceptions now logged.
   * **[FULL_AUDIT Bug #6 Fixed]** `list_devices()` now uses `sock.settimeout(0.6) + sock.connect_ex()` instead of `create_connection()` — no more full TCP handshakes flooding the phone app.
   * **[FULL_AUDIT Bug #7 Fixed]** `_test_pad` properly released via `reset()+update()` before `None` assignment — both in stream_loop start and in `finally` block.
   * **[FULL_AUDIT Bug #10 Fixed]** `on_transport_change()` guarded — rejects change and reverts combobox if `self.streaming == True`.
   * **[FULL_AUDIT Bug #12 Fixed]** `os.devnull` handles now registered with `atexit` for proper close on process exit.
   * **[FULL_AUDIT Bug #13 Fixed]** CLI `run_live_mode()` now enables Windows ANSI, checks terminal size (≥15 rows) before using fixed cursor row.
   * **[FULL_AUDIT Bug #14 Fixed]** `AxisMapper.history` deque cleared in `set_calibration()` — no more stale-sample drift right after calibration.
   * **[FULL_AUDIT Bug #17 Fixed]** `save_mapping()` returns `bool` and wraps in `try/except OSError`; GUI shows error message on failure.
   * **[FREEZE FIX]** `refresh_device()` now spawns a background thread for `detect()` — UI never blocks during 0.6s network probe.
3. **Official Website (`website/`):**
   * Full 8-section responsive landing page constructed.
   * Direct download buttons pointed to GitHub raw stream URLs (verified correct `/raw/` URLs — not `/blob/`).
   * **[FULL_AUDIT Bug #16 Fixed]** `app.js` hamburger menu event listeners wrapped in `if (toggle && navLinks)` null guard.
   * **[FULL_AUDIT Bug #9 Fixed]** `website/assets/GyroPad-Android.apk` and `website/assets/GyroPadHost-Windows.exe` removed from git index (`git rm --cached`). `.gitignore` blocks them in future.
4. **Repository Hygiene:**
   * **[FULL_AUDIT Bug #20 Fixed]** `.gitignore` updated with entries for `.idea/`, `*.iml`, `sensor_dump*.txt`, `GyroPadHost.spec` (duplicate), `website/assets/*.apk`, `website/assets/*.exe`. All tracked junk files removed from git index via `git rm --cached`.
   * **[FULL_AUDIT Bug #19 Fixed]** `handoff.md` Section 4C corrected: landscape mode uses `accel[1]` (Y axis), portrait uses `accel[0]` (X axis).

### 📌 Current State & Next Steps:
* [x] **All FULL_AUDIT.md bugs fixed** (excluding Bug #4 agentation.js — intentionally skipped per user instruction).
* [x] **Git Repository Synced:** All 14 previous bug fixes + all FULL_AUDIT bugs committed to `main`.
* [x] **Mapping storage:** Custom button mappings persisted at `%APPDATA%\GyroPad\mapping.json`.
* [x] **Rebuilt Release APK:** Built with all Flutter bug fixes applied (`Release/GyroPad-Android.apk`).
* [x] **Rebuilt Windows EXE (GUI-first):** Built with PyInstaller (`Release/GyroPadHost-Windows.exe`).
* [x] **Universal Setup Guide:** [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) covers full step-by-step setup for both PC & mobile across USB, Bluetooth PAN, and Wi-Fi modes, controller emulation selection, in-game bindings (F1 2022), and troubleshooting. Must be maintained on every change by default.
* [x] **Bluetooth PAN Connection Verified:** Verified raw socket connection to phone gateway (`10.18.154.11:5050`) with 0 errors.
* [x] **ViGEmBus & PlayStation Verification:** Virtual Sony DualShock 4 / PS5 controller confirmed active (`0x054C:0x05C4`).
* [ ] Push to GitHub (`git push origin main`) and optionally attach release assets to `v1.0.0`.
* [ ] Deploy to Vercel by importing `Rushabh1697/controller-app` on [vercel.com](https://vercel.com). Root `vercel.json` will automatically publish `website/`.
* [ ] Run desktop host GUI, enter 4-digit PIN, and test steering & triggers live in F1 2022.

---

## 3. Directory & File Structure

```
Controller-app/
├── companion_app/                  # Flutter Android App
│   ├── android/                    # Android platform files, manifest (android:label="GyroPad")
│   ├── assets/images/logo.png      # App logo asset
│   ├── lib/main.dart               # UI, Virtual Controller HUD, TCP Server on 5050, PIN Auth
│   ├── test/widget_test.dart       # Flutter unit/widget tests
│   └── pubspec.yaml                # Package definition (name: gyropad, flutter_launcher_icons)
│
├── src/                            # Python Backend Host
│   ├── service/
│   │   └── mapper.py               # InputMapper: Gyro tilt steering only (throttle removed)
│   ├── transport/
│   │   ├── interface.py            # TransportInterface base class
│   │   ├── adb.py                  # AdbTransport: auto adb forward tcp:5050 tcp:5050
│   │   └── wifi.py                 # WifiTransport: connects to phone IP on 5050
│   └── ui/
│       ├── gui.py                  # Tkinter GUI (PIN entry, Start/Stop, Edit Mapping modal)
│       ├── cli.py                  # Interactive terminal CLI mode
│       ├── mapping_utils.py        # Xbox 360 button strings, load_mapping, save_mapping
│       └── mapping.json            # User custom button mapping config
│
├── website/                        # Modern Responsive Landing Page
│   ├── assets/
│   │   ├── logo.png                # Brand logo
│   │   ├── GyroPad-Android.apk     # Local copy of APK (~42 MB)
│   │   └── GyroPadHost-Windows.exe # Local copy of Windows EXE (~13.6 MB)
│   ├── index.html                  # Single-page semantic HTML with 8 sections + Agentation script
│   ├── style.css                   # Responsive CSS design system (mobile carousel, desktop grid)
│   ├── app.js                      # Micro-interactions, animations, 3D tilt, tabs, scrollspy
│   ├── agentation-init.jsx         # Agentation toolbar React mount script
│   ├── agentation.js               # Bundled standalone Agentation widget
│   ├── package.json                # npm configuration with build script
│   ├── vercel.json                 # Vercel security headers and caching configuration
│   └── .gitignore                  # Ignores website/node_modules/
│
├── Release/                        # Production Binaries
│   ├── GyroPad-Android.apk         # Compiled release APK
│   └── GyroPadHost-Windows.exe     # Standalone PyInstaller onefile executable
│
├── files/
│   └── BLUETOOTH_SETUP.md          # Guide for Bluetooth PAN tethering connection
│
├── main.py                         # Python entry point (flags: --cli, --ip, --port, --bluetooth)
├── vercel.json                     # Root Vercel config mapping output to website/
├── .gitignore                      # Root gitignore
├── README.md                       # Public GitHub README
├── SETUP_GUIDE.md                  # Comprehensive step-by-step PC & mobile setup guide
└── handoff.md                      # This universal project state & continuation guide
```

---

## 4. Key Architectural & Protocol Details

### A. Communication Handshake
1. Android app starts TCP Server on `0.0.0.0:5050`.
2. A random 4-digit PIN (e.g. `4829`) is generated and shown on the phone screen.
3. Python host connects via TCP:
   - USB ADB: Connects to `127.0.0.1:5050` after running `adb forward tcp:5050 tcp:5050`.
   - Wi-Fi: Connects to `<Phone_LAN_IP>:5050`.
   - Bluetooth PAN: Connects to the auto-detected phone gateway IP (e.g. `10.18.154.11:5050`) via `get_bluetooth_pan_ip()`. Falls back to `192.168.44.1` only if detection fails.
4. Host immediately sends: `AUTH <PIN>\n`.
5. Android app validates PIN:
   - If correct: responds `AUTH_OK\n` and accepts connection.
   - If wrong: responds `AUTH_FAIL\n` and closes socket.
6. Once authenticated, host sends `ping\n` at ~50 Hz, and app replies with JSON sensor telemetry.

### B. Telemetry Payload Schema
```json
{
  "timestamp_ms": 12345678,
  "accel": [x, y, z],
  "gyro": [x, y, z],
  "buttons": {
    "Cross": true,
    "Circle": false,
    "Square": false,
    "Triangle": false,
    "L1": false, "R1": false,
    "L2": false, "R2": false,
    "L3": false, "R3": false,
    "Dpad_Up": false, "Dpad_Down": false, "Dpad_Left": false, "Dpad_Right": false,
    "Options": false, "Share": false,
    "Touchpad": false,
    "GP": false, "PS": false
  },
  "joystick_left": {"x": 0.0, "y": 0.0},
  "joystick_right": {"x": 0.0, "y": 0.0},
  "touchpad_delta": {"x": 0.0, "y": 0.0}
}
```

### C. Input Mapping Logic
* **Tilt Steering:** `InputMapper.process()` maps phone accelerometer to horizontal steering (`st`). Axis used depends on hold orientation:
  - **Landscape mode** (racing/steering wheel): uses `accel[1]` (Y axis) — tilting like a steering wheel rotates the phone around its Y axis.
  - **Portrait mode** (vertical hold): uses `accel[0]` (X axis) — tilting left/right rotates around X.
  Left joystick overrides tilt steering if `abs(lx) > 0.01` or `abs(ly) > 0.01`.

* **Tilt Throttle:** Completely disabled (`th = 0.0`). Acceleration/braking is left entirely to game controls or L2/R2 buttons.
* **Trackpad Mouse:** `touchpad_delta` is clamped to `[-60, 60]` and fed to Windows `user32.mouse_event` with strict 64-bit ctypes `argtypes` so physical input devices never freeze.
* **Button Remapping:** Iterates dynamically over `src/ui/mapping.json` (or default mapping) mapping Flutter keys to `vgamepad` Xbox 360 buttons.

---

## 5. How to Run, Test, and Build

### Running the Python Host
```powershell
# Default Tkinter GUI mode:
python main.py

# Terminal CLI mode:
python main.py --cli

# Bluetooth PAN mode:
python main.py --bluetooth
```

### Building Host Executable (PyInstaller)
```powershell
python -m PyInstaller --onefile --name GyroPadHost main.py
# Output: dist/GyroPadHost.exe (copied to Release/GyroPadHost-Windows.exe)
```

### Building Android Companion App (Flutter)
```powershell
cd companion_app
flutter build apk --release
# Output: companion_app/build/app/outputs/flutter-apk/app-release.apk (copied to Release/GyroPad-Android.apk)
```

### Running the Website & Agentation
```powershell
# Rebuild Agentation bundle if modified:
cd website
npm run build:agentation

# Preview website with Agentation toolbar:
cd ..
python -m http.server 8080 --directory website
# Open: http://localhost:8080
```

### Deploying to Vercel
1. Commit and push changes:
   ```powershell
   git add .
   git commit -m "feat: website, agentation toolbar, and updated handoff"
   git push origin main
   ```
2. Open [Vercel](https://vercel.com), import `controller-app` repository. Root `vercel.json` will automatically route the deployment to the `website/` directory.

---

## 6. GitHub Download Problem & Direct Link Solution

### Why the GitHub screenshot showed the warning:
When navigating to `https://github.com/Rushabh1697/controller-app/blob/main/Release/GyroPad-Android.apk`, GitHub opens its web code viewer (`/blob/`). Since GitHub's web viewer cannot render binary files and has a display size limit, it displays:
> *"View raw (Sorry about that, but we can't show files that are this big right now.)"*

### How it is resolved:
1. **To download directly in a browser without that screen:**
   Use GitHub's `/raw/` link instead of `/blob/`:
   * **Android APK:** [`https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk`](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk)
   * **Windows EXE:** [`https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPadHost-Windows.exe`](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPadHost-Windows.exe)
   *(Both return HTTP 200 OK and download the file immediately).*
2. The download buttons on the GyroPad website have been configured to use these direct `/raw/` URLs.

---

## 7. Instructions for Future Assistant Sessions
* **When reading this file:** Treat this file as the authoritative record of architecture, decisions, and progress.
* **When making changes:** Always update section **2 (Current Status & Where We Left Off)** and any relevant implementation sections whenever new code, features, or fixes are implemented.
* **Synchronize Setup Guide:** Always update [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) whenever installation steps, flags, UI controls, or driver procedures change, so user-facing documentation stays 100% accurate.

---

## 8. Planned Future Features (Agreed Upon)

1. **Auto-Reconnect on Drop**: Implement socket retry logic to silently reconnect if the connection drops, without breaking the game session.
2. **Connection History / Last Used IP**: Save the last successfully connected IP to a tiny config file to skip manual IP entry in Wi-Fi mode.
3. **Battery % Notification**: Send battery telemetry from the phone and trigger native Windows toast notifications (at 20%, 10%, 5%) so the user knows to charge.
4. **QR Code Pairing**: Display a QR code on the PC that the phone can scan to instantly pair (auto-fills IP and PIN).
5. **Vibration Feedback Toggle**: Add an ON/OFF switch in the Android app settings to disable rumble for battery saving.
6. **Multiple Controller Skin Themes**: Provide different visual layouts (PS5, Xbox, Switch) and allow custom image uploads for the UI.
7. **Per-Game Profile Auto-Switching**: Background Windows monitor to automatically swap control profiles depending on the focused game window.
8. **Profile Import / Export**: Save and load .json profiles for sharing game configurations.


## 9. Recent Fixes (September 21, 2026)
- **UI Freeze Fix:** Moved 
efresh_device() network probing to a background 	hreading.Thread so the main Tkinter thread no longer blocks for 0.6s every 2s.
- **Ghost Controller Fix:** Ensured _test_pad.reset() is called before destruction to cleanly unregister the device from ViGEmBus.
- **Joystick L3/R3 Inversion Fix:** Removed the manual - sign from the Y-axis processing in gui.py and cli.py to match Flutter coordinate space.
- **Package Name Fix:** Properly refactored the Android Kotlin folder structure from com/example/companion_app to com/gyropad/app to prevent instant ClassNotFoundException crashes on launch.
