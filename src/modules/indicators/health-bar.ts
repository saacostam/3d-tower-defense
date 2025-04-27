import { Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Container } from "../game";

export interface HealthBarArgs {
  position: Vector3;
  offset: Vector3;
  fullHealth: number;
  currentHealth?: number;
  widthFactor?: number;
  heightFactor?: number;
}

export class HealthBar {
  private currentHealth: number;
  private fullHealth: number;
  private offset: Vector3;

  private red: Sprite;
  private green: Sprite;

  private widthFactor: number;
  private heightFactor: number;

  constructor(args: HealthBarArgs) {
    this.currentHealth = args.currentHealth ?? args.fullHealth;
    this.fullHealth = args.fullHealth;
    this.offset = args.offset;

    this.red = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("./textures/red.png"),
      }),
    );
    this.green = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("./textures/green.png"),
      }),
    );

    this.widthFactor = args.widthFactor ?? 1;
    this.heightFactor = args.heightFactor ?? 1;

    this.update(this.currentHealth, args.position);
  }

  public end(container: Container) {
    container.scene.remove(this.red);
    container.scene.remove(this.green);
  }

  public start(container: Container) {
    container.scene.add(this.red);
    container.scene.add(this.green);
  }

  public update(currentHealth: number, pos: Vector3): void {
    this.currentHealth = currentHealth;

    const w = this.widthFactor * 1;
    const size = this.heightFactor * 0.12;

    this.red.scale.set(w, size, size);
    this.red.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );

    this.green.scale.set(
      w * Math.max(this.currentHealth / this.fullHealth, 0),
      size,
      size,
    );
    this.green.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );
  }
}
