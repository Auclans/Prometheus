import React from "react";

function InstructionsPage(props) {
  var showInstructions = props.showInstructions[0];
  return (
    <div>
      {showInstructions ? (
        <div>
          <h1>These are the instructions </h1>
        </div>
      ) : null}
    </div>
  );
}

export default InstructionsPage;
