import React, { PropsWithChildren } from "react";
import { COLOR_PALETTE } from "../colors";

export interface ButtonProps {
  onClick: () => void;
  type: "primary" | "secondary";
  style?: React.CSSProperties;
  variation?: "square" | "padded";
}

export function Button({
  children,
  onClick,
  type,
  style,
  variation = "padded",
}: PropsWithChildren<ButtonProps>) {
  const color =
    type === "primary" ? COLOR_PALETTE.DARK_GREEN : COLOR_PALETTE.DARK_BLUE;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{
        backgroundColor: color,
        border: "none",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "12px",
        fontSize: "16px",
        fill: "white",
        zIndex: 100,
        ...(variation === "padded"
          ? { padding: "16px 32px" }
          : { padding: "16px 16px" }),
        ...style,
      }}
    >
      {children}
    </button>
  );
}
