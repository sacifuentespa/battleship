import calculateSquareSize from "./calculateSquareSize.js";

function drawShip(ship, container) {

    const squareSize = calculateSquareSize();

    const shipName = document.createElement('h4');
    shipName.innerText = ship.name;
    container.appendChild(shipName);

    const shipDrawing = document.createElement('div');
    shipDrawing.classList.add('shipDrawing');
    container.appendChild(shipDrawing);

    for (let row = 0; row < ship.length; row++) {
        const square = document.createElement('div');
        square.classList.add('squareShip');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        shipDrawing.appendChild(square);
    }
}

export default drawShip; 