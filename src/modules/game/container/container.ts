import { Actor } from "../actor";
import { Game } from "../game";

export class Container {
  public actors: Actor[] = [];

  public constructor() {}

  public onStart(_game: Game) {}
  public onSwitch(_game: Game) {}

  public addActor(actor: Actor) {
    this.actors.push(actor);
  }

  public update(game: Game, delta: number) {
    this.actors.forEach((actor) => actor.update(game, delta));
  }

  public graphics(game: Game, delta: number) {
    this.actors.forEach((actor) => actor.graphics(game, delta));
  }
}
