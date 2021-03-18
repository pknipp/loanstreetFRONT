import React from "react";

type Props = {
  width?: string | number;
  color?: string;
  direction?: "up" | "down";
};

const SortIcon = (props: Props) => {
  const { width = "10px", color = "gray", direction } = props;
  const path = !direction
    ? "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
    : "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z";

  if (direction == "up") {
    return (
      <svg
        viewBox='0 0 320 512'
        width={width}
        style={{ transformOrigin: "0.3125em 0.5em" }}
      >
        <g transform='translate(160 256)'>
          <g transform='translate(0, 0)  scale(1, -1)  rotate(0 0 0)'>
            <path fill={color} d={path} transform='translate(-160 -256)'></path>
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox='0 0 320 512' width={width}>
      <path fill={color} d={path}></path>
    </svg>
  );
};

export default SortIcon;
