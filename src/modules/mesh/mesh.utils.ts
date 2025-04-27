import {
  BoxGeometry,
  CapsuleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OctahedronGeometry,
  SphereGeometry,
  TextureLoader,
  TorusGeometry,
  TorusKnotGeometry,
  Vector3,
} from "three";
import {
  Line2,
  LineGeometry,
  LineMaterial,
} from "three/examples/jsm/Addons.js";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";

const SEGMENT_NUM = 4;

export const MeshUtils = {
  createCube: (args?: {
    size?: number;
    color?: Color;
    basicMaterial?: boolean;
  }): Mesh => {
    const size = args?.size ?? 1;
    const color = args?.color ?? 0x00ff00;

    const geometry = new BoxGeometry(
      size,
      size,
      size,
      SEGMENT_NUM,
      SEGMENT_NUM,
      SEGMENT_NUM,
    );

    const materialArgs = {
      color: color,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);
    return new Mesh(geometry, material);
  },
  createBox: (args?: {
    width?: number;
    height?: number;
    depth?: number;
    color?: Color;
    basicMaterial?: boolean;
    transparent?: {
      value: number;
    };
    texture?: string;
  }): Mesh => {
    const width = args?.width ?? 1;
    const height = args?.height ?? 1;
    const depth = args?.depth ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new BoxGeometry(
      width,
      height,
      depth,
      SEGMENT_NUM,
      SEGMENT_NUM,
      SEGMENT_NUM,
    );

    const hasTransparency = !!args?.transparent;
    const materialArgs = {
      color: color,
      transparent: hasTransparency,
      opacity: hasTransparency ? args?.transparent?.value : 1,
      map: args?.texture ? new TextureLoader().load(args?.texture) : null,
    };

    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createCone: (args?: {
    radius?: number;
    height?: number;
    color?: Color;
    basicMaterial?: boolean;
    texture?: string;
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const height = args?.height ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new ConeGeometry(radius, height, SEGMENT_NUM, SEGMENT_NUM);

    const materialArgs = {
      color: color,
      map: args?.texture ? new TextureLoader().load(args?.texture) : null,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createSphere: (args?: {
    radius?: number;
    color?: Color;
    basicMaterial?: boolean;
    transparent?: {
      value: number;
    };
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new SphereGeometry(radius, SEGMENT_NUM, SEGMENT_NUM);

    const hasTransparency = !!args?.transparent;
    const materialArgs = {
      color: color,
      transparent: hasTransparency,
      opacity: hasTransparency ? args?.transparent?.value : 1,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createCylinder: (args?: {
    radius?: number;
    height?: number;
    color?: Color;
    basicMaterial?: boolean;
    texture?: string;
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const height = args?.height ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new CylinderGeometry(
      radius,
      radius,
      height,
      SEGMENT_NUM * 2,
      SEGMENT_NUM,
    );

    const materialArgs = {
      color: color,
      map: args?.texture ? new TextureLoader().load(args?.texture) : null,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createGem(args?: { size: number; color?: Color; basicMaterial?: boolean }) {
    const size = args?.size ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new OctahedronGeometry(size, 0);

    const materialArgs = {
      color: color,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createTorus: (args: {
    radius: number;
    color?: Color;
    basicMaterial?: boolean;
  }) => {
    const radius = args.radius;
    const tube = args.radius / 2;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new TorusGeometry(
      radius,
      tube,
      SEGMENT_NUM * 2,
      SEGMENT_NUM,
    );

    const materialArgs = {
      color: color,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createTorusKnotBlob: (args: {
    radius: number;
    color?: Color;
    basicMaterial?: boolean;
    texture?: string;
  }) => {
    const radius = args.radius;
    const tube = args.radius / 4;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new TorusKnotGeometry(
      radius,
      tube,
      SEGMENT_NUM * 16,
      SEGMENT_NUM,
      SEGMENT_NUM * 6,
      SEGMENT_NUM * 2,
    );

    const materialArgs = {
      color: color,
      map: args?.texture ? new TextureLoader().load(args.texture) : null,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createCapsule: (args: {
    radius: number;
    height: number;
    color?: Color;
    basicMaterial?: boolean;
    texture?: string;
  }) => {
    const radius = args.radius;
    const height = args.height;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new CapsuleGeometry(radius, height, 1, 4);

    const materialArgs = {
      color: color,
      map: args?.texture ? new TextureLoader().load(args.texture) : null,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createDodecahedron: (args: {
    radius: number;
    color?: Color;
    basicMaterial?: boolean;
    texture?: string;
  }) => {
    const radius = args.radius;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new DodecahedronGeometry(radius, 0);

    const materialArgs = {
      color: color,
      map: args?.texture ? new TextureLoader().load(args.texture) : null,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createLine(args: { pos1: Vector3; pos2: Vector3; color?: Color }) {
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const material = new LineMaterial({
      color: color,
      linewidth: WORLD_CONFIG.TILE_SIZE * 4,
    });

    const plusGeom = new LineGeometry().setFromPoints([
      args.pos1.clone(),
      args.pos2.clone(),
    ]);
    const plusLine = new Line2(plusGeom, material);

    return plusLine;
  },
};
