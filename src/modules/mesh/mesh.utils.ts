import {
  BoxGeometry,
  BufferGeometry,
  CapsuleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  Line,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OctahedronGeometry,
  SphereGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  Vector3,
} from "three";
import { COLOR_PALETTE } from "../colors";

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
  }): Mesh => {
    const radius = args?.radius ?? 1;
    const height = args?.height ?? 1;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new ConeGeometry(radius, height, SEGMENT_NUM, SEGMENT_NUM);

    const materialArgs = {
      color: color,
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
  }) => {
    const radius = args.radius;
    const height = args.height;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new CapsuleGeometry(radius, height, 1, 4);

    const materialArgs = {
      color: color,
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
  }) => {
    const radius = args.radius;
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const geometry = new DodecahedronGeometry(radius, 0);

    const materialArgs = {
      color: color,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    return new Mesh(geometry, material);
  },
  createLine(args: {
    pos1: Vector3;
    pos2: Vector3;
    color?: Color;
    basicMaterial?: boolean;
  }) {
    const color = args?.color ?? new Color(COLOR_PALETTE.RED);

    const materialArgs = {
      color: color,
    };
    const material = args?.basicMaterial
      ? new MeshBasicMaterial(materialArgs)
      : new MeshStandardMaterial(materialArgs);

    const plusPoint = [];
    plusPoint.push(args.pos1);
    plusPoint.push(args.pos2);

    const plusGeom = new BufferGeometry().setFromPoints(plusPoint);
    const plusLine = new Line(plusGeom, material);

    return plusLine;
  },
};
