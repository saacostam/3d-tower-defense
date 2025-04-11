import React from "react";
import { COLOR_PALETTE } from "../../colors";
import { ArrowLeftIcon } from "../../icons";
import { LevelSelectionContainerUiProps } from "../level-selection-container";
import { Button } from "../../ui.components";

export function LevelSelectionContainerUI({
  levels,
  goToLevel,
  goToHome,
}: LevelSelectionContainerUiProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-2.5"
      style={{
        backgroundColor: COLOR_PALETTE.VOID,
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-3xl font-bold">Choose a Level</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {levels.map((level, index) => (
            <Button key={index} type="primary" onClick={() => goToLevel(index)}>
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{index + 1}</div>
                <div className="text-base mt-1">{level.name}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <Button
        onClick={goToHome}
        type="secondary"
        className="absolute top-2.5 left-2.5"
        variation="square"
      >
        <ArrowLeftIcon />
      </Button>
    </div>
  );
}
