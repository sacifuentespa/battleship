class Gameboard{
    constructor(){
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

      
}