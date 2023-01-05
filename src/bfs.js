// This will cover the bfs algorithm solution

function bfs(fullActualNode, fullAllNodes, algosRestart) {
  // We make a deep copy to work with it
  var allNodes = JSON.parse(JSON.stringify(algosRestart));
  var setAllNodes = fullAllNodes[1];

  var actualNode = fullActualNode[0];

  var queue = [];

  // To run the algorithm from the actual position
  // we push the state as initial element

  queue.push(actualNode);

  // We mark as visited the initial node
  // and out of the loop to avoid interference

  actualNode.isVisited = true;

  // Already define the node to be able
  // to run the while loop

  var node = actualNode;

  // The function that will reconstruct the path
  // receives a node as input , a color path or
  // a red zone , and updates the allNodes state

  function showPath(node, shiftPath, shiftRestart) {
    setTimeout(() => {
      setAllNodes((prev) => {
        // Deep copy of the previous state so that
        // we can return it with the update of the
        // current solution -> progressive reconstruction

        let previousNodes = JSON.parse(JSON.stringify(prev));

        //  We take the position of the previous nodes and
        // redefine it with the modified with the algorithm
        previousNodes[node.key[0]][node.key[1]] = node;

        // New nodes with the current node update
        return previousNodes;
      });
    }, shiftPath);
  }

  // The function that deletes the path except red zones

  function restartPath(node, shiftRestart) {
    setTimeout(() => {
      setAllNodes((prev) => {
        // Deep copy of the previous state so that
        // we can return it with the update of the
        // current solution -> progressive reconstruction

        let previousNodes = JSON.parse(JSON.stringify(prev));

        // We update the node's color to initial , except
        // if we are in the endpoint

        if (node.isFinish === true) {
          node.color = "#FFE600";
        } else {
          node.color = "#A6F1F5";
        }

        //  We take the position of the previous nodes and
        // redefine it with the modified with the algorithm
        previousNodes[node.key[0]][node.key[1]] = node;

        // New nodes with the current node update
        return previousNodes;
      });
    }, shiftRestart);
  }

  // The shift between the print and restart of each node

  var shiftPath = 0;

  var shiftRestart = 2000;

  while (node.isFinish !== true) {
    // We pop the actual node from the queue
    node = queue.shift();
    shiftPath += 20;
    shiftRestart += 20;

    var yPosition = node.key[0];
    var xPosition = node.key[1];

    // Change the color to show visited and preventing
    // it to change the initial node color

    if (node.isPosition !== true) {
      allNodes[yPosition][xPosition].color = "#C147E9";
      allNodes[yPosition][xPosition].showColor = true;
      showPath(node, shiftPath);
      restartPath(node, shiftRestart);
    }

    // We will add the node to an array to delete the path
    // once the algorithm finishes

    if (node.isPosition !== true) {
      //restart.push(node);
    }

    // We are going to check the neighbours
    // in the node's keys

    var neighbours = node.neighbours;

    for (var i = 0; i < neighbours.length; i++) {
      // We take each neigbours from the key of
      // the actual node
      var neighbourPosition = neighbours[i];
      var neighbour = allNodes[neighbourPosition[0]][neighbourPosition[1]];

      // To respect the zones and show them
      if (neighbour.notAllowed === true) {
        shiftPath += 1;
        neighbour.showColor = true;
        showPath(neighbour, shiftPath);
        continue;
      }

      // We only want to visit new nodes
      if (neighbour.isVisited === true) {
        continue;
      }

      // Valid neigbour to be analyzed as node
      neighbour.isVisited = true;
      queue.push(neighbour);
    }
  }

  // We restart the grid to delete the path color
  // but avoid red zones after finding solution
  // and so taking the last value of the previous shift
  // after exiting the loop

  return;
}
export default bfs;
