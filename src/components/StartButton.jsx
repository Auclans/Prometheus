import React from "react";
import Button from "@mui/material/Button";

function StartButton(props) {
  return (
    <Button
      className="startButton"
      variant="contained"
      onClick={props.startRender}
    >
      {props.message}
    </Button>
  );
}

export default StartButton;
