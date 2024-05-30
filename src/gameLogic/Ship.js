class Ship {
    constructor(length) {
        
        if (!Number.isInteger(length) || length <= 0) {
            throw new Error('Length must be a positive integer.');
        }
        
        this.length = length;
        
        switch (this.length) {
            case 5:
                this.name = "Carrier";
                break;
            case 4:
                this.name = "Battleship";
                break;
            case 3:
                this.name = "Destroyer";
                break;
            default:
                this.name = "Patrol Boat";
        }
        
        this.hits = 0;

        this.position = [];

    }

    getHit(row,col) {
        if (this.hits < this.length) {
            this.hits++;
        }

        let cellHit = this.position.find(cell => (cell.row === row && cell.col === col));
        cellHit.gotHit = true;
        return `You hit my ${this.name}`;
        
    }

    isSunk() {
        return this.hits >= this.length;
    }

    place(cells) {
        this.position = cells;
      }

}


export default Ship;