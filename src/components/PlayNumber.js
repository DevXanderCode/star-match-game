import React from "react";

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: color[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
const color = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightCoral",
  candidate: "deepskyblue",
};

export default PlayNumber;
