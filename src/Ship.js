class Ship {
    constructor(length, name){
        if (!Number.isInteger(length) || length <= 0) {
            throw new Error('Length must be a positive integer.');
          }
        this.length = length;
        switch(this.length){
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
    }

    hit(){
        if(this.hits < this.length){
            this.hits++;
        }
    }

    isSunk(){
        return this.hits >= this.length;
    }

}

export default Ship;