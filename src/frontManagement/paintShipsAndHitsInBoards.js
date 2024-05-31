import Ship from "./../gameLogic/Ship.js";

const GRID_SIZE = 10;


function paintShipsAndHitsInBoards(logicBoard, paintedBoard) {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let column = 0; column < GRID_SIZE; column++) {
            const cellLogic = logicBoard.grid[row][column];
            const cellPainted = paintedBoard.querySelector(`#cell${row}${column}`);
            if(cellLogic === null){
                continue;
            }

            const cellPaintedParagraph = cellPainted.querySelector('p');
            
            if(cellLogic === "attacked"){
                cellPaintedParagraph.textContent = 'X';
                continue;
            }
            else if(cellLogic instanceof Ship){
                cellPainted.style.backgroundColor = '#3D3B40';
                                
                if(cellLogic.position.find(cell => (cell.row === row && cell.col === column)).gotHit === true){
                    cellPaintedParagraph.textContent = 'X';
                }
            }
        }
    }
}

export default paintShipsAndHitsInBoards;