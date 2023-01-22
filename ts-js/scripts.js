"use strict";
const gameContainer = document.createElement("div");
gameContainer.classList.add("gameContainer");
document.body.appendChild(gameContainer);
function updateElements() {
    document.querySelectorAll(".gameItem").forEach((e) => e.remove());
    for (let i = 0; i < 9; i++) {
        if (gameArray[i] == "") {
            return;
        }
        else {
            const gameItem = document.createElement("div");
            gameItem.classList.add("gameItem");
            gameItem.textContent = gameArray[i];
            gameContainer.appendChild(gameItem);
        }
    }
}
// Initialize Game board Array
const gameBoard = [];
const gameArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
// The following variable indicates the amount of turns that has passed in this game cycle
let counter = 0;
const playerFactory = (name, item) => {
    return { name, item };
};
function addItem(initGamePosition, item) {
    let gamePosition = initGamePosition - 1;
    if (gameArray[gamePosition] != "" && counter > 9) {
        return;
    }
    else {
        // @ts-ignore
        gameArray[gamePosition] = gameArray[gamePosition].concat(item);
        updateElements();
        counter++;
    }
}
function showGameBoardConsole() {
    console.log(gameArray[0] + " " + gameArray[1] + " " + gameArray[2]);
    console.log(gameArray[3] + " " + gameArray[4] + " " + gameArray[5]);
    console.log(gameArray[6] + " " + gameArray[7] + " " + gameArray[8]);
}
