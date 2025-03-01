import { Color, Mesh, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { BulletComponent } from "../bullets";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { PathfindingUtils } from "../pathfinding";

export interface SimpleGunArgs {
  position: Vector2;
}

export class SimpleGun extends Actor {
  private gem: Mesh;
  public position: Vector2;

  private static SHOOT_TIMEOUT = 1000;
  private shootTimeout = 0;

  public constructor(args: SimpleGunArgs) {
    const pos3 = new Vector3(
      args.position.x,
      WOLRD_CONFIG.TILE_SIZE,
      args.position.y,
    );

    const gem = MeshUtils.createGem({
      size: WOLRD_CONFIG.TILE_SIZE / 4,
      color: new Color(COLOR_PALETTE.WHITE),
    });

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: WOLRD_CONFIG.TILE_SIZE,
            height: WOLRD_CONFIG.TILE_SIZE / 2,
            depth: WOLRD_CONFIG.TILE_SIZE,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, (-WOLRD_CONFIG.TILE_SIZE * 3) / 4, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: (WOLRD_CONFIG.TILE_SIZE * 3) / 4,
            height: WOLRD_CONFIG.TILE_SIZE,
            depth: (WOLRD_CONFIG.TILE_SIZE * 3) / 4,
            color: new Color(COLOR_PALETTE.METAL),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: WOLRD_CONFIG.TILE_SIZE,
            height: WOLRD_CONFIG.TILE_SIZE / 2,
            depth: WOLRD_CONFIG.TILE_SIZE,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, (WOLRD_CONFIG.TILE_SIZE * 3) / 4, 0),
        },
        {
          mesh: gem,
          offset: new Vector3(0, (WOLRD_CONFIG.TILE_SIZE * 3) / 2, 0),
        },
      ],
    });

    super({ mesh });

    this.gem = gem;
    this.position = args.position;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.gem.rotateX(delta / 1000);
    this.gem.rotateZ(delta / 500);

    const newShootTimeout = this.shootTimeout + delta;
    this.shootTimeout = newShootTimeout % SimpleGun.SHOOT_TIMEOUT;

    let shouldShoot = newShootTimeout >= SimpleGun.SHOOT_TIMEOUT;

    if (shouldShoot) {
      const walker = PathfindingUtils.findClosestEnemy(
        container.actorsGrid,
        this.position.clone(),
        TBattleSide.ALLY,
      );

      const direction = walker
        ? new Vector2(
            walker.enemy.mesh.position.x - this.position.x,
            walker.enemy.mesh.position.z - this.position.y,
          ).normalize()
        : null;

      if (direction !== null) {
        const bullet = new BulletComponent({
          battleSide: TBattleSide.ALLY,
          direction: direction,
          position: new Vector3(
            this.position.x,
            this.mesh.position.y,
            this.position.y,
          ),
        });

        container.addComponent(bullet);
      }
    }
  }
}
