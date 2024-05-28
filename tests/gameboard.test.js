import Ship from "../src/Ship";
import Gameboard from "../src/Gameboard";


describe('Gameboard', () => {
    let gameboard;
  
    beforeEach(() => {
      gameboard = new Gameboard;
    });
  
    test('placing ships on the gameboard', () => {
      const ship = new Ship(3);
      expect(gameboard.placeShip(ship, 0, 0, true)).toBe(true); // Place ship horizontally
      expect(gameboard.placeShip(ship, 0, 0, false)).toBe(false); // Overlapping placement should fail
      expect(gameboard.placeShip(ship, 6, 6, true)).toBe(true); // Place ship vertically
      expect(gameboard.placeShip(ship, 8, 8, true)).toBe(false); // Overflowing Ship should fail
      console.log(gameboard.grid[0][0]);
    });
  /*
    test('receiving attacks', () => {
      const ship = new Ship(3);
      gameboard.placeShip(ship, 0, 0, true);
      expect(gameboard.receiveAttack(0, 0)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(1, 0)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(2, 0)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(3, 0)).toBe(false); // Missed attack
    });
  
    test('checking if all ships are sunk', () => {
      const ship1 = new Ship(2);
      const ship2 = new Ship(3);
      gameboard.placeShip(ship1, 0, 0, true);
      gameboard.placeShip(ship2, 1, 1, true);
      gameboard.receiveAttack(0, 0);
      gameboard.receiveAttack(0, 1);
      gameboard.receiveAttack(1, 1);
      gameboard.receiveAttack(1, 2);
      gameboard.receiveAttack(1, 3);
      expect(gameboard.allShipsSunk()).toBe(true); // All ships are sunk
    });
    */
  });