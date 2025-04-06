import { Camera, Vector2, Vector3, Plane, Raycaster } from "three";

export const MouseUtils = {
  projectMousePosition(args: {
    camera: Camera;
    mousePosition: Vector2;
  }): Vector2 {
    const { camera, mousePosition } = args;
    const intersectionPoint = new Vector3(0, 0, 0);

    const raycaster = new Raycaster();
    raycaster.setFromCamera(mousePosition.clone(), camera);

    const plane = new Plane(new Vector3(0, 1, 0), 0);
    raycaster.ray.intersectPlane(plane, intersectionPoint);

    return new Vector2(intersectionPoint.x, intersectionPoint.z);
  },
};
