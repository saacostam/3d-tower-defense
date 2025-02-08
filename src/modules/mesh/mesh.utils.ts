import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

export const MeshUtils = {
  createCube: (): Mesh => {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: Math.random() < 0.5 ? 0x00ff00 : 0xff0000,
    });
    return new Mesh(geometry, material);
  },
};
