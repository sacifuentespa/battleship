const GRID_SIZE = 10;


function drawBoard(board) {

    const squareSize = calculateSquareSize();
    board.style.width = `${squareSize * GRID_SIZE}`;
    board.style.height = `${squareSize * GRID_SIZE}`;

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let column = 0; column < GRID_SIZE; column++) {

            const square = document.createElement('div');
            square.classList.add('square');

            const squareText = document.createElement('p');
            square.appendChild(squareText);

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;


            square.id = `${row}${column}`;
            board.appendChild(square);
        }
    }
    
    board.style.gridTemplateColumns = `repeat(${GRID_SIZE}, ${squareSize}px)`;
    board.style.gridTemplateRows = `repeat(${GRID_SIZE}, ${squareSize}px)`;
}

function calculateSquareSize() {
    const boards = document.querySelector('.boards');
    const boardWidth = boards.clientWidth / (GRID_SIZE*2);
    const boardHeight = boards.clientHeight / (GRID_SIZE*2);
    const squareSize = Math.min(boardWidth, boardHeight);
    return squareSize;
}


export default drawBoard; 