# Sensor Detection

This document explains how Android's sensor framework works conceptually, and breaks down each relevant sensor type: what it measures, whether it's useful for a game controller, and — critically — what's achievable through ADB alone versus what needs a companion app.

## How Android Sensors Work (Conceptual Overview)

Android exposes sensors to apps through the `SensorManager` API. Sensors fall into two broad categories:

- **Hardware sensors** — backed directly by a physical chip (e.g. accelerometer, gyroscope, magnetometer, barometer, proximity, light).
- **Software/"virtual" sensors** — computed by Android by fusing one or more hardware sensors (e.g. Gravity, Linear Acceleration, Rotation Vector, Game Rotation Vector). These do not correspond to a single chip; they're algorithms running on top of raw hardware data.

Every sensor the device's sensor framework knows about — hardware or virtual — is registered with the system and can be enumerated. **Enumeration** (what sensors exist, and their static metadata) is a different problem from **reading values** (the live X/Y/Z numbers a sensor produces over time), and the two require different levels of access — this distinction drives every "ADB alone vs. companion app" answer below.

## Sensor Breakdown

| Sensor | What it measures | Typical unit | Useful for a game controller? | Available via Android API | Detectable via ADB alone | Reading live values requires companion app |
|---|---|---|---|---|---|---|
| **Accelerometer** | Combined force of gravity + device motion, per axis | m/s² | **Yes** — core input for motion/shake gestures | `TYPE_ACCELEROMETER` | ✅ Presence/metadata, via `dumpsys sensorservice` `[NEEDS VERIFICATION]` | ✅ Yes |
| **Gyroscope** | Angular velocity (rate of rotation), per axis | rad/s | **Yes — primary input for gyro aiming** | `TYPE_GYROSCOPE` | ✅ Presence/metadata `[NEEDS VERIFICATION]` | ✅ Yes |
| **Magnetometer** | Ambient magnetic field, per axis (compass heading) | µT | Limited — indirect, susceptible to interference | `TYPE_MAGNETIC_FIELD` | ✅ Presence/metadata `[NEEDS VERIFICATION]` | ✅ Yes |
| **Gravity** | Fused estimate of the gravity vector (software sensor) | m/s² | Moderate — smoother tilt reference than raw accelerometer | `TYPE_GRAVITY` (virtual) | ✅ If exposed `[NEEDS VERIFICATION]` | ✅ Yes |
| **Linear Acceleration** | Acceleration with gravity removed (software sensor) | m/s² | Moderate — useful for motion gestures without gravity bias | `TYPE_LINEAR_ACCELERATION` (virtual) | ✅ If exposed `[NEEDS VERIFICATION]` | ✅ Yes |
| **Rotation Vector** | Fused device orientation as a quaternion (accel+gyro+mag) | unitless (quaternion) | **High** — stable absolute orientation | `TYPE_ROTATION_VECTOR` (virtual) | ✅ If exposed `[NEEDS VERIFICATION]` | ✅ Yes |
| **Game Rotation Vector** | Like Rotation Vector, but without the magnetometer (not referenced to magnetic north) | unitless (quaternion) | **High — often preferred for gyro-aim**, immune to magnetic interference | `TYPE_GAME_ROTATION_VECTOR` (virtual) | ✅ If exposed `[NEEDS VERIFICATION]` | ✅ Yes |
| **Proximity** | Distance to a nearby object (often near-binary) | cm or near/far | Low — no clear controller use case | `TYPE_PROXIMITY` | ✅ Presence `[NEEDS VERIFICATION]` | ✅ Yes |
| **Light** | Ambient light level | lux | Low — not a controller input | `TYPE_LIGHT` | ✅ Presence `[NEEDS VERIFICATION]` | ✅ Yes |
| **Pressure / Barometer** | Atmospheric pressure | hPa | Low — niche (altitude estimation); not all phones have this hardware | `TYPE_PRESSURE` | ✅ Presence, if hardware exists `[NEEDS VERIFICATION]` | ✅ Yes |
| **Ambient Temperature** | Ambient air temperature | °C | None | `TYPE_AMBIENT_TEMPERATURE` | ✅ Presence, if exposed — this sensor is uncommon/often absent on modern phones `[NEEDS VERIFICATION]` | ✅ Yes |
| **Step Counter / Detector** | Step count / step events | steps | None for controller purposes | `TYPE_STEP_COUNTER` / `TYPE_STEP_DETECTOR` | ✅ Presence `[NEEDS VERIFICATION]` | ✅ Yes |
| **Uncalibrated variants** (Gyroscope, Accelerometer, Magnetic Field) | Raw sensor output including estimated bias, before calibration correction | matches base sensor unit | Low directly — relevant only for custom sensor-fusion work | `TYPE_*_UNCALIBRATED` | ✅ Presence, if exposed `[NEEDS VERIFICATION]` | ✅ Yes |
| **Significant Motion / Hinge Angle (foldables) / Heart Rate / Humidity** | Varies (motion events / fold angle / BPM / relative humidity) | Varies | None for a game controller | Various | ✅ Presence, if exposed and hardware-dependent `[NEEDS VERIFICATION]` | ✅ Yes |

### Notes on the "Useful for a game controller" column

For the eventual controller, **Gyroscope** (raw angular velocity) and **Game Rotation Vector** (fused, drift-resistant orientation) are the two strongest candidates for gyro-aim input, with **Accelerometer** and **Linear Acceleration** as secondary inputs for motion gestures (e.g. shake-to-reload, tilt steering in a racing game). This is a design note for later phases, not a Phase 1 concern — Phase 1 only needs to detect that these sensors exist.

## The Core Limitation: Presence vs. Live Values

This is worth stating plainly, because it shapes the entire roadmap:

> **ADB alone (via `adb shell dumpsys sensorservice`) can tell you *which* sensors exist and their static metadata** (name, vendor, version, and — when the OEM populates them — range, resolution, and power draw). **It cannot give you a continuous, real-time stream of sensor *values*.** There is no generic ADB shell command equivalent to "start streaming gyroscope X/Y/Z." Getting live values requires code running on the device that calls `SensorManager.registerListener()` — i.e., a companion Android app (Phase 3 onward).

Repeatedly polling `dumpsys sensorservice` to fake a live stream is **not** a good substitute: each `adb shell` invocation has process-spawn overhead (tens of milliseconds at best), the dump is a diagnostic snapshot rather than a designed data feed, and its content/format is not guaranteed to include current values at all, consistently, across Android versions and OEMs. This is why Phase 1 only claims "detect sensors," not "read sensors," and why the companion app is scheduled early (Phase 3) relative to the rest of the roadmap. See [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md#limitations-for-real-time-sensor-streaming) for the full explanation, and [`DEVELOPMENT_PLAN.md`](DEVELOPMENT_PLAN.md) for where the companion app fits in.
