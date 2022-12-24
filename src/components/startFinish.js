import nodesGrid from "./nodesGrid";

// To place the end point we'll generate a
// random number from the col 6 until the end
// and in every possible column ,and we'll set
// the key that indicates if the node is the
// last as true

function startFinish() {
  const nodes = nodesGrid();

  // First we are just going to show the
  // starting point and initialize it

  nodes[9][3].isPosition = true;
  nodes[9][3].color = "#00BF46";
  nodes[9][3].showColor = "true";

  // And also change the state of the actual node

  // Now we'll update the node's color
  // updating the array that stores it ,
  // using the absolute index of the
  // node to tell the position in the array

  //const countStart = nodes[9][3].count;
  //nodesColor[countStart][1]("green");

  // Now we create the random finish point
  // x is the horizontal from where endpoints
  // can start

  const x = 11;

  const xAxisRange = Math.floor(x + Math.random() * (nodes[0].length - x));
  const yAxisRange = Math.floor(Math.random() * nodes.length);

  // Now we update the the node given
  // by the numbers as the finish point

  nodes[yAxisRange][xAxisRange].isFinish = true;

  // To be consistent and save the general state of everything

  nodes[yAxisRange][xAxisRange].color = "#FFE600";

  // And we repeat the previous schema to
  // update the color of the end point

  //const count = nodes[yAxisRange][xAxisRange].count;
  //nodesColor[count][1]("yellow");

  // And we return the nodes and the end
  // point coordinates to use them in redZones

  return [nodes, yAxisRange, xAxisRange];
}
export default startFinish;
