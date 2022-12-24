function nodesGrid() {
  // We are going to build the matrix .In javascript
  // you can insert to empty elements via his index

  var nodes = [];
  var count = 0;
  var color = "#A6F1F5";
  var weight = 1;

  // Matrix build has can be like this in js
  for (var i = 0; i < 19; i++) {
    // Each element will be have another array ->matrix
    nodes[i] = [];

    for (var j = 0; j < 31; j++) {
      // Each node is going to be an object
      // and will need certain keys to be
      // able to develop the algorithm .

      nodes[i][j] = {
        key: [i, j],
        count: count,
        isPosition: false,
        isFinish: false,
        isVisited: false,
        notAllowed: false,
        color: color,
        showColor: false,
        distance: Infinity,
        previousNode: null,
        weight: weight
      };

      // To manage out of range problems
      // we need to define the neihgbours
      // of each node differently

      if (i === 0 && j === 0) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i + 1, j],
            [i, j + 1]
          ]
        };
      } else if (i === 18 && j === 30) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i - 1, j],
            [i, j - 1]
          ]
        };
      } else if (i === 0 && j === 30) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i + 1, j],
            [i, j - 1]
          ]
        };
      } else if (i === 18 && j === 0) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i - 1, j],
            [i, j + 1]
          ]
        };
      } else if (i === 0) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i + 1, j],
            [i, j + 1],
            [i, j - 1]
          ]
        };
      } else if (j === 0) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i + 1, j],
            [i - 1, j],
            [i, j + 1]
          ]
        };
      } else if (j === 30) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i + 1, j],
            [i - 1, j],
            [i, j - 1]
          ]
        };
      } else if (i === 18) {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i - 1, j],
            [i, j + 1],
            [i, j - 1]
          ]
        };
      } else {
        nodes[i][j] = {
          ...nodes[i][j],
          neighbours: [
            [i - 1, j],
            [i + 1, j],
            [i, j - 1],
            [i, j + 1]
          ]
        };
      }

      count++;
    }
  }

  return nodes;
}

export default nodesGrid;
