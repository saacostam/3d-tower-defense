import { Color, Line, Scene, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { Component, Composite, GridCell } from "../../game";
import { MeshUtils } from "../../mesh";
import { Spawner } from "../../mobs";
import { PathfindingUtils } from "../../pathfinding";
import { HeadQuarters } from "../../player";

export class PathIndicatorComponent extends Component {
  private pathSubSegments: Line[] = [];

  constructor() {
    const mesh = new Composite({
      center: new Vector3(0, 0, 0),
      parts: [],
    });

    super({ mesh });
  }

  onPathChangeEvent(args: {
    grid: GridCell[][];
    headquarters: HeadQuarters;
    scene: Scene;
    spawners: Spawner[];
  }) {
    const { grid, headquarters, scene, spawners } = args;

    this.pathSubSegments.forEach((subsegment) => scene.remove(subsegment));
    this.pathSubSegments = [];

    const { paths } = PathfindingUtils.checkIfSpawnersCanWalkToHeadquarters(
      grid,
      spawners,
      headquarters,
    );

    for (const path of paths) {
      for (let i = 1; i < path.length; i++) {
        const [x1, y1] = path[i - 1];
        const [x2, y2] = path[i];

        const line = MeshUtils.createLine({
          pos1: new Vector3(x1, 0, y1),
          pos2: new Vector3(x2, 0, y2),
          color: new Color(COLOR_PALETTE.LIGHT_GREEN),
        });

        this.pathSubSegments.push(line);
        scene.add(line);
      }
    }
  }
}
