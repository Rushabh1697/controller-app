import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:image_picker/image_picker.dart';
import 'package:http/http.dart' as http;
import 'package:vibration/vibration.dart';
import 'package:palette_generator/palette_generator.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);

  runApp(const CompanionApp());
}

class CompanionApp extends StatelessWidget {
  const CompanionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GyroPad',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.light,
        scaffoldBackgroundColor: const Color(0xFFE2E2E6), // DualSense white
        colorScheme: const ColorScheme.light(
          primary: Color(0xFF00439C), // PS Blue
          surface: Color(0xFFF5F5F7),
        ),
        fontFamily: 'Roboto',
        useMaterial3: true,
      ),
      home: const SensorStreamPage(),
    );
  }
}

class SensorStreamPage extends StatefulWidget {
  const SensorStreamPage({super.key});

  @override
  State<SensorStreamPage> createState() => _SensorStreamPageState();
}

class _SensorStreamPageState extends State<SensorStreamPage> {
  ServerSocket? _serverSocket;
  final List<Socket> _clients = [];
  
  AccelerometerEvent? _lastAccel;
  GyroscopeEvent? _lastGyro;
  
  StreamSubscription<AccelerometerEvent>? _accelSub;
  StreamSubscription<GyroscopeEvent>? _gyroSub;

  final int _port = 5050;
  bool _showDebug = false;
  double _gyroSensitivity = 1.0;
  bool _analogTriggers = false;
  bool _enableVibration = true;

  double _leftStickX = 0.0;
  double _leftStickY = 0.0;
  double _rightStickX = 0.0;
  double _rightStickY = 0.0;
  double _touchpadDeltaX = 0.0;
  double _touchpadDeltaY = 0.0;
  
  // Theme State
  String _activeTheme = 'ps5'; // ps5, xbox, switch, custom
  String? _customImagePath;
  bool _isCustomImageLight = false;

  final Map<String, bool> _buttons = {
    'Cross': false,
    'Circle': false,
    'Square': false,
    'Triangle': false,
    'DpadUp': false,
    'DpadDown': false,
    'DpadLeft': false,
    'DpadRight': false,
    'L1': false,
    'L2': false,
    'R1': false,
    'R2': false,
    'L3': false,
    'R3': false,
    'Options': false,
    'Share': false,
    'Touchpad': false,
    'PS': false,
    'GP': false,
    'Mute': false,
  };

  String _pin = "";

  @override
  void initState() {
    super.initState();
    _pin = (1000 + Random().nextInt(9000)).toString();
    _startServer();
    _startSensors();
    _loadTheme();
    _initializeUpdateChecker();
  }

  Future<void> _updateImagePalette() async {
    if (_customImagePath == null) return;
    try {
      final palette = await PaletteGenerator.fromImageProvider(
        FileImage(File(_customImagePath!)),
        maximumColorCount: 5,
      );
      final Color? dominant = palette.dominantColor?.color ?? palette.lightVibrantColor?.color ?? palette.darkVibrantColor?.color;
      if (dominant != null) {
        if (mounted) {
          setState(() {
            _isCustomImageLight = dominant.computeLuminance() > 0.5;
          });
        }
      }
    } catch (e) {
      debugPrint("Palette generation failed: $e");
    }
  }

  Future<void> _loadTheme() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _activeTheme = prefs.getString('theme') ?? 'ps5';
      _customImagePath = prefs.getString('custom_bg');
    });
    if (_activeTheme == 'custom') {
      _updateImagePalette();
    }
  }

  Future<void> _setTheme(String theme) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('theme', theme);
    setState(() {
      _activeTheme = theme;
    });
  }

  Future<void> _pickCustomBackground() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery);
    if (file != null) {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('custom_bg', file.path);
      await _setTheme('custom');
      setState(() {
        _customImagePath = file.path;
      });
      _updateImagePalette();
    }
  }

  Future<void> _removeCustomBackground() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('custom_bg');
    await _setTheme('ps5');
    setState(() {
      _customImagePath = null;
      _isCustomImageLight = false;
    });
  }

  Future<void> _initializeUpdateChecker() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final packageInfo = await PackageInfo.fromPlatform();
      final currentVersion = packageInfo.version;

      // 1. What's New Dialog (Option 3)
      final lastSeenVersion = prefs.getString('last_seen_version');
      if (lastSeenVersion != null && lastSeenVersion != currentVersion) {
        WidgetsBinding.instance.addPostFrameCallback((_) {
          _showWhatsNewDialog(currentVersion);
        });
      }
      await prefs.setString('last_seen_version', currentVersion);

      // 2. In-App Update Checker (Option 2)
      // Pointing to the raw Github version.json as a stable host for now
      final url = Uri.parse('https://raw.githubusercontent.com/Rushabh1697/controller-app/main/website/version.json');
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final latestVersion = data['latest_version'];
        final releaseNotes = data['release_notes'];
        final downloadUrl = data['download_url'];

        if (_isNewerVersion(currentVersion, latestVersion)) {
          WidgetsBinding.instance.addPostFrameCallback((_) {
            _showUpdateDialog(latestVersion, releaseNotes, downloadUrl);
          });
        }
      }
    } catch (e) {
      debugPrint("Update check failed: $e");
    }
  }

  bool _isNewerVersion(String current, String latest) {
    try {
      final currParts = current.split('.').map(int.parse).toList();
      final latestParts = latest.split('.').map(int.parse).toList();
      for (int i = 0; i < 3; i++) {
        if (latestParts[i] > currParts[i]) return true;
        if (latestParts[i] < currParts[i]) return false;
      }
    } catch (e) {
      return false; // Safely ignore parsing errors
    }
    return false;
  }

  void _showWhatsNewDialog(String version) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: const Color(0xFFF5F5F7),
        title: Text("What's New in v$version", style: const TextStyle(fontWeight: FontWeight.bold)),
        content: const Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("• Smooth Aiming: 100Hz Gyroscope polling"),
            Text("• Sensitivity Control: New Settings Gear Menu"),
            Text("• PS Mic Mute Button with orange LED feedback"),
            Text("• In-App Auto Update Checker"),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text("Awesome!", style: TextStyle(color: Color(0xFF00439C))),
          ),
        ],
      ),
    );
  }

  void _showUpdateDialog(String latest, String notes, String downloadUrl) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: const Color(0xFFF5F5F7),
        title: Text("Update Available: v$latest", style: const TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF00439C))),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text("A new version of GyroPad is ready!\n"),
            Text(notes, style: const TextStyle(color: Colors.black87)),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text("Later", style: TextStyle(color: Colors.grey)),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00439C)),
            onPressed: () {
              // Usually we'd use url_launcher here, but for now we just dismiss
              // since users can check the website directly.
              Navigator.pop(context);
            },
            child: const Text("Got it!", style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );
  }

  void _startSensors() {
    // ✅ Bug #11: store raw sensor values WITHOUT calling setState.
    // These are read only by _sendSampleToClient() on ping (~50 Hz), so
    // rebuilding the entire widget tree at ~100 Hz is wasteful and causes jank.
    _accelSub = accelerometerEventStream(samplingPeriod: const Duration(milliseconds: 10)).listen((event) {
      _lastAccel = event;  // no setState — UI doesn't need this directly
    });
    _gyroSub = gyroscopeEventStream(samplingPeriod: const Duration(milliseconds: 10)).listen((event) {
      _lastGyro = event;   // no setState — UI doesn't need this directly
    });
  }

  final Map<String, int> _failedAttempts = {}; // Bug #8: track failed auth attempts per IP

  Future<void> _startServer() async {
    try {
      _serverSocket = await ServerSocket.bind(
        InternetAddress.anyIPv4,
        _port,
        shared: true,  // Bug #5: SO_REUSEADDR — prevents EADDRINUSE on hot-restart
      );

      _serverSocket!.listen((Socket client) {
        // Bug #2/#11: Enforce single-client policy — reject if already connected
        if (_clients.isNotEmpty) {
          client.writeln('BUSY');
          client.close();
          return;
        }

        bool authenticated = false;
        // ✅ Bug #3: buffer incoming bytes per client.
        // TCP is a byte stream — there is no guarantee that "AUTH 1234\n" arrives
        // in a single data event. On Wi-Fi or Bluetooth PAN it can arrive as two
        // chunks (e.g. "AUTH 12" and "34\n"), causing AUTH to fail immediately.
        final StringBuffer clientBuffer = StringBuffer();
        final String clientIp = client.remoteAddress.address;

        client.listen((List<int> data) {
          clientBuffer.write(utf8.decode(data));
          String buffered = clientBuffer.toString();

          // Process all complete newline-terminated messages
          while (buffered.contains('\n')) {
            final int idx = buffered.indexOf('\n');
            final String message = buffered.substring(0, idx).trim();
            buffered = buffered.substring(idx + 1);

            if (!authenticated) {
              // Bug #8: Check lockout before processing auth
              final int attempts = _failedAttempts[clientIp] ?? 0;
              if (attempts >= 5) {
                client.writeln('LOCKED');
                client.close();
                return;
              }

              if (message == 'AUTH $_pin') {
                _failedAttempts.remove(clientIp);
                authenticated = true;
                client.writeln('AUTH_OK');
                setState(() { _clients.add(client); });
              } else {
                _failedAttempts[clientIp] = attempts + 1;
                // Bug #8: 500ms delay to rate-limit brute force
                Future.delayed(const Duration(milliseconds: 500), () {
                  try {
                    client.writeln('AUTH_FAIL');
                    client.close();
                  } catch (_) {}
                });
                return;
              }
            } else if (message.toLowerCase() == 'ping') {
              _sendSampleToClient(client);
            } else if (message.startsWith('VIB:')) {
              try {
                final int durationMs = int.parse(message.substring(4));
                Vibration.hasVibrator().then((hasVibrator) {
                  if (hasVibrator == true) {
                    if (durationMs == 0) {
                      Vibration.cancel();
                    } else if (_enableVibration) {
                      Vibration.vibrate(duration: durationMs);
                    }
                  }
                });
              } catch (_) {}
            }
          }

          // Keep any incomplete trailing bytes for the next event
          clientBuffer.clear();
          clientBuffer.write(buffered);
        }, onDone: () {
          // ✅ Bug #13: only setState if client was actually in the authenticated list
          if (_clients.contains(client)) {
            setState(() {
              _clients.remove(client);
              // ✅ Bug #5: reset stale touchpad accumulation when all clients disconnect
              if (_clients.isEmpty) {
                _touchpadDeltaX = 0.0;
                _touchpadDeltaY = 0.0;
              }
            });
          }
          client.close();
        }, onError: (error) {
          // ✅ Bug #13: same guard for error path
          if (_clients.contains(client)) {
            setState(() {
              _clients.remove(client);
              // ✅ Bug #5: reset stale touchpad accumulation when all clients disconnect
              if (_clients.isEmpty) {
                _touchpadDeltaX = 0.0;
                _touchpadDeltaY = 0.0;
              }
            });
          }
          client.close();
        });
      });
    } catch (e) {
      debugPrint('Server start failed: $e');
    }
  }

  void _sendSampleToClient(Socket client) {
    if (_lastAccel == null || _lastGyro == null) return;
    
    Map<String, dynamic> payload = {
      'timestamp_ms': DateTime.now().millisecondsSinceEpoch,
      'accel': [_lastAccel!.x * _gyroSensitivity, _lastAccel!.y * _gyroSensitivity, _lastAccel!.z * _gyroSensitivity],
      'gyro': [_lastGyro!.x * _gyroSensitivity, _lastGyro!.y * _gyroSensitivity, _lastGyro!.z * _gyroSensitivity],
      'buttons': _buttons,
      'joystick_left': {'x': _leftStickX, 'y': _leftStickY},
      'joystick_right': {'x': _rightStickX, 'y': _rightStickY},
      'touchpad_delta': {'x': _touchpadDeltaX, 'y': _touchpadDeltaY},
      'analog_triggers': _analogTriggers,
    };
    client.writeln(jsonEncode(payload));
    
    _touchpadDeltaX = 0.0;
    _touchpadDeltaY = 0.0;
  }

  @override
  void dispose() {
    _serverSocket?.close();
    for (var client in _clients) {
      client.close();
    }
    _accelSub?.cancel();
    _gyroSub?.cancel();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  // PS5 style Action Buttons (clear with grey icon)
  Widget _buildActionButton(String key, String symbol) {
    bool isPressed = _buttons[key]!;
    Color glowColor = const Color(0xFF00439C); // PS Blue

    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 50,
        height: 50,
        decoration: BoxDecoration(
          color: isPressed ? glowColor.withValues(alpha:  0.1) : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : Colors.white),
          shape: BoxShape.circle,
          border: Border.all(
            color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : Colors.grey.shade300),
            width: isPressed ? 2.5 : 1.0,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha:  0.3) : (_activeTheme == 'custom' ? Colors.black12.withValues(alpha: 0.05) : Colors.black12),
              blurRadius: isPressed ? 10 : 4,
              offset: isPressed ? Offset.zero : const Offset(2, 2),
            )
          ],
        ),
        child: Center(
          child: Text(
            symbol,
            style: TextStyle(
              color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white) : Colors.grey.shade600),
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }

  // PS5 Style D-Pad Buttons (clear/white with grey icon)
  Widget _buildDpadButton(String key, IconData iconData, {double? ang}) {
    bool isPressed = _buttons[key]!;
    Color glowColor = const Color(0xFF00439C);
    
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 45,
        height: 45,
        decoration: BoxDecoration(
          color: isPressed ? glowColor.withValues(alpha:  0.1) : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : Colors.white),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : Colors.grey.shade300),
            width: isPressed ? 2.0 : 1.0,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha:  0.3) : (_activeTheme == 'custom' ? Colors.transparent : Colors.black12),
              blurRadius: isPressed ? 10 : 4,
              offset: isPressed ? Offset.zero : const Offset(2, 2),
            )
          ],
        ),
        child: Center(
          child: Transform.rotate(
            angle: ang ?? 0,
            child: Icon(
              iconData,
              color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white) : Colors.grey.shade600),
              size: 28,
            ),
          ),
        ),
      ),
    );
  }

  // PS5 Thumbsticks (L3 / R3) - Dark grey, circular
  Widget _buildThumbstick(String key) {
    bool isPressed = _buttons[key]!;
    bool isLeft = key == 'L3';
    
    double stickX = isLeft ? _leftStickX : _rightStickX;
    double stickY = isLeft ? _leftStickY : _rightStickY;
    double maxOffset = 20.0;

    return GestureDetector(
      onPanUpdate: (details) {
        setState(() {
          double newX = stickX + details.delta.dx / maxOffset;
          double newY = stickY + details.delta.dy / maxOffset;
          
          double magnitude = sqrt(newX * newX + newY * newY);
          if (magnitude > 1.0) {
            newX /= magnitude;
            newY /= magnitude;
          }

          if (isLeft) {
            _leftStickX = newX;
            _leftStickY = newY;
          } else {
            _rightStickX = newX;
            _rightStickY = newY;
          }
        });
      },
      onPanEnd: (_) {
        setState(() {
          if (isLeft) {
            _leftStickX = 0.0;
            _leftStickY = 0.0;
          } else {
            _rightStickX = 0.0;
            _rightStickY = 0.0;
          }
          _buttons[key] = false;
        });
      },
      onPanCancel: () {
        setState(() {
          if (isLeft) {
            _leftStickX = 0.0;
            _leftStickY = 0.0;
          } else {
            _rightStickX = 0.0;
            _rightStickY = 0.0;
          }
          _buttons[key] = false;
        });
      },
      onTap: () {
        setState(() => _buttons[key] = true);
        Future.delayed(const Duration(milliseconds: 150), () {
          if (mounted) setState(() => _buttons[key] = false);
        });
      },
      onLongPressStart: (_) => setState(() => _buttons[key] = true),
      onLongPressEnd: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 80,
        height: 80,
        decoration: BoxDecoration(
          color: _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.1) : Colors.white.withValues(alpha: 0.1)) : const Color(0xFF2B2B2B),
          shape: BoxShape.circle,
          border: Border.all(
            color: isPressed ? const Color(0xFF00439C) : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : const Color(0xFF1E1E1E)),
            width: isPressed ? 3.0 : 2.0,
          ),
          boxShadow: [
            BoxShadow(
              color: _activeTheme == 'custom' ? Colors.transparent : Colors.black45,
              blurRadius: isPressed ? 4 : 10,
              offset: isPressed ? const Offset(1, 1) : const Offset(4, 4),
            ),
            if (isPressed)
              BoxShadow(
                color: const Color(0xFF00439C).withValues(alpha:  0.5),
                blurRadius: 15,
                spreadRadius: 2,
              )
          ],
        ),
        child: Center(
          child: Transform.translate(
            offset: Offset(stickX * maxOffset, stickY * maxOffset),
            child: Container(
              width: 60,
              height: 60,
              decoration: BoxDecoration(
                color: _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.2) : Colors.white.withValues(alpha: 0.2)) : const Color(0xFF353535),
                shape: BoxShape.circle,
                border: Border.all(color: _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.4) : Colors.white.withValues(alpha: 0.4)) : const Color(0xFF222222), width: 1),
              ),
              child: Center(
                child: Text(
                  key,
                  style: TextStyle(
                    color: _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white70) : Colors.white38,
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  // Shoulders L1/L2 R1/R2 (Top edges)
  Widget _buildShoulderButton(String key, String label, {bool isL2R2 = false, bool isLeft = true}) {
    bool isPressed = _buttons[key]!;
    Color glowColor = _activeTheme == 'xbox' ? const Color(0xFF107C10) : (_activeTheme == 'switch' ? (isLeft ? const Color(0xFF00A2D6) : const Color(0xFFE60012)) : const Color(0xFF00439C));
    
    // Fix L1/R1 being "greyed out" on white background
    Color btnColor = _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : (_activeTheme == 'ps5' ? (isL2R2 ? const Color(0xFFF5F5F7) : const Color(0xFFDDDDDD)) : const Color(0xFF222222));
    Color textColor = _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white) : (_activeTheme == 'ps5' ? Colors.black87 : Colors.white70);

    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 90,
        height: isL2R2 ? 40 : 35,
        decoration: BoxDecoration(
          color: isPressed ? glowColor.withValues(alpha: 0.3) : btnColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(isLeft ? (isL2R2 ? 16 : 8) : 4),
            topRight: Radius.circular(!isLeft ? (isL2R2 ? 16 : 8) : 4),
            bottomLeft: Radius.circular(isLeft ? 4 : 4),
            bottomRight: Radius.circular(!isLeft ? 4 : 4),
          ),
          border: Border.all(
            color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : (_activeTheme == 'ps5' ? Colors.black26 : Colors.white24)),
            width: isPressed ? 2.0 : 1.0,
          ),
        ),
        child: Center(
          child: Text(
            label,
            style: TextStyle(
              color: isPressed ? glowColor : textColor,
              fontSize: 14,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }

  // Touchpad (Center top)
  Widget _buildTouchpad() {
    bool isPressed = _buttons['Touchpad']!;
    Color glowColor = const Color(0xFF00439C);

    return Listener(
      onPointerDown: (_) => setState(() => _buttons['Touchpad'] = true),
      onPointerUp: (_) => setState(() => _buttons['Touchpad'] = false),
      onPointerCancel: (_) => setState(() => _buttons['Touchpad'] = false),
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onPanUpdate: (details) {
          _touchpadDeltaX += details.delta.dx;
          _touchpadDeltaY += details.delta.dy;
        },
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 50),
          width: MediaQuery.of(context).size.width * 0.4,
          constraints: const BoxConstraints(maxWidth: 400, minWidth: 200),
          height: 140,
          decoration: BoxDecoration(
            color: _activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.1) : Colors.white.withValues(alpha: 0.1)) : Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
              color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : Colors.grey.shade300),
              width: isPressed ? 3.0 : 1.5,
            ),
            boxShadow: [
              BoxShadow(
                color: isPressed ? glowColor.withValues(alpha:  0.4) : (_activeTheme == 'custom' ? Colors.transparent : Colors.black12),
                blurRadius: isPressed ? 20 : 6,
                spreadRadius: isPressed ? 2 : 0,
                offset: const Offset(0, 4),
              )
            ],
          ),
          child: Stack(
            children: [
              // Blue LED light bar around the top and sides of the touchpad
              Positioned(
                top: 0, left: 0, right: 0,
                child: Container(
                  height: 4,
                  decoration: BoxDecoration(
                    borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
                    color: isPressed ? glowColor : glowColor.withValues(alpha:  0.3),
                    boxShadow: [
                      BoxShadow(color: glowColor, blurRadius: isPressed ? 10 : 5, spreadRadius: 1)
                    ],
                  ),
                ),
              ),
              Center(
                child: Text(
                  'TOUCHPAD',
                  style: TextStyle(
                    color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black54 : Colors.white54) : Colors.grey.shade400),
                    fontSize: 12,
                    letterSpacing: 2,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // Share / Options Button
  Widget _buildSmallMenuButton(String key, IconData iconData) {
    bool isPressed = _buttons[key]!;
    Color glowColor = const Color(0xFF00439C);
    
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 18,
        height: 35,
        decoration: BoxDecoration(
          color: isPressed ? glowColor.withValues(alpha:  0.2) : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : Colors.white),
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3)) : Colors.grey.shade400),
            width: 1.5,
          ),
          boxShadow: [
            if (isPressed) BoxShadow(color: glowColor.withValues(alpha:  0.4), blurRadius: 6, spreadRadius: 1)
            else const BoxShadow(color: Colors.black12, blurRadius: 2, offset: Offset(1, 1))
          ],
        ),
        child: Center(
          child: Icon(iconData, size: 10, color: isPressed ? glowColor : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white) : Colors.grey.shade600)),
        ),
      ),
    );
  }

  // PS Button
  Widget _buildPSButton() {
    bool isPressed = _buttons['GP'] ?? _buttons['PS'] ?? false;
    return Listener(
      onPointerDown: (_) => setState(() {
        _buttons['GP'] = true;
        _buttons['PS'] = true;
      }),
      onPointerUp: (_) => setState(() {
        _buttons['GP'] = false;
        _buttons['PS'] = false;
      }),
      onPointerCancel: (_) => setState(() {
        _buttons['GP'] = false;
        _buttons['PS'] = false;
      }),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 40,
        height: 30,
        decoration: BoxDecoration(
          color: isPressed ? Colors.black87 : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : Colors.black),
          borderRadius: BorderRadius.circular(20),
          border: _activeTheme == 'custom' ? Border.all(color: _isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3), width: 1.5) : null,
          boxShadow: [
            BoxShadow(
              color: isPressed ? Colors.white54 : (_activeTheme == 'custom' ? Colors.transparent : Colors.black45),
              blurRadius: isPressed ? 10 : 4,
              offset: const Offset(0, 2),
            )
          ],
        ),
        child: Center(
          child: Text(
            'GP',
            style: TextStyle(
              color: isPressed ? Colors.white : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black87 : Colors.white) : Colors.white70),
              fontWeight: FontWeight.bold,
              fontSize: 12,
              letterSpacing: 1,
            ),
          ),
        ),
      ),
    );
  }

  // Mute Button (Microphone icon)
  Widget _buildMuteButton() {
    bool isPressed = _buttons['Mute'] ?? false;
    return Listener(
      onPointerDown: (_) => setState(() => _buttons['Mute'] = true),
      onPointerUp: (_) => setState(() => _buttons['Mute'] = false),
      onPointerCancel: (_) => setState(() => _buttons['Mute'] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 32,
        height: 14,
        decoration: BoxDecoration(
          color: isPressed ? Colors.orange.withValues(alpha:  0.9) : (_activeTheme == 'custom' ? (_isCustomImageLight ? Colors.black.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.15)) : Colors.black87),
          borderRadius: BorderRadius.circular(8),
          border: _activeTheme == 'custom' ? Border.all(color: _isCustomImageLight ? Colors.black.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.3), width: 1.0) : null,
          boxShadow: [
            if (isPressed)
              BoxShadow(color: Colors.orange.withValues(alpha:  0.6), blurRadius: 6, spreadRadius: 1)
            else
              BoxShadow(color: _activeTheme == 'custom' ? Colors.transparent : Colors.black45, blurRadius: 2, offset: const Offset(0, 1))
          ],
        ),
      ),
    );
  }

  Widget _buildDataRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(color: Colors.black54, fontSize: 12)),
          Text(value, style: const TextStyle(color: Colors.black87, fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  void _showSettingsDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              backgroundColor: const Color(0xFFF5F5F7),
              title: const Text('Controller Settings', style: TextStyle(fontWeight: FontWeight.bold)),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text('Gyroscope Sensitivity'),
                    Row(
                      children: [
                        const Text('0.5x'),
                        Expanded(
                          child: Slider(
                            value: _gyroSensitivity,
                            min: 0.5,
                            max: 5.0,
                            divisions: 45,
                            label: '${_gyroSensitivity.toStringAsFixed(1)}x',
                            activeColor: const Color(0xFF00439C),
                            onChanged: (val) {
                              setDialogState(() {
                                _gyroSensitivity = val;
                              });
                              setState(() {
                                _gyroSensitivity = val;
                              });
                            },
                          ),
                        ),
                        const Text('5.0x'),
                      ],
                    ),
                    const Divider(),
                    SwitchListTile(
                      title: const Text("Haptic Feedback (Rumble)"),
                      subtitle: const Text("Vibrate phone on in-game impacts"),
                      value: _enableVibration,
                      activeThumbColor: const Color(0xFF00439C),
                      contentPadding: EdgeInsets.zero,
                      onChanged: (val) {
                        setDialogState(() => _enableVibration = val);
                        setState(() => _enableVibration = val);
                        if (!val) {
                           Vibration.cancel();
                        }
                      },
                    ),
                    const Divider(),
                    SwitchListTile(
                      title: const Text("Hold & Ramp Triggers"),
                      subtitle: const Text("L2/R2 simulate analog press over 0.5s"),
                      value: _analogTriggers,
                      activeThumbColor: const Color(0xFF00439C),
                      contentPadding: EdgeInsets.zero,
                      onChanged: (val) {
                        setDialogState(() => _analogTriggers = val);
                        setState(() => _analogTriggers = val);
                      },
                    ),
                    const Divider(),
                    const Text("Controller Theme", style: TextStyle(fontWeight: FontWeight.bold)),
                    DropdownButton<String>(
                      value: _activeTheme,
                      isExpanded: true,
                      items: const [
                        DropdownMenuItem(value: 'ps5', child: Text('PS5 (Light)')),
                        DropdownMenuItem(value: 'xbox', child: Text('Xbox (Dark Green)')),
                        DropdownMenuItem(value: 'switch', child: Text('Switch (Neon Red/Blue)')),
                        DropdownMenuItem(value: 'custom', child: Text('Custom Background')),
                      ],
                      onChanged: (val) {
                        if (val != null) {
                          setDialogState(() => _activeTheme = val);
                          _setTheme(val);
                        }
                      },
                    ),
                    if (_activeTheme == 'custom')
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          ElevatedButton.icon(
                            onPressed: () {
                               _pickCustomBackground();
                               Navigator.pop(context);
                            },
                            icon: const Icon(Icons.image),
                            label: const Text("Pick Background Image"),
                          ),
                          if (_customImagePath != null)
                            OutlinedButton.icon(
                              onPressed: () {
                                _removeCustomBackground();
                                Navigator.pop(context);
                              },
                              icon: const Icon(Icons.delete, color: Colors.red),
                              label: const Text("Remove Background", style: TextStyle(color: Colors.red)),
                            ),
                        ],
                      ),
                  ],
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Close', style: TextStyle(color: Color(0xFF00439C))),
                ),
              ],
            );
          }
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    bool isConnected = _clients.isNotEmpty;

    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          color: _activeTheme == 'xbox' ? const Color(0xFF1E1E1E) : (_activeTheme == 'switch' ? const Color(0xFF2C2C2C) : null),
          gradient: (_activeTheme == 'ps5' || (_activeTheme == 'custom' && _customImagePath == null)) ? const RadialGradient(
            center: Alignment.center,
            radius: 1.5,
            colors: [Color(0xFFFFFFFF), Color(0xFFE2E2E6)],
          ) : null,
          image: (_activeTheme == 'custom' && _customImagePath != null) 
              ? DecorationImage(
                  image: FileImage(File(_customImagePath!)),
                  fit: BoxFit.cover,
                ) 
              : null,
        ),
        child: SafeArea(
          child: Stack(
            children: [
              // Top L1/L2 and R1/R2
              Positioned(
                top: 16,
                left: 32,
                child: Column(
                  children: [
                    _buildShoulderButton('L2', 'L2', isL2R2: true, isLeft: true),
                    const SizedBox(height: 4),
                    _buildShoulderButton('L1', 'L1', isLeft: true),
                  ],
                ),
              ),
              Positioned(
                top: 16,
                right: 32,
                child: Column(
                  children: [
                    _buildShoulderButton('R2', 'R2', isL2R2: true, isLeft: false),
                    const SizedBox(height: 4),
                    _buildShoulderButton('R1', 'R1', isLeft: false),
                  ],
                ),
              ),

              // Top Center Touchpad & Menu Buttons
              Positioned(
                top: 32,
                left: 0,
                right: 0,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Share (Create) Button
                    Padding(
                      padding: const EdgeInsets.only(top: 16.0, right: 16.0),
                      child: Transform.rotate(
                        angle: -0.2,
                        child: _buildSmallMenuButton('Share', Icons.menu_open), // Representing Create/Share
                      ),
                    ),
                    
                    // Touchpad
                    _buildTouchpad(),

                    // Options Button
                    Padding(
                      padding: const EdgeInsets.only(top: 16.0, left: 16.0),
                      child: Transform.rotate(
                        angle: 0.2,
                        child: _buildSmallMenuButton('Options', Icons.menu),
                      ),
                    ),
                  ],
                ),
              ),

              // Connection Indicator (replaces old debug toggle placement)
              Positioned(
                bottom: 16,
                left: 16,
                child: GestureDetector(
                  onTap: () => setState(() => _showDebug = !_showDebug),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: isConnected ? Colors.green.withValues(alpha:  0.1) : Colors.red.withValues(alpha:  0.1),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: isConnected ? Colors.green.withValues(alpha:  0.5) : Colors.red.withValues(alpha:  0.5)),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(isConnected ? Icons.check_circle : Icons.error, 
                             color: isConnected ? Colors.green : Colors.red, size: 14),
                        const SizedBox(width: 4),
                        Text(
                          isConnected ? 'CONNECTED' : 'DISCONNECTED (PIN: $_pin)',
                          style: TextStyle(
                            color: isConnected ? Colors.green : Colors.red,
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),

              // Debug Telemetry
              if (_showDebug)
                Positioned(
                  bottom: 50,
                  left: 16,
                  child: Container(
                    width: 200,
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha:  0.9),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.grey.shade300),
                      boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 10)],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text("TELEMETRY", style: TextStyle(color: Colors.black87, fontSize: 10, fontWeight: FontWeight.bold)),
                        const Divider(),
                        if (_lastAccel != null) ...[
                          _buildDataRow("A X", _lastAccel!.x.toStringAsFixed(2)),
                          _buildDataRow("A Y", _lastAccel!.y.toStringAsFixed(2)),
                          _buildDataRow("A Z", _lastAccel!.z.toStringAsFixed(2)),
                        ],
                      ],
                    ),
                  ),
                ),

              // Main Layout: D-Pad, Face Buttons, Thumbsticks, PS Button
              Positioned(
                bottom: 40,
                left: 0,
                right: 0,
                child: Padding(
                  padding: EdgeInsets.symmetric(
                    horizontal: max(16.0, MediaQuery.of(context).size.width * 0.05),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      // LEFT SIDE: D-Pad and L3 Thumbstick
                      SizedBox(
                        width: 140,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            // D-Pad
                            SizedBox(
                              width: 130,
                              height: 130,
                              child: Stack(
                                alignment: Alignment.center,
                                children: [
                                  Positioned(top: 0, child: _buildDpadButton('DpadUp', Icons.arrow_drop_up)),
                                  Positioned(bottom: 0, child: _buildDpadButton('DpadDown', Icons.arrow_drop_down)),
                                  Positioned(left: 0, child: _buildDpadButton('DpadLeft', Icons.arrow_left)),
                                  Positioned(right: 0, child: _buildDpadButton('DpadRight', Icons.arrow_right)),
                                ],
                              ),
                            ),
                            const SizedBox(height: 20),
                            // L3 Thumbstick — RepaintBoundary (Bug #15: limits rebuild propagation)
                            RepaintBoundary(child: _buildThumbstick('L3')),
                          ],
                        ),
                      ),

                      // CENTER: PS Button (Bottom Center) and Settings
                      Padding(
                        padding: const EdgeInsets.only(bottom: 20.0),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _buildPSButton(),
                            const SizedBox(height: 8),
                            _buildMuteButton(),
                            const SizedBox(height: 8),
                            IconButton(
                              icon: const Icon(Icons.settings, color: Colors.grey, size: 28),
                              onPressed: _showSettingsDialog,
                            ),
                          ],
                        ),
                      ),

                      // RIGHT SIDE: Face Buttons and R3 Thumbstick
                      SizedBox(
                        width: 140,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            // Action Buttons
                            SizedBox(
                              width: 130,
                              height: 130,
                              child: Stack(
                                alignment: Alignment.center,
                                children: [
                                  Positioned(top: 0, child: _buildActionButton('Triangle', '△')),
                                  Positioned(bottom: 0, child: _buildActionButton('Cross', '×')),
                                  Positioned(left: 0, child: _buildActionButton('Square', '□')),
                                  Positioned(right: 0, child: _buildActionButton('Circle', '○')),
                                ],
                              ),
                            ),
                            const SizedBox(height: 20),
                            // R3 Thumbstick — RepaintBoundary (Bug #15: limits rebuild propagation)
                            RepaintBoundary(child: _buildThumbstick('R3')),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
