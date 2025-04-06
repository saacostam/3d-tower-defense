import { DomUtils } from "../dom";

export class MouseHandler {
  public position = { x: 0, y: 0 };
  public wasClicked = false;
  public wheelDelta = 0;

  constructor() {
    window.addEventListener("mousemove", (e) => {
      const canvas = DomUtils.getCanvas();

      this.position = {
        x: (e.clientX / canvas.clientWidth) * 2 - 1,
        y: -(e.clientY / canvas.clientHeight) * 2 + 1,
      };
    });

    window.addEventListener("click", () => {
      this.wasClicked = true;
    });

    window.addEventListener("wheel", (e) => {
      this.wheelDelta += e.deltaY;
    });
  }

  public consumeClick(): boolean {
    const clicked = this.wasClicked;
    this.wasClicked = false;
    return clicked;
  }

  public consumeWheel(): number {
    const delta = this.wheelDelta;
    this.wheelDelta = 0;
    return delta;
  }
}

export const mouseHandler = new MouseHandler();
