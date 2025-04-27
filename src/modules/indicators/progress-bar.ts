import { Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Container } from "../game";

export interface ProgressBarArgs {
  position: Vector3;
  offset: Vector3;
  total: number;
  value?: number;
  widthFactor?: number;
  heightFactor?: number;
}

export class ProgressBar {
  private value: number;
  private total: number;
  private offset: Vector3;

  private dark: Sprite;
  private blue: Sprite;

  private widthFactor: number;
  private heightFactor: number;

  constructor(args: ProgressBarArgs) {
    this.value = args.value ?? args.total;
    this.total = args.total;
    this.offset = args.offset;

    this.dark = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("../textures/dark.png"),
      }),
    );
    this.blue = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("../textures/red.png"),
      }),
    );

    this.widthFactor = args.widthFactor ?? 1;
    this.heightFactor = args.heightFactor ?? 1;

    this.update(this.value, args.position);
  }

  public end(container: Container) {
    container.scene.remove(this.dark);
    container.scene.remove(this.blue);
  }

  public start(container: Container) {
    container.scene.add(this.dark);
    container.scene.add(this.blue);
  }

  public update(val: number, pos: Vector3): void {
    this.value = val;

    const w = this.widthFactor * 1;
    const size = this.heightFactor * 0.12;

    this.dark.scale.set(w, size, size);
    this.dark.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );

    this.blue.scale.set(w * Math.max(this.value / this.total, 0), size, size);
    this.blue.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );
  }
}
