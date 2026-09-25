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

## 2. Current Status & Where We Left Off
Currently, all major milestones including v1.3.0 features have been completed.
The Python host (`GyroPadHost-Windows.exe`) is bundled as a single executable without console popups, including hidden dependencies for `qrcode` and `vgamepad`. The Flutter Companion App (`GyroPad-Android.apk`) features multiple skin themes (PS5, Xbox, Switch, Custom). The Xbox mapping duplicate cancellation bug has been resolved.

The app supports:
- Wi-Fi and Bluetooth PAN connectivity
- Zero-deadzone raw 1:1 steering with Persistent Calibration Taring
- Per-Game Profile Auto-Switching & Config Import/Export
- Multiple Controller Skin Themes (PS5, Xbox, Switch, Custom Image)
- Hold & Ramp Analog Triggers for L2/R2
- Touchpad mouse emulation
- Battery Toast Notifications on PC
- Physical haptic rumble feedback

**Everything is committed and tagged as `v1.3.0` on GitHub.**

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

## 8. Planned Future Features

*(All original handoff features for v1.3.0 have been completed!)*

## 9. Recent Fixes & Additions (v1.2.0 Release - September 22, 2026)
- **QR Code Pairing (PC Side Completed)**: Added a "📱 QR Pair" button to the PC app that generates a QR code and starts a temporary pairing server (`port 5051`).
- **Battery % Notification (PC Side Completed)**: The PC now parses incoming telemetry for a `battery` key and triggers native Windows Toast Notifications when it drops below 20%, 10%, and 5%.
- **Vibration/Haptic Feedback (PC Side Completed)**: Wired into `vgamepad`'s native rumble callbacks. PC captures motor intensity and forwards a TCP `VIB:{duration}\n` packet to the phone.
- **Hold & Ramp Analog Triggers:** Added time-based ramping logic for L2 and R2 in `gui.py`. Added a Settings toggle in the Flutter app to simulate smooth analog trigger pulls over 0.5 seconds instead of instant digital 100% presses.
- **Touchpad Tap Reliability Fix**: Upgraded the Touchpad hit detection in the Flutter app to use a raw pointer `Listener`. 
- **Auto-Reconnect on Drop**: Implemented a resilient outer `while` loop in `gui.py`'s `stream_loop()`.
- **Connection History (Last Used IP)**: The PC host now automatically saves the last successfully used Wi-Fi IP in `config.json`.
- **Bluetooth PAN IP & "Disconnected" UX Fixes:** Improved `ipconfig` parsing and added explicit Windows Settings instructions for PAN tethering.

## 10. Recent Fixes & Additions (v1.3.0 - September 23, 2026)
- **Multiple Controller Skin Themes (Flutter App)**: Added a dynamic Theme Manager supporting PS5 (Light), Xbox (Dark Green), and Nintendo Switch (Neon Red/Blue) layouts. Also added a Custom Theme option that allows users to pick an image from their gallery as the background using `image_picker`.
- **Xbox Duplicate Mapping Bug Fix**: Rewrote the digital button aggregator for `vgamepad` in the Python Host to guarantee that duplicate physical mappings (e.g., PS and GP both mapped to Guide) do not accidentally cancel each other out in the same frame.
- **QR Code & PyInstaller Fixes**: Bundled `qrcode` and `vigemclient.dll` directly into the `--noconsole` executable.
- **Deadzone Removal & Persistent Hardware Calibration**: Completely removed all Deadzone and Anti-Deadzone algorithms from `mapper.py` and the UI to provide raw 1:1 steering input. Hardware sensor biases and resting phone tilts are now mathematically eliminated by pressing the "Calibrate Neutral" button, which permanently saves your desk's perfect `0.000` hardware offset directly into your active Game Profile.
- **Per-Game Profile Auto-Switching (PC Side Completed)**: Integrated Windows active window detection using `ctypes`. The PC host now monitors the focused `.exe` and automatically swaps to the corresponding controller profile.
- **Profile Import / Export (PC Side Completed)**: Added a Manage Profiles GUI in Tkinter. Users can create, delete, import, and export `.json` mapping profiles.
- **Unified Profile Storage**: Migrated `mapping.json` to a robust `profiles.json` which supports multiple profiles, executable names, and auto-switching toggles while remaining backward compatible.

## 11. Recent Fixes & Additions (v1.3.1 - September 23, 2026)
- **Vibration/Haptic Feedback (Flutter App Completed)**: Added parsing for the `VIB:{duration}` TCP packets from the PC host and wired it up using the Flutter `vibration` package to trigger physical device haptics.
- **Controller Settings Overflow Fix**: Wrapped the Controller Settings modal in a `SingleChildScrollView` to fix the bottom overflow rendering error that occurred in landscape orientation.
- **Custom Theme Glassmorphism**: Modified the Flutter widget button builders (Action buttons, D-Pad, Thumbsticks, Shoulders, Touchpad) to apply semi-transparent colors and borders when `_activeTheme == 'custom'`. This allows custom background images to bleed through the UI, creating a cohesive "painted controller skin" aesthetic instead of showing solid white/grey buttons.
- **Dynamic Background Contrast & Reset**: Integrated `palette_generator` to calculate the luminance of the custom background image. The UI now intelligently flips all glassmorphism buttons, borders, and text to a dark/black glassy style if the image is bright, ensuring the UI is never camouflaged or cut off. Also added a "Remove Background" option in Settings to quickly revert to the default gradient. Applied this adaptive glassmorphism theme to the utility buttons at the bottom (GP/PS and Mute) as well.
- **L3/R3 Thumbstick Tap Fix**: Rewrote the gesture recognizers for the thumbsticks. Replaced raw `onTapDown` events with `onTap` (which triggers a guaranteed 150ms press pulse so the PC host polling doesn't miss quick taps) and `onLongPressStart/End` for holding. This guarantees that dragging the joystick no longer triggers accidental L3/R3 clicks.
- **Python Backend Stability Fixes**: 
  - Fixed a `ZeroDivisionError` in `mapper.py`'s `AxisMapper.process()` that could cause the entire PC host thread to crash if `max_val` was ever initialized as `0.0`.
  - Wrapped `ctypes.windll` imports inside `window_utils.py` with `sys.platform == 'win32'` checks. This prevents catastrophic `AttributeError` crashes on launch for macOS/Linux users trying to run the Python host script.
  - **Continuous Vibration Bug Fix**: Fixed a bug where games that send rapid, continuous rumble state updates (e.g., racing games during braking/acceleration) would flood the TCP socket and cause the Flutter app to get stuck vibrating continuously. 
    - Added a 250ms rate-limiter to the PC host `rumble_cb`.
    - Added a **"Block continuous engine/brake vibrations"** checkbox to the Desktop GUI. When checked (default), it explicitly ignores the `small_motor` (which racing games use for high-frequency engine/ABS vibrations) to eliminate the annoying continuous buzz, while preserving heavy impacts.
    - Added support for `VIB:0` to instantly call `Vibration.cancel()` on the Flutter side when the game explicitly stops the rumble.
    - Added a **"Haptic Feedback"** master toggle to the Flutter App's settings menu to completely disable all phone vibrations if desired.
    - **CRITICAL MULTI-THREADING FIX:** Discovered that the ViGEmBus driver fires the rumble callback on a separate C-level thread. Calling `s.sendall()` from this thread onto a non-blocking Python socket was randomly raising `BlockingIOError` and silently swallowing/dropping vibration packets into the void. Refactored the callback to use a thread-safe `pending_vib_duration` queue so the main polling thread safely dispatches all vibration network packets.
