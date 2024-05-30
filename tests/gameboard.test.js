import Ship from "../src/gameLogic/Ship";
import Gameboard from "../src/gameLogic/Gameboard";


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
    });

    test('receiving attacks', () => {
      const shipDestroyerTest = new Ship(3);
      const shipBattleshipTest = new Ship(4);
      gameboard.placeShip(shipDestroyerTest, 0, 0, true);
      gameboard.placeShip(shipBattleshipTest, 1, 1, false);
      expect(gameboard.receiveAttack(0, 0)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(0, 1)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(1,1)).toBe(true); // Successful attack
      expect(gameboard.receiveAttack(3, 5)).toBe(false); // Missed attack
      expect(gameboard.receiveAttack(3, 5)).toBe(true); // This position was already attacked'
      expect(gameboard.receiveAttack(1, 1)).toBe(true); // Ship already attacked
      expect(gameboard.receiveAttack(2, 1)).toBe(true); // Successful attack
      expect(shipBattleshipTest.position[1].gotHit).toBe(true); // Successful attack
    });

    test('checking if all ships are sunk', () => {
      const ship1 = new Ship(2);
      const ship2 = new Ship(3);
      
      gameboard.placeShip(ship1, 0, 0, true);
      gameboard.placeShip(ship2, 1, 1, true);
      expect(gameboard.areShipsSunk()).toBe(false);
      gameboard.receiveAttack(0, 0);
      gameboard.receiveAttack(0, 1);
      gameboard.receiveAttack(1, 1);
      gameboard.receiveAttack(1, 2);
      gameboard.receiveAttack(1, 3);
      expect(gameboard.areShipsSunk()).toBe(true); // All ships are sunk
    });

  });