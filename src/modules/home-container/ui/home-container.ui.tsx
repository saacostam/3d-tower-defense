import React from "react";
import { HomeContainerUiProps } from "../home-container";
import { Button } from "../../ui.components";
import { COLOR_PALETTE } from "../../colors";

export function HomeContainerUI({ goToNext }: HomeContainerUiProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOR_PALETTE.DARK,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>3D Tower Defense</h1>
        <Button type="primary" onClick={goToNext}>
          Start
        </Button>
      </div>
    </div>
  );
}
