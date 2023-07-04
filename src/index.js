import './main.css';
import Board from './board';

const testBoard = Board(8);
testBoard.setConnections();
testBoard.setKnight();

console.log(testBoard);
console.log(testBoard.findShortestWay([0, 1], [0, 0]));
