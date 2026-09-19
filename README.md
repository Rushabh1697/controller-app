<div align="center">

<img src="companion_app/assets/images/logo.png" width="120" alt="GyroPad Logo"/>

# GyroPad

**Turn your Android phone into a wireless game controller — instantly.**

[![Release](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](./Release)
[![Platform](https://img.shields.io/badge/platform-Windows-0078D4?style=flat-square&logo=windows)](./Release/GyroPadHost-Windows.exe)
[![Android](https://img.shields.io/badge/android-6.0%2B-3DDC84?style=flat-square&logo=android)](./Release/GyroPad-Android.apk)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)

[**⬇️ Download**](#download) · [**🚀 Quick Start**](#quick-start) · [**🎮 Features**](#features) · [**📡 Connection Modes**](#connection-modes) · [**🛠️ Build from Source**](#build-from-source)

</div>

---

## What is GyroPad?

GyroPad transforms your Android phone into a fully functional wireless game controller for your Windows PC. No cables, no extra hardware, no expensive accessories — just your phone and GyroPad.

Your phone's gyroscope becomes a precision aim sensor. The touchscreen becomes a complete console-style button layout. Tilt the phone like a steering wheel for racing games. The PC sees a real Xbox-compatible gamepad — works with any game that supports a controller, no configuration required on the game side.

```
  📱 Phone                         💻 PC
  ┌─────────────────┐              ┌──────────────────────┐
  │  GyroPad App    │──Wi-Fi/BT/──▶│  GyroPadHost.exe     │
  │                 │    USB       │                      │
  │  [gyroscope]    │              │  Virtual Xbox 360    │
  │  [touchscreen]  │              │  Controller          │
  │  [buttons]      │              │                      │
  └─────────────────┘              └──────────┬───────────┘
                                              │
                                        🎮 Your Game
```

---

## Features

### 🎮 Full Console-Style Button Layout
A complete DualSense-inspired controller layout rendered on your phone's screen — D-pad, face buttons (△ ○ × □), L1/L2/R1/R2 shoulder buttons, dual thumbsticks with L3/R3 click, a touchpad, Share, Options, and the GP (home) button. Every button is mapped to a standard Xbox-compatible input that Windows games recognize natively.

### 🌀 Gyroscope Input
Your phone's gyroscope drives real-time motion input. Use it for gyro aiming in shooters, or tilt-steering in racing games. Configurable sensitivity, dead zones, and smoothing — all adjustable without restarting.

### 🏎️ Racing / Landscape Mode
Hold your phone horizontally like a steering wheel. GyroPad's landscape mode maps the tilt axis directly to the left stick, giving you intuitive analogue steering for racing games like F1. Portrait mode is also supported for a more traditional held-upright position.

### 🖱️ Touchpad as Mouse
Slide your finger across the touchpad panel to move the PC mouse cursor. Useful for navigating game menus without switching away from the controller.

### 🔀 Custom Button Mapping
Remap any phone button to any Xbox controller input via the built-in mapping editor. Reassign face buttons, triggers, shoulders, and more — saved to a persistent profile so your layout survives restarts.

### 🔒 PIN-Protected Pairing
A unique 4-digit PIN is generated every time the GyroPad app starts. Only a host that enters the correct PIN can connect — no open, unsecured ports.

### 📡 Three Connection Modes
- **Wi-Fi** — lowest latency on a local network
- **Bluetooth** — wireless without needing shared Wi-Fi (via Bluetooth PAN tethering)
- **USB / ADB** — wired, fastest, works without any network

---

## Download

No account required. Click the links below to download directly.

| File | Platform | Size |
|------|----------|------|
| [**GyroPad-Android.apk**](./Release/GyroPad-Android.apk) | Android 6.0+ | ~42 MB |
| [**GyroPadHost-Windows.exe**](./Release/GyroPadHost-Windows.exe) | Windows 10/11 | ~13 MB |

> **Android:** You may need to allow "Install from unknown sources" in your phone's settings since this APK is not from the Play Store. Go to **Settings → Apps → Special app access → Install unknown apps** and allow your browser or file manager.

---

## Quick Start

### Prerequisites

Before you begin, make sure you have:

- A Windows 10 or 11 PC
- An Android phone (Android 6.0 / API 23 or higher)
- Both devices on the **same Wi-Fi network** (for Wi-Fi mode), or a USB cable (for USB mode)
- [ViGEmBus Driver](https://github.com/nefarius/ViGEmBus/releases) installed on Windows — this is what lets GyroPad create a virtual Xbox controller that games can see

> **ViGEmBus** is a free, open-source Windows driver. Download the latest `ViGEmBus_Setup_<version>.exe` from its releases page and run it once. GyroPad will not be able to emulate a controller without it.

---

### Step 1 — Install on Your Phone

1. Download **GyroPad-Android.apk** from the [Download](#download) section above.
2. Open the downloaded file on your phone. If prompted, allow installation from unknown sources.
3. Tap **Install** and then **Open**.
4. The app opens directly into the controller screen. You'll see a status indicator at the bottom left showing **DISCONNECTED (PIN: XXXX)** — note the 4-digit PIN.

> The PIN changes every time the app is launched. Have your phone open before starting the host.

---

### Step 2 — Run the Host on Your PC

1. Download **GyroPadHost-Windows.exe** from the [Download](#download) section above.
2. Double-click to run it. Windows Defender SmartScreen may show a warning — click **More info → Run anyway** (the app is not signed yet; source code is available here for review).
3. The GyroPad Host window opens.

**Choose your connection mode** and follow the matching section below.

---

### Wi-Fi Connection (Recommended)

Both devices must be on the same local network (same router/hotspot).

1. In the GyroPad Host window, enter your **phone's local IP address** in the IP field.
   - Find your phone's IP: **Settings → Wi-Fi → tap your network → IP address** (looks like `192.168.1.X`)
2. Enter the **4-digit PIN** shown on the phone screen.
3. Click **Start Controller**.
4. The phone's status indicator turns green: **CONNECTED**.

To run from the command line instead:
```
GyroPadHost-Windows.exe --wifi 192.168.1.42
```

---

### Bluetooth Connection

Use this if you don't have shared Wi-Fi (e.g. mobile data only).

1. **On your phone:** go to **Settings → Bluetooth** and pair your phone with your PC (standard Bluetooth pairing).
2. **On your phone:** go to **Settings → Network & internet → Hotspot & tethering** and turn on **Bluetooth tethering**.
3. **On your PC:** in the system tray, open Bluetooth settings and connect to your phone's Bluetooth network access point.
4. Run the host with the `--bluetooth` flag:
   ```
   GyroPadHost-Windows.exe --bluetooth
   ```
   Or with the GUI:
   ```
   GyroPadHost-Windows.exe --bluetooth --gui
   ```
5. Enter the PIN when prompted.

> Bluetooth tethering routes the controller data over a TCP socket via the Bluetooth network connection — no native RFCOMM required.

Full Bluetooth setup guide: [`files/BLUETOOTH_SETUP.md`](files/BLUETOOTH_SETUP.md)

---

### USB / ADB Connection

Wired mode. Lowest possible latency. Requires Android Developer Options.

1. **Enable Developer Options on your phone:**  
   Go to **Settings → About phone** and tap **Build number** 7 times. You'll see "Developer mode enabled."
2. **Enable USB Debugging:**  
   Go to **Settings → System → Developer options → USB debugging** and toggle it ON.
3. Install **ADB (Android Debug Bridge)** on your PC:
   - Download [Android SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools) and extract it.
   - Add the extracted folder to your Windows `PATH` environment variable.
4. Connect your phone to your PC with a **data-capable USB cable** (not a charge-only cable).
5. On your phone, accept the **"Allow USB debugging?"** prompt.
6. Verify the connection: open Command Prompt and run:
   ```
   adb devices
   ```
   Your phone should appear with state `device`.
7. Run the host normally (no extra flags needed for USB):
   ```
   GyroPadHost-Windows.exe
   ```

---

### Step 3 — Start Playing

Once connected:

- The phone's status indicator turns **green**.
- On Windows, open **Settings → Bluetooth & devices → Controllers** — you should see a new Xbox 360 controller listed.
- Open your game, go to its controller settings, and it should detect the gamepad automatically.
- For **racing games**: hold the phone horizontally (landscape) before connecting, select the **landscape** profile in the host, and calibrate neutral position once you're holding it comfortably.

---

## Connection Modes — At a Glance

| Mode | Setup Complexity | Latency | Requires |
|------|-----------------|---------|----------|
| Wi-Fi | Low | ~15–30 ms | Same network |
| Bluetooth | Medium | ~20–50 ms | BT pairing + tethering |
| USB / ADB | Medium (one-time) | ~5–15 ms | USB debugging |

---

## Profiles & Configuration

Open the GyroPad Host GUI (`--gui` flag) for access to:

- **Profile selector** — `landscape` (racing/horizontal), `portrait` (vertical), `standard`
- **Steering deadzone** — how much you can tilt before steering starts
- **Edit Mapping** — remap any button to any Xbox input
- **Calibrate Neutral** — zero the gyroscope/accelerometer at your current hold position
- **PIN entry field** — enter the PIN shown on the phone

To launch the GUI:
```
GyroPadHost-Windows.exe --gui
GyroPadHost-Windows.exe --gui --wifi 192.168.1.42
GyroPadHost-Windows.exe --gui --bluetooth
```

---

## Build from Source

### Phone App (Flutter)

**Requirements:** Flutter SDK 3.13+, Android Studio or VS Code with Flutter extension, Android device with USB debugging enabled.

```bash
# Clone the repo
git clone https://github.com/Rushabh1697/controller-app.git
cd controller-app/companion_app

# Install dependencies
flutter pub get

# Run on a connected device
flutter run

# Build a release APK
flutter build apk --release
# Output: build/app/outputs/flutter-apk/app-release.apk
```

### PC Host (Python)

**Requirements:** Python 3.10+, pip, ViGEmBus driver installed.

```bash
cd controller-app

# Install Python dependencies
pip install vgamepad

# Run in CLI mode
python main.py

# Run with GUI
python main.py --gui

# Run over Wi-Fi
python main.py --wifi 192.168.1.42

# Run over Bluetooth
python main.py --bluetooth

# Output JSON (for scripting / debugging)
python main.py --json
```

### Package the Host as a Standalone `.exe`

```bash
pip install pyinstaller
pyinstaller GyroPadHost.spec
# Output: dist/GyroPadHost.exe
```

---

## Project Structure

```
controller-app/
├── Release/                        # Pre-built distributable files
│   ├── GyroPad-Android.apk
│   └── GyroPadHost-Windows.exe
│
├── companion_app/                  # Flutter Android app (phone side)
│   ├── lib/main.dart               # Full controller UI + sensor server
│   └── assets/images/logo.png
│
├── src/                            # Python host (PC side)
│   ├── model/models.py             # Shared data structures
│   ├── service/
│   │   ├── detector.py             # Device detection orchestration
│   │   ├── mapper.py               # Gyro/accel → controller axis mapping
│   │   └── parser.py               # ADB sensor dump parser
│   ├── transport/
│   │   ├── interface.py            # Abstract transport contract
│   │   ├── adb.py                  # USB/ADB transport
│   │   └── wifi.py                 # Wi-Fi and Bluetooth PAN transport
│   └── ui/
│       ├── cli.py                  # Terminal interface + live mode
│       ├── gui.py                  # Tkinter desktop GUI
│       └── mapping_utils.py        # Button mapping load/save
│
├── files/                          # Design and architecture documentation
│   ├── BLUETOOTH_SETUP.md
│   ├── ARCHITECTURE.md
│   └── ...
│
├── main.py                         # Entry point
└── GyroPadHost.spec                # PyInstaller packaging spec
```

---

## Troubleshooting

**The app won't install on my phone**  
Enable "Install from unknown sources." On Android 8+: **Settings → Apps → ⋮ → Special app access → Install unknown apps** → allow your browser or Files app.

**Windows says the `.exe` is unsafe**  
The executable is not code-signed yet. Click **More info → Run anyway**. You can review the full source code in this repository.

**ViGEmBus not installed / controller not detected**  
Download and install [ViGEmBus](https://github.com/nefarius/ViGEmBus/releases) then restart your PC. Without it, GyroPad can receive input from the phone but cannot emit it to games.

**Authentication failed / PIN rejected**  
Make sure you're entering the PIN currently shown on the phone screen — it changes every time the app is opened. The PIN must be exactly 4 digits.

**Device not detected (USB mode)**  
Run `adb devices` in Command Prompt. If nothing appears, check that USB debugging is enabled, your cable supports data transfer (not charge-only), and you've accepted the "Allow USB debugging?" prompt on the phone.

**High latency or stuttering (Wi-Fi)**  
Switch to USB mode for the lowest latency. On Wi-Fi, try connecting both devices to the 5 GHz band instead of 2.4 GHz, and avoid VPNs.

---

## Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| Device & sensor detection | ✅ Done | ADB-based phone inspection tool |
| Companion app (Flutter) | ✅ Done | Full controller UI, sensor streaming |
| Wi-Fi transport | ✅ Done | TCP socket over local network |
| Bluetooth transport | ✅ Done | Via Bluetooth PAN tethering |
| USB / ADB transport | ✅ Done | `adb forward` port tunnelling |
| Virtual Xbox controller | ✅ Done | Via ViGEmBus / vgamepad |
| Custom button mapping | ✅ Done | Persistent per-user remapping |
| PIN authentication | ✅ Done | Per-session 4-digit PIN |
| Gyro aim mode | 🚧 In progress | Fine-tuned gyroscope-to-right-stick mapping |
| Installer / signed build | 📋 Planned | One-click Windows installer, signed APK |
| Profiles / per-game configs | 📋 Planned | Save and switch named controller profiles |
| Trigger pressure sensitivity | 📋 Planned | Analogue L2/R2 via screen pressure |

---

## Contributing

Bug reports, feature requests, and pull requests are welcome. Please open an issue before starting significant work so we can coordinate.

When reporting a bug, include:
- Your Android version and phone model
- Your Windows version
- Which connection mode you used (Wi-Fi / Bluetooth / USB)
- The full error message or log output

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

GyroPad is not affiliated with, endorsed by, or in any way officially connected with Sony Interactive Entertainment. All product names and trademarks are the property of their respective owners.

---

<div align="center">
Made with 🎮 by <a href="https://github.com/Rushabh1697">Rushabh1697</a>
</div>
