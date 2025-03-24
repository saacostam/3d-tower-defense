import { Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { BulletComponent } from "../bullets";
import { Actor, ActorArgs, Composite, Container, Game } from "../game";
import { PathfindingUtils } from "../pathfinding";

export interface GunArgs extends ActorArgs {
  position: Vector2;
}

export class Gun extends Actor {
  declare public mesh: Composite;

  public position: Vector2;

  public SHOOT_TIMEOUT = 1000;
  private shootTimeout = 0;

  public constructor(args: GunArgs) {
    super(args);
    this.position = args.position;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    const newShootTimeout = this.shootTimeout + delta;
    this.shootTimeout = newShootTimeout % this.SHOOT_TIMEOUT;

    let shouldShoot = newShootTimeout >= this.SHOOT_TIMEOUT;
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
