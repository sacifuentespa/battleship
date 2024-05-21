class Gameboard {
    constructor() {
        this.GRID_SIZE = 10;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let i = 0; i < this.GRID_SIZE; i++) {
            grid.push(Array(this.GRID_SIZE).fill(null));
        }
        return grid;
    }

    isValidPlacement(ship, row, col, horizontal) {
        if (horizontal && col + ship.length > this.gridSize) {
            return false;
        }
        if (!horizontal && row + ship.length > this.gridSize) {
            return false;
        }

        for (let i = 0; i < ship.length; i++) {
            const currentRow = horizontal ? row : row + i;
            const currentCol = horizontal ? col + i : col;
            if (this.grid[currentRow][currentCol] !== null) {
                return false;
            }
        }

        return true;
    }

    // horizontal being a boolean value true for horizontal, false for vertical
    
    placeShip(ship, row, col, horizontal) {
        if (!this.isValidPlacement(ship, row, col, horizontal)) {
            return false;
        }

        const shipCells = [];
        for (let i = 0; i < ship.length; i++) {
            if (horizontal) {
                this.grid[row][col + i] = ship;
                shipCells.push({ row, col: col + i });
            } else {
                this.grid[row + i][col] = ship;
                shipCells.push({ row: row + i, col });
            }
        }
        
        // check placement
        ship.place(shipCells);
        this.ships.push(ship);
        return true;
    }

}

let gridTest = new Gameboard;

console.log(gridTest.grid);