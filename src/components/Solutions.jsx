import React from "react";
import dfs from "./dfs.js";
import bfs from "./bfs.js";
import dijkstra from "./dijkstra.js";
import AlgosButtons from "./AlgosButtons.jsx";

function Solutions(props) {
  var fullAllNodes = props.fullAllNodes;

  var fullActualNode = props.fullActualNode;

  var algosButtons = props.showAlgosButtons[0];

  var setSolutionShown = props.solutionShown[1];

  var algosRestart = props.algosRestart[0];

  function algorithm(event) {
    setSolutionShown(true);

    // Restart of the grid using the object that
    // stores the last movement of the grid

    const algorithm = event.target.name;

    if (algorithm === "DFS") {
      dfs(fullActualNode, fullAllNodes, algosRestart);
    } else if (algorithm === "BFS") {
      bfs(fullActualNode, fullAllNodes, algosRestart);
    } else if (algorithm === "Dijkstra") {
      dijkstra(fullActualNode, fullAllNodes, algosRestart);
    }
  }

  return (
    <div>{algosButtons ? <AlgosButtons algorithm={algorithm} /> : null}</div>
  );
}

export default Solutions;
