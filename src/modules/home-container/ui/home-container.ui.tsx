import React from "react";
import { COLOR_PALETTE } from "../../colors";
import { HomeContainerUiProps } from "../home-container";
import { Button } from "../../ui.components";

export function HomeContainerUI({ goToNext }: HomeContainerUiProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOR_PALETTE.VOID,
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
          <span style={{ fontSize: "22px" }}>Start</span>
        </Button>
      </div>
    </div>
  );
}
