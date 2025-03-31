import React from "react";
import { COLOR_PALETTE } from "../../colors";
import { LevelSelectionContainerUiProps } from "../level-selection-container";
import { Button } from "../../ui.components";

export function LevelSelectionContainerUI({
  levels,
  goToLevel,
}: LevelSelectionContainerUiProps) {
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
        <h1 style={{ marginBottom: "20px" }}>Choose a Level</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {levels.map((level, index) => (
            <Button key={index} type="primary" onClick={() => goToLevel(index)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
                <div
                  style={{
                    fontSize: "14px",
                    marginTop: "5px",
                    fontWeight: "normal",
                  }}
                >
                  {level.name}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
