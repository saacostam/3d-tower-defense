import { DomUtils } from "../dom";

export class MouseHandler {
  public position = { x: 0, y: 0 };
  public isDown = false;
  public wasClicked = false;

  constructor() {
    window.addEventListener("mousemove", (e) => {
      const canvas = DomUtils.getCanvas();

      this.position = {
        x: (e.clientX / canvas.clientWidth) * 2 - 1,
        y: -(e.clientY / canvas.clientHeight) * 2 + 1,
      };
    });

    window.addEventListener("mousedown", () => {
      this.isDown = true;
      this.wasClicked = true;
    });

    window.addEventListener("mouseup", () => (this.isDown = false));
  }

  public consumeClick(): boolean {
    const clicked = this.wasClicked;
    this.wasClicked = false;
    return clicked;
  }
}

export const mouseHandler = new MouseHandler();
