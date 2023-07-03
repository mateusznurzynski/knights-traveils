import './main.css';
import Board from './board';

const testBoard = Board(8);
testBoard.setConnections();

console.log(testBoard);
console.log(testBoard.findNode([2, 5]));
