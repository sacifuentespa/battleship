import Ship from "./src/gameLogic/Ship.js";
import Gameboard from "./src/gameLogic/Gameboard.js";
import Player from "./src/gameLogic/Player.js";
import drawBoard from "./src/frontManagement/drawBoard.js";
import drawShip from "./src/frontManagement/drawShip.js";
import paintShipsAndHitsInBoards from "./src/frontManagement/paintShipsAndHitsInBoards.js";

const playerBoard = document.querySelector('.playerBoard');
const oponentBoard = document.querySelector('.oponentBoard');

const shipsContainer = document.querySelector('.ships');

drawBoard(playerBoard);
drawBoard(oponentBoard);

const player1 = new Player("Human");
const player2 = new Player("Computer");

// ships for player 1
const carrierPlayer1 = new Ship(5);
const battleshipPlayer1 = new Ship(4);
const destroyerOnePlayer1 = new Ship(3);
const destroyerTwoPlayer1 = new Ship(3);
const patrolBoatPlayer1 = new Ship(2);

drawShip(carrierPlayer1, shipsContainer);
drawShip(battleshipPlayer1, shipsContainer);
drawShip(destroyerOnePlayer1, shipsContainer);
drawShip(destroyerTwoPlayer1, shipsContainer);
drawShip(patrolBoatPlayer1, shipsContainer);

player1.gameboard.placeShip(carrierPlayer1, 0,0, true);
player1.gameboard.placeShip(battleshipPlayer1, 1,1, true);
player1.gameboard.placeShip(destroyerOnePlayer1, 2,2, true);
player1.gameboard.placeShip(destroyerTwoPlayer1, 3,3, true);
player1.gameboard.placeShip(patrolBoatPlayer1, 4,4, true);

let humanPlayerBoard = document.querySelector('.playerBoard');

player1.gameboard.receiveAttack(0,0)
player1.gameboard.receiveAttack(5,0)

paintShipsAndHitsInBoards(player1.gameboard, humanPlayerBoard);

// ships for player 2
const carrierPlayer2 = new Ship(5);
const battleshipPlayer2 = new Ship(4);
const destroyerOnePlayer2 = new Ship(3);
const destroyerTwoPlayer2 = new Ship(3);
const patrolBoatPlayer2 = new Ship(2);

player2.gameboard.placeShip(carrierPlayer2, 0,0, true);
player2.gameboard.placeShip(battleshipPlayer2, 1,1, true);
player2.gameboard.placeShip(destroyerOnePlayer2, 2,2, true);
player2.gameboard.placeShip(destroyerTwoPlayer2, 3,3, true);
player2.gameboard.placeShip(patrolBoatPlayer2, 4,4, true);
