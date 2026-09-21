# 📖 GyroPad — Universal Download & Setup Guide (PC & Mobile)

> **MAINTENANCE DIRECTIVE FOR AI ASSISTANTS:**  
> This file is a living document. Whenever features, UI layouts, connection flows, drivers, or binary paths are updated in this repository, **you must update this `SETUP_GUIDE.md` file by default** to keep all setup and download steps accurate.

---

## 📋 Table of Contents
1. [Prerequisites & System Requirements](#1-prerequisites--system-requirements)
2. [Download Links](#2-download-links)
3. [Step 1: Phone Setup (Android)](#3-step-1-phone-setup-android)
4. [Step 2: PC Setup (Windows)](#4-step-2-pc-setup-windows)
5. [Step 3: Connect Phone to PC (Choose 1 of 3 Modes)](#5-step-3-connect-phone-to-pc-choose-1-of-3-modes)
   - [Mode A: USB Cable (Recommended for Racing — 1–2ms Latency)](#mode-a-usb-cable-recommended-for-racing--12ms-latency)
   - [Mode B: Bluetooth PAN (Wireless without Shared Wi-Fi)](#mode-b-bluetooth-pan-wireless-without-shared-wi-fi)
   - [Mode C: Wi-Fi (Local Network)](#mode-c-wi-fi-local-network)
6. [Step 4: Verify Controller in Windows & Browser](#6-step-4-verify-controller-in-windows--browser)
7. [Step 5: In-Game Setup (e.g. F1 2022 & Racing Games)](#7-step-5-in-game-setup-eg-f1-2022--racing-games)
8. [Controller Emulation Modes: PlayStation vs. Xbox](#8-controller-emulation-modes-playstation-vs-xbox)
9. [Troubleshooting & FAQ](#9-troubleshooting--faq)

---

## 1. Prerequisites & System Requirements

### 📱 Android Phone
* **OS:** Android 6.0 (Marshmallow) or newer (Android 10/11/12/13/14/15/16 supported).
* **Sensors:** Accelerometer + Gyroscope (standard on virtually all modern smartphones).
* **Storage:** ~45 MB free space.

### 💻 Windows PC
* **OS:** Windows 10 (64-bit) or Windows 11.
* **Driver:** **ViGEmBus** (Virtual Gamepad Emulation Bus) — required so Windows and games see a physical controller.

---

## 2. Download Links

### Direct Downloads (No Account Required)
| Deliverable | Platform | Direct Download Link | Size |
| :--- | :--- | :--- | :--- |
| **GyroPad Android App** | Android | [Download APK](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk) | ~42 MB |
| **GyroPad Desktop Host** | Windows PC | [Download EXE](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPadHost-Windows.exe) | ~14 MB |
| **ViGEmBus Driver** | Windows PC | [Download Driver Installer](https://github.com/nefarius/ViGEmBus/releases/latest) | ~11 MB |

*(You can also install ViGEmBus via Windows Terminal: `winget install ViGEm.ViGEmBus`)*.

---

## 3. Step 1: Phone Setup (Android)

1. **Download the APK:**  
   Open [GyroPad-Android.apk](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk) on your Android phone.
2. **Install the App:**  
   Tap the downloaded APK. If Android displays *"Install blocked from unknown sources"*:
   * Tap **Settings** in the popup prompt.
   * Toggle **"Allow from this source"** (for Chrome, File Manager, or your browser).
   * Return and tap **Install**.
3. **Open GyroPad:**  
   * The app will launch into full-screen PlayStation controller mode.
   * Hold the phone in **Landscape** (top edge facing your left hand).
4. **Locate the 4-Digit PIN:**  
   * On the screen, you will see your session PIN:  
     `PIN: 4829` (a random 4-digit code generated fresh each session).
   * Keep the app open on your screen while connecting.

---

## 4. Step 2: PC Setup (Windows)

1. **Install ViGEmBus (One-Time Driver Setup):**
   * Download and run the [ViGEmBus Installer](https://github.com/nefarius/ViGEmBus/releases/latest) (or run `winget install ViGEm.ViGEmBus` in PowerShell as Administrator).
   * Follow the prompts to finish installation. *(No restart usually required, but recommended if games don't detect immediately).*
2. **Launch GyroPad Desktop Host:**
   * Double-click **`GyroPadHost-Windows.exe`**  
     *(Or if running from source: `python main.py`)*.
   * If Windows Defender SmartScreen displays *"Windows protected your PC"*, click **More info** → **Run anyway**.
3. **The GyroPad Window Appears:**
   * At the top, you will see **Device Connection & Controls**:
     * Status indicator (turns **Green** when connected).
     * Mode selector (`USB (Cable)`, `Bluetooth (PAN)`, `Wi-Fi`).
     * **4-Digit PIN** input field and **Start Controller** button.
     * **Controller Configuration** with default `PlayStation (DualShock 4 / PS5)` emulation.

---

## 5. Step 3: Connect Phone to PC (Choose 1 of 3 Modes)

### Mode A: USB Cable (Recommended for Racing — 1–2ms Latency)

This mode gives the lowest latency possible (<2ms) and prevents battery drain during long gaming sessions.

1. **Enable USB Debugging on Your Phone (One-Time):**
   * Go to phone **Settings → About Phone**.
   * Tap **Build Number** 7 times until you see *"You are now a developer!"*.
   * Go to **Settings → System (or Additional Settings) → Developer Options**.
   * Toggle **USB Debugging** to **ON**.
2. **Connect Cable:**
   * Plug your phone into your PC with a USB data cable.
   * When your phone displays *"Allow USB debugging from this computer?"*, check **"Always allow"** and tap **Allow**.
3. **Start Controller:**
   * In the GyroPad PC window, ensure `Mode:` is set to **`USB (Cable)`**.
   * The status will automatically turn green:  
     `Status: Connected to <Your Phone Model>`
   * Type the **4-digit PIN** shown on your phone screen.
   * Press **`<Enter>`** on your keyboard (or click **Start Controller**).
   * The console will log: `Connected and Authenticated!` and `Virtual PlayStation (DualShock 4 / PS5) controller initialized.`

---

### Mode B: Bluetooth PAN (Wireless without Shared Wi-Fi)

Use this mode if you are away from home Wi-Fi or want wireless play via Bluetooth.

1. **Pair Phone with PC:**
   * Turn on Bluetooth on phone and PC.
   * In Windows **Settings → Bluetooth & devices**, pair your Android phone.
2. **Turn ON Bluetooth Tethering on Phone:**
   * On your phone, go to **Settings → Hotspot & Tethering** (or search "Bluetooth tethering" in Settings).
   * Turn **ON** **Bluetooth tethering**.
3. **Connect Windows to the Phone's Bluetooth Access Point:**
   * On PC: Go to **Settings → Bluetooth & devices → Devices**.
   * Find your phone, click the **`...`** (three dots) → **Connect**.  
     *(Alternatively: Windows Control Panel → Devices and Printers → right-click phone → **Connect using** → **Access point**).*
   * Windows will show connected as an access point.
4. **Start Controller:**
   * In GyroPad PC host, switch `Mode:` dropdown to **`Bluetooth (PAN)`**.
   * Status will show: `Status: Connected to Bluetooth Device`.
   * Enter the **4-digit PIN** from the phone screen and click **Start Controller**.

---

### Mode C: Wi-Fi (Local Network)

Use this mode if your phone and PC are connected to the same home Wi-Fi router.

1. **Ensure Same Network:**
   * Connect both your PC and phone to the same Wi-Fi router.
2. **Find Phone IP Address:**
   * On your phone, go to **Settings → Wi-Fi → tap connected network name → IP address** (e.g. `192.168.1.55`).
3. **Start Controller:**
   * In GyroPad PC host, switch `Mode:` to **`Wi-Fi`**.
   * A prompt will ask for your phone's IP address — enter it (e.g. `192.168.1.55`).
   * Enter the **4-digit PIN** from your phone screen and click **Start Controller**.

---

## 6. Step 4: Verify Controller in Windows & Browser

Before launching a game, verify your controller inputs live:

1. **Quick Test / Wake Button:**
   * In GyroPad Desktop Host, click **`[Test / Wake Gamepad]`**.
   * This immediately attaches the virtual controller to Windows and sends an activation pulse.
2. **Test on Browser Tester:**
   * Open **[hardwaretester.com/gamepad](https://hardwaretester.com/gamepad)** in Chrome, Edge, or Brave.
   * The page will detect:  
     `Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)` *(Official Sony DualShock 4 ID)*.
3. **Verify Controls:**
   * **Tilt Phone Left / Right:** Axis 0 slides between `-1.00` and `+1.00`.
   * **Press R2 (Right Trigger):** Fills trigger bar to `1.00` (Throttle).
   * **Press L2 (Left Trigger):** Fills trigger bar to `1.00` (Brake).
   * **Face Buttons (`✕`, `□`, `○`, `△`):** B0, B2, B1, B3 light up.
   * **Shoulders (`L1`, `R1`):** B4, B5 light up.
   * **Touchpad:** Drag finger to move mouse cursor on PC; tap touchpad to click.

---

## 7. Step 5: In-Game Setup (e.g. F1 2022 & Racing Games)

1. **Launch Your Game (e.g. F1 2022):**
   * Keep GyroPadHost running in the background.
2. **Go to Control Settings:**
   * In F1 2022: **Game Options → Settings → Controls, Vibration & Force Feedback**.
   * You will see the active controller listed with native PlayStation prompt icons.
3. **Recommended F1 2022 Bindings:**
   * **Steering:** Left Stick X (Controlled by tilting phone).
   * **Accelerate:** R2 (Right Trigger on phone).
   * **Brake / Reverse:** L2 (Left Trigger on phone).
   * **Shift Up (Manual):** Cross (`✕`).
   * **Shift Down (Manual):** Square (`□`).
   * **DRS / Overtake:** Triangle (`△`) or L1.
   * **Pause:** Options button.
   * **Flashback / Replay:** Share button.
4. **Calibration Tip:**
   * Hold your phone in your natural resting grip and click **"Calibrate Neutral"** in the GyroPad PC window to set zero-tilt center.
   * In F1 2022 calibration, set **Steering Deadzone** to `0%` or `1%` (GyroPad handles deadzone filtering natively).

---

## 8. Controller Emulation Modes: PlayStation vs. Xbox

In the GyroPad Desktop Host, the **`Emulation:`** dropdown allows switching between:

| Mode | Virtual Device Emulated | Best For | In-Game Button Glyphs |
| :--- | :--- | :--- | :--- |
| **PlayStation (DualShock 4 / PS5)** *(Default)* | Sony Wireless Controller (`VID: 0x054C`, `PID: 0x05C4`) | Modern games (F1 2022, Steam, Sony PC ports, Cyberpunk, EA FC) | Shows `✕`, `□`, `○`, `△`, L1/R1, L2/R2 |
| **Xbox 360** | Microsoft Xbox 360 Controller (`VID: 0x045E`, `PID: 0x028E`) | Older Windows games (DirectInput / legacy XInput only) | Shows A, B, X, Y, LB/RB, LT/RT |

---

## 9. Troubleshooting & FAQ

### Q: "Failed to load dynlib/dll ViGEmClient.dll"
* **Solution:** Use the latest build of `GyroPadHost-Windows.exe` from the `Release/` directory. All required C++ driver DLLs are bundled directly into the executable.

### Q: "Virtual controller disabled: Install ViGEmBus"
* **Solution:** Install the [ViGEmBus driver](https://github.com/nefarius/ViGEmBus/releases/latest) on your PC and restart the host.

### Q: "Status: Searching for device..." (USB mode)
* **Check:**
  1. Is USB Debugging enabled in Android Developer Options?
  2. Did you tap "Allow" on the phone's "Allow USB debugging" popup?
  3. Is the cable a data cable (not a charge-only cable)?

### Q: "Why did it say 'Ensure phone is connected with USB Debugging enabled' when using Bluetooth?"
* **Answer:** **USB is NOT needed for Bluetooth mode at all!** Older builds of the host application displayed a generic USB fallback log whenever a connection was searching. In the latest build:
  1. GyroPadHost automatically detects your phone's Bluetooth PAN Gateway IP (e.g. `10.18.154.11`) without needing USB.
  2. The `Start Controller` button is immediately active so you can enter the PIN and connect directly.
  3. **Important:** Keep the GyroPad app actively OPEN on your phone screen so Android does not put the background socket to sleep.

### Q: "Connection timed out" in Bluetooth mode
* **Check:**
  1. Is **Bluetooth tethering** turned ON in your phone's Hotspot & Tethering settings?
  2. Is your PC connected to your phone's Bluetooth access point? (Test in command prompt: `ping <phone gateway IP>` should reply).
  3. Is the GyroPad app **open and visible** on your phone screen? If the phone screen turns off, Android suspends incoming network connections.

---

*Last Updated: September 21, 2026*  
*Repository: [Rushabh1697/controller-app](https://github.com/Rushabh1697/controller-app)*
