import { Object3D, Vector3 } from "three";
import { CompositePart } from "./composite.types";

export interface CompositeArgs {
  center: Vector3;
  parts: CompositePart<Object3D>[];
}

export class Composite<T extends Object3D = Object3D> {
  private center: Vector3;
  private _parts: CompositePart<T>[];

  constructor(args: CompositeArgs) {
    this.center = args.center;
    this._parts = args.parts as CompositePart<T>[];
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
    for (const part of this._parts) {
      part.mesh.position.set(
        this.center.x + part.offset.x,
        this.center.y + part.offset.y,
        this.center.z + part.offset.z,
      );
    }
  }

  set parts(parts: CompositePart<T>[]) {
    this._parts = parts;
    this.updateParts();
  }

  get parts() {
    return this._parts;
  }
}
