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


class LayoutItem {
  double x;
  double y;
  double size;
  double opacity;

  LayoutItem({required this.x, required this.y, this.size = 1.0, this.opacity = 1.0});

  Map<String, dynamic> toJson() => {'x': x, 'y': y, 'size': size, 'opacity': opacity};

  factory LayoutItem.fromJson(Map<String, dynamic> json) {
    return LayoutItem(
      x: (json['x'] as num).toDouble(),
      y: (json['y'] as num).toDouble(),
      size: (json['size'] as num?)?.toDouble() ?? 1.0,
      opacity: (json['opacity'] as num?)?.toDouble() ?? 1.0,
    );
  }
}

class CustomLayout {
  Map<String, LayoutItem> items;
  CustomLayout(this.items);

  Map<String, dynamic> toJson() => items.map((k, v) => MapEntry(k, v.toJson()));

  factory CustomLayout.fromJson(Map<String, dynamic> json) {
    Map<String, LayoutItem> items = {};
    json.forEach((k, v) {
      items[k] = LayoutItem.fromJson(v as Map<String, dynamic>);
    });
    return CustomLayout(items);
  }

  static CustomLayout createDefault() {
    return CustomLayout({
      'dpad': LayoutItem(x: 0.13, y: 0.47),
      'l3': LayoutItem(x: 0.13, y: 0.79),
      'face_buttons': LayoutItem(x: 0.87, y: 0.47),
      'r3': LayoutItem(x: 0.87, y: 0.79),
      'l1': LayoutItem(x: 0.09, y: 0.20),
      'l2': LayoutItem(x: 0.09, y: 0.09),
      'r1': LayoutItem(x: 0.91, y: 0.20),
      'r2': LayoutItem(x: 0.91, y: 0.09),
    });
  }

  static CustomLayout createRacingDefault() {
    return CustomLayout({
      'dpad': LayoutItem(x: 0.15, y: 0.60),
      'l3': LayoutItem(x: 0.25, y: 0.85, size: 0.6),
      'face_buttons': LayoutItem(x: 0.85, y: 0.60),
      'r3': LayoutItem(x: 0.75, y: 0.85, size: 0.6),
      'l1': LayoutItem(x: 0.10, y: 0.20),
      'l2': LayoutItem(x: 0.08, y: 0.50, size: 1.2),
      'r1': LayoutItem(x: 0.90, y: 0.20),
      'r2': LayoutItem(x: 0.92, y: 0.50, size: 1.2),
    });
  }
}

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

  // Steering Wheel Mode: gyro-integration based wide-range (±90°) steering
  bool _steeringWheelMode = false;
  double _wheelAngle = 0.0; // accumulated rotation in radians, clamped to ±π/2
  DateTime? _lastGyroTime; // timestamp of last gyro sample for Δt calculation
  Timer? _wheelUiTimer; // ~30 Hz UI refresh timer, active only in Steering Wheel Mode
  static const double _wheelMaxAngle = pi / 2; // ±90° = ±π/2 radians

  double _leftStickX = 0.0;
  double _leftStickY = 0.0;
  double _rightStickX = 0.0;
  double _rightStickY = 0.0;
  double _touchpadDeltaX = 0.0;
  double _touchpadDeltaY = 0.0;
  double _analogL2 = 0.0;
  double _analogR2 = 0.0;
  
  // Theme State
  String _activeTheme = 'ps5'; // ps5, xbox, switch, custom
  String? _customImagePath;
  bool _isCustomImageLight = false;

  // Custom Layouts State
  String _activePreset = 'default';
  final Map<String, CustomLayout> _layouts = {};


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
    _loadSettings();
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

  Future<void> _loadSettings() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _activeTheme = prefs.getString('theme') ?? 'ps5';
      _customImagePath = prefs.getString('custom_bg');
      _activePreset = prefs.getString('active_preset') ?? 'default';

      for (int i = 1; i <= 3; i++) {
        final String? layoutJson = prefs.getString('preset_$i');
        if (layoutJson != null) {
          try {
            var layout = CustomLayout.fromJson(jsonDecode(layoutJson));
            if (layout.items.containsKey('l_shoulders')) {
              var ls = layout.items['l_shoulders']!;
              layout.items['l1'] = LayoutItem(x: ls.x, y: ls.y, size: ls.size, opacity: ls.opacity);
              layout.items['l2'] = LayoutItem(x: ls.x, y: ls.y - 0.1, size: ls.size, opacity: ls.opacity);
              layout.items.remove('l_shoulders');
            }
            if (layout.items.containsKey('r_shoulders')) {
              var rs = layout.items['r_shoulders']!;
              layout.items['r1'] = LayoutItem(x: rs.x, y: rs.y, size: rs.size, opacity: rs.opacity);
              layout.items['r2'] = LayoutItem(x: rs.x, y: rs.y - 0.1, size: rs.size, opacity: rs.opacity);
              layout.items.remove('r_shoulders');
            }
            _layouts['preset_$i'] = layout;
          } catch (_) {
            _layouts['preset_$i'] = CustomLayout.createDefault();
          }
        } else {
          _layouts['preset_$i'] = CustomLayout.createDefault();
        }
      }

      final String? racingJson = prefs.getString('racing');
      if (racingJson != null) {
        try {
          _layouts['racing'] = CustomLayout.fromJson(jsonDecode(racingJson));
        } catch (_) {
          _layouts['racing'] = CustomLayout.createRacingDefault();
        }
      } else {
        _layouts['racing'] = CustomLayout.createRacingDefault();
      }
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
      _lastGyro = event; // no setState — UI doesn't need this directly
      // Steering Wheel Mode: integrate gyro Z (screen-normal axis = steering wheel spin axis)
      // Negate: clockwise rotation → negative gyro.z → positive (right) steering output
      if (_steeringWheelMode) {
        final now = DateTime.now();
        if (_lastGyroTime != null) {
          final double dt = now.difference(_lastGyroTime!).inMicroseconds / 1e6;
          // Sanity guard: ignore large Δt gaps (app backgrounded, first sample, etc.)
          if (dt > 0 && dt < 0.2) {
            double gz = event.z;
            // 0.03 rad/s deadzone to ignore static sensor noise and stop stationary drift
            if (gz.abs() < 0.03) gz = 0.0;
            _wheelAngle = (_wheelAngle - gz * dt).clamp(-_wheelMaxAngle, _wheelMaxAngle);
          }
        }
        _lastGyroTime = now;
      }
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
      // In Steering Wheel Mode, inject normalized gyro angle as joystick_left.x.
      // The PC host's joystick-override rule (abs(lx) > 0.01) then uses this
      // value for steering instead of the accelerometer — no Python changes needed.
      'joystick_left': {
        'x': _steeringWheelMode ? (_wheelAngle / _wheelMaxAngle) : _leftStickX,
        'y': _leftStickY,
      },
      'joystick_right': {'x': _rightStickX, 'y': _rightStickY},
      'touchpad_delta': {'x': _touchpadDeltaX, 'y': _touchpadDeltaY},
      'analog_triggers': _analogTriggers,
      'analog_l2': _analogL2,
      'analog_r2': _analogR2,
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
    _wheelUiTimer?.cancel();
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    super.dispose();
  }

  // PS5 style Action Buttons (clear with grey icon)
  Widget _buildDPadCluster() {
    return SizedBox(
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
    );
  }

  Widget _buildFaceButtonsCluster() {
    return SizedBox(
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
    );
  }

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
        // In Steering Wheel Mode, disable L3 drag to prevent accidental conflicts with gyro steering
        if (_steeringWheelMode && isLeft) return;
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
        if (_steeringWheelMode && isLeft) return;
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
        if (_steeringWheelMode && isLeft) return;
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
  void _updateAnalog(String key, double localDy, double height) {
    double val = 1.0 - (localDy / height);
    val = val.clamp(0.0, 1.0);
    setState(() {
      if (key == 'L2') _analogL2 = val;
      if (key == 'R2') _analogR2 = val;
    });
  }

  Widget _buildRacingPedal(String key, Color color, bool isLeft) {
    double analogVal = isLeft ? _analogL2 : _analogR2;
    return Listener(
      onPointerDown: (e) {
        setState(() => _buttons[key] = true);
        _updateAnalog(key, e.localPosition.dy, 200.0);
      },
      onPointerMove: (e) {
        _updateAnalog(key, e.localPosition.dy, 200.0);
      },
      onPointerUp: (e) {
        setState(() {
          _buttons[key] = false;
          if (isLeft) _analogL2 = 0.0; else _analogR2 = 0.0;
        });
      },
      onPointerCancel: (e) {
        setState(() {
          _buttons[key] = false;
          if (isLeft) _analogL2 = 0.0; else _analogR2 = 0.0;
        });
      },
      child: Container(
        width: 60,
        height: 200,
        decoration: BoxDecoration(
          color: Colors.black54,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.white24, width: 2),
        ),
        child: Stack(
          alignment: Alignment.bottomCenter,
          children: [
            Container(
              height: 200 * analogVal,
              decoration: BoxDecoration(
                color: color.withOpacity(0.8),
                borderRadius: BorderRadius.circular(10),
              ),
            ),
            Positioned(
              top: 10,
              child: Text(key, style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.bold)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPaddleShifter(String key, {required bool isLeft}) {
    bool isPressed = _buttons[key]!;
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 100,
        height: 60,
        decoration: BoxDecoration(
          color: isPressed ? Colors.orange.withOpacity(0.5) : Colors.black87,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(isLeft ? 30 : 8),
            bottomLeft: Radius.circular(isLeft ? 30 : 8),
            topRight: Radius.circular(!isLeft ? 30 : 8),
            bottomRight: Radius.circular(!isLeft ? 30 : 8),
          ),
          border: Border.all(color: isPressed ? Colors.orange : Colors.white30, width: 2),
        ),
        child: Center(
          child: Text(key, style: TextStyle(color: isPressed ? Colors.orange : Colors.white, fontWeight: FontWeight.bold, fontSize: 18)),
        ),
      ),
    );
  }

  Widget _buildRacingFaceButtons() {
    return SizedBox(
      width: 140,
      height: 140,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: 0, child: _buildRacingRoundBtn('Triangle', '△', Colors.green)),
          Positioned(bottom: 0, child: _buildRacingRoundBtn('Cross', '×', Colors.blue)),
          Positioned(left: 0, child: _buildRacingRoundBtn('Square', '□', Colors.red)),
          Positioned(right: 0, child: _buildRacingRoundBtn('Circle', '○', Colors.orange)),
        ],
      ),
    );
  }

  Widget _buildRacingRoundBtn(String key, String symbol, Color color) {
    bool isPressed = _buttons[key]!;
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: Container(
        width: 50,
        height: 50,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: isPressed ? color.withOpacity(0.8) : Colors.black87,
          border: Border.all(color: color, width: 2),
        ),
        child: Center(
          child: Text(symbol, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
        ),
      ),
    );
  }

  Widget _buildRacingDPad() {
    return SizedBox(
      width: 130,
      height: 130,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: 0, child: _buildRacingDpadBtn('DpadUp', Icons.arrow_drop_up)),
          Positioned(bottom: 0, child: _buildRacingDpadBtn('DpadDown', Icons.arrow_drop_down)),
          Positioned(left: 0, child: _buildRacingDpadBtn('DpadLeft', Icons.arrow_left)),
          Positioned(right: 0, child: _buildRacingDpadBtn('DpadRight', Icons.arrow_right)),
        ],
      ),
    );
  }

  Widget _buildRacingDpadBtn(String key, IconData icon) {
    bool isPressed = _buttons[key]!;
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: Container(
        width: 44,
        height: 44,
        decoration: BoxDecoration(
          color: isPressed ? Colors.white30 : Colors.black54,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(color: Colors.white24),
        ),
        child: Center(
          child: Icon(icon, color: Colors.white, size: 28),
        ),
      ),
    );
  }


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


  /// Steering Wheel arc indicator — shown at top-center when Steering Wheel Mode is active.
  /// Paints a semicircular arc from -90° to +90° with a live-updating needle.
  Widget _buildWheelIndicator() {
    final Color themeColor = _activeTheme == 'xbox'
        ? const Color(0xFF107C10)
        : (_activeTheme == 'switch'
            ? const Color(0xFF00A2D6)
            : const Color(0xFF00439C));

    final double degrees = (_wheelAngle * 180 / pi).abs();
    final String label = degrees < 2
        ? 'CENTER'
        : '${degrees.toStringAsFixed(0)}° ${_wheelAngle > 0 ? 'R' : 'L'}';

    return GestureDetector(
      onDoubleTap: () {
        setState(() {
          _wheelAngle = 0.0;
        });
      },
      child: SizedBox(
        width: 80,
        height: 48,
      child: Stack(
        alignment: Alignment.center,
        children: [
          CustomPaint(
            size: const Size(80, 48),
            painter: _WheelArcPainter(
              angle: _wheelAngle,
              maxAngle: _wheelMaxAngle,
              themeColor: themeColor,
            ),
          ),
          Positioned(
            bottom: 6,
            child: Text(
              label,
              style: TextStyle(
                color: themeColor,
                fontSize: 8,
                fontWeight: FontWeight.bold,
                letterSpacing: 0.5,
              ),
            ),
          ),
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
      useSafeArea: false,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return Dialog.fullscreen(
              backgroundColor: const Color(0xFFF5F5F7),
              child: Scaffold(
                backgroundColor: const Color(0xFFF5F5F7),
                appBar: AppBar(
                  backgroundColor: const Color(0xFFF5F5F7),
                  title: const Text('Controller Settings', style: TextStyle(fontWeight: FontWeight.bold)),
                  leading: IconButton(
                    icon: const Icon(Icons.close),
                    onPressed: () => Navigator.pop(context),
                  ),
                ),
                body: SingleChildScrollView(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
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
                    SwitchListTile(
                      title: const Text("Steering Wheel Mode"),
                      subtitle: const Text("Gyro-based ±90° rotation for ETS2 & racing"),
                      value: _steeringWheelMode,
                      activeThumbColor: const Color(0xFF00439C),
                      contentPadding: EdgeInsets.zero,
                      onChanged: (val) {
                        setDialogState(() => _steeringWheelMode = val);
                        setState(() {
                          _steeringWheelMode = val;
                          _lastGyroTime = null;
                          _wheelAngle = 0.0; // Start at center to avoid camera bump offset
                        });
                        if (val) {
                          // Start 30 Hz UI timer to repaint the arc indicator
                          _wheelUiTimer?.cancel();
                          _wheelUiTimer = Timer.periodic(
                            const Duration(milliseconds: 33),
                            (_) { if (mounted) setState(() {}); },
                          );
                        } else {
                          _wheelUiTimer?.cancel();
                          _wheelUiTimer = null;
                        }
                      },
                    ),
                    const Divider(),
                    ListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text("Custom Layouts", style: TextStyle(fontWeight: FontWeight.bold)),
                      subtitle: const Text("Edit controls position, size, and opacity"),
                      trailing: const Icon(Icons.edit, color: Color(0xFF00439C)),
                      onTap: () {
                        Navigator.pop(context);
                        Navigator.push(context, MaterialPageRoute(builder: (_) => LayoutEditorScreen(
                          initialPreset: _activePreset,
                          layouts: _layouts,
                          actualWidgets: {
                            'dpad': _buildDPadCluster(),
                            'face_buttons': _buildFaceButtonsCluster(),
                            'l3': RepaintBoundary(child: _buildThumbstick('L3')),
                            'r3': RepaintBoundary(child: _buildThumbstick('R3')),
                            'l1': _buildShoulderButton('L1', 'L1', isLeft: true),
                            'l2': _buildShoulderButton('L2', 'L2', isL2R2: true, isLeft: true),
                            'r1': _buildShoulderButton('R1', 'R1', isLeft: false),
                            'r2': _buildShoulderButton('R2', 'R2', isL2R2: true, isLeft: false),
                          },
                          racingWidgets: {
                            'dpad': _buildRacingDPad(),
                            'face_buttons': _buildRacingFaceButtons(),
                            'l3': RepaintBoundary(child: _buildThumbstick('L3')),
                            'r3': RepaintBoundary(child: _buildThumbstick('R3')),
                            'l1': _buildPaddleShifter('L1', isLeft: true),
                            'l2': _buildRacingPedal('L2', Colors.red, true),
                            'r1': _buildPaddleShifter('R1', isLeft: false),
                            'r2': _buildRacingPedal('R2', Colors.green, false),
                          },
                          onSave: (preset, layout) async {
                            final prefs = await SharedPreferences.getInstance();
                            setState(() {
                              _activePreset = preset;
                              _layouts[preset] = layout;
                              
                              if (preset == 'racing' && !_steeringWheelMode) {
                                _steeringWheelMode = true;
                                _lastGyroTime = null;
                                _wheelAngle = 0.0;
                                _wheelUiTimer?.cancel();
                                _wheelUiTimer = Timer.periodic(
                                  const Duration(milliseconds: 33),
                                  (_) { if (mounted) setState(() {}); },
                                );
                              }
                            });
                            await prefs.setString('active_preset', preset);
                            await prefs.setString(preset, jsonEncode(layout.toJson()));
                            await prefs.setBool('steering_wheel_mode', _steeringWheelMode);
                          },
                        )));
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
            ),
          );
          }
        );
      },
    );
  }


  Widget _buildCustomLayoutOverlay() {
    final layout = _layouts[_activePreset] ?? CustomLayout.createDefault();
    final size = MediaQuery.of(context).size;
    
    Widget positionItem(String key, Widget child) {
      final item = layout.items[key] ?? LayoutItem(x: 0.5, y: 0.5);
      return Positioned(
        left: item.x * size.width,
        top: item.y * size.height,
        child: FractionalTranslation(
          translation: const Offset(-0.5, -0.5),
          child: Opacity(
            opacity: item.opacity,
            child: Transform.scale(
              scale: item.size,
              child: child,
            ),
          ),
        ),
      );
    }
    
    if (_activePreset == 'racing') {
      return Stack(
        children: [
          positionItem('l2', _buildRacingPedal('L2', Colors.red, true)),
          positionItem('l1', _buildPaddleShifter('L1', isLeft: true)),
          positionItem('r2', _buildRacingPedal('R2', Colors.green, false)),
          positionItem('r1', _buildPaddleShifter('R1', isLeft: false)),
          positionItem('dpad', _buildRacingDPad()),
          positionItem('l3', RepaintBoundary(child: _buildThumbstick('L3'))),
          positionItem('face_buttons', _buildRacingFaceButtons()),
          positionItem('r3', RepaintBoundary(child: _buildThumbstick('R3'))),
        ],
      );
    }
    
    return Stack(
      children: [
        positionItem('l2', _buildShoulderButton('L2', 'L2', isL2R2: true, isLeft: true)),
        positionItem('l1', _buildShoulderButton('L1', 'L1', isLeft: true)),
        positionItem('r2', _buildShoulderButton('R2', 'R2', isL2R2: true, isLeft: false)),
        positionItem('r1', _buildShoulderButton('R1', 'R1', isLeft: false)),
        positionItem('dpad', _buildDPadCluster()),
        positionItem('l3', RepaintBoundary(child: _buildThumbstick('L3'))),
        positionItem('face_buttons', _buildFaceButtonsCluster()),
        positionItem('r3', RepaintBoundary(child: _buildThumbstick('R3'))),
      ],
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
        child: Stack(
            children: [
              // Top L1/L2 and R1/R2
              if (_activePreset == 'default')
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
              if (_activePreset == 'default')
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
                top: _steeringWheelMode ? 56 : 32,
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

              // Steering Wheel Mode arc indicator — top center between shoulder buttons
              if (_steeringWheelMode)
                Positioned(
                  top: 6,
                  left: 0,
                  right: 0,
                  child: Center(child: _buildWheelIndicator()),
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

              if (_activePreset != 'default')
                _buildCustomLayoutOverlay(),
                
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
                            if (_activePreset == 'default') _buildDPadCluster(),
                            const SizedBox(height: 20),
                            // L3 Thumbstick — RepaintBoundary (Bug #15: limits rebuild propagation)
                            if (_activePreset == 'default') RepaintBoundary(child: _buildThumbstick('L3')),
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
                            if (_activePreset == 'default') _buildFaceButtonsCluster(),
                            const SizedBox(height: 20),
                            // R3 Thumbstick — RepaintBoundary (Bug #15: limits rebuild propagation)
                            if (_activePreset == 'default') RepaintBoundary(child: _buildThumbstick('R3')),
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
    );
  }
}

/// CustomPainter for the Steering Wheel Mode arc indicator.
///
/// Geometry (widget: 80×48, arc center at bottom-center):
///   - Background arc: top semicircle (left → up → right = 180° sweep clockwise from π)
///   - Needle: line from center to arc at current [angle]
///   - Center dot: small filled circle
///
/// Canvas angle mapping (Flutter: 0=right, π/2=down, π=left, 3π/2=up):
///   - wheelAngle = 0      → canvas -π/2  (straight up)
///   - wheelAngle = +π/2   → canvas  0    (full right)
///   - wheelAngle = -π/2   → canvas  π    (full left)
class _WheelArcPainter extends CustomPainter {
  final double angle;    // current wheel angle in radians, ∈ [-maxAngle, maxAngle]
  final double maxAngle; // ±π/2
  final Color themeColor;

  const _WheelArcPainter({
    required this.angle,
    required this.maxAngle,
    required this.themeColor,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final cx = size.width / 2;
    final cy = size.height - 6.0; // arc center sits near the bottom edge
    final center = Offset(cx, cy);
    final radius = cx - 5.0;

    // ── Background arc: top semicircle ──────────────────────────────────────
    // startAngle=π (left / 9 o'clock), sweepAngle=π clockwise → reaches 3π/2
    // (top/12 o'clock) then continues to 0 (right/3 o'clock). That is the
    // top half of the circle.
    final bgPaint = Paint()
      ..color = Colors.white.withValues(alpha: 0.30)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3.0
      ..strokeCap = StrokeCap.round;

    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      pi,  // start at left (9 o'clock)
      pi,  // sweep clockwise 180° → passes through top → ends at right
      false,
      bgPaint,
    );

    // ── Center tick mark (straight-ahead indicator) ─────────────────────────
    final tickPaint = Paint()
      ..color = Colors.white.withValues(alpha: 0.55)
      ..strokeWidth = 1.5
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(
      Offset(cx, cy - radius - 4),
      Offset(cx, cy - radius + 5),
      tickPaint,
    );

    // ── Needle ───────────────────────────────────────────────────────────────
    // Canvas angle for needle: wheelAngle=0 → up (-π/2), ±π/2 → right/left
    final double canvasAngle = -pi / 2 + angle;
    final needleEnd = Offset(
      cx + radius * cos(canvasAngle),
      cy + radius * sin(canvasAngle),
    );

    final needlePaint = Paint()
      ..color = themeColor
      ..strokeWidth = 2.5
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(center, needleEnd, needlePaint);

    // ── Center dot ───────────────────────────────────────────────────────────
    canvas.drawCircle(center, 3.5, Paint()..color = themeColor);
  }

  @override
  bool shouldRepaint(_WheelArcPainter old) =>
      old.angle != angle || old.themeColor != themeColor;
}


class LayoutEditorScreen extends StatefulWidget {
  final String initialPreset;
  final Map<String, CustomLayout> layouts;
  final Map<String, Widget> actualWidgets;
  final Map<String, Widget> racingWidgets;
  final Function(String preset, CustomLayout layout) onSave;

  const LayoutEditorScreen({super.key, required this.initialPreset, required this.layouts, required this.actualWidgets, required this.racingWidgets, required this.onSave});

  @override
  State<LayoutEditorScreen> createState() => _LayoutEditorScreenState();
}

class _LayoutEditorScreenState extends State<LayoutEditorScreen> {
  late String _activePreset;
  late CustomLayout _currentLayout;
  String? _selectedKey;
  bool _linkShoulders = false;
  Map<String, String> _presetNames = {
    'preset_1': 'Preset 1',
    'preset_2': 'Preset 2',
    'preset_3': 'Preset 3',
    'racing': 'F1 Racing',
  };

  @override
  void initState() {
    super.initState();
    _activePreset = widget.initialPreset == 'default' ? 'preset_1' : widget.initialPreset;
    _currentLayout = CustomLayout.fromJson(widget.layouts[_activePreset]?.toJson() ?? CustomLayout.createDefault().toJson());
    _loadPresetNames();
  }

  Future<void> _loadPresetNames() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _presetNames['preset_1'] = prefs.getString('preset_1_name') ?? 'Preset 1';
      _presetNames['preset_2'] = prefs.getString('preset_2_name') ?? 'Preset 2';
      _presetNames['preset_3'] = prefs.getString('preset_3_name') ?? 'Preset 3';
      _presetNames['racing'] = prefs.getString('racing_name') ?? 'F1 Racing';
    });
  }

  void _renamePreset() {
    TextEditingController controller = TextEditingController(text: _presetNames[_activePreset]);
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text("Rename Preset"),
        content: TextField(
          controller: controller,
          decoration: const InputDecoration(hintText: "Preset Name"),
          autofocus: true,
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text("Cancel")),
          TextButton(
            onPressed: () async {
              String newName = controller.text.trim();
              if (newName.isNotEmpty) {
                final prefs = await SharedPreferences.getInstance();
                await prefs.setString('${_activePreset}_name', newName);
                setState(() {
                  _presetNames[_activePreset] = newName;
                });
              }
              if (context.mounted) Navigator.pop(context);
            },
            child: const Text("Save"),
          ),
        ],
      ),
    );
  }

  void _switchPreset(String preset) {
    if (preset == 'default') return; // Cannot edit default
    setState(() {
      _activePreset = preset;
      var def = preset == 'racing' ? CustomLayout.createRacingDefault() : CustomLayout.createDefault();
      _currentLayout = CustomLayout.fromJson(widget.layouts[preset]?.toJson() ?? def.toJson());
      _selectedKey = null;
    });
  }

  Future<bool> _onWillPop() async {
    return await showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Discard Changes?'),
        content: const Text('If you go back without saving, your changes will be lost.'),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.of(context).pop(true), child: const Text('Discard', style: TextStyle(color: Colors.red))),
        ],
      ),
    ) ?? false;
  }

  void _save() {
    widget.onSave(_activePreset, _currentLayout);
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Layout saved successfully!')));
    Navigator.pop(context);
  }

  Widget _buildEditorItem(String key) {
    final item = _currentLayout.items[key] ?? LayoutItem(x: 0.5, y: 0.5);
    final size = MediaQuery.of(context).size;
    final isSelected = _selectedKey == key;
    
    final bool isRacing = _activePreset == 'racing';
    final activeWidgets = isRacing ? widget.racingWidgets : widget.actualWidgets;
    final actualWidget = activeWidgets[key] ?? const SizedBox(width: 130, height: 130);

    return Positioned(
      left: item.x * size.width,
      top: item.y * size.height,
      child: FractionalTranslation(
        translation: const Offset(-0.5, -0.5),
        child: GestureDetector(
          onTap: () {
            setState(() {
              _selectedKey = isSelected ? null : key;
            });
          },
          onPanUpdate: (details) {
            setState(() {
              _selectedKey = key;
              double dx = details.delta.dx / size.width;
              double dy = details.delta.dy / size.height;
              item.x = (item.x + dx).clamp(0.0, 1.0);
              item.y = (item.y + dy).clamp(0.0, 1.0);

              if (_linkShoulders) {
                if (key == 'l1' || key == 'l2') {
                  String linkedKey = key == 'l1' ? 'l2' : 'l1';
                  if (_currentLayout.items.containsKey(linkedKey)) {
                    _currentLayout.items[linkedKey]!.x = (_currentLayout.items[linkedKey]!.x + dx).clamp(0.0, 1.0);
                    _currentLayout.items[linkedKey]!.y = (_currentLayout.items[linkedKey]!.y + dy).clamp(0.0, 1.0);
                  }
                } else if (key == 'r1' || key == 'r2') {
                  String linkedKey = key == 'r1' ? 'r2' : 'r1';
                  if (_currentLayout.items.containsKey(linkedKey)) {
                    _currentLayout.items[linkedKey]!.x = (_currentLayout.items[linkedKey]!.x + dx).clamp(0.0, 1.0);
                    _currentLayout.items[linkedKey]!.y = (_currentLayout.items[linkedKey]!.y + dy).clamp(0.0, 1.0);
                  }
                }
              }
            });
          },
          child: Opacity(
            opacity: item.opacity,
            child: Transform.scale(
              scale: item.size,
              child: Container(
                decoration: BoxDecoration(
                  border: isSelected ? Border.all(color: Colors.yellowAccent, width: 3 / item.size) : Border.all(color: Colors.transparent),
                ),
                // Ignore pointer events on the actual widget so gestures fall through to the editor's GestureDetector
                child: IgnorePointer(
                  child: actualWidget,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, result) async {
        if (didPop) return;
        if (await _onWillPop()) {
          if (context.mounted) {
            Navigator.pop(context);
          }
        }
      },
      child: Scaffold(
        backgroundColor: const Color(0xFF222222),
        body: Stack(
            children: [
              _buildEditorItem('dpad'),
              _buildEditorItem('face_buttons'),
              _buildEditorItem('l3'),
              _buildEditorItem('r3'),
              _buildEditorItem('l1'),
              _buildEditorItem('l2'),
              _buildEditorItem('r1'),
              _buildEditorItem('r2'),
              
              Align(
                alignment: Alignment.center,
                child: Container(
                    decoration: BoxDecoration(
                      color: Colors.black87.withValues(alpha: 0.9),
                      borderRadius: BorderRadius.circular(30),
                      border: Border.all(color: Colors.white24, width: 1),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          icon: const Icon(Icons.arrow_back, color: Colors.white, size: 20),
                          visualDensity: VisualDensity.compact,
                          onPressed: () async {
                            if (await _onWillPop()) {
                              if (context.mounted) Navigator.pop(context);
                            }
                          }
                        ),
                        const SizedBox(width: 8),
                        DropdownButton<String>(
                          value: _activePreset,
                          dropdownColor: Colors.black87,
                          style: const TextStyle(color: Colors.white, fontSize: 13),
                          iconSize: 18,
                          isDense: true,
                          underline: const SizedBox(),
                          items: [
                            DropdownMenuItem(value: 'preset_1', child: Text(_presetNames['preset_1']!)),
                            DropdownMenuItem(value: 'preset_2', child: Text(_presetNames['preset_2']!)),
                            DropdownMenuItem(value: 'preset_3', child: Text(_presetNames['preset_3']!)),
                            DropdownMenuItem(value: 'racing', child: Text(_presetNames['racing']!)),
                          ],
                          onChanged: (val) {
                            if (val != null) _switchPreset(val);
                          },
                        ),
                        IconButton(
                          icon: const Icon(Icons.edit, color: Colors.white70, size: 16),
                          visualDensity: VisualDensity.compact,
                          tooltip: 'Rename Preset',
                          onPressed: _renamePreset,
                        ),
                        const SizedBox(width: 12),
                        ElevatedButton.icon(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFF00439C), 
                            foregroundColor: Colors.white,
                            visualDensity: VisualDensity.compact,
                            padding: const EdgeInsets.symmetric(horizontal: 12),
                          ),
                          icon: const Icon(Icons.save, size: 16),
                          label: const Text("Save", style: TextStyle(fontSize: 12)),
                          onPressed: _save,
                        ),
                        const SizedBox(width: 8),
                        IconButton(
                          icon: Icon(_linkShoulders ? Icons.link : Icons.link_off, color: _linkShoulders ? Colors.blueAccent : Colors.white70, size: 20),
                          visualDensity: VisualDensity.compact,
                          tooltip: 'Link L1/L2 and R1/R2',
                          onPressed: () {
                            setState(() {
                              _linkShoulders = !_linkShoulders;
                            });
                          },
                        ),
                        const SizedBox(width: 8),
                        OutlinedButton.icon(
                          style: OutlinedButton.styleFrom(
                            foregroundColor: Colors.white, 
                            side: const BorderSide(color: Colors.white54),
                            visualDensity: VisualDensity.compact,
                            padding: const EdgeInsets.symmetric(horizontal: 12),
                          ),
                          icon: const Icon(Icons.refresh, size: 16),
                          label: const Text("Reset", style: TextStyle(fontSize: 12)),
                          onPressed: () {
                             setState(() {
                               _currentLayout = CustomLayout.createDefault();
                               _selectedKey = null;
                             });
                          },
                        ),
                      ],
                    ),
                  ),
                ),

              if (_selectedKey != null)
                Positioned(
                  bottom: 20,
                  left: MediaQuery.of(context).size.width / 2 - 150,
                  child: Container(
                    width: 300,
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.black87,
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: Colors.white24),
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text("Edit ${_selectedKey!.toUpperCase()}", style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Icon(Icons.format_size, color: Colors.white70, size: 20),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Slider(
                                value: _currentLayout.items[_selectedKey!]?.size ?? 1.0,
                                min: 0.5,
                                max: 2.0,
                                activeColor: Colors.blueAccent,
                                onChanged: (val) {
                                  setState(() {
                                    _currentLayout.items[_selectedKey!]!.size = val;
                                    if (_linkShoulders) {
                                      if (_selectedKey == 'l1' || _selectedKey == 'l2') {
                                        String linkedKey = _selectedKey == 'l1' ? 'l2' : 'l1';
                                        if (_currentLayout.items.containsKey(linkedKey)) _currentLayout.items[linkedKey]!.size = val;
                                      } else if (_selectedKey == 'r1' || _selectedKey == 'r2') {
                                        String linkedKey = _selectedKey == 'r1' ? 'r2' : 'r1';
                                        if (_currentLayout.items.containsKey(linkedKey)) _currentLayout.items[linkedKey]!.size = val;
                                      }
                                    }
                                  });
                                },
                              ),
                            ),
                          ],
                        ),
                        Row(
                          children: [
                            const Icon(Icons.opacity, color: Colors.white70, size: 20),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Slider(
                                value: _currentLayout.items[_selectedKey!]?.opacity ?? 1.0,
                                min: 0.1,
                                max: 1.0,
                                activeColor: Colors.blueAccent,
                                onChanged: (val) {
                                  setState(() {
                                    _currentLayout.items[_selectedKey!]!.opacity = val;
                                    if (_linkShoulders) {
                                      if (_selectedKey == 'l1' || _selectedKey == 'l2') {
                                        String linkedKey = _selectedKey == 'l1' ? 'l2' : 'l1';
                                        if (_currentLayout.items.containsKey(linkedKey)) _currentLayout.items[linkedKey]!.opacity = val;
                                      } else if (_selectedKey == 'r1' || _selectedKey == 'r2') {
                                        String linkedKey = _selectedKey == 'r1' ? 'r2' : 'r1';
                                        if (_currentLayout.items.containsKey(linkedKey)) _currentLayout.items[linkedKey]!.opacity = val;
                                      }
                                    }
                                  });
                                },
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
            ],
          ),
      ),
    );
  }
}
