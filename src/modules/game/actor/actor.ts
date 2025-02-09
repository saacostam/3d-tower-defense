import { Mesh, Vector2 } from "three";
import { Composite } from "../composite";
import { Container } from "../container";
import { Game } from "../game";

export interface ActorArgs {
  mesh: Mesh | Composite;
}

export class Actor {
  public mesh: Mesh | Composite;
  public isAlive = true;

  public constructor(args: ActorArgs) {
    this.mesh = args.mesh;
  }

  public update(
    _game: Game,
    _delta: number,
    _container: Container,
    _pos: Vector2,
  ) {}
  public graphics(
    _game: Game,
    _delta: number,
    _container: Container,
    _pos: Vector2,
  ) {}
  public kill() {
    this.isAlive = false;
  }
}
