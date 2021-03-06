#include <windows.h>

void se_platform_critical_stop(const char *reason) {
  MessageBox(NULL, reason, SE_METADATA_APPLICATION_NAME, MB_OK);
  exit(EXIT_FAILURE);
}

int CALLBACK WinMain(HINSTANCE instance, HINSTANCE previousInstance,
                     LPSTR commandLine, int showWindow) {
  se_game_initialize();
}
