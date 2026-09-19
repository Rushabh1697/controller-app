<div align="center">

# 🎮 GyroPad

### Turn your Android phone into a wireless game controller.

**Use your phone's buttons, touchscreen, and gyroscope to control games on your Windows PC.**

<br>

[![Platform](https://img.shields.io/badge/Platform-Windows%20%2B%20Android-111827?style=for-the-badge)](#requirements)
[![Flutter](https://img.shields.io/badge/Mobile-Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)](#for-developers)
[![Python](https://img.shields.io/badge/Desktop-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](#for-developers)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

<br>

<a href="https://github.com/Rushabh1697/controller-app/releases">
  <strong>⬇️ Download</strong>
</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-quick-start">
  <strong>🚀 Quick Start</strong>
</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-how-it-works">
  <strong>🧩 How It Works</strong>
</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-for-developers">
  <strong>🛠️ Developers</strong>
</a>

</div>

---

## ✨ What is GyroPad?

**GyroPad turns your Android phone into a game controller for your Windows PC.**

Instead of buying a separate controller, you can use the phone you already have.

Your phone provides:

- 🎮 A full console-style button layout
- 🌀 Gyroscope / motion input
- 🕹️ Virtual thumbsticks
- 👆 Touch controls
- 🏎️ Tilt-based steering for racing games
- 🔀 Custom button mapping
- 🔐 PIN-protected pairing

The Windows host receives the phone's input and presents it to games as a **virtual Xbox-compatible controller**.

> **Simple idea:**  
> 📱 **Your Phone** → 📡 **GyroPad** → 💻 **Windows PC** → 🎮 **Your Game**

---

## 🎬 See It In Action

> **Add your demo GIF/video here**
>
> Recommended file:
> `assets/demo/gyropad-demo.gif`
>
> Then replace this section with:
>
> `![GyroPad Demo](assets/demo/gyropad-demo.gif)`

<!--
Example:

<p align="center">
  <img src="assets/demo/gyropad-demo.gif" width="850" alt="GyroPad controller demo">
</p>
-->

### 📱 → 💻 → 🎮

```text
┌─────────────────────┐
│      📱 PHONE       │
│                     │
│  🎮 Buttons         │
│  🌀 Gyroscope       │
│  🕹️ Joysticks       │
│  👆 Touch controls  │
└──────────┬──────────┘
           │
           │ Wi-Fi / Bluetooth / USB
           ▼
┌─────────────────────┐
│     💻 WINDOWS      │
│                     │
│   GyroPad Host      │
│          ↓          │
│  Virtual Xbox Pad   │
└──────────┬──────────┘
           │
           ▼
      ┌───────────┐
      │ 🎮 GAME   │
      └───────────┘
```

---

# 🚀 Download & Install

You **do not need to build the project from source** if you simply want to use GyroPad.

You only need:

- An **Android phone**
- A **Windows 10/11 PC**
- The GyroPad Android app
- The GyroPad Windows host
- The **ViGEmBus** driver

### 1. Download the two apps

| What | Download | Where it runs |
|---|---|---|
| 📱 GyroPad Android | `GyroPad-Android.apk` | Your phone |
| 💻 GyroPad Host | `GyroPadHost-Windows.exe` | Your Windows PC |

👉 **[Download from the repository](https://github.com/Rushabh1697/controller-app/tree/main/Release)**

> **Tip:** If you are just trying GyroPad for the first time, download the ready-made files from the `Release` folder. You do not need Flutter, Python, or VS Code.

---

## 🪟 Step 1 — Prepare Your Windows PC

GyroPad uses **ViGEmBus** to create a virtual Xbox-compatible controller that Windows games can recognize.

### Install ViGEmBus

1. Download the latest ViGEmBus installer from the official project releases.
2. Install it on your Windows PC.
3. Restart Windows if the installer asks you to.

👉 **[Download ViGEmBus](https://github.com/nefarius/ViGEmBus/releases)**

> ⚠️ **Important:** Without ViGEmBus, GyroPad can receive input from your phone but cannot create the virtual controller that games use.

---

# 📱 Step 2 — Install GyroPad on Your Phone

1. Download **`GyroPad-Android.apk`**.
2. Open the downloaded APK on your Android phone.
3. Android may ask you to allow installation from an unknown source.
4. Allow your browser/file manager to install the app.
5. Tap **Install**.
6. Open **GyroPad**.

When the app opens, you will see a **4-digit PIN**.

### 🔐 Keep this PIN visible

The PIN changes whenever the app starts.

You will enter this PIN in the Windows host when connecting your phone.

---

# 💻 Step 3 — Start GyroPad on Windows

1. Download **`GyroPadHost-Windows.exe`**.
2. Double-click the file.
3. Windows SmartScreen may show a warning because the executable is currently unsigned.
4. If you trust the source, select:

**More info → Run anyway**

The source code is publicly available in this repository.

The GyroPad Host window will open.

---

# 🔗 Step 4 — Connect Your Phone

GyroPad supports three connection methods.

| Connection | Best for | Setup |
|---|---|---|
| 📶 **Wi-Fi** | Everyday wireless gaming | ⭐ Easy |
| 🔵 **Bluetooth** | Wireless connection without shared Wi-Fi | Medium |
| 🔌 **USB / ADB** | Wired, low-latency gaming | Medium |

### ⭐ Recommended for first-time users: Wi-Fi

Both your phone and PC should be connected to the **same Wi-Fi network**.

---

# 📶 Wi-Fi Setup

### On your phone

Find your phone's local IP address.

Usually:

**Settings → Wi-Fi → Your connected network → IP address**

It may look like:

```text
192.168.1.42
```

### On the Windows host

1. Open GyroPad Host.
2. Select/use **Wi-Fi** mode.
3. Enter your phone's IP address.
4. Enter the **4-digit PIN** shown in the phone app.
5. Click **Start Controller**.

If everything is correct:

```text
📱 Phone
   │
   │ Wi-Fi
   ▼
💻 GyroPad Host
   │
   ▼
🎮 Virtual Xbox Controller
```

The phone should show:

**🟢 CONNECTED**

---

# 🔵 Bluetooth Setup

Bluetooth mode uses **Bluetooth tethering** to create the network connection between the phone and PC.

### On Android

1. Open **Settings → Bluetooth**.
2. Pair your phone with your PC.
3. Open **Hotspot & tethering**.
4. Enable **Bluetooth tethering**.

### On Windows

1. Open Bluetooth/network settings.
2. Connect to your phone's Bluetooth network access point.
3. Start GyroPad Host using Bluetooth mode.
4. Enter the PIN displayed on the phone.

For detailed Bluetooth instructions, see:

**[`files/BLUETOOTH_SETUP.md`](files/BLUETOOTH_SETUP.md)**

---

# 🔌 USB / ADB Setup

USB mode is useful when you want a wired connection.

> ⚠️ This mode requires **Android Developer Options and USB Debugging**.

### 1. Enable Developer Options

On your Android phone:

**Settings → About phone → tap Build number 7 times**

Android will tell you that Developer Options have been enabled.

### 2. Enable USB Debugging

Go to:

**Settings → System → Developer options → USB debugging**

Turn it on.

### 3. Install Android Platform Tools

Download Google's **Android SDK Platform Tools**:

👉 **[Download Platform Tools](https://developer.android.com/tools/releases/platform-tools)**

### 4. Connect your phone

Use a **data-capable USB cable**.

Your phone should show:

> Allow USB debugging?

Tap **Allow**.

### 5. Check the connection

Open Command Prompt on Windows and run:

```bash
adb devices
```

Your phone should appear with the status:

```text
device
```

Then start:

```bash
GyroPadHost-Windows.exe
```

---

# 🎮 Step 5 — Start Playing

Once GyroPad is connected:

1. Make sure the phone says **CONNECTED**.
2. Windows should see a virtual Xbox-compatible controller.
3. Open your game.
4. Go to the game's controller settings if needed.
5. Select/use the controller.

That's it.

## 🏎️ For racing games

For games such as **F1**:

1. Hold your phone horizontally.
2. Use the landscape controller layout.
3. Calibrate the neutral position.
4. Tilt your phone left/right to steer.

Your phone becomes a steering wheel:

```text
          PHONE
     ┌──────────────┐
     │              │
     │      📱      │
     │              │
     └──────────────┘
        ↙      ↘
      LEFT    RIGHT
      STEER   STEER
```

---

# 🎮 Features

## 🕹️ Full Controller Layout

GyroPad provides a console-style controller interface with:

- D-pad
- Face buttons
- L1 / L2
- R1 / R2
- Left / right thumbsticks
- L3 / R3
- Touchpad
- Share
- Options
- Home / GP button

The inputs are mapped to a standard Xbox-compatible controller interface on Windows.

---

## 🌀 Gyroscope Controls

Use your phone's motion sensors for:

- 🏎️ Racing / steering
- 🎯 Motion aiming
- 🕹️ Analog-style motion input

Gyro settings include configurable sensitivity, deadzone, smoothing, and neutral calibration.

> **Tip:** Gyro controls work best when your phone has a functioning gyroscope/IMU sensor.

---

## 🏎️ Racing Mode

Turn your phone sideways and use it like a steering wheel.

```text
        ↶ LEFT       RIGHT ↷

             🏎️
       ┌───────────────┐
       │               │
       │    GYROPAD    │
       │               │
       └───────────────┘
```

The landscape profile maps the phone's motion to steering input.

---

## 👆 Touchpad

Use the touchpad area to move the PC mouse cursor.

This can be useful when navigating menus without reaching for a physical mouse.

---

## 🔀 Custom Button Mapping

Don't like the default layout?

Use the mapping editor to change button assignments.

You can remap controller inputs and save the configuration.

---

## 🔐 PIN-Protected Pairing

Every time the phone app starts, GyroPad generates a new **4-digit PIN**.

This PIN is required by the Windows host to connect.

---

# ⚙️ Profiles & Settings

The GyroPad Host GUI provides configuration options such as:

### Profile

- Landscape
- Portrait
- Standard

### Gyroscope

- Steering deadzone
- Neutral calibration
- Sensitivity / motion configuration

### Controller

- Button mapping
- Input assignments

This allows you to tune GyroPad depending on the game and the way you hold your phone.

---

# 🧩 How GyroPad Works

GyroPad is split into two parts.

### 📱 Mobile App

Built with **Flutter**.

It handles:

- Touch controls
- Controller UI
- Gyroscope / sensor data
- Connection to the PC

### 💻 Windows Host

Built with **Python**.

It handles:

- Receiving phone input
- Sensor data processing
- Input mapping
- Connection transports
- Virtual controller creation
- Desktop configuration UI

### 🔄 Data Flow

```text
┌────────────────────┐
│   📱 Flutter App   │
│                    │
│ Buttons + Gyro     │
└─────────┬──────────┘
          │
          │ Sensor + Button Data
          │
    ┌─────┴─────┐
    │           │
  Wi-Fi    Bluetooth
    │           │
    └─────┬─────┘
          │
       USB / ADB
          │
          ▼
┌────────────────────┐
│  💻 Python Host    │
│                    │
│ Transport          │
│ Parser             │
│ Mapper             │
│ GUI                │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Virtual Xbox Pad  │
└─────────┬──────────┘
          │
          ▼
       🎮 GAME
```

---

# 📊 Connection Comparison

| Mode | Setup | Wireless | Typical latency* | Good for |
|---|---|---:|---:|---|
| 📶 Wi-Fi | Easy | ✅ | ~15–30 ms | Everyday gaming |
| 🔵 Bluetooth | Medium | ✅ | ~20–50 ms | Wireless without shared Wi-Fi |
| 🔌 USB / ADB | One-time setup | ❌ | ~5–15 ms | Lowest-latency wired use |

<sub>*Latency figures are the project's current approximate measurements and can vary depending on the phone, PC, network, USB setup, and environment.</sub>

---

# 🛠️ Troubleshooting

<details>
<summary><strong>📱 The APK won't install</strong></summary>

Android may block APKs installed outside the Play Store.

Go to your Android settings and allow your browser/file manager to install unknown apps.

The exact menu name varies between Android manufacturers.

</details>

<details>
<summary><strong>🪟 Windows says the EXE is unsafe</strong></summary>

The current Windows executable is not code-signed.

If you downloaded it from this project's repository and want to continue:

**More info → Run anyway**

You can also inspect the source code in this repository.

</details>

<details>
<summary><strong>🎮 My game doesn't detect the controller</strong></summary>

Check these first:

1. Make sure ViGEmBus is installed.
2. Make sure the phone says **CONNECTED**.
3. Restart the GyroPad Host if necessary.
4. Check Windows controller devices.
5. Open your game's controller settings.

</details>

<details>
<summary><strong>🔐 The PIN doesn't work</strong></summary>

The PIN changes every time GyroPad starts.

Use the PIN currently displayed on the phone.

Make sure all four digits are entered correctly.

</details>

<details>
<summary><strong>🔌 USB mode doesn't detect my phone</strong></summary>

Run:

```bash
adb devices
```

If your phone does not appear:

- Check USB Debugging.
- Use a data-capable cable.
- Accept the USB debugging prompt.
- Check that ADB is installed correctly.

</details>

<details>
<summary><strong>📶 Wi-Fi feels laggy or stutters</strong></summary>

Try:

- Connecting both devices to the same 5 GHz Wi-Fi network.
- Moving closer to the router.
- Disconnecting unnecessary VPNs.
- Using USB mode if you need the most consistent wired connection.

</details>

---

# 🛠️ For Developers

Want to modify GyroPad, build it yourself, or contribute?

You can.

## 📦 Requirements

### Mobile

- Flutter SDK 3.13+
- Android SDK
- Android device
- USB debugging for development
- VS Code or Android Studio

### Windows Host

- Python 3.10+
- pip
- ViGEmBus

---

## 1. Clone the Repository

```bash
git clone https://github.com/Rushabh1697/controller-app.git
cd controller-app
```

---

## 2. Build the Flutter App

```bash
cd companion_app
flutter pub get
flutter run
```

### Build a release APK

```bash
flutter build apk --release
```

The APK will be generated at:

```text
build/app/outputs/flutter-apk/app-release.apk
```

---

## 3. Run the Python Host

From the project root:

```bash
pip install vgamepad
```

### CLI mode

```bash
python main.py
```

### GUI mode

```bash
python main.py --gui
```

### Wi-Fi

```bash
python main.py --wifi 192.168.1.42
```

### Bluetooth

```bash
python main.py --bluetooth
```

### JSON output

```bash
python main.py --json
```

---

## 4. Build the Windows EXE

Install PyInstaller:

```bash
pip install pyinstaller
```

Then:

```bash
pyinstaller GyroPadHost.spec
```

The packaged application will be generated in:

```text
dist/GyroPadHost.exe
```

---

# 📁 Project Structure

```text
controller-app/
│
├── Release/
│   ├── GyroPad-Android.apk
│   └── GyroPadHost-Windows.exe
│
├── companion_app/              # Flutter Android application
│   ├── lib/
│   │   └── main.dart
│   └── assets/
│       └── images/
│
├── src/                        # Python Windows host
│   ├── model/
│   ├── service/
│   │   ├── detector.py
│   │   ├── mapper.py
│   │   └── parser.py
│   ├── transport/
│   │   ├── interface.py
│   │   ├── adb.py
│   │   └── wifi.py
│   └── ui/
│       ├── cli.py
│       ├── gui.py
│       └── mapping_utils.py
│
├── files/
│   ├── BLUETOOTH_SETUP.md
│   ├── ARCHITECTURE.md
│   └── ...
│
├── main.py
├── GyroPadHost.spec
└── README.md
```

---

# 🗺️ Roadmap

| Feature | Status |
|---|:---:|
| 📱 Device & sensor detection | ✅ |
| 📱 Flutter companion app | ✅ |
| 📶 Wi-Fi transport | ✅ |
| 🔵 Bluetooth transport | ✅ |
| 🔌 USB / ADB transport | ✅ |
| 🎮 Virtual Xbox controller | ✅ |
| 🔀 Custom button mapping | ✅ |
| 🔐 PIN authentication | ✅ |
| 🌀 Gyro aim mode | 🚧 |
| 📦 One-click installer | 📋 |
| ✍️ Signed builds | 📋 |
| 🎮 Per-game profiles | 📋 |
| 🎚️ Trigger pressure sensitivity | 📋 |

---

# 🤝 Contributing

Contributions are welcome!

If you find a bug or have an idea:

1. Open an **Issue**.
2. Explain what happened.
3. Include your Android version and phone model.
4. Include your Windows version.
5. Mention whether you used Wi-Fi, Bluetooth, or USB.
6. Include the error message or relevant logs.

For larger changes, open an issue before starting so the approach can be discussed.

---

# 📸 Screenshots

Add screenshots here as the project UI evolves.

Recommended assets:

```text
assets/
└── screenshots/
    ├── mobile-controller.png
    ├── mobile-landscape.png
    ├── host-dashboard.png
    ├── mapping-editor.png
    └── connected-state.png
```

Then display them like this:

<table>
<tr>
<td align="center">
<img src="assets/screenshots/mobile-controller.png" width="250" alt="GyroPad mobile controller">
<br>
<strong>Mobile Controller</strong>
</td>
<td align="center">
<img src="assets/screenshots/mobile-landscape.png" width="250" alt="GyroPad landscape racing mode">
<br>
<strong>Racing Mode</strong>
</td>
<td align="center">
<img src="assets/screenshots/host-dashboard.png" width="400" alt="GyroPad Windows host">
<br>
<strong>Windows Host</strong>
</td>
</tr>
</table>

---

# 🔒 Privacy

GyroPad is designed around local communication between your phone and PC.

The controller data is transferred between your devices using the selected connection method:

- Wi-Fi
- Bluetooth networking
- USB / ADB

The project does not require a cloud account for controller pairing.

For the latest implementation details, inspect the source code in this repository.

---

# ⚠️ Compatibility

### Android

- Android 6.0 / API 23+
- Gyroscope recommended for motion features

### Windows

- Windows 10 / 11
- ViGEmBus required for virtual controller emulation

### Games

GyroPad is designed for games that support standard controller/Xbox-style input.

Actual game compatibility can vary depending on the game, input system, anti-cheat software, and controller configuration.

---

# 📚 Documentation

| Document | Purpose |
|---|---|
| [`ARCHITECTURE.md`](files/ARCHITECTURE.md) | System architecture |
| [`BLUETOOTH_SETUP.md`](files/BLUETOOTH_SETUP.md) | Bluetooth setup |
| [`handoff.md`](handoff.md) | Project development notes |

---

# ⭐ Support the Project

If GyroPad is useful to you:

- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- 📢 Share the project

Every contribution helps improve the project.

---

<div align="center">

## 🎮 Turn your phone into your controller.

**Built with Flutter + Python + a little bit of gyro magic. 🌀**

<br>

[⬆️ Back to top](#-gyropad)

<br>

**GyroPad**  
Open-source Android + Windows virtual controller

<br>

MIT License

</div>

---

## Disclaimer

GyroPad is an independent open-source project and is not affiliated with, endorsed by, or officially connected with Sony Interactive Entertainment, Microsoft, or any game publisher.

All product names, logos, and trademarks belong to their respective owners.
