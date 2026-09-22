# 🎮 GyroPad - Complete Setup & Troubleshooting Guide

Welcome to GyroPad! This guide will walk you through every step to get your Android phone perfectly paired with your Windows PC as a high-precision, zero-deadzone virtual steering wheel and gamepad.

---

## 🛠️ Step 1: Install the Virtual Controller Driver (PC)
GyroPad uses an industry-standard driver to trick Windows into thinking your phone is a real Xbox or PlayStation controller. 
1. Download the **ViGEmBus Driver** from the official repository: [ViGEmBus Setup](https://github.com/nefarius/ViGEmBus/releases/latest)
2. Run the installer and complete the setup.
3. *(Optional but recommended)* Restart your PC to ensure the driver is active.

---

## 📥 Step 2: Download the Apps
You need both the Android app and the Windows Host application. Download the latest versions directly from our releases:

* **📱 Android App:** [Download GyroPad-Android.apk](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPad-Android.apk)
* **💻 Windows Host:** [Download GyroPadHost-Windows.exe](https://github.com/Rushabh1697/controller-app/raw/main/Release/GyroPadHost-Windows.exe)

---

## 📱 Step 3: Android App Setup
1. Transfer the `GyroPad-Android.apk` to your phone (or download it directly on your mobile browser).
2. Tap the APK to install it. 
   * *Note: Your phone may warn you about "Installing from Unknown Sources." You will need to allow this permission in your Android settings to install the app.*
3. Open the GyroPad app.
4. **Permissions:** The app requires access to your Local Network (to talk to your PC) and your device's Motion Sensors (Accelerometer/Gyroscope). Make sure you do not restrict background network usage for this app.

---

## 💻 Step 4: PC Host & Firewall Setup
1. Double-click `GyroPadHost-Windows.exe` to run it.
2. **⚠️ CRITICAL - FIREWALL PERMISSION:** 
   The very first time you run the app, Windows Defender Firewall will pop up asking for permission. 
   You **MUST** check the boxes for both **Private** and **Public** networks and click **Allow Access**. 
   *If you click Cancel or deny this permission, your phone will never be able to connect to the PC!*

---

## 🔗 Step 5: Pairing Your Devices
You can connect your phone to your PC in three different ways depending on your network setup.

### Method A: Wi-Fi QR Code (Easiest)
1. Ensure both your PC and Phone are connected to the **exact same Wi-Fi network**.
2. On the PC app, click the **"📱 QR Pair"** button. A QR code will appear.
3. Open the Android app, tap the **QR Scanner** icon, and scan the code on your screen. 
4. Enter the 4-digit PIN shown on your phone into the PC app and click **Start Controller**.

### Method B: Manual Wi-Fi IP Entry
1. Ensure both devices are on the same Wi-Fi network.
2. The PC app will display its IP address (e.g., `192.168.1.5`).
3. Type that exact IP address into the Android app.
4. Enter the 4-digit PIN into the PC app and click **Start Controller**.

### Method C: Bluetooth Tethering (For Public/Restricted Wi-Fi)
If your router blocks device-to-device communication (common in dorms or offices), use Bluetooth:
1. Pair your phone and PC via standard Windows Bluetooth.
2. On your phone, go to **Settings > Connections > Mobile Hotspot and Tethering** and turn on **Bluetooth tethering**.
3. On Windows, right-click the Bluetooth icon in the system tray -> **Join a Personal Area Network**.
4. Right-click your phone in the window and select **Connect using -> Access point**.
5. Check the **"Use Bluetooth PAN"** box in the GyroPad PC app. Enter the PIN and click Start!

---

## ⚙️ Step 6: Calibration & Themes (New in v1.3.0)

### Zero-Drift Calibration (Crucial for Racing)
GyroPad uses raw 1:1 sensor data with zero deadzones. Because camera bumps and desk surfaces aren't perfectly flat, you must calibrate the physical tilt of your phone:
1. Lay your phone **completely flat** on your desk.
2. In the PC App, click **"Calibrate Neutral"**.
3. This will mathematically lock your hardware to `0.000` drift. This calibration is permanently saved to your active profile!

### Controller Themes
Make the app look how you want! In the Android app, click the **Settings Gear**:
* Change the **Controller Theme** to PS5 (Light), Xbox (Dark Green), or Switch (Neon).
* Select **Custom Background** to pick an image from your phone's photo gallery to use as your UI background!

---

## 🎮 Step 7: Per-Game Profiles & Auto-Switching
GyroPad allows you to map different phone buttons to different Xbox buttons depending on the game you are playing.
1. Click **Manage Profiles** in the PC app.
2. Click **New Profile** (e.g., "Forza Horizon").
3. Set your button mappings.
4. **Auto-Switching:** Type the game's executable name (e.g., `ForzaHorizon5.exe`) into the "Linked Executable" box. 
5. GyroPad will now run silently in the background and automatically instantly swap to your Forza profile the second you alt-tab into the game!

---

## 🚑 Troubleshooting & Common Issues

### ❌ Issue: The phone says "Connection Timed Out" or won't connect.
**Fixes:**
1. **Firewall:** You likely denied the Windows Firewall prompt. Press the Windows Key, type "Firewall & network protection", click "Allow an app through firewall", find `GyroPadHost`, and ensure both Private and Public are checked.
2. **Network Isolation:** Your router has "AP Isolation" enabled. Use **Method C (Bluetooth Tethering)** instead.
3. **VPNs:** Turn off any active VPNs (NordVPN, ExpressVPN, etc.) on both your phone and PC.

### ❌ Issue: The controller connects, but games don't recognize it.
**Fixes:**
1. **ViGEmBus:** Ensure you completed Step 1 and installed the ViGEmBus driver.
2. **Controller Type:** Some older PC games only support Xbox 360 controllers. Change the "Controller Type" dropdown in the PC app to Xbox 360 instead of PlayStation.

### ❌ Issue: Hardware Tester websites (like hardwaretester.com/gamepad) show a blank screen.
**Fix:** Web browsers like Chrome have a strict Gamepad API rule. They hide virtual controllers until a physical button is pressed. Simply tap the **X / Cross** button on your phone screen once, and the controller will instantly appear on the website.

### ❌ Issue: My steering is slightly drifting to the left/right.
**Fix:** Put the phone flat on your desk and click the **"Calibrate Neutral"** button on the PC app. Do not hold the phone in your hands while calibrating.

### ❌ Issue: Certain buttons (like L1/R1) behave weirdly in menus.
**Fix:** Open **Manage Profiles** and ensure you haven't mapped multiple phone buttons to the exact same Xbox button by accident.
