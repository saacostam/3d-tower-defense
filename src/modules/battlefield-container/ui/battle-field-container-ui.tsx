import React from "react";

export function BattleFieldContainerUI() {
  return (
    <>
      <h1
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "medium",
          position: "absolute",
          top: "10px",
          right: "20px",
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
          right: "20px",
        }}
      >
        <li>Arrow-Keys for Movement</li>
        <li>Z - Place a Tower</li>
        <li>X - Place a Rocket Tower</li>
        <li>C - Place a Wall</li>
      </ul>
    </>
  );
}
