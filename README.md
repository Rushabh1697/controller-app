<div align="center">

<img src="companion_app/assets/images/logo.png" width="130" alt="GyroPad Logo"/>

# GyroPad

### Your phone. Now a game controller.

GyroPad turns your Android phone into a wireless PS5-style controller for your Windows PC — gyroscope aiming, tilt steering, full button layout, Wi-Fi / Bluetooth / USB. Free and open source.

[![Download APK](https://img.shields.io/badge/⬇%20Android%20APK-Download-3DDC84?style=for-the-badge&logo=android&logoColor=white)](./Release/GyroPad-Android.apk)
[![Download EXE](https://img.shields.io/badge/⬇%20Windows%20EXE-Download-0078D4?style=for-the-badge&logo=windows&logoColor=white)](./Release/GyroPadHost-Windows.exe)
[![Setup Guide](https://img.shields.io/badge/📖%20Setup%20Guide-Read-FF5722?style=for-the-badge)](./SETUP_GUIDE.md)
[![Website](https://img.shields.io/badge/🌐%20Website-Visit-00439C?style=for-the-badge)](https://rushabh1697.github.io/controller-app/)
[![GitHub Stars](https://img.shields.io/github/stars/Rushabh1697/controller-app?style=for-the-badge&color=FFD700)](https://github.com/Rushabh1697/controller-app/stargazers)

> No account needed to download. Just click the buttons above. Full step-by-step instructions in [SETUP_GUIDE.md](./SETUP_GUIDE.md).

</div>

---

## How it works

```
📱 Your Phone                        💻 Your PC
┌─────────────────────┐             ┌──────────────────────────────┐
│   GyroPad App       │             │   GyroPadHost.exe            │
│                     │             │                              │
│  [gyroscope]  ──────┼─ USB (Cable)▶│  Virtual PlayStation Controller
│  [touchscreen]──────┼─ Bluetooth ─▶│  (DualShock 4 / PS5 default, │
│  [buttons]    ──────┼─ Wi-Fi   ──▶│   or optional Xbox 360)     │
│                     │             │  Windows & games see a real  │
└─────────────────────┘             │  gamepad automatically       │
                                    └──────────────┬───────────────┘
                                                   │
                                            🎮 Your Game
```

---

## Features

| | Feature | Description |
|---|---|---|
| 🕹️ | **Full Controller Layout** | D-pad, face buttons, L1/L2/R1/R2, dual thumbsticks, touchpad, Share & Options |
| 🌀 | **Gyroscope Aiming** | Tilt your phone to aim — smooth, precise, zero lag |
| 🏎️ | **Racing / Tilt Steering** | Hold it like a steering wheel. Works perfectly in F1 and other racing games |
| 🖱️ | **Touchpad as Mouse** | Slide your finger to move the PC cursor — great for game menus |
| 🔀 | **Custom Button Mapping** | Remap any button to any input. Layout saves automatically |
| 🔒 | **PIN-Protected Pairing** | A new 4-digit PIN every session. Only your PC can connect |
| 📡 | **3 Connection Modes** | Wi-Fi · Bluetooth · USB — pick what works for you |

---

## Download

No GitHub account needed. Click a file → **Download raw file** button appears in the top right.

| File | Platform | Notes |
|---|---|---|
| [`GyroPad-Android.apk`](./Release/GyroPad-Android.apk) | Android 6.0+ | Install on your phone |
| [`GyroPadHost-Windows.exe`](./Release/GyroPadHost-Windows.exe) | Windows 10/11 | Run on your PC |

> **Android install tip:** Your phone may say "Install blocked." Go to **Settings → Apps → Special app access → Install unknown apps** and allow your file manager or browser.

> **Windows install tip:** If SmartScreen warns you, click **More info → Run anyway**. The full source code is here for review.

---

## Before you start — one required driver

GyroPad needs a free Windows driver called **ViGEmBus** to create a virtual controller that games can see. Without it the app connects but games detect nothing.

**➜ [Download ViGEmBus here](https://github.com/nefarius/ViGEmBus/releases)** — grab the latest `ViGEmBus_Setup_x.x.x.exe`, install it, restart your PC once. Done.

---

## Setup Guide

### What you need

- ✅ An Android phone (Android 6.0 or newer)
- ✅ A Windows 10 or 11 PC
- ✅ ViGEmBus driver installed (see above)
- ✅ Same Wi-Fi network — **or** a USB cable

---

### Step 1 — Install the app on your phone

1. Download `GyroPad-Android.apk` and open it on your phone
2. Tap **Install** (allow unknown sources if asked)
3. Open the app — you'll see the controller screen
4. Look at the bottom left — it shows **`DISCONNECTED (PIN: XXXX)`**
5. **Note that 4-digit PIN** — you'll need it in Step 3

> The PIN changes every time you open the app. Keep the app open before connecting from the PC.

---

### Step 2 — Run GyroPadHost on your PC

1. Download `GyroPadHost-Windows.exe` and double-click it
2. If Windows warns you — click **More info → Run anyway**
3. The GyroPadHost window opens — leave it running

---

### Step 3 — Connect (choose your method)

<details>
<summary><b>📶 Wi-Fi — easiest, recommended for most people</b></summary>

<br>

1. Find your phone's IP address:  
   **Settings → Wi-Fi → tap your network name → IP address**  
   It looks like `192.168.1.42`

2. Type that IP into the **IP field** in GyroPadHost on your PC

3. Type the **4-digit PIN** shown on your phone into the PIN field

4. Click **Start Controller**

5. Your phone's status turns green: ✅ **CONNECTED**

</details>

<details>
<summary><b>🔵 Bluetooth — wireless without shared Wi-Fi</b></summary>

<br>

1. **Pair your phone with your PC** via Bluetooth the normal way  
   (Settings → Bluetooth → pair device)

2. On your phone: **Settings → Network & internet → Hotspot & tethering → Bluetooth tethering** → turn ON

3. On your PC: connect to your phone's Bluetooth network in the system tray

4. Open Command Prompt and run:
   ```
   GyroPadHost-Windows.exe --bluetooth --gui
   ```

5. Enter the PIN when prompted

</details>

<details>
<summary><b>🔌 USB Cable — lowest latency, wired</b></summary>

<br>

1. **Enable Developer Options** on your phone:  
   Settings → About phone → tap **Build number** 7 times

2. **Enable USB Debugging:**  
   Settings → System → Developer options → USB debugging → ON

3. **Install ADB** on your PC:  
   Download [Android SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools), extract, add to Windows PATH

4. Connect phone to PC with a **data cable** (not charge-only)

5. Accept the **"Allow USB debugging?"** prompt on your phone

6. Run `adb devices` in Command Prompt — your phone should appear

7. Launch `GyroPadHost-Windows.exe` normally — USB is the default mode

</details>

---

### Step 4 — Play

Once your phone shows **CONNECTED**, Windows sees a new Xbox 360 controller. Open any game — it will detect the controller automatically, no setup needed on the game side.

**Tips by game type:**

| Game type | Tip |
|---|---|
| 🏎️ Racing games | Hold phone horizontally, select **Landscape** profile in GyroPadHost, tilt to steer |
| 🎯 Shooters | Click **Calibrate Neutral** while holding the phone in your natural position, then small tilts = gyro aim |
| 🗺️ Everything else | Default **Portrait** profile works for most games |
| 🔀 Custom layout | Click **Edit Mapping** to remap any button — saved automatically |

---

## Connection Modes at a Glance

| Mode | Setup | Latency | Best for |
|---|---|---|---|
| 📶 Wi-Fi | Easy | ~15–30 ms | Most people |
| 🔵 Bluetooth | Medium | ~20–50 ms | No shared Wi-Fi |
| 🔌 USB | One-time setup | ~5–15 ms | Lowest latency |

---

## Troubleshooting

<details>
<summary><b>My phone isn't being detected</b></summary>

- Make sure the GyroPad app is open on your phone
- Check that both devices are on the **same Wi-Fi network**
- Double-check the IP address (Settings → Wi-Fi → tap your network)
- Try closing and reopening the app — this generates a new PIN

</details>

<details>
<summary><b>Authentication failed / wrong PIN</b></summary>

- The PIN shown on your phone changes every time the app is opened
- Close the app on your phone, reopen it, and use the **new** PIN
- The PIN must be exactly 4 digits — no letters, no spaces

</details>

<details>
<summary><b>The game doesn't detect any controller input</b></summary>

- ViGEmBus is almost certainly not installed — [download it here](https://github.com/nefarius/ViGEmBus/releases)
- Install ViGEmBus, **restart your PC**, then try again
- Check GyroPadHost's log window for any error messages

</details>

<details>
<summary><b>Windows says the .exe is unsafe</b></summary>

- This is normal for unsigned apps — click **More info → Run anyway**
- The full source code is in this repository for anyone to inspect

</details>

<details>
<summary><b>Android says "Install blocked"</b></summary>

- Go to **Settings → Apps → Special app access → Install unknown apps**
- Allow your browser or file manager to install unknown apps
- Try opening the APK again

</details>

---

## Project Structure

```
controller-app/
├── Release/                        ← Pre-built downloads (APK + EXE)
│   ├── GyroPad-Android.apk
│   └── GyroPadHost-Windows.exe
│
├── companion_app/                  ← Flutter Android app (phone side)
│   └── lib/main.dart               ← Controller UI + sensor streaming
│
├── src/                            ← Python host (PC side)
│   ├── transport/                  ← ADB / Wi-Fi / Bluetooth transport
│   ├── service/                    ← Gyro mapping, sensor detection
│   └── ui/                         ← CLI terminal + Tkinter GUI
│
├── files/                          ← Setup guides and documentation
│   └── BLUETOOTH_SETUP.md
│
├── main.py                         ← Entry point
└── index.html                      ← Project website (GitHub Pages)
```

---

## Roadmap

- [x] Device & sensor detection
- [x] Flutter companion app with full controller UI
- [x] Wi-Fi transport
- [x] Bluetooth transport (via PAN tethering)
- [x] USB / ADB transport
- [x] Virtual Xbox controller output (ViGEmBus)
- [x] Custom button remapping
- [x] PIN authentication
- [ ] Gyro aim fine-tuning
- [ ] Signed installer (.msi / Play Store)
- [ ] Per-game profiles
- [ ] Analogue trigger pressure sensitivity

---

## Contributing

Bug reports, feature requests, and pull requests are welcome.

When reporting a bug, please include:
- Your Android version and phone model
- Your Windows version
- Which connection mode (Wi-Fi / Bluetooth / USB)
- The full error message or log output from GyroPadHost

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

*GyroPad is not affiliated with Sony Interactive Entertainment or any game publisher. All product names and trademarks belong to their respective owners.*

---

<div align="center">

Made with 🎮 by [Rushabh1697](https://github.com/Rushabh1697)

**[⬇ Download for Android](./Release/GyroPad-Android.apk) · [⬇ Download for Windows](./Release/GyroPadHost-Windows.exe) · [🌐 Website](https://rushabh1697.github.io/controller-app/)**

</div>
