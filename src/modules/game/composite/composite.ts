import { Vector3 } from "three";
import { CompositePart } from "./composite.types";

export interface CompositeArgs {
  center: Vector3;
  parts: CompositePart[];
}

export class Composite {
  private center: Vector3;
  public parts: CompositePart[];

  constructor(args: CompositeArgs) {
    this.center = args.center;
    this.parts = args.parts;
    this.updateParts();
  }

  get position() {
    return this.center;
  }

  set position(position: Vector3) {
    this.center = position.clone();
    this.updateParts();
  }

  private updateParts() {
    for (const part of this.parts) {
      part.mesh.position.set(
        this.center.x + part.offset.x,
        this.center.y + part.offset.y,
        this.center.z + part.offset.z,
      );
    }
  }
}
