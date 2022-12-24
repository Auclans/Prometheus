import React from "react";
import Button from "@mui/material/Button";

function moveButtons(props) {
  return (
    <div>
      <Button className="upButton" onClick={props.positionMove} name="up">
        up
      </Button>
      <div className="moveButtons">
        <Button onClick={props.positionMove} name="left">
          left
        </Button>
        <Button onClick={props.positionMove} name="down">
          down
        </Button>
        <Button onClick={props.positionMove} name="right">
          right
        </Button>
      </div>
    </div>
  );
}
export default moveButtons;
