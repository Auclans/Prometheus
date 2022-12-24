import React from "react";
import Button from "@mui/material/Button";

function AlgosButtons(props) {
  return (
    <div className="algosButtons">
      <Button onClick={props.algorithm} name="DFS">
        DFS
      </Button>
      <Button onClick={props.algorithm} name="BFS">
        BFS
      </Button>
      <Button onClick={props.algorithm} name="Dijkstra">
        Dijkstra
      </Button>
    </div>
  );
}

export default AlgosButtons;
