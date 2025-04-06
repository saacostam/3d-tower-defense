import React from "react";
import { AddDefense, DefenseDefinition } from "../types";
import { Button } from "../../ui.components";

export interface AddDefenseCtaProps {
  addDefense: AddDefense;
  defense: DefenseDefinition;
}

export function AddDefenseCta({ addDefense, defense }: AddDefenseCtaProps) {
  return (
    <Button
      onClick={() => addDefense(defense.type)}
      type="secondary"
      style={{
        width: "72px",
        height: "72px",
        padding: "16px",
        fontSize: "32px",
      }}
    >
      {defense.label}
    </Button>
  );
}
