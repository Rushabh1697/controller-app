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
8. [Game Profiles & Auto-Switching (New in v1.3.0)](#8-game-profiles--auto-switching-new-in-v130)
9. [Controller Emulation Modes: PlayStation vs. Xbox](#9-controller-emulation-modes-playstation-vs-xbox)
10. [Troubleshooting & FAQ](#10-troubleshooting--faq)

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
2. **📱 QR Code Pairing (New in v1.2.0 - Easiest Method):**
   * In the GyroPad PC host, switch `Mode:` to **`Wi-Fi`**.
   * Click the new **`📱 QR Pair`** button to display a QR code on your PC screen.
   * In the GyroPad Android app, tap the **QR Scanner icon** (next to Settings) and scan your PC screen. It will automatically connect without needing to type IP addresses or PINs!
3. **Manual IP Pairing (Alternative):**
   * If your camera is broken, find your phone's IP in **Settings → Wi-Fi**.
   * Enter the IP into the PC host, enter the **4-digit PIN** from the phone screen, and click **Start Controller**.

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
   * **Steering:** Left Stick X (Controlled by tilting phone). *Note: Steer lag is eliminated via ultra-fast 100Hz hardware polling.*
   * **Accelerate:** R2 (Right Trigger on phone).
   * **Brake / Reverse:** L2 (Left Trigger on phone).
   * **Shift Up (Manual):** Cross (`✕`).
   * **Shift Down (Manual):** Square (`□`).
   * **DRS / Overtake:** Triangle (`△`) or L1.
   * **Pause:** Options button.
   * **Voice Chat Mute:** New pill-shaped **Mute** button (below the GP button).
4. **Customizing Sensitivity (New in v1.1.0):**
   * Tap the new **Settings (gear) icon** below the Mute button to adjust Gyroscope Sensitivity dynamically (0.5x to 5.0x) without disconnecting.
5. **Permanent Hardware Calibration (Fixes Stick Drift):**
   * Even when laid flat, physical camera bumps cause your phone to tilt 1-2 degrees, which gravity detects as "stick drift".
   * Simply rest your phone flat on your desk (or hold it in your natural racing grip), and click **"Calibrate Neutral"** in the GyroPad PC window.
   * This instantly mathematically zeroes out the hardware offset to a perfect `0.000` dead-center, and automatically saves it permanently into your active Game Profile!
   * In F1 2022 calibration, set **Steering Deadzone** to `0%` or `1%`.
6. **Hold & Ramp Analog Triggers (New in v1.2.0):**
   * Tap the **Settings (gear) icon** on your phone and enable **"Hold & Ramp Triggers"**. 
   * When enabled, pressing L2 or R2 will smoothly simulate an analog trigger being pressed from 0% to 100% over half a second. Perfect for smooth throttle control in racing games!

---

## 8. Game Profiles & Auto-Switching (New in v1.3.0)

GyroPad now supports multiple **Game Profiles**, allowing you to save different button mappings for different games and automatically switch between them!

1. **Creating a Profile:**
   * In the GyroPad PC Host, click **Manage Profiles**.
   * Click **New Profile** and give it a name (e.g., "F1 2022" or "Forza Horizon 5").
   * *(Optional)* Enter the game's executable name (e.g., `F1_22.exe` or `ForzaHorizon5.exe`) to link the profile to the game.

2. **Editing Mappings:**
   * Select your new profile from the **Game Profile** dropdown.
   * Click **Edit Mapping** to customize which phone buttons map to which Xbox/PlayStation buttons. Changes are saved automatically to the active profile.

3. **Auto-Switching:**
   * Check the **Auto-Switch** box next to the Game Profile dropdown.
   * GyroPad will run silently in the background and detect when you launch or tab into a game. If the active window's executable matches a profile you created, GyroPad will instantly swap to that profile's controls!

4. **Import / Export Profiles:**
   * In **Manage Profiles**, you can select a profile and click **Export Selected** to save it as a `.json` file to share with friends.
   * Use **Import Profile** to load a configuration file downloaded from the internet or sent by a friend.

---

## 9. Controller Emulation Modes: PlayStation vs. Xbox

In the GyroPad Desktop Host, the **`Emulation:`** dropdown allows switching between:

| Mode | Virtual Device Emulated | Best For | In-Game Button Glyphs |
| :--- | :--- | :--- | :--- |
| **PlayStation (DualShock 4 / PS5)** *(Default)* | Sony Wireless Controller (`VID: 0x054C`, `PID: 0x05C4`) | Modern games (F1 2022, Steam, Sony PC ports, Cyberpunk, EA FC) | Shows `✕`, `□`, `○`, `△`, L1/R1, L2/R2 |
| **Xbox 360** | Microsoft Xbox 360 Controller (`VID: 0x045E`, `PID: 0x028E`) | Older Windows games (DirectInput / legacy XInput only) | Shows A, B, X, Y, LB/RB, LT/RT |

---

## 10. Troubleshooting & FAQ

### Q: "Failed to execute script 'main': 'NoneType' object has no attribute 'buffer'"
* **Solution:** This occurred in PyInstaller windowed mode (no console window) when accessing `sys.stdout.buffer`. This is now resolved in the latest `Release/GyroPadHost-Windows.exe` build with safe windowed stream redirection.

### Q: "Failed to load dynlib/dll ViGEmClient.dll"
* **Solution:** Use the latest build of `GyroPadHost-Windows.exe` from the `Release/` directory. All required C++ driver DLLs are bundled directly into the executable (now built with `--collect-all vgamepad`).

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
  2. Did you explicitly join the Personal Area Network? Just pairing isn't enough. Press Windows Key, type **Control Panel**, go to **Devices and Printers**, right-click your phone, and select **Connect using -> Access point**.
  3. Is the GyroPad app **open and visible** on your phone screen? If the phone screen turns off, Android suspends incoming network connections.

---

*Last Updated: September 22, 2026*  
*Repository: [Rushabh1697/controller-app](https://github.com/Rushabh1697/controller-app)*

### Q: Why do I see TWO controllers in Hardware Tester, and one does not work?
* **Answer:** The app uses a Windows driver (ViGEmBus) to spawn virtual gamepads. If an older buggy version of the app crashed or was force-closed without shutting down properly, Windows kept the Ghost controller plugged in. The easiest fix is to **Restart your PC** to clear the device memory.

### Q: "Building with plugins requires symlink support" when running `flutter run`
* **Answer:** If you run `flutter run` on Windows while your phone is disconnected, locked, or USB Debugging is not authorized, Flutter will try to build a Windows Desktop app instead of an Android app. Windows Desktop Flutter builds require symlink support. 
* **Fix 1:** To build for Android, ensure your phone is connected and USB Debugging is authorized.
* **Fix 2:** To build for Windows Desktop, press the Windows key, type **Developer Settings**, and turn **Developer Mode** ON.

