import React from "react";

function Node(props) {
  // Now we will just collect each node
  // state color given by the map

  //var colorNode = props.color[0];
  var colorNode = props.color;
  var showColor = props.showColor;

  return (
    <span
      style={{ backgroundColor: showColor ? colorNode : "#A6F1F5" }}
      className="nodes"
    ></span>
  );
}

export default Node;
