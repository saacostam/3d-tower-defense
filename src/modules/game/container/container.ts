import { Camera, Scene, Vector2 } from "three";
import { Actor } from "../actor";
import { Game } from "../game";
import { GridCell } from "./container.types";
import { ContainerUtils } from "./container.utils";

export interface ContainerArgs {
  width: number;
  height: number;
  camera?: Camera;
  scene?: Scene;
}

export class Container {
  public actorsGrid: GridCell[][];

  public camera: Camera;
  public scene: Scene;

  public constructor(args: ContainerArgs) {
    this.actorsGrid = ContainerUtils.createGrid(args.width, args.height);

    this.camera = args.camera ?? new Camera();
    this.scene = args.scene ?? new Scene();
  }

  public onStart(_game: Game) {}
  public onSwitch(_game: Game) {}

  public addActor(actor: Actor, pos: Vector2) {
    if (
      !(0 <= pos.x && pos.x < this.actorsGrid.length) &&
      !(0 <= pos.y && pos.y < this.actorsGrid[0].length)
    )
      throw new Error(`Position ${pos.x},${pos.y} is out of bounds`);

    this.actorsGrid[pos.x][pos.y].actors.push(actor);
    this.scene.add(actor.mesh);
  }

  public update(game: Game, delta: number) {
    this.actorsGrid.forEach((row, x) => {
      row.forEach((cell, y) => {
        const position = new Vector2(x, y);
        cell.actors.forEach((actor) =>
          actor.update(game, delta, this, position.clone()),
        );
      });
    });

    // Remove dead actors
    this.actorsGrid.map((row) =>
      row.map((cell) => {
        const alive: Actor[] = [];
        const dead: Actor[] = [];

        for (let i = 0; i < cell.actors.length; i++) {
          const actor = cell.actors[i];
          if (actor.isAlive) alive.push(actor);
          else dead.push(actor);
        }

        dead.forEach((actor) => this.scene.remove(actor.mesh));
        cell.actors = alive;
      }),
    );
  }

  public graphics(game: Game, delta: number) {
    this.actorsGrid.forEach((row, x) => {
      row.forEach((cell, y) => {
        const position = new Vector2(x, y);
        cell.actors.forEach((actor) =>
          actor.graphics(game, delta, this, position.clone()),
        );
      });
    });
  }
}
