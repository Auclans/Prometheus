import React from "react";
import PopupInstructions from "./PopupInstructions.jsx";

function Instructions(props) {
  var algosButtons = props.showAlgosButtons[0];
  //var showInstructions = props.showInstructions;

  return (
    <div>
      {algosButtons ? null : (
        <div>
          <PopupInstructions>Instructions</PopupInstructions>
        </div>
      )}
    </div>
  );
}

export default Instructions;
