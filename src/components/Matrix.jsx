import React from "react";
import Node from "./Node.jsx";
import nodesGrid from "./nodesGrid";

// Given that the nodes are a 2d array [ [] ...]
// we have to map each inner array and repeat
// the process .This can be done with a double
// map loop !

function Matrix(props) {
  //const nodes = nodesGrid(props.nodesColor);

  // We will take the array that saves the
  // color state for each node and pass it
  // through the maps to the Node Components
  // Again we will take the absolute index
  // of the element to tell the position
  // in the array of color's states

  // var nodesColor = props.nodesColor;

  var allNodes = props.fullAllNodes[0];
  return (
    <div className="grid">
      {allNodes.map((row, rowIndex) => {
        return (
          // Here also a key is needed !!!!
          <div className="rows" key={rowIndex}>
            {row.map((matrixElement, elementIndex) => {
              //const count = element.count; // Changed : color={nodesColor[count]}
              return (
                <Node
                  key={elementIndex}
                  color={matrixElement.color}
                  showColor={matrixElement.showColor}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Matrix;
