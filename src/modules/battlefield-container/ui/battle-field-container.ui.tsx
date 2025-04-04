import React, { useState } from "react";
import { BattleFieldContainerUiProps } from "../battle-field-container";
import { COLOR_PALETTE } from "../../colors";
import { ArrowLeftIcon } from "../../icons";
import { Button } from "../../ui.components";

export function BattleFieldContainerUI({
  cursorUIFeedbackCopy,
  goToLevelSelection,
}: BattleFieldContainerUiProps) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  return (
    <>
      {!isConfirmationModalOpen && (
        <>
          <h1
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "medium",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            3D Tower Defense (Prototype)
          </h1>
          <ul
            style={{
              display: "block",
              textAlign: "right",
              listStyle: "none",
              fontSize: "smaller",
              position: "absolute",
              top: "35px",
              right: "10px",
            }}
          >
            <li>Arrow-Keys for Movement</li>
            <li>Z - Place a Tower</li>
            <li>X - Place a Rocket Tower</li>
            <li>C - Place a Wall</li>
          </ul>
          <Button
            onClick={() => setIsConfirmationModalOpen(true)}
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
          {cursorUIFeedbackCopy && (
            <div
              style={{
                borderRadius: "12px",
                position: "absolute",
                top: "10px",
                transform: "translate(-50%, 0)",
                left: "50%",
                textAlign: "center",
                fontSize: "smaller",
                backgroundColor: COLOR_PALETTE.RED,
                padding: "8px",
                opacity: 0.8,
              }}
            >
              {cursorUIFeedbackCopy}
            </div>
          )}
        </>
      )}
      {isConfirmationModalOpen && (
        <div
          style={{
            minWidth: "100px",
            borderRadius: "12px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: COLOR_PALETTE.VOID,
            padding: "32px",
          }}
        >
          <h2>Are you sure you want to exit the game?</h2>
          <p style={{ marginTop: "16px", marginBottom: "32px" }}>
            You will lose all progress and be redirected to the level selection.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <Button onClick={goToLevelSelection} type="secondary">
              Confirm
            </Button>
            <Button
              onClick={() => setIsConfirmationModalOpen(false)}
              type="primary"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
