import React, { PropsWithChildren } from "react";
import { COLOR_PALETTE } from "../colors";

export interface ButtonProps {
  onClick: () => void;
  type: "primary" | "secondary";
}

export function Button({
  children,
  onClick,
  type,
}: PropsWithChildren<ButtonProps>) {
  const color =
    type === "primary" ? COLOR_PALETTE.DARK_GREEN : COLOR_PALETTE.DARK;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border: "none",
        padding: "16px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "12px",
        fontSize: "20px",
      }}
    >
      {children}
    </button>
  );
}
