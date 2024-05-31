const GRID_SIZE = 10;

function calculateSquareSize() {
    const boards = document.querySelector('.boards');
    const boardWidth = boards.clientWidth / (GRID_SIZE*3/2);
    const boardHeight = boards.clientHeight / (GRID_SIZE*3/2);
    const squareSize = Math.min(boardWidth, boardHeight);
    return squareSize;
}

export default calculateSquareSize; 