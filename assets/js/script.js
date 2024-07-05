const game = {
    score: 0,
    hiscore: '',
    computerCardFlip: [],
    turnInProgress: false,
    playerFlip: [],
}

const cards = document.querySelectorAll(".card")

// Brings up the game area and hides the play button upon clicking, then starts the game
function playButton() {
    document.getElementById("game-area").classList.remove("hide-content");
    document.getElementById("play-btn").classList.add("hide-content");
    const buttonContainer = document.getElementById("btn-container");
    buttonContainer.remove();
    startGame();
}

function startGame() {
    game.score = 0;
    game.computerCardFlip = [];
    game.playerFlip = [];
    computerTurn();
    showScore();
}

function computerTurn() {

}

function playerTurn() {

}

function showScore() {

}

function highScore() {

}