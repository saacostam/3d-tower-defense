import { Color, Mesh, PointLight, Vector2, Vector3 } from "three";
import { Actor, Composite, Container, Game } from "../game";
import { WORLD_CONFIG } from "../config";
import { MeshUtils } from "../mesh";
import { COLOR_PALETTE } from "../colors";
import { HealthBar } from "../health-bar";

export interface HeadQuartersArgs {
  health: number;
}

export class HeadQuarters extends Actor {
  declare mesh: Composite;

  private gem: Mesh;
  private hb: HealthBar;

  public fullHealth: number;
  public health: number;

  public position: Vector2;

  public afterSpawn(container: Container, pos: Vector2): void {
    super.afterSpawn(container, pos);
    this.hb.start(container);
  }

  public beforeDeath(game: Game, container: Container, pos: Vector2): void {
    super.beforeDeath(game, container, pos);
    this.hb.end(container);
  }

  constructor({ health }: HeadQuartersArgs) {
    const width = WORLD_CONFIG.TILE_SIZE / 2;
    const height = WORLD_CONFIG.TILE_SIZE * 2;
    const depth = WORLD_CONFIG.TILE_SIZE / 2;

    const position = new Vector2(0, 0);
    const pos3 = new Vector3(position.x, WORLD_CONFIG.TILE_SIZE, position.y);

    const gem = MeshUtils.createGem({
      size: height / 4,
      color: new Color(COLOR_PALETTE.LIGHT_GREEN),
      basicMaterial: true,
    });

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createBox({
            color: new Color(COLOR_PALETTE.DARK),
            depth: depth,
            height: height / 4,
            width: width,
          }),
          offset: new Vector3(0, (-height * 3) / 8, 0),
        },
        {
          mesh: gem,
          offset: new Vector3(0, (height * 2) / 8, 0),
        },
        {
          mesh: new PointLight(new Color(COLOR_PALETTE.LIGHT_GREEN), 20),
          offset: new Vector3(0, (height * 2) / 8, 0),
        },
        {
          mesh: MeshUtils.createBox({
            color: new Color(COLOR_PALETTE.LIGHT_GREEN),
            depth: WORLD_CONFIG.TILE_SIZE,
            height: WORLD_CONFIG.TILE_SIZE,
            width: WORLD_CONFIG.TILE_SIZE,
          }),
          offset: new Vector3(0, (-WORLD_CONFIG.TILE_SIZE * 3) / 2, 0),
        },
      ],
    });

    super({ mesh });

    this.gem = gem;
    this.position = position;
    this.health = health;
    this.fullHealth = health;

    this.hb = new HealthBar({
      fullHealth: this.fullHealth,
      currentHealth: this.health,
      position: this.mesh.position.clone(),
      offset: new Vector3(0, height / 2 + WORLD_CONFIG.TILE_SIZE / 2, 0),
    });
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.gem.rotateX(delta / 1000);
    this.gem.rotateY(delta / 1900);
    this.gem.rotateZ(delta / 500);

    this.position = pos;

    this.hb.update(this.health, this.mesh.position.clone());
  }

  public graphics(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.graphics(game, delta, container, pos);

    this.mesh.position = new Vector3(
      this.position.x,
      this.mesh.position.y,
      this.position.y,
    );
  }
}
