function redZones(nodes, yEnd, xEnd) {
  // The first term is alone to avoid out of range problems
  // so that we can cover edge cases

  for (var k = 0; k < 6; k++) {
    const xPosition = Math.floor(8 + Math.random() * 22);
    if (yEnd === 0 && xEnd === xPosition) {
      continue;
    } else {
      nodes[0][xPosition].notAllowed = true;

      // For consistency purposes we update helper

      nodes[0][xPosition].color = "#FF5A00";

      //const countF = nodes[0][xPosition].count;
      //nodesColor[countF][1]("red");
    }
  }

  // We update the key of the random node to be notallowed : true.
  // for the rest of the grid , one at a time.We also make sure
  // that we cover edge cases so that its possible to reach end

  for (var i = 1; i < nodes.length; i++) {
    for (var j = 0; j < nodes[i].length / 3; j++) {
      const shift = 8;
      const xPosition = Math.floor(
        shift + Math.random() * (nodes[i].length - shift - 1)
      );

      // First we check a red zone doesnt match with end point

      if (yEnd === i && xEnd === xPosition) {
        continue;

        // Blocks cant trace a diagonal to have 100% prob of solution:

        // Diagonal backwards :
      } else if (nodes[i - 1][xPosition - 1].notAllowed === true) {
        continue;

        // Diagonal forwards :
      } else if (nodes[i - 1][xPosition + 1].notAllowed === true) {
        continue;

        // Edge case vertical wall , limit to height 5:
      } else if (
        i >= 5 &&
        nodes[i - 1][xPosition].notAllowed === true &&
        nodes[i - 2][xPosition].notAllowed === true &&
        nodes[i - 3][xPosition].notAllowed === true &&
        nodes[i - 4][xPosition].notAllowed === true
      ) {
        continue;

        // Valid red zones :
      } else {
        nodes[i][xPosition].notAllowed = true;

        //For consistency purposes we update helper

        nodes[i][xPosition].color = "#FF5A00";
      }
    }
  }

  // We return the result to update the final result
  return nodes;
}

export default redZones;
