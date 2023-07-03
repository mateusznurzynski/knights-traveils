import Node from './node';
import { possibleKnightMoves } from './knight';

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
    findNode(value) {
      if (!Array.isArray(value) || value.length !== 2) {
        return false;
      }
      const rowNumber = value[1];
      const columnNumber = value[0] * this.size;
      const index = rowNumber + columnNumber;

      return this.nodes[index];
    },
    setConnections() {
      this.nodes.forEach((node) => {
        const connections = [];
        possibleKnightMoves.forEach((move) => {
          const newPosition = [...node.position];
          newPosition[0] += move.verticalDifference;
          newPosition[1] += move.horizontalDifference;

          if (
            newPosition[0] >= 0 &&
            newPosition[0] <= this.size &&
            newPosition[1] >= 0 &&
            newPosition[1] <= this.size
          ) {
            connections.push(this.findNode(newPosition));
          }
        });

        // eslint-disable-next-line no-param-reassign
        node.connections = connections;
      });
    },
  };
};

export default Board;
