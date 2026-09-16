# Testing Strategy

Testing approach across all phases, from parser unit tests that need no hardware, to future hardware-dependent latency benchmarks.

## Test Categories

### Unit Tests (no device required)

Test pure parsing/logic functions against captured sample text, not a live phone.

- **Property parsing:** given a raw `getprop` key/value string, assert it maps to the correct `Device` field.
- **`dumpsys sensorservice` parsing:** given a captured sample output fixture (saved from a real device once available), assert it produces the expected `Sensor[]` list.
- **Error classification:** given a raw `adb` stderr string (e.g. `"error: more than one device/emulator"`), assert it maps to the correct `Error.code`.

Example expected result:
```json
// Input fixture: sample_dumpsys_pixel8.txt
// Expected output (excerpt):
{
  "sensors": [
    { "friendly_type": "Accelerometer", "vendor": "Bosch", "available": true },
    { "friendly_type": "Gyroscope", "vendor": "Bosch", "available": true }
  ]
}
```

### Integration Tests (device required)

Tagged separately (e.g. `@requires_hardware`) so they can be skipped in environments without a phone attached (such as most CI runners).

- Run the full detection pipeline against a real connected phone and assert a well-formed `DetectorResult` comes back.

### ADB Connection Tests

| Scenario | Setup | Expected result |
|---|---|---|
| `adb` not installed | Temporarily remove/rename `adb` from `PATH` in test env | `Error.code == "ADB_NOT_FOUND"` |
| No device connected | No phone attached | `Error.code == "NO_DEVICE_CONNECTED"` |
| Device unauthorized | Phone connected, prompt not yet accepted | `Error.code == "DEVICE_UNAUTHORIZED"` |
| Device offline | Simulated/observed offline state | `Error.code == "DEVICE_OFFLINE"` |

### Sensor Detection Tests

- Feed the parser a known-good sample `dumpsys sensorservice` capture → assert exact expected `Sensor[]`.
- Feed the parser a sample with a sensor's `resolution` field missing → assert that sensor's `resolution` is `null`, not a crash.

### Sensor Availability Tests

- Given a `Sensor[]` that omits, say, `TYPE_PRESSURE` → assert the UI renders `✗ Pressure` rather than omitting the line or erroring.

### Disconnection Tests

- Simulate a mid-command failure (e.g. subprocess call returns a "device offline" error partway through a multi-step detection) → assert the tool reports `DEVICE_DISCONNECTED` and exits that detection pass cleanly, without crashing the whole program.

### Multiple-Device Tests

- Simulate `adb devices -l` returning two entries → assert the tool refuses to proceed without explicit selection (interactive prompt or `--serial` flag), per FR-3/FR-22.

### Invalid Data Tests

- Feed the parser deliberately malformed/unexpected `dumpsys` text (simulating a future Android version or unusual OEM format) → assert it does **not** raise an unhandled exception, and instead returns a partial `Sensor[]` plus a `PARSE_WARNING` in `errors[]`.

### Permission Tests

- Simulate a `dumpsys` call returning a permission-denied style response (possible on some restricted OEM builds) → assert it's classified as `category: "permission"` and surfaced clearly, not silently swallowed.

### Live Sensor Tests *(Phase 3+, hardware + companion app required)*

- Companion app connectivity: laptop can open the forwarded socket and receive at least one `SensorReading`.
- Sample rate: measured delivery rate over a sampling window is within an acceptable range of the configured target rate.
- Packet loss: over an extended session, dropped/out-of-order samples remain below an agreed threshold.

### Latency Tests *(Phase 5+, hardware + companion app required)*

- Round-trip latency measured over USB stays under an agreed baseline threshold (specific number to be set once Phase 5 baseline data exists).
- Latency distribution (min/avg/p95) is logged for every test run to catch regressions across changes.

## Testing Principles

- **No test should require a phone to be attached unless it's explicitly hardware-tagged.** This keeps the core parsing/logic layer fast and CI-friendly.
- **Every error path in [`ADB_PROTOCOL.md`](ADB_PROTOCOL.md) needs a corresponding test**, not just the happy path.
- **Fixtures over live capture** for parser tests — capture real `dumpsys`/`getprop` output once from real devices, commit it as a test fixture, and test against that, so tests are deterministic and don't require hardware on every run.
