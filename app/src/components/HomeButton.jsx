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
      style={{ backgroundColor: isMouseOver ? "#3E2B1C" : "#f1eade", color: isMouseOver ? "#f1eade" : "#3E2B1C"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.buttonName}
    </button>
  );
}

export default HomeButton;
