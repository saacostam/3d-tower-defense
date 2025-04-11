import React from "react";
import { COLOR_PALETTE } from "../../colors";
import { HomeContainerUiProps } from "../home-container";
import { Button } from "../../ui.components";

export function HomeContainerUI({ goToNext }: HomeContainerUiProps) {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundColor: COLOR_PALETTE.VOID,
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-3xl font-bold">3D Tower Defense</h1>
        <Button type="primary" onClick={goToNext}>
          <span className="text-2xl">Start</span>
        </Button>
      </div>
    </div>
  );
}
