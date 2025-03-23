import { AStarFinder } from "astar-typescript";
import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { Actor, ActorArgs, Composite, Container, Game } from "../game";
import { HealthBar } from "../health-bar";
import { CreateExplosionArgs, ParticleManager } from "../particle-systems";
import { PathfindingUtils } from "../pathfinding";
import { HeadQuarters } from "../player";

export interface MobArgs extends ActorArgs {
  battleSide: TBattleSide;
  pos: Vector2;
  radius: number;
  health: number;
  objective: HeadQuarters;
}

export class Mob extends Actor {
  declare public mesh: Composite;

  public battleSide: TBattleSide;

  public pos: Vector2;
  public radius: number;

  private hb: HealthBar;
  public fullHealth: number;
  public health: number;

  public objective: HeadQuarters;

  public DEATH_EXPLOSION_CONFIG: CreateExplosionArgs = {
    colors: [new Color(COLOR_PALETTE.RED), new Color(COLOR_PALETTE.DARK)],
  };

  public DAMAGE_EXPLOSION_CONFIG: CreateExplosionArgs = {
    colors: [
      new Color(COLOR_PALETTE.RED),
      new Color(COLOR_PALETTE.ORANGE),
      new Color(COLOR_PALETTE.YELLOW),
      new Color(COLOR_PALETTE.WHITE),
    ],
    amount: 30,
    force: 3,
    size: 0.8,
  };

  public SPEED = 1;

  public afterSpawn(container: Container, pos: Vector2): void {
    super.afterSpawn(container, pos);
    this.hb.start(container);
  }

  public beforeDeath(game: Game, container: Container, pos: Vector2): void {
    super.beforeDeath(game, container, pos);
    this.hb.end(container);

    ParticleManager.createExplosion(
      container,
      this.mesh.position,
      this.DEATH_EXPLOSION_CONFIG,
    );
  }

  constructor(args: MobArgs) {
    super(args);
    this.battleSide = args.battleSide;
    this.pos = args.pos;
    this.radius = args.radius;

    this.fullHealth = args.health;
    this.health = args.health;
    this.objective = args.objective;

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

    const ACCEPTABLE_DISTANCE = 0.01;

    if (
      this.pos.distanceTo(this.objective.position.clone()) < ACCEPTABLE_DISTANCE
    ) {
      this.objective.health -= 1;
      this.kill();

      // Explosion
      ParticleManager.createExplosion(
        container,
        this.mesh.position,
        this.DAMAGE_EXPLOSION_CONFIG,
      );
    } else if (this.pos.distanceTo(pos) < ACCEPTABLE_DISTANCE) {
      this.pos = pos;

      const simpleGrid = PathfindingUtils.createSimpleGrid(
        container.actorsGrid,
      );
      const pathFinder = new AStarFinder({
        grid: {
          matrix: simpleGrid,
        },
        diagonalAllowed: true,
      });

      const path = pathFinder.findPath(pos, this.objective.position.clone());

      if (path.length > 1) {
        const nextPos = new Vector2(path[1][0], path[1][1]);

        container.actorsGrid[pos.x][pos.y].actors = container.actorsGrid[pos.x][
          pos.y
        ].actors.filter((a) => a !== this);
        container.actorsGrid[nextPos.x][nextPos.y].actors.push(this);
      }
    } else {
      const DELTA_MULTIPLIER = 0.0012 * this.SPEED;
      const deltaMovement = delta * DELTA_MULTIPLIER;

      const direction = pos.clone().sub(this.pos).normalize();
      this.pos.add(direction.clone().multiplyScalar(deltaMovement));
    }

    this.hb.update(this.health, this.mesh.position.clone());
    if (this.health <= 0) this.kill();
  }

  public graphics(): void {
    this.mesh.position = new Vector3(
      this.pos.x,
      this.mesh.position.y,
      this.pos.y,
    );
  }
}
