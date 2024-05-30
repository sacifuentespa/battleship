import Ship from "./src/gameLogic/Ship";
import Gameboard from "./src/gameLogic/Gameboard.js";
import Player from "./src/gameLogic/Player.js";
import drawBoard from "./src/frontManagement/drawBoard.js";

const playerBoard = document.querySelector('.playerBoard');
const oponentBoard = document.querySelector('.oponentBoard');

drawBoard(playerBoard);

const player1 = new Player("Human");
const player2 = new Player("Computer");

// ships for player 1
const carrierPlayer1 = new Ship(5);
const battleshipPlayer1 = new Ship(4);
const destroyerOnePlayer1 = new Ship(3);
const destroyerTwoPlayer1 = new Ship(3);
const patrolBoatPlayer1 = new Ship(2);

// ships for player 2
const carrierPlayer2 = new Ship(5);
const battleshipPlayer2 = new Ship(4);
const destroyerOnePlayer2 = new Ship(3);
const destroyerTwoPlayer2 = new Ship(3);
const patrolBoatPlayer2 = new Ship(2);


