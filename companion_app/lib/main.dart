import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sensors_plus/sensors_plus.dart';

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

  double _leftStickX = 0.0;
  double _leftStickY = 0.0;
  double _rightStickX = 0.0;
  double _rightStickY = 0.0;
  double _touchpadDeltaX = 0.0;
  double _touchpadDeltaY = 0.0;

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
  };

  String _pin = "";

  @override
  void initState() {
    super.initState();
    _pin = (1000 + Random().nextInt(9000)).toString();
    _startServer();
    _startSensors();
  }

  void _startSensors() {
    _accelSub = accelerometerEventStream().listen((event) {
      setState(() { _lastAccel = event; });
    });
    _gyroSub = gyroscopeEventStream().listen((event) {
      setState(() { _lastGyro = event; });
    });
  }

  Future<void> _startServer() async {
    try {
      _serverSocket = await ServerSocket.bind(InternetAddress.anyIPv4, _port);
      
      _serverSocket!.listen((Socket client) {
        bool authenticated = false;
        
        client.listen((List<int> data) {
          String message = utf8.decode(data).trim();
          
          if (!authenticated) {
            if (message == 'AUTH $_pin') {
              authenticated = true;
              client.writeln('AUTH_OK');
              setState(() { _clients.add(client); });
            } else {
              client.writeln('AUTH_FAIL');
              client.close();
            }
            return;
          }
          
          if (message.toLowerCase() == 'ping') {
            _sendSampleToClient(client);
          }
        }, onDone: () {
          setState(() { _clients.remove(client); });
          client.close();
        }, onError: (error) {
          setState(() { _clients.remove(client); });
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
      'accel': [_lastAccel!.x, _lastAccel!.y, _lastAccel!.z],
      'gyro': [_lastGyro!.x, _lastGyro!.y, _lastGyro!.z],
      'buttons': _buttons,
      'joystick_left': {'x': _leftStickX, 'y': _leftStickY},
      'joystick_right': {'x': _rightStickX, 'y': _rightStickY},
      'touchpad_delta': {'x': _touchpadDeltaX, 'y': _touchpadDeltaY},
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
          color: isPressed ? glowColor.withValues(alpha: 0.1) : Colors.white,
          shape: BoxShape.circle,
          border: Border.all(
            color: isPressed ? glowColor : Colors.grey.shade300,
            width: isPressed ? 2.5 : 1.0,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha: 0.3) : Colors.black12,
              blurRadius: isPressed ? 10 : 4,
              offset: isPressed ? Offset.zero : const Offset(2, 2),
            )
          ],
        ),
        child: Center(
          child: Text(
            symbol,
            style: TextStyle(
              color: isPressed ? glowColor : Colors.grey.shade600,
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
          color: isPressed ? glowColor.withValues(alpha: 0.1) : Colors.white,
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: isPressed ? glowColor : Colors.grey.shade300,
            width: isPressed ? 2.0 : 1.0,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha: 0.3) : Colors.black12,
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
              color: isPressed ? glowColor : Colors.grey.shade600,
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
      onTapDown: (_) => setState(() => _buttons[key] = true),
      onTapUp: (_) => setState(() => _buttons[key] = false),
      onTapCancel: () => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 80,
        height: 80,
        decoration: BoxDecoration(
          color: const Color(0xFF2B2B2B), // Dark grey thumbstick
          shape: BoxShape.circle,
          border: Border.all(
            color: isPressed ? const Color(0xFF00439C) : const Color(0xFF1E1E1E),
            width: isPressed ? 3.0 : 2.0,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black45,
              blurRadius: isPressed ? 4 : 10,
              offset: isPressed ? const Offset(1, 1) : const Offset(4, 4),
            ),
            if (isPressed)
              BoxShadow(
                color: const Color(0xFF00439C).withValues(alpha: 0.5),
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
                color: const Color(0xFF353535),
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFF222222), width: 1),
              ),
              child: Center(
                child: Text(
                  key,
                  style: const TextStyle(
                    color: Colors.white38,
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
    Color glowColor = const Color(0xFF00439C);
    
    return Listener(
      onPointerDown: (_) => setState(() => _buttons[key] = true),
      onPointerUp: (_) => setState(() => _buttons[key] = false),
      onPointerCancel: (_) => setState(() => _buttons[key] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: 90,
        height: isL2R2 ? 40 : 35,
        decoration: BoxDecoration(
          color: isPressed ? glowColor.withValues(alpha: 0.15) : (isL2R2 ? const Color(0xFFF5F5F7) : Colors.white),
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(isLeft ? (isL2R2 ? 16 : 8) : 4),
            topRight: Radius.circular(!isLeft ? (isL2R2 ? 16 : 8) : 4),
            bottomLeft: Radius.circular(isLeft ? 4 : 4),
            bottomRight: Radius.circular(!isLeft ? 4 : 4),
          ),
          border: Border.all(
            color: isPressed ? glowColor : Colors.grey.shade400,
            width: isPressed ? 2.0 : 1.0,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha: 0.3) : Colors.black12,
              blurRadius: isPressed ? 8 : 2,
              offset: const Offset(0, 2),
            )
          ],
        ),
        child: Center(
          child: Text(
            label,
            style: TextStyle(
              color: isPressed ? glowColor : Colors.grey.shade800,
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

    return GestureDetector(
      onPanUpdate: (details) {
        _touchpadDeltaX += details.delta.dx;
        _touchpadDeltaY += details.delta.dy;
      },
      onTapDown: (_) => setState(() => _buttons['Touchpad'] = true),
      onTapUp: (_) => setState(() => _buttons['Touchpad'] = false),
      onTapCancel: () => setState(() => _buttons['Touchpad'] = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 50),
        width: MediaQuery.of(context).size.width * 0.4,
        constraints: const BoxConstraints(maxWidth: 400, minWidth: 200),
        height: 140,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: isPressed ? glowColor : Colors.grey.shade300,
            width: isPressed ? 3.0 : 1.5,
          ),
          boxShadow: [
            BoxShadow(
              color: isPressed ? glowColor.withValues(alpha: 0.4) : Colors.black12,
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
                  color: isPressed ? glowColor : glowColor.withValues(alpha: 0.3),
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
                  color: isPressed ? glowColor : Colors.grey.shade400,
                  fontSize: 12,
                  letterSpacing: 2,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
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
          color: isPressed ? glowColor.withValues(alpha: 0.2) : Colors.white,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(
            color: isPressed ? glowColor : Colors.grey.shade400,
            width: 1.5,
          ),
          boxShadow: [
            if (isPressed) BoxShadow(color: glowColor.withValues(alpha: 0.4), blurRadius: 6, spreadRadius: 1)
            else const BoxShadow(color: Colors.black12, blurRadius: 2, offset: Offset(1, 1))
          ],
        ),
        child: Center(
          child: Icon(iconData, size: 10, color: isPressed ? glowColor : Colors.grey.shade600),
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
          color: isPressed ? Colors.black87 : Colors.black,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: isPressed ? Colors.white54 : Colors.black45,
              blurRadius: isPressed ? 10 : 4,
              offset: const Offset(0, 2),
            )
          ],
        ),
        child: Center(
          child: Text(
            'GP',
            style: TextStyle(
              color: isPressed ? Colors.white : Colors.white70,
              fontWeight: FontWeight.bold,
              fontSize: 12,
              letterSpacing: 1,
            ),
          ),
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

  @override
  Widget build(BuildContext context) {
    bool isConnected = _clients.isNotEmpty;

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: RadialGradient(
            center: Alignment.center,
            radius: 1.5,
            colors: [Color(0xFFFFFFFF), Color(0xFFE2E2E6)],
          ),
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
                      color: isConnected ? Colors.green.withValues(alpha: 0.1) : Colors.red.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: isConnected ? Colors.green.withValues(alpha: 0.5) : Colors.red.withValues(alpha: 0.5)),
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
                      color: Colors.white.withValues(alpha: 0.9),
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
                            // L3 Thumbstick
                            _buildThumbstick('L3'),
                          ],
                        ),
                      ),

                      // CENTER: PS Button (Bottom Center)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 20.0),
                        child: _buildPSButton(),
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
                            // R3 Thumbstick
                            _buildThumbstick('R3'),
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
