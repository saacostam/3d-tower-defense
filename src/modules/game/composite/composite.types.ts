import { Mesh, Vector3 } from "three";

export interface CompositePart {
  mesh: Mesh;
  offset: Vector3;
}
