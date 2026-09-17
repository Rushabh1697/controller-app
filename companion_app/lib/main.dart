import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

void main() {
  runApp(const CompanionApp());
}

class CompanionApp extends StatelessWidget {
  const CompanionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sensor Companion',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
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
  List<Socket> _clients = [];
  
  AccelerometerEvent? _lastAccel;
  GyroscopeEvent? _lastGyro;
  
  StreamSubscription<AccelerometerEvent>? _accelSub;
  StreamSubscription<GyroscopeEvent>? _gyroSub;

  int _port = 5050;
  bool _serverRunning = false;
  String _statusMessage = 'Server not started';

  @override
  void initState() {
    super.initState();
    _startServer();
    _startSensors();
  }

  void _startSensors() {
    _accelSub = accelerometerEventStream().listen((event) {
      setState(() {
        _lastAccel = event;
      });
      _broadcastSensorData();
    });

    _gyroSub = gyroscopeEventStream().listen((event) {
      setState(() {
        _lastGyro = event;
      });
      // We don't broadcast on both to avoid doubling rate, 
      // but accel rate usually dictates. 
      // Actually, for Phase 3, we just send a live sample on "ping".
    });
  }

  Future<void> _startServer() async {
    try {
      _serverSocket = await ServerSocket.bind(InternetAddress.anyIPv4, _port);
      setState(() {
        _serverRunning = true;
        _statusMessage = 'Listening on TCP port $_port...';
      });

      _serverSocket!.listen((Socket client) {
        setState(() {
          _clients.add(client);
          _statusMessage = 'Client connected: ${client.remoteAddress.address}:${client.remotePort}';
        });

        client.listen((List<int> data) {
          String message = utf8.decode(data).trim();
          if (message.toLowerCase() == 'ping') {
            _sendSampleToClient(client);
          }
        }, onDone: () {
          setState(() {
            _clients.remove(client);
            _statusMessage = 'Client disconnected';
          });
          client.close();
        }, onError: (error) {
          setState(() {
            _clients.remove(client);
            _statusMessage = 'Client error: $error';
          });
          client.close();
        });
      });
    } catch (e) {
      setState(() {
        _serverRunning = false;
        _statusMessage = 'Server error: $e';
      });
    }
  }

  void _sendSampleToClient(Socket client) {
    if (_lastAccel == null || _lastGyro == null) return;
    
    // Create a JSON payload
    Map<String, dynamic> payload = {
      'timestamp_ms': DateTime.now().millisecondsSinceEpoch,
      'accel': [_lastAccel!.x, _lastAccel!.y, _lastAccel!.z],
      'gyro': [_lastGyro!.x, _lastGyro!.y, _lastGyro!.z]
    };
    
    client.writeln(jsonEncode(payload));
  }

  void _broadcastSensorData() {
    // We only broadcast on Ping for Phase 3! So this is empty.
  }

  @override
  void dispose() {
    _serverSocket?.close();
    for (var client in _clients) {
      client.close();
    }
    _accelSub?.cancel();
    _gyroSub?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Companion App TCP Server'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Server Status:', style: Theme.of(context).textTheme.titleMedium),
            Text(_statusMessage, style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: _serverRunning ? Colors.green : Colors.red,
            )),
            const SizedBox(height: 20),
            Text('Live Sensors:', style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 10),
            Text('Accelerometer:'),
            if (_lastAccel != null)
              Text('X: ${_lastAccel!.x.toStringAsFixed(2)}, Y: ${_lastAccel!.y.toStringAsFixed(2)}, Z: ${_lastAccel!.z.toStringAsFixed(2)}')
            else
              const Text('Waiting for data...'),
            const SizedBox(height: 10),
            Text('Gyroscope:'),
            if (_lastGyro != null)
              Text('X: ${_lastGyro!.x.toStringAsFixed(2)}, Y: ${_lastGyro!.y.toStringAsFixed(2)}, Z: ${_lastGyro!.z.toStringAsFixed(2)}')
            else
              const Text('Waiting for data...'),
          ],
        ),
      ),
    );
  }
}
