class Gameboard {
    constructor() {
        this.GRID_SIZE = 10;
        this.grid = this.createGrid();
        this.ships = [];
    }

    createGrid() {
        const grid = [];
        for (let i = 0; i < this.GRID_SIZE; i++) {
            grid.push(Array(this.GRID_SIZE).fill(null));
        }
        return grid;
    }

    isValidPlacement(ship, row, col, horizontal) {
        if (horizontal && col + ship.length > this.GRID_SIZE) {
            return false;
        }
        if (!horizontal && row + ship.length > this.GRID_SIZE) {
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
                shipCells.push({ row, col: col + i, gotHit: false });
            } else {
                this.grid[row + i][col] = ship;
                shipCells.push({ row: row + i, col, gotHit: false });
            }
        }
        // check placement
        ship.place(shipCells);
        this.ships.push(ship);
        return true;
    }

    receiveAttack(row,col){
    // returns true if the cell contains a ship or if it has already been attacked
    // This in order to make another attack if the function returns true within the game loop
    // Check the idea in frontend implementation there is possible to remove the event 
    // listener so the attacked positions cannot be selected
    
        if(this.grid[row][col] === null){
            this.grid[row][col] = 'attacked';
            return false;
        }
        if(this.grid[row][col]==='attacked'){
            console.log('This position was already attacked'); 
            return true;
        }

        const ship = this.grid[row][col];
        const shipCell = ship.position.find(cell => cell.row === row && cell.col === col);
        if(shipCell && !shipCell.gotHit){
            
            ship.getHit(row,col);
            return true;
        }

        console.log("Ship already attacked");
        return true;
    }

    areShipsSunk(){
        if(this.ships.some(ship => !ship.isSunk())){
            return false;
        } 
        return true;
    }
}


export default Gameboard;