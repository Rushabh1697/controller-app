# Development Plan

A step-by-step roadmap from zero to the full wireless controller. Each phase has a clear goal, a deliverable, and an acceptance test — so each phase can be verified independently before moving on.

## Phase 0 — Environment Setup

**Goal:** Prove the raw USB/ADB link works before writing any project code.

- Install Android SDK Platform Tools; add to `PATH`.
- Enable Developer Options + USB debugging on the phone.
- Connect via USB, accept the authorization prompt.
- Run `adb devices` manually.

**Acceptance:** `adb devices` lists the phone's serial with state `device`.

## Phase 1 — Device Detection (this repo's initial code target)

**Goal:** A Python CLI that detects and identifies the phone.

- Set up Python project structure (per [`ARCHITECTURE.md`](ARCHITECTURE.md)'s layering: UI / service / data model / transport).
- Implement `AdbTransport` with `list_devices()` and `get_device_info()`.
- Implement device detection: single device, multiple devices, no device, unauthorized.
- Print manufacturer, model, Android version, SDK level, ABI.

**Acceptance:** Output matches what's shown in the phone's own Settings → About phone screen.

## Phase 2 — Sensor Detection

**Goal:** Enumerate sensors and render the static Terminal UI.

- Implement `get_sensor_dump()` in `AdbTransport`.
- Write a defensive parser for `dumpsys sensorservice` output → `Sensor[]` (per [`DATA_MODEL.md`](DATA_MODEL.md)).
- Render the ✓/✗ sensor checklist from [`TERMINAL_UI.md`](TERMINAL_UI.md).

**Acceptance:** Sensor list matches what a trusted third-party sensor-listing app on the phone reports (manual cross-check — flag any mismatch as `NEEDS VERIFICATION` and investigate the parser).

## Phase 3 — Android Companion Application

**Goal:** Establish the first piece of on-device code, proving live sensor access is reachable from the laptop.

- Decide companion app framework (Flutter vs. native Kotlin — not yet decided, see [`README.md`](README.md#technology-choices-not-yet-finalized)).
- Minimal app: lists sensors via `SensorManager`, opens a local TCP server.
- Laptop: `adb forward` to reach that server; send a "ping," receive one live sample back.

**Acceptance:** Laptop receives one real-time accelerometer/gyroscope sample end-to-end.

## Phase 4 — Streaming

**Goal:** Continuous, not one-shot, sensor data.

- Companion app streams accelerometer + gyroscope at a target rate (e.g. 60–100 Hz).
- Laptop live-updates the Terminal UI's live mode (per [`TERMINAL_UI.md`](TERMINAL_UI.md#future-live-sensor-mode-phase-4-requires-companion-app)).

**Acceptance:** Numbers update smoothly in the terminal as the phone is moved, with no crashes over a multi-minute session.

## Phase 5 — Latency Measurement

**Goal:** Know the real round-trip latency before building input logic on top of it.

- Timestamp packets on the phone; compare against laptop receipt time (requires a clock-sync/round-trip estimation approach — exact method to be decided at implementation time).
- Log and display latency statistics (min/avg/p95).

**Acceptance:** Reproducible latency numbers, logged across multiple runs, over USB as the baseline.

## Phase 6 — Input Mapping Layer

**Goal:** Turn raw sensor values into normalized controller-style input, as data only (no virtual device yet).

- Define mapping from gyro/accel deltas to normalized stick/aim axes.
- Apply configurable sensitivity/dead zone/smoothing at this layer (design only carried over from [`FUTURE_CONTROLLER_ARCHITECTURE.md`](FUTURE_CONTROLLER_ARCHITECTURE.md); still no OS-level input emitted).

**Acceptance:** Given a recorded sensor session, mapped output is deterministic and matches expected values in a test fixture.

## Phase 7 — Virtual Controller

**Goal:** Make Windows see a real gamepad.

- Integrate a virtual controller mechanism on Windows (e.g., a virtual gamepad driver/library — specific choice deferred to this phase).
- Feed Phase 6's mapped output into it.

**Acceptance:** A test game or a tool like Windows' built-in game controller tester shows live input from the phone.

## Phase 8 — Wireless (Wi-Fi / Bluetooth)

**Goal:** Remove the USB cable.

- Implement `WifiTransport` and/or `BluetoothTransport` against the same Transport Interface from [`ARCHITECTURE.md`](ARCHITECTURE.md).
- Companion app gains a direct socket server (Wi-Fi) and/or BT socket support, without requiring `adb forward`.
- Security design from [`SECURITY.md`](SECURITY.md) (pairing, no unauthenticated open ports) implemented here.

**Acceptance:** Same latency/streaming tests as Phase 4–5 pass without a USB cable attached.

## Phase 9 — Full Controller UI

**Goal:** The end-state product.

- Full PS5-style layout, profiles, per-game presets (F1/racing mode, standard gamepad mode), calibration UI.
- Feature list in full: [`FUTURE_CONTROLLER_ARCHITECTURE.md`](FUTURE_CONTROLLER_ARCHITECTURE.md).

**Acceptance:** A real game (e.g. F1 or God of War) is playable end-to-end using the phone as the only controller.

---

## NEXT STEP

After this documentation set is complete, the first thing to implement is **Phase 1: Device Detection**, specifically in this order:

1. Set up the Python project skeleton with the layered structure from [`ARCHITECTURE.md`](ARCHITECTURE.md) (`transport/`, `model/`, `service/`, `ui/`), even though only one transport (`AdbTransport`) will exist yet.
2. Implement `AdbTransport.list_devices()` — wrapping `adb devices -l` and parsing its output into connection states, including the "no device," "unauthorized," and "multiple devices" cases from [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md).
3. Implement `AdbTransport.get_device_info()` — wrapping the `getprop` calls into a `Device` object per [`DATA_MODEL.md`](DATA_MODEL.md).
4. Render the `DEVICE` section of the Terminal UI (per [`TERMINAL_UI.md`](TERMINAL_UI.md)) against a real connected phone.

Deliberately **not** included in this first implementation step: sensor detection (Phase 2), any companion app work (Phase 3+), and anything touching live data or controller input. Sensor detection is the natural next step immediately after, once device detection is verified against a real phone.
