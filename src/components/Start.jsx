import React from "react";
import redZones from "../redZones.js";
import startFinish from "../startFinish.js";
import StartButton from "./StartButton.jsx";

function Start(props) {
  // First we define the function that will
  // change the state that stores all the
  // info about all the nodes , which doesnt
  // have pragmatical implications but is
  // useful to know what happens -> Helper

  var allNodes = props.fullAllNodes[0];
  const setNodesState = props.fullAllNodes[1];

  // Now we take the array that stores
  // all the colors from the props

  //var nodesColor = props.nodesColor;

  // And the actual state

  var setActualNode = props.fullActualNode[1];

  // The buttons to show or hide

  var showAlgosButtons = props.showAlgosButtons[0];
  var setAlgosButtons = props.showAlgosButtons[1];
  var setMoveButtons = props.showMoveButtons[1];

  var setSolutionShown = props.solutionShown[1];

  var setAlgosRestart = props.algosRestart[1];

  var setDijkstraPress = props.setDijkstraPress;

  // This is the redirect function of the click
  // We will repeat the strategy of taking advantage of the
  // scope of the state defining the function after it

  function startRender() {
    setActualNode({
      key: [9, 3],
      count: 282,
      isPosition: true,
      isFinish: false,
      isVisited: false,
      notAllowed: false,
      color: "#00BF46",
      showColor: true,
      distance: Infinity,
      previousNode: null,
      weight: 1,
      neighbours: [
        [8, 3],
        [10, 3],
        [9, 2],
        [9, 4]
      ]
    });

    var [modifiedNodes, yEnd, xEnd] = startFinish();
    const finalNodes = redZones(modifiedNodes, yEnd, xEnd);
    setNodesState(finalNodes);
    setAlgosRestart(finalNodes);

    // And we show the buttons

    setAlgosButtons(true);
    setMoveButtons(true);
    setSolutionShown(false);
    setDijkstraPress(true)
  }

  return (
    <div>
      {showAlgosButtons ? (
        <StartButton message="Restart" startRender={startRender} />
      ) : (
        <StartButton message="Start" startRender={startRender} />
      )}
    </div>
  );
}

export default Start;
