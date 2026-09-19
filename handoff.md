# 🧭 GyroPad — Universal Project Handoff & State Guide

> **IMPORTANT INSTRUCTION FOR AI ASSISTANT:**  
> When the user starts a new conversation and asks you to read `handoff.md`, **read this entire file thoroughly**. It contains the complete ground-truth state of the project, all architectural and design decisions, working conventions, current status, and pending tasks.  
> **MANDATORY RULE:** Every time you make any change, bug fix, feature addition, or file modification in this repository, **you must update this `handoff.md` file by default** before finishing your response so the state stays synchronized for future sessions.

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

## 2. Current Status & Where We Left Off (As of Sept 20, 2026)

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
2. **Desktop Host (Python/Windows):**
   * Window title and argument parsers updated to "GyroPad Desktop Host".
   * Tilt throttle detection **completely removed** (games use their own triggers; tilt controls horizontal steering only).
   * **Critical Windows Mouse Freeze Fix:** Replaced untyped `ctypes.windll.user32.mouse_event` with typed `argtypes` (`DWORD, LONG, LONG, DWORD, c_size_t`) and clamped deltas to `[-60, 60]`. Physical keyboard/mouse never freeze or crash Windows LowLevelHooksTimeout.
   * Wi-Fi 4-digit PIN authentication field added to Tkinter GUI and CLI.
   * Dynamic Button Remapping Studio (`src/ui/mapping_utils.py` + `src/ui/gui.py`) with dropdown editor saving to `%APPDATA%\GyroPad\mapping.json`.
   * Bluetooth PAN transport flag added (`--bluetooth`) routing to `192.168.44.1:5050`. Setup guide created at `files/BLUETOOTH_SETUP.md`.
   * Standalone Windows executable built with PyInstaller: `Release/GyroPadHost-Windows.exe` (~13.6 MB).
   * **[Bug #1 Fixed]** `run_json()` no longer crashes — uses correct `Connection` fields `serial` and `established_at`.
   * **[Bug #2 Fixed]** CLI live mode `L. Thrott` row now displays `N/A (disabled)` instead of misleading `0.0` bar.
   * **[Bug #4 Fixed]** `adb.run_command()` now uses `shlex.split()` instead of `.split()` — handles paths and quoted args correctly.
   * **[Bug #6 Fixed]** `run_live_mode()` accepts a `profile` parameter and passes it to `InputMapper`. CLI tracks `current_profile` (default `"landscape"`).
   * **[Bug #7 Fixed]** `WifiTransport.list_devices()` uses `connect_ex` instead of `create_connection` — no longer floods the Flutter server with dropped TCP handshakes.
   * **[Bug #8 Fixed]** `mapping.json` is now stored at `%APPDATA%\GyroPad\mapping.json` via `_get_data_dir()` — survives PyInstaller packaging.
   * **[Bug #9 Fixed]** Absent-sensor placeholder names now generated directly from `TYPE_` constants via `_get_friendly_type_from_constant()`.
   * **[Bug #10 Fixed]** GUI validates PIN is exactly 4 numeric digits before sending `AUTH`.
   * **[Bug #12 Fixed]** `WifiTransport` accepts a `transport_name` parameter. `main.py` passes `transport_name="Bluetooth"` for `--bluetooth` mode. `detector.py` reads this attribute to correctly label transport type.
   * **[CLI WinError 10053 Fixed]** `cli.py` formerly opened the TCP socket and then blocked on `input("Enter PIN: ")`. Because entering the PIN took several seconds, the idle connection was aborted by Android/ADB (`[WinError 10053]`). Resolved by prompting for the PIN before connecting, then establishing socket and sending `AUTH` immediately within <1ms.
3. **Official Website (`website/`):**
   * Full 8-section responsive landing page constructed using Figma design specifications (Roboto Flex typography, `#00439C` blue theme).
   * Sections: Sticky Glass Navbar, Hero with simulated HUD horizon tilt, Features Bento Grid with mobile scroll-snap carousel, 3-Step Setup, Interactive Tabbed App Showcase, System Requirements, Download Cards with mobile tab switcher, and FAQ Accordion.
   * Animations: 3D card mouse tilt, button ripples, magnetic pull, typewriter hero subtitle, live gyro horizon bar, floating mockup, and staggered scroll reveals.
   * Vercel deployment configs created: root `vercel.json` (maps `outputDirectory: "website"`) and `website/vercel.json` (security headers & caching).
   * Direct download buttons pointed to GitHub raw stream URLs:
     * Android APK: `https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk`
     * Windows EXE: `https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPadHost-Windows.exe`
4. **Agentation Visual Annotation Setup (`website/`):**
   * Installed `agentation` (-D), `react`, `react-dom`, and `esbuild` in `website/package.json`.
   * Created entry point `website/agentation-init.jsx` mounting `<Agentation copyToClipboard={true} />` into `#agentation-root`.
   * Bundled into standalone minified `website/agentation.js` (615 KB) using esbuild with production env define.
   * Injected `<script defer src="agentation.js"></script>` into `website/index.html`.
   * When opening the website (e.g. `http://localhost:8080`), a floating toolbar appears in the bottom-right corner allowing the user to click any element, type notes/feedback, and copy structured markdown with CSS selectors for AI agents.
   * Added `.gitignore` to prevent `node_modules/` from being tracked.
5. **GitHub Binary Download Clarification:**
   * When opening `/blob/main/Release/GyroPad-Android.apk` in a web browser, GitHub displays *"View raw (Sorry about that, but we can't show files that are this big right now.)"* because GitHub's code viewer cannot preview 42MB binary files in the browser.
   * Clicking **"View raw"** or the download button downloads the file normally.
   * The website download links use GitHub's direct `/raw/` endpoints, which bypass the preview page and immediately trigger file download.
6. **Full Bug Audit Resolved (Sept 20, 2026):**
   * All 14 bugs from `BUGS_AND_ISSUES.md` (commit `06a6416` audit) have been fixed and committed.
   * See bug fix details in each section above.

### 📌 Current State & Next Steps:
* [x] **Git Repository Synced:** All 14 bug fixes committed to `main`. `build/`, `dist/`, and PyInstaller artifacts removed from git tracking and added to `.gitignore`.
* [x] **Tag v1.0.0:** Tag fetched and verified from remote repository.
* [x] **Mapping storage:** Custom button mappings now persisted at `%APPDATA%\GyroPad\mapping.json` — survives updates and packaging.
* [x] **Rebuilt Release APK:** Built with all Flutter bug fixes applied and installed directly onto connected Vivo phone via ADB (`Release/GyroPad-Android.apk`).
* [x] **Rebuilt Windows EXE:** Built with PyInstaller with graceful ViGEmBus fallback (`Release/GyroPadHost-Windows.exe`).
* [ ] Push to GitHub (`git push origin main`) and optionally attach release assets to `v1.0.0`.
* [ ] Deploy to Vercel by importing `Rushabh1697/controller-app` on [vercel.com](https://vercel.com). Root `vercel.json` will automatically publish `website/`.
* [ ] Complete end-to-end streaming test with phone unlocked and PIN entered.

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
   - Bluetooth: Connects to `192.168.44.1:5050` with `--bluetooth`.
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
* **Tilt Steering:** `InputMapper.process()` uses phone accelerometer `accel[0]` for horizontal steering (`st`). Left joystick overrides tilt if `abs(lx) > 0.01` or `abs(ly) > 0.01`.
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
