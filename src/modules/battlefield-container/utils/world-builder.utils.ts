import { Color, Vector3 } from "three";
import { Component } from "../../game";
import { GrassComponent } from "../components";
import { COLOR_PALETTE } from "../../colors";

export const WorldBuilderUtils = {
  buildWorldComponents: (args: {
    width: number;
    height: number;
    tileSize: number;
  }): Component[] => {
    const worldComponents: Component[] = [];

    for (let i = 0; i < args.width; i++) {
      for (let j = 0; j < args.height; j++) {
        worldComponents.push(
          new GrassComponent({
            position: new Vector3(
              i * args.tileSize,
              -args.tileSize / 2,
              j * args.tileSize,
            ),
            size: args.tileSize,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
          }),
        );
      }
    }

    return worldComponents;
  },
};
