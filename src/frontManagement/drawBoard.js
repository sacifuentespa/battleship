const GRID_SIZE = 10;


function drawBoard(board) {

    const squareSize = calculateSquareSize();
    board.style.width = `${squareSize * 10}px`;
    board.style.height = `${squareSize * 10}px`;

    for (let row = GRID_SIZE; row >= 1; row--) {
        for (let column = 0; column <= GRID_SIZE-1; column++) {

            const square = document.createElement('div');
            square.classList.add('square');

            const squareText = document.createElement('p');
            square.appendChild(squareText);

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;


            square.id = row + column;
            board.appendChild(square);

        }
    }
}

function calculateSquareSize() {
    const boardWidth = window.innerWidth / (GRID_SIZE * 3);
    const boardHeight = window.innerHeight / (GRID_SIZE * 3);
    const squareSize = Math.min(boardWidth, boardHeight) * 0.85;
    return squareSize;
}


export default drawBoard; 