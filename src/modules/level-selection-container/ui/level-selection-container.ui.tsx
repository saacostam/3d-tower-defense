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
        <h1 style={{ marginBottom: "20px" }}>Choose a Level</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
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
                <div style={{ fontSize: "24px" }}>{index + 1}</div>
                <div
                  style={{
                    fontSize: "16px",
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
      <Button
        onClick={goToHome}
        type="secondary"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
        variation="square"
      >
        <ArrowLeftIcon />
      </Button>
    </div>
  );
}
