import React from "react";
import Buttons from "./Buttons.jsx";
import Matrix from "./Matrix.jsx";
import Start from "./Start.jsx";
import nodesGrid from "../nodesGrid.js";
import Solutions from "./Solutions.jsx";
import Instructions from "./Instructions.jsx";
import InstructionsPage from "./InstructionsPage.jsx";

function App() {
  // First we import the default nodes

  var nodes = nodesGrid();

  // We are going to define two states , one to track
  // the current node , and the other to track all of them

  // All the nodes
  var fullAllNodes = React.useState(nodes);

  // The current node
  var fullActualNode = React.useState(nodes[9][3]);

  // Show initial buttons
  var showMoveButtons = React.useState(false);
  var showAlgosButtons = React.useState(false);

  var solutionShown = React.useState(false);

  var showInstructions = React.useState(false);

  var [dijkstraPressed , setDijkstraPress] = React.useState(true)

  // We use another state to restart the grid when
  // other algorithm is run ,and updating it every
  // time theres a movement so that it starts there

  var algosRestart = React.useState(fullAllNodes[0]);

  return (
    <div>
      <Start
        fullActualNode={fullActualNode}
        fullAllNodes={fullAllNodes}
        nodes={nodes}
        showAlgosButtons={showAlgosButtons}
        showMoveButtons={showMoveButtons}
        solutionShown={solutionShown}
        algosRestart={algosRestart}
        setDijkstraPress={setDijkstraPress}
      />

      <Instructions
        showAlgosButtons={showAlgosButtons}
        showInstructions={showInstructions}
      />

      <InstructionsPage showInstructions={showInstructions} />

      <Solutions
        fullAllNodes={fullAllNodes}
        fullActualNode={fullActualNode}
        showAlgosButtons={showAlgosButtons}
        showMoveButtons={showMoveButtons}
        solutionShown={solutionShown}
        algosRestart={algosRestart}
        dijkstraPressed={dijkstraPressed}
        setDijkstraPress={setDijkstraPress}
      />

      {<Matrix fullAllNodes={fullAllNodes} />}

      <Buttons
        fullActualNode={fullActualNode}
        fullAllNodes={fullAllNodes}
        showAlgosButtons={showAlgosButtons}
        showMoveButtons={showMoveButtons}
        solutionShown={solutionShown}
        algosRestart={algosRestart}
      />
    </div>
  );
}

export default App;
