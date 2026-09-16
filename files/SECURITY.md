# Security Considerations

Security notes for the current USB/ADB design and for the wireless transports planned later. The guiding principle throughout is **least privilege**: request and expose only what each phase actually needs.

## USB Debugging

Enabling USB debugging grants any authorized computer shell-level access to the phone (running commands, reading certain logs, installing/uninstalling packages). This is a meaningful trust grant:

- Only authorize computers you trust.
- Consider disabling USB debugging when not actively developing/testing, especially on a primary personal phone.
- Prefer not checking "Always allow" on shared or untrusted machines.

## ADB Authentication

ADB uses an RSA keypair to authorize a specific computer. If a laptop that was previously authorized is lost, sold, or otherwise no longer trusted, go to **Developer Options → Revoke USB debugging authorizations** on the phone to invalidate all prior authorizations at once.

## Running Shell Commands

The detector only ever runs a small, fixed set of **read-only** commands: `adb devices`, `adb shell getprop <key>`, `adb shell dumpsys sensorservice`. Implementation guidance:

- Never build a shell command string by concatenating unsanitized input — pass arguments as a list to the subprocess call rather than interpolating into a shell string, to avoid any possibility of shell injection, even though current inputs (property keys) are all fixed/known values.
- The detector should never require root (`adb root`) — nothing in Phase 1 or 2 needs it, and requesting it would be a scope violation of NFR-1 in [`REQUIREMENTS.md`](REQUIREMENTS.md).

## Local Network Communication (Phase 3–4, over `adb forward`)

Once a companion app exists, its socket server is only reachable through an `adb forward`-tunneled port, bound to `localhost` on the laptop side — it is not exposed to the local network at this stage. This keeps risk low while the transport is still USB-only.

## Future Wi-Fi Communication (Phase 8)

Moving to Wi-Fi introduces a real network-exposed listener and needs deliberate design before implementation, including at minimum:

- The phone should not accept connections from arbitrary devices on the network — some form of pairing (e.g. a one-time code shown on the phone, confirmed on the laptop) should gate the first connection.
- Avoid leaving an unauthenticated open port listening indefinitely; prefer opening it only while the app is actively in "pairing" or "connected" mode.
- Consider transport encryption (e.g. TLS) once the pairing/handshake design is settled — exact mechanism to be decided at Phase 8 implementation time.
- Avoid using this feature on untrusted/public Wi-Fi networks until the above is in place.

## Future Bluetooth Communication (Phase 8)

- Rely on standard Bluetooth pairing/bonding rather than inventing a custom trust mechanism.
- Only accept connections from a previously paired/bonded device (no open discoverability during normal use).

## General Principle

Every phase in [`DEVELOPMENT_PLAN.md`](DEVELOPMENT_PLAN.md) should request the minimum Android permissions and system access it needs for that phase's goal — for example, the companion app should not request sensor permissions it doesn't use (e.g. no `BODY_SENSORS` permission, since heart-rate-type sensors are explicitly out of scope — see [`SENSOR_DETECTION.md`](SENSOR_DETECTION.md)).
