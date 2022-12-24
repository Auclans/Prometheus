function move(fullActualNode, fullAllNodes, moveType) {
  // First we define the variables that we
  // are going to use for the actual node :

  const actualNode = JSON.parse(JSON.stringify(fullActualNode[0]));

  const setNewNode = fullActualNode[1];

  // And for the helper :

  const allNodes = JSON.parse(JSON.stringify(fullAllNodes[0]));

  const setAllNodes = fullAllNodes[1];

  // Now we take the position of the actual node

  var prevYPosition = actualNode.key[0];
  var prevXPosition = actualNode.key[1];

  // Now we develop the logic to know
  // how to update the position
  // here must be because it doesnt move

  var xPosition = prevXPosition;
  var yPosition = prevYPosition;

  // First we check if we are in the endpoint
  // to ban the user from moving

  if (allNodes[yPosition][xPosition].isFinish === true) {
    allNodes[yPosition][xPosition].color = "#C147E9";
    allNodes[yPosition][xPosition].showColor = true;
    return;
  }

  if (moveType === "up") {
    yPosition = prevYPosition - 1;
  } else if (moveType === "down") {
    yPosition = prevYPosition + 1;
  } else if (moveType === "right") {
    xPosition = prevXPosition + 1;
  } else if (moveType === "left") {
    xPosition = prevXPosition - 1;
  }

  // To avoid out of range problems

  if (
    xPosition < 0 ||
    yPosition < 0 ||
    xPosition > allNodes[0].length - 1 ||
    yPosition > allNodes.length - 1
  ) {
    return;
  }

  // To ban red zones movement

  if (allNodes[yPosition][xPosition].notAllowed === true) {
    return;
  }

  // Now that we keep track of the actual position
  // we can finally update the whole list of nodes

  allNodes[yPosition][xPosition].isPosition = true;
  allNodes[prevYPosition][prevXPosition].isPosition = false;

  // Now we will do the color update

  // For consistency purposes we update the colors in the Helper

  allNodes[yPosition][xPosition].color = "#00BF46";
  allNodes[yPosition][xPosition].showColor = true;

  allNodes[prevYPosition][prevXPosition].color = "#A6F1F5";
  allNodes[prevYPosition][prevXPosition].showColor = false;

  // We update the state to the new node visited
  const newNode = allNodes[yPosition][xPosition];

  setNewNode(newNode);

  for (var l = 0; l < allNodes.length; l++) {
    for (var p = 0; p < allNodes[0].length; p++) {
      allNodes[l][p].showColor = false;
    }
  }

  // The sizes of the boundary render
  const m = 3;
  const n = 3;

  // And the matrix that updates neighbours
  for (var i = -m; i < m + 1; i++) {
    for (var j = -n; j < n + 1; j++) {
      var neighbourXPosition = xPosition + i;
      var neighbourYPosition = yPosition + j;

      // To handle out of range neighbours
      if (
        neighbourXPosition > allNodes[0].length - 1 ||
        neighbourYPosition < 0 ||
        neighbourXPosition < 0 ||
        neighbourYPosition > allNodes.length - 1
      ) {
        continue;
      }

      var targetNode = allNodes[neighbourYPosition][neighbourXPosition];

      // Update the of the new color rendered
      if (targetNode.color === "#FF5A00") {
        targetNode.showColor = true;
      } else if (targetNode.color === "#FFE600") {
        targetNode.showColor = true;
      } else if (targetNode.color === "#00BF46") {
        targetNode.showColor = true;
      } else {
        targetNode.showColor = false;
      }

      // Deprecation of out of range nodes color
    }
  }

  // Finally we check if we are in the endpoint
  // again , to imeediately know if the last
  // movement was to the endpoint

  if (allNodes[yPosition][xPosition].isFinish === true) {
    allNodes[yPosition][xPosition].color = "#C147E9";
    allNodes[yPosition][xPosition].showColor = true;
    return;
  }

  // We save everything in the helper

  var algorithmRestart = JSON.parse(JSON.stringify(allNodes));
  setAllNodes(allNodes);
  return algorithmRestart;
}

export default move;
