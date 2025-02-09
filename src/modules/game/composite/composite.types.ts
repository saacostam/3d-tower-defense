import { Object3D, Vector3 } from "three";

export interface CompositePart<T = Object3D> {
  mesh: T;
  offset: Vector3;
}
