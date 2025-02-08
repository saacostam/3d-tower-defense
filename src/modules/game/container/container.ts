import { Vector2 } from "three";
import { Actor } from "../actor";
import { Game } from "../game";
import { GridCell } from "./container.types";
import { ContainerUtils } from "./container.utils";

export interface ContainerArgs {
  width: number;
  height: number;
}

export class Container {
  public actorsGrid: GridCell[][];

  public constructor(args: ContainerArgs) {
    this.actorsGrid = ContainerUtils.createGrid(args.width, args.height);
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
  }

  public update(game: Game, delta: number) {
    this.actorsGrid.forEach((row) => {
      row.forEach((cell) => {
        cell.actors.forEach((actor) => actor.update(game, delta));
      });
    });
  }

  public graphics(game: Game, delta: number) {
    this.actorsGrid.forEach((row) => {
      row.forEach((cell) => {
        cell.actors.forEach((actor) => actor.graphics(game, delta));
      });
    });
  }
}
