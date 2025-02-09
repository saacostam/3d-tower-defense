import { AStarFinder } from "astar-typescript";
import { Color, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { PathfindingUtils } from "../pathfinding";

export interface WalkerArgs {
  pos: Vector2;
  objective: Vector2;
}

export class Walker extends Actor {
  declare public mesh: Composite;

  private pos: Vector2;
  private objective: Vector2;

  constructor(args: WalkerArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 4;
    const height = WOLRD_CONFIG.TILE_SIZE;

    const pos3 = new Vector3(
      args.pos.x,
      WOLRD_CONFIG.TILE_SIZE / 2,
      args.pos.y,
    );

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createCylinder({
            radius: radius,
            height: height,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, 0, 0),
        },
      ],
    });

    super({
      mesh: composite,
    });

    this.pos = args.pos;
    this.objective = args.objective;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    const ACCEPTABLE_DISTANCE = 0.01;

    if (this.pos.distanceTo(this.objective) < ACCEPTABLE_DISTANCE) {
      // TODO: Handle when objective is reached
    } else if (this.pos.distanceTo(pos) < ACCEPTABLE_DISTANCE) {
      this.pos = pos;

      const simpleGrid = PathfindingUtils.createSimpleGrid(
        container.actorsGrid,
      );
      const pathFinder = new AStarFinder({
        grid: {
          matrix: simpleGrid,
        },
      });

      const path = pathFinder.findPath(pos, this.objective);

      if (path.length > 1) {
        const nextPos = new Vector2(path[1][0], path[1][1]);

        container.actorsGrid[pos.x][pos.y].actors = container.actorsGrid[pos.x][
          pos.y
        ].actors.filter((a) => a !== this);
        container.actorsGrid[nextPos.x][nextPos.y].actors.push(this);
      }
    } else {
      const DELTA_MULTIPLIER = 0.0015;
      const deltaMovement = delta * DELTA_MULTIPLIER;

      const direction = pos.clone().sub(this.pos).normalize();
      this.pos.add(direction.clone().multiplyScalar(deltaMovement));
    }
  }

  public graphics(): void {
    this.mesh.position = new Vector3(
      this.pos.x,
      this.mesh.position.y,
      this.pos.y,
    );
  }
}
