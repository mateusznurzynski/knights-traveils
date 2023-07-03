import Node from './node';

const DEFAULT_SIZE = 8;

const createBoardNodes = (size = DEFAULT_SIZE) => {
  const nodes = [];
  const currentPosition = [0, 0];
  const numberOfNodes = size * size;
  let nodeCount = 0;
  while (nodeCount < numberOfNodes) {
    nodes.push(Node(currentPosition));
    if (currentPosition[1] < size - 1) {
      currentPosition[1] += 1;
    } else {
      currentPosition[1] = 0;
      currentPosition[0] += 1;
    }
    nodeCount += 1;
  }

  return nodes;
};

const Board = (size = DEFAULT_SIZE) => {
  const nodes = createBoardNodes(size);
  return {
    nodes,
    size,
  };
};

export default Board;
