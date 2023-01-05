function dijkstra(fullActualNode, fullAllNodes, algosRestart) {
  // We make a deep copy to work with it
  var allNodes = JSON.parse(JSON.stringify(algosRestart));

  var setAllNodes = fullAllNodes[1];

  var actualNode = fullActualNode[0];

  var queue = [];

  queue.push(actualNode);

  // The distance key will acumulate the distance
  // from the start to actual node being visited
  // in the queue .For the start node , of course
  // the distance to itself is zero

  actualNode.distance = 0;

  var node = actualNode;

  // To fix the default of the distance key
  // distance : Infinity -> null
  // produced when dfs or bfs is runned before ,
  // because the temporary copies that we make
  // with JSON.parse(JSON.stringify()) for any
  // reason don't copy Infinity and instead -> null

  for (var k = 0; k < allNodes.length; k++) {
    for (var j = 0; j < allNodes[k].length; j++) {
      allNodes[k][j] = {
        ...allNodes[k][j],
        distance: Infinity
      };
    }
  }

  // The function that will reconstruct the path
  // receives a node as input , a color path or
  // a red zone , and updates the allNodes state

  function showPath(node, shiftPath) {
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

  // The function that restarts the path
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

  // The shift between the print of each node and the restart

  var shiftPath = 0;

  var shiftRestart = 2000;

  while (node.isFinish !== true) {
    // We pop the actual node from the queue
    node = queue.shift();
    shiftPath += 20;
    shiftRestart += 20;

    var yPosition = node.key[0];
    var xPosition = node.key[1];

    var nodeDistance = node.distance;
    var neighbours = node.neighbours;

    // Change the color to show visited
    // calling the first timeframe and preventing
    // to change the actual position

    if (node.isPosition !== true) {
      allNodes[yPosition][xPosition].color = "#C147E9";
      allNodes[yPosition][xPosition].showColor = true;
      showPath(node, shiftPath);
      restartPath(node, shiftRestart);
    }

    for (var i = 0; i < neighbours.length; i++) {
      // We take the neigbours from the key of
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

      // All the allowed neighbours are at
      // distance 1 = equally weighted -
      // -> weight = 1

      var weight = neighbour.weight;

      // If the distance from the start to the
      // actual node is lesser than the previous
      // values stored in the node's key , it
      // will be updated with the new distance
      // Thats why initially they are all infinity

      var distanceStartNeighbour = nodeDistance + weight;

      if (distanceStartNeighbour < neighbour.distance) {
        neighbour.distance = distanceStartNeighbour;

        // We create deep copy instead of assigning
        // not to create infinite loop over itself

        neighbour.previousNode = JSON.parse(JSON.stringify(node));
        queue.push(neighbour);
      }
    }
  }

  // Finally we'll reconstruct the
  // solution from the endpoint backwards

  // First we must check that theres solution because otherwise
  // we would need to update the iteraction in the set timeout
  // and that is interpreted as infinite loop because it takes
  // a lot of time to know if thers solution -> necessary to
  // check solution first and the iterate through the solution
  // with the known length of the array ,this way an infiite
  // loop is impossible because theres a static and fixed end ,
  // and not a unknown and dynnamic one !

  var shiftSolution = shiftRestart;

  while (node.isPosition !== true) {
    shiftSolution += 100;
    reconstructPath(node, shiftSolution);
    node = node.previousNode;
  }
  function reconstructPath(node, shiftSolution) {
    setTimeout(() => {
      setAllNodes((prev) => {
        // Deep copy of the previous state so that
        // we can return it with the update of the
        // current solution -> progressive reconstruction

        let previousNodes = JSON.parse(JSON.stringify(prev));

        // We update the node's color to initial , except
        // if we are in the endpoint

        var solutionNode = node.previousNode.key;

        previousNodes[solutionNode[0]][solutionNode[1]].color = "#C147E9";

        // New nodes with the current node update
        return previousNodes;
      });
    }, shiftSolution);
  }

  // And finally we update the first node to show position

  setTimeout(() => {
    setAllNodes((prev) => {
      let previousNodes = JSON.parse(JSON.stringify(prev));

      var finalNode = actualNode.key;

      previousNodes[finalNode[0]][finalNode[1]].color = "#00BF46";

      // New nodes with the current node update
      return previousNodes;
    });
  }, shiftSolution);

  return;
}

export default dijkstra;
