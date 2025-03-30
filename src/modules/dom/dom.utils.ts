import { CANVAS_ID } from "./dom.constants";

export const DomUtils = {
  getCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById("canvas");
    if (!canvas || !(canvas instanceof HTMLCanvasElement))
      throw new Error("Default canvas not found");
    canvas.id = CANVAS_ID;
    return canvas;
  },
};
