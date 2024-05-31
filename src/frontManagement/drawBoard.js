import calculateSquareSize from "./calculateSquareSize.js";

const GRID_SIZE = 10;

function drawBoard(board) {

    const squareSize = calculateSquareSize();

    const internBoard = document.createElement('div');
    internBoard.classList.add('internBoard');
    board.appendChild(internBoard);
    

    internBoard.style.width = `${squareSize * GRID_SIZE}`;
    internBoard.style.height = `${squareSize * GRID_SIZE}`;

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let column = 0; column < GRID_SIZE; column++) {

            const square = document.createElement('div');
            square.classList.add('square');

            const squareText = document.createElement('p');
            square.appendChild(squareText);

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.id = `${row}${column}`;
            internBoard.appendChild(square);
        }
    }
    
    internBoard.style.gridTemplateColumns = `repeat(${GRID_SIZE}, ${squareSize}px)`;
    internBoard.style.gridTemplateRows = `repeat(${GRID_SIZE}, ${squareSize}px)`;
}



export default drawBoard; 