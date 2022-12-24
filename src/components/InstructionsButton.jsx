import React from "react";
import Button from "@mui/material/Button";

function InstructionsButton(props) {
  var setShowInstructions = props.showInstructions[1];

  function showInstructions() {
    setShowInstructions((prev) => !prev);
  }

  return (
    <Button className="instructionsButton" onClick={showInstructions}>
      {" "}
      Instructions{" "}
    </Button>
  );
}
export default InstructionsButton;
