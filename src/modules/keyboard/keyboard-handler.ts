export class KeyboardHandler {
  private wasPressedMap = new Map<string, boolean>();
  private pressedMap = new Map<string, boolean>();

  constructor() {
    document.addEventListener("keydown", (event) => {
      this.wasPressedMap.set(event.key, true);
      this.pressedMap.set(event.key, true);
    });

    document.addEventListener("keyup", (event) => {
      this.wasPressedMap.set(event.key, false);
      this.pressedMap.set(event.key, false);
    });
  }

  public wasPressed(key: string): boolean {
    const val = this.wasPressedMap.get(key) || false;
    if (val) this.wasPressedMap.set(key, false);
    return val;
  }

  public isPressed(key: string): boolean {
    return this.pressedMap.get(key) || false;
  }
}

export const keyboardHandler = new KeyboardHandler();
