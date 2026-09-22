import os
import re

file_path = r"C:\Users\rusha\Projects\App projects\Controller-app\companion_app\lib\main.dart"

with open(file_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Imports
if "package:battery_plus" not in code:
    code = code.replace("import 'package:http/http.dart' as http;",
                        "import 'package:http/http.dart' as http;\nimport 'package:battery_plus/battery_plus.dart';\nimport 'package:mobile_scanner/mobile_scanner.dart';\nimport 'package:vibration/vibration.dart';")

# 2. State variables
if "final Battery _battery" not in code:
    code = code.replace("final String _pin = _generatePin();",
                        "final String _pin = _generatePin();\n  final Battery _battery = Battery();\n  Timer? _batteryTimer;\n  int _batteryLevel = 100;\n  bool _hapticsEnabled = true;")

# 3. InitState
if "_batteryTimer =" not in code:
    init_state_re = re.compile(r"(super\.initState\(\);)")
    code = init_state_re.sub(r"\1\n    _battery.batteryLevel.then((v) => _batteryLevel = v);\n    _batteryTimer = Timer.periodic(const Duration(minutes: 1), (_) async {\n      _batteryLevel = await _battery.batteryLevel;\n    });", code)

# 4. Dispose
if "_batteryTimer?.cancel" not in code:
    dispose_re = re.compile(r"(_serverSocket\?\.close\(\);)")
    code = dispose_re.sub(r"\1\n    _batteryTimer?.cancel();", code)

# 5. Payload
if "'battery': _batteryLevel" not in code:
    code = code.replace("'buttons': _buttons,", "'buttons': _buttons,\n      'battery': _batteryLevel,")

# 6. TCP Vibration Handler
if "VIB:" not in code:
    code = code.replace("} else if (message.toLowerCase() == 'ping') {",
                        "} else if (message.startsWith('VIB:')) {\n              if (_hapticsEnabled) {\n                try {\n                  int duration = int.parse(message.split(':')[1]);\n                  Vibration.vibrate(duration: duration, amplitude: 128);\n                } catch (_) {}\n              }\n            } else if (message.toLowerCase() == 'ping') {")

# 7. QR Scanner UI
if "FloatingActionButton" not in code:
    code = code.replace("return Scaffold(",
                        """return Scaffold(
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => Scaffold(
              appBar: AppBar(title: const Text('Scan PC QR Code')),
              body: MobileScanner(
                onDetect: (capture) {
                  final List<Barcode> barcodes = capture.barcodes;
                  if (barcodes.isNotEmpty && barcodes.first.rawValue != null) {
                    final raw = barcodes.first.rawValue!;
                    if (raw.startsWith('gyropad://pair')) {
                      Navigator.of(context).pop();
                      Uri uri = Uri.parse(raw);
                      String? pcIp = uri.queryParameters['pc_ip'];
                      String? port = uri.queryParameters['port'];
                      if (pcIp != null && port != null) {
                        Socket.connect(pcIp, int.parse(port)).then((sock) {
                          sock.writeln("PIN:\\\$_pin");
                          sock.close();
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Paired! Check PC.')));
                        }).catchError((e) {
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Failed to pair: \\\$e')));
                        });
                      }
                    }
                  }
                },
              ),
            ),
          ));
        },
        icon: const Icon(Icons.qr_code_scanner),
        label: const Text('QR Pair'),
      ),""")

# 8. Haptics Toggle UI
if "Haptic Feedback (Rumble)" not in code:
    code = code.replace("const Text('Close', style: TextStyle(color: Color(0xFF00439C))),",
                        """const Text('Close', style: TextStyle(color: Color(0xFF00439C))),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                  StatefulBuilder(
                    builder: (context, setStateSB) {
                      return SwitchListTile(
                        title: const Text("Haptic Feedback (Rumble)"),
                        subtitle: const Text("Vibrate when PC game sends rumble"),
                        value: _hapticsEnabled,
                        onChanged: (val) {
                          setStateSB(() => _hapticsEnabled = val);
                          setState(() => _hapticsEnabled = val);
                        },
                      );
                    }
                  ),
                  TextButton(
                    child: const Text('dummy'),""")
                        
with open(file_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Flutter code injected.")
