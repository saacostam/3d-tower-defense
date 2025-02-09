import { Mesh } from "three";
import { Composite } from "../composite";
import { Container } from "../container";
import { Game } from "../game";

export interface ComponentArgs {
  mesh: Mesh | Composite;
}

export class Component {
  public mesh: Mesh | Composite;
  public isAlive = true;

  public constructor(args: ComponentArgs) {
    this.mesh = args.mesh;
  }

  public update(_game: Game, _delta: number, _container: Container) {}
  public graphics(_game: Game, _delta: number, _container: Container) {}
  public kill() {
    this.isAlive = false;
  }
}
