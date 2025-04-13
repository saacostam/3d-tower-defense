import { Color, Vector2, Vector3 } from "three";
import { BonfireActor, BushActor, StoneActor, TreeActor } from "../actors";
import { BattleFieldContainer } from "../battle-field-container";
import { COLOR_PALETTE } from "../../colors";
import {
  BridgeComponent,
  GrassComponent,
  PlacementZoneDivisionComponent,
} from "../components";
import { WORLD_CONFIG } from "../../config";
import { Actor, Component, GridCell } from "../../game";
import { LevelDefinition, LTT } from "../../levels";
import { Spawner } from "../../mobs";
import { HeadQuarters } from "../../player";

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
    }
  | {
      type: "static";
      position: Vector2;
    };

export const WorldBuilderUtils = {
  buildLevel: (args: {
    width: number;
    height: number;
    tileSize: number;
    level: LevelDefinition;
    headQuarters: HeadQuarters;
  }): {
    worldBuilderCommands: WorldBuilderCommand[];
    spawners: Spawner[];
  } => {
    let hasPlacedHeadquarters = false;

    const worldBuilderCommands: WorldBuilderCommand[] = [];
    const spawners: Spawner[] = [];

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
          const posVector2 = new Vector2(
            tile.position.x * args.tileSize,
            tile.position.y * args.tileSize,
          );

          const posVector3 = new Vector3(
            i * args.tileSize,
            -args.tileSize / 2,
            j * args.tileSize,
          );

          switch (tile.type) {
            case LTT.HQ: {
              if (hasPlacedHeadquarters)
                throw new Error("Can not place Headquarters twice");
              args.headQuarters.position = posVector2;
              worldBuilderCommands.push({
                type: "actor",
                actor: args.headQuarters,
                position: posVector2,
                static: false,
              });
              break;
            }
            case LTT.SPW: {
              const spawner = new Spawner({
                position: posVector2,
                multiplier: args.level.difficultyMultiplier,
              });

              worldBuilderCommands.push({
                type: "actor",
                actor: spawner,
                position: posVector2,
                static: false,
              });
              spawners.push(spawner);
              break;
            }
            case LTT.RV: {
              worldBuilderCommands.push({
                type: "static",
                position: posVector2,
              });
              break;
            }
            case LTT.BR: {
              worldBuilderCommands.push({
                type: "component",
                component: new BridgeComponent({
                  position: posVector3,
                  size: args.tileSize,
                }),
              });
              break;
            }
            case LTT.BF: {
              worldBuilderCommands.push({
                type: "actor",
                actor: new BonfireActor({
                  position: posVector3,
                  size: args.tileSize,
                }),
                position: posVector2,
                static: true,
              });
              break;
            }
            case LTT.TR: {
              worldBuilderCommands.push({
                type: "actor",
                actor: new TreeActor({
                  position: posVector3,
                  size: args.tileSize,
                }),
                position: posVector2,
                static: true,
              });
              break;
            }
            case LTT.STN: {
              worldBuilderCommands.push({
                type: "actor",
                actor: new StoneActor({
                  position: posVector3,
                  size: args.tileSize,
                }),
                position: posVector2,
                static: true,
              });
              break;
            }
            case LTT.BSH: {
              worldBuilderCommands.push({
                type: "actor",
                actor: new BushActor({
                  position: posVector3,
                  size: args.tileSize,
                }),
                position: posVector2,
                static: true,
              });
              break;
            }
          }
        }
      }
    }

    return {
      worldBuilderCommands,
      spawners,
    };
  },
  inlineUpdateLevelGridsPlaceableStatus: (args: {
    container: BattleFieldContainer;
    grid: GridCell[][];
    levelDefinition: LevelDefinition;
    height: number;
    width: number;
  }): void => {
    const { container, grid, levelDefinition, height, width } = args;

    if (levelDefinition.zones.type === "disabled") return;

    const placementZoneDivision = new PlacementZoneDivisionComponent({
      linePosition: levelDefinition.zones.line * WORLD_CONFIG.TILE_SIZE,
      height: height,
      width: width,
    });

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const isPlaceable = y >= levelDefinition.zones.line;
        grid[x][y].isPlaceable = isPlaceable;

        if (y === levelDefinition.zones.line)
          container.addComponent(placementZoneDivision);
      }
    }
  },
};
