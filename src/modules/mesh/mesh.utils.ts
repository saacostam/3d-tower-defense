import {
  BoxGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  Mesh,
  MeshPhongMaterial,
  SphereGeometry,
} from "three";
import { COLOR_PALETTE } from "../colors";

export const MeshUtils = {
  createCube: (args?: { size?: number; color?: Color }): Mesh => {
    const size = args?.size ?? 1;
    const color = args?.color ?? 0x00ff00;

    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshPhongMaterial({
      color: color,
    });
    return new Mesh(geometry, material);
  },
  createBox: (args?: {
    width?: number;
    height?: number;
    depth?: number;
    color?: Color;
  }): Mesh => {
    const width = args?.width ?? 1;
    const height = args?.height ?? 1;
    const depth = args?.depth ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new BoxGeometry(width, height, depth);
    const material = new MeshPhongMaterial({
      color: color,
    });

    return new Mesh(geometry, material);
  },
  createCone: (args?: {
    radius?: number;
    height?: number;
    color?: Color;
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const height = args?.height ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new ConeGeometry(radius, height);
    const material = new MeshPhongMaterial({
      color: color,
    });

    return new Mesh(geometry, material);
  },
  createSphere: (args?: { radius?: number; color?: Color }): Mesh => {
    const radius = args?.radius ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new SphereGeometry(radius);
    const material = new MeshPhongMaterial({
      color: color,
    });

    return new Mesh(geometry, material);
  },
  createCylinder: (args?: {
    radius?: number;
    height?: number;
    color?: Color;
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const height = args?.height ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new CylinderGeometry(radius, radius, height);
    const material = new MeshPhongMaterial({
      color: color,
    });

    return new Mesh(geometry, material);
  },
};
