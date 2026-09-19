# Bluetooth Setup

Because native Python RFCOMM Bluetooth support on Windows requires complex C++ compilers, GyroPad uses **Bluetooth PAN (Personal Area Network) Tethering**.

### How to use Bluetooth Mode:
1. On your Android phone, pair your phone with your PC via Bluetooth.
2. Go to **Settings -> Network & internet -> Hotspot & tethering** and turn on **Bluetooth tethering.
3. On your PC, connect to your phone's Bluetooth network access point.
4. Open the GyroPad app on your phone. You will see a 4-digit PIN.
5. On your PC, run `python main.py --bluetooth` or `python main.py --bluetooth --gui`.
6. Enter the PIN when prompted.

This routes the high-speed TCP socket over the Bluetooth connection without needing Wi-Fi!
