import collections

class AxisMapper:
    def __init__(self, max_val: float, deadzone: float = 0.05, sensitivity: float = 1.0, smoothing_window: int = 5, invert: bool = False):
        """
        Maps a raw sensor value to a normalized gamepad axis [-1.0, 1.0].
        
        :param max_val: The raw value magnitude that corresponds to full input (1.0).
        :param deadzone: Normalized deadzone [0.0, 1.0]. Inputs below this magnitude are ignored.
        :param sensitivity: Multiplier for the output curve.
        :param smoothing_window: Number of samples for the moving average filter to reduce jitter.
        :param invert: If True, flips the sign of the output.
        """
        self.max_val = float(max_val)
        self.deadzone = float(deadzone)
        self.sensitivity = float(sensitivity)
        self.invert = invert
        self.history = collections.deque(maxlen=smoothing_window)

    def process(self, raw_val: float) -> float:
        if self.invert:
            raw_val = -raw_val
            
        # 1. Normalize to [-1.0, 1.0] range
        norm = raw_val / self.max_val
        norm = max(-1.0, min(1.0, norm))
        
        # 2. Apply Deadzone
        if abs(norm) < self.deadzone:
            norm = 0.0
        else:
            # Rescale so that just past the deadzone starts smoothly at 0.0, scaling up to 1.0
            sign = 1.0 if norm > 0 else -1.0
            norm = sign * ((abs(norm) - self.deadzone) / (1.0 - self.deadzone))
            
        # 3. Apply Sensitivity
        norm = norm * self.sensitivity
        norm = max(-1.0, min(1.0, norm))
        
        # 4. Smoothing (Moving Average)
        self.history.append(norm)
        smoothed = sum(self.history) / len(self.history)
        
        return smoothed

class InputMapper:
    def __init__(self, mode="landscape"):
        self.mode = mode
        self.accel_offset = [0.0, 0.0, 0.0]
        self.gyro_offset = [0.0, 0.0, 0.0]
        
        if self.mode == "landscape":
            # For Racing mode! (Hold phone horizontally, top of phone pointing to your LEFT)
            # Steering: Tilting like a steering wheel changes the Y axis.
            # Steer Right -> Y goes positive. Steer Left -> Y goes negative. (No invert needed)
            self.steering = AxisMapper(max_val=6.0, deadzone=0.10, invert=False, smoothing_window=4)
        else:
            # Portrait mode (Hold phone vertically)
            # In portrait, tilting right makes X negative. So we MUST invert it for gamepads.
            self.steering = AxisMapper(max_val=6.0, deadzone=0.10, invert=True, smoothing_window=4)
        
    def set_calibration(self, accel: list, gyro: list):
        self.accel_offset = list(accel)
        self.gyro_offset = list(gyro)
        self.steering.history.clear()  # Bug #14: flush stale smoothing samples after calibration
        
    def process(self, accel: list, gyro: list) -> dict:
        """
        Converts raw sensor arrays into normalized controller axes.
        """
        # Apply calibration offsets
        calibrated_accel = [a - o for a, o in zip(accel, self.accel_offset)]
        
        if self.mode == "landscape":
            # Accel Y (accel[1]) is steering
            st = self.steering.process(calibrated_accel[1])
            th = 0.0
        else:
            # Portrait
            st = self.steering.process(calibrated_accel[0])
            th = 0.0
            
        return {
            "steering": st,
            "throttle": th
        }
