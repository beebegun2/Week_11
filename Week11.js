// console.log("hi")
const tiles = document.querySelectorAll(".tile");
const player_x - 'X';
const player_o = 'O';
let turn = player_x;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

const gameOverSound = new Audio('sounds/gameover.wave');
const click = new Audio('sounds/click.wav');

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function tileClick(event) {
    if(gameOverArea.classList('visible')) {
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != "") {
        return;
    }
    if (turn === player_x) {
        tile.innerText = player_x;
        boardState[tile-1] = player_x;
        turn = player_o;
    }
}