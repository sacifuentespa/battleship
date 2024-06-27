import Ship from "./../gameLogic/Ship.js";
import Gameboard from "../gameLogic/Gameboard.js";



function hitOponentBoard(event, player) {
    let target = event.target;

    // If the target is a <p> element, set the target to its parent <div>
    if (target.tagName.toLowerCase() === 'p') {
        target = target.parentElement;
    }

    const cellId = target.id;
    const cellRow = parseInt(cellId[4]);
    const cellColumn = parseInt(cellId[5]);
    player.gameboard.receiveAttack(cellRow,cellColumn);
    //const hitCell = document.querySelector(`#${cellId}`);
    
}

export default hitOponentBoard;