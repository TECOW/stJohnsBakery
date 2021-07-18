import React, { useState } from "react";
import "./HomeButton.css"

function HomeButton(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <button
      style={{ backgroundColor: isMouseOver ? "rgb(51, 36, 24)" : "#f1eade", color: isMouseOver ? "#f1eade" : "rgb(51, 36, 24)"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.buttonName}
    </button>
  );
}

export default HomeButton;
