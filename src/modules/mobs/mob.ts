import { Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { Actor, ActorArgs, Container, Game } from "../game";
import { HealthBar } from "../health-bar";

export interface MobArgs extends ActorArgs {
  battleSide: TBattleSide;
  pos: Vector2;
  radius: number;
  health: number;
}

export class Mob extends Actor {
  public battleSide: TBattleSide;

  public pos: Vector2;
  public radius: number;

  private hb: HealthBar;
  public fullHealth: number;
  public health: number;

  public afterSpawn(container: Container, pos: Vector2): void {
    super.afterSpawn(container, pos);
    this.hb.start(container);
  }

  public beforeDeath(game: Game, container: Container, pos: Vector2): void {
    super.beforeDeath(game, container, pos);
    this.hb.end(container);
  }

  constructor(args: MobArgs) {
    super(args);
    this.battleSide = args.battleSide;
    this.pos = args.pos;
    this.radius = args.radius;

    this.fullHealth = args.health;
    this.health = args.health;

    this.hb = new HealthBar({
      fullHealth: this.fullHealth,
      currentHealth: this.health,
      position: this.mesh.position,
      offset: new Vector3(0, this.radius * 3, 0),
      heightFactor: 0.5,
      widthFactor: 0.6,
    });
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.hb.update(this.health, this.mesh.position.clone());

    if (this.health <= 0) this.kill();
  }
}
