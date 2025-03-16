import { Vector2 } from "three";
import { TBattleSide } from "../battlefield-container";
import { Actor, ActorArgs } from "../game";

export interface MobArgs extends ActorArgs {
  battleSide: TBattleSide;
  pos: Vector2;
  radius: number;
}

export class Mob extends Actor {
  public battleSide: TBattleSide;

  public pos: Vector2;
  public radius: number;

  constructor(args: MobArgs) {
    super(args);
    this.battleSide = args.battleSide;
    this.pos = args.pos;
    this.radius = args.radius;
  }
}
