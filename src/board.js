import Node from './node';
import { possibleKnightMoves, Knight } from './knight';

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
            newPosition[0] <= this.size - 1 &&
            newPosition[1] >= 0 &&
            newPosition[1] <= this.size - 1
          ) {
            connections.push(this.findNode(newPosition));
          }
        });

        // eslint-disable-next-line no-param-reassign
        node.connections = connections;
      });
    },

    setKnight(position = [0, 1]) {
      this.knight = Knight(position);
    },

    findShortestWay(
      startPosition,
      endPosition,
      parents = [],
      visited = [],
      queue = []
    ) {
      queue.shift();
      const startNode = this.findNode(startPosition);
      visited.push(startPosition);

      if (
        startPosition[0] === endPosition[0] &&
        startPosition[1] === endPosition[1]
      ) {
        const response = [...parents, startPosition];
        const responseString = `The shortest path is: ${response.join(
          ' => '
        )}, ${response.length - 1} jumps in total`;
        return responseString;
      }

      startNode.connections.forEach((connection) => {
        if (
          !visited.find((position) => {
            if (
              position[0] === connection.position[0] &&
              position[1] === connection.position[1]
            ) {
              return true;
            }
            return false;
          })
        ) {
          queue.push({
            position: connection.position,
            parents: [...parents, startPosition],
          });
        }
      });

      if (queue.length > 0) {
        return this.findShortestWay(
          queue[0].position,
          endPosition,
          queue[0].parents,
          visited,
          queue
        );
      }
      return false;
    },
  };
};

export default Board;
