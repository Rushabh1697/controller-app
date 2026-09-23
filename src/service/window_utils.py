import sys
import ctypes
import os

if sys.platform == 'win32':
    from ctypes import wintypes
    kernel32 = ctypes.windll.kernel32
    user32 = ctypes.windll.user32
else:
    kernel32 = None
    user32 = None

PROCESS_QUERY_LIMITED_INFORMATION = 0x1000

def get_active_window_exe():
    """Returns the executable name of the currently focused window on Windows."""
    if user32 is None or kernel32 is None:
        return None
    hwnd = user32.GetForegroundWindow()
    if not hwnd:
        return None
    pid = ctypes.c_ulong()
    user32.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
    
    h_process = kernel32.OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, False, pid.value)
    if h_process:
        exe_path = ctypes.create_unicode_buffer(260)
        size = ctypes.c_ulong(260)
        if kernel32.QueryFullProcessImageNameW(h_process, 0, exe_path, ctypes.byref(size)):
            kernel32.CloseHandle(h_process)
            return os.path.basename(exe_path.value)
        kernel32.CloseHandle(h_process)
    return None
