import { Color, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { GrassComponent } from "../components";
import { Actor, Component } from "../../game";
import { LevelDefinition, LTT } from "../../levels";
import { HeadQuarters } from "../../player";
import { Spawner } from "../../mobs";

type WorldBuilderCommand =
  | {
      type: "component";
      component: Component;
    }
  | {
      type: "actor";
      actor: Actor;
      position: Vector2;
      static: boolean;
    };

export const WorldBuilderUtils = {
  buildLevel: (args: {
    width: number;
    height: number;
    tileSize: number;
    level: LevelDefinition;
    headQuarters: HeadQuarters;
  }): WorldBuilderCommand[] => {
    let hasPlacedHeadquarters = false;

    const worldBuilderCommands: WorldBuilderCommand[] = [];

    for (let i = 0; i < args.width; i++) {
      for (let j = 0; j < args.height; j++) {
        const tile = args.level.tiles.find(
          (tile) => tile.position.x === i && tile.position.y === j,
        );

        if (tile === undefined) {
          worldBuilderCommands.push({
            type: "component",
            component: new GrassComponent({
              position: new Vector3(
                i * args.tileSize,
                -args.tileSize / 2,
                j * args.tileSize,
              ),
              size: args.tileSize,
              color: new Color(COLOR_PALETTE.DARK_GREEN),
            }),
          });
        } else {
          switch (tile.type) {
            case LTT.HQ: {
              if (hasPlacedHeadquarters)
                throw new Error("Can not place Headquarters twice");
              worldBuilderCommands.push({
                type: "actor",
                actor: args.headQuarters,
                position: new Vector2(
                  tile.position.x * args.tileSize,
                  tile.position.y * args.tileSize,
                ),
                static: false,
              });
              break;
            }
            case LTT.SPW: {
              const position = new Vector2(
                tile.position.x * args.tileSize,
                tile.position.y * args.tileSize,
              );

              worldBuilderCommands.push({
                type: "actor",
                actor: new Spawner({
                  position: position,
                }),
                position: position,
                static: false,
              });
            }
          }
        }
      }
    }

    return worldBuilderCommands;
  },
};
