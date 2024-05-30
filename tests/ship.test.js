import Ship from "../src/gameLogic/Ship";

test('The amount of hits for the starting ship is 0', () => {
    let testShip = new Ship(3);
    expect(testShip.hits).toBe(0);
})

test('The names of the ships are being correctly given', () => {
    let testCarrier = new Ship(5);
    let testBattleship = new Ship(4);
    let testDestroyer = new Ship(3);
    let testPatrol = new Ship(2);
    expect(testCarrier.name).toBe("Carrier");
    expect(testBattleship.name).toBe("Battleship");
    expect(testDestroyer.name).toBe("Destroyer");
    expect(testPatrol.name).toBe("Patrol Boat");
})

test('The place ship method works correctly', () => {
    let testShip = new Ship(3);
    let testCells = [
        { row: 0, col: 0, gotHit: false },
        { row: 0, col: 1, gotHit: false },
        { row: 0, col: 2, gotHit: false }
    ];
    testShip.place(testCells);
    expect(testShip.position[0]).toEqual({ row: 0, col: 0, gotHit: false });
    expect(testShip.position[1]).toEqual({ row: 0, col: 1, gotHit: false });
    expect(testShip.position[2]).toEqual({ row: 0, col: 2, gotHit: false });
})

test('The getHit method changes ship hits and gotHit property of ship.position correct cell.', () => {
    let testShip = new Ship(3);
    let testCells = [
        { row: 0, col: 0, gotHit: false },
        { row: 0, col: 1, gotHit: false },
        { row: 0, col: 2, gotHit: false }
    ];
    testShip.place(testCells);
    expect(testShip.getHit(0, 1)).toBe("You hit my Destroyer"); // getHit returns the name of the boat hit
    expect(testShip.position[0]).toEqual({ row: 0, col: 0, gotHit: false });
    expect(testShip.position[1]).toEqual({ row: 0, col: 1, gotHit: true });
    expect(testShip.position[2]).toEqual({ row: 0, col: 2, gotHit: false });
    expect(testShip.hits).toBe(1);
})

test(`The getHit method changes ship hits and gotHit property of ship.position correct cell.
After all cells of the ship get a hit, the ship isSunk method returns true`, () => {
    let testShip = new Ship(3);
    let testCells = [
        { row: 0, col: 0, gotHit: false },
        { row: 0, col: 1, gotHit: false },
        { row: 0, col: 2, gotHit: false }
    ];
    testShip.place(testCells);
    testShip.getHit(0, 1);
    testShip.getHit(0, 2);
    testShip.getHit(0, 0);
    expect(testShip.isSunk()).toBe(true);
})

