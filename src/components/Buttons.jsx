import React from "react";
import move from "./move";
import ButtonsMove from "./ButtonsMove.jsx";

function Buttons(props) {
  // We are going to define in place function to take advantage
  // of the scope of the state ,and we are going to pass all
  // the states to the move functions

  const fullActualNode = props.fullActualNode;
  const fullAllNodes = props.fullAllNodes;

  var moveButtons = props.showMoveButtons[0];
  var solutionShown = props.solutionShown[0];

  var setAlgosRestart = props.algosRestart[1];

  // And now we can redirect passing the state because they
  // are common functions ,not event listeners

  function positionMove(event) {
    const name = event.target.name;
    var algorithmsRestart = move(fullActualNode, fullAllNodes, name);

    // We overwrite the object that stores the last
    // movement grid state so that algorithms take
    // it as starting point every time they are run

    setAlgosRestart(algorithmsRestart);
  }

  return (
    <div>
      {solutionShown ? null : moveButtons ? (
        <ButtonsMove positionMove={positionMove} />
      ) : null}
    </div>
  );
}

export default Buttons;
