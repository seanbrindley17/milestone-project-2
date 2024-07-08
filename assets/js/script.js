const game = {
    score: 0,
    hiscore: '',
    computerCardSelection: [],
    turnInProgress: false,
    playerFlip: [],
    turnNumber: 0,
}


// a nodelist of the choice cards 
// const cards = document.querySelectorAll(".card");


const cards = [];
$(".card").each(function () {
    cards.push(this.id);
});
console.log(cards);


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
    game.computerCardSelection = [];
    game.playerFlip = [];
    computerTurn();
    showScore();
}

function computerTurn() {
    game.turnInProgress = true
    game.computerCardSelection.push(randomCardSelect(cards));
}

function playerTurn() {

}

function showScore() {

}

function highScore() {

}

function cardFlip() {

}

// function randomCardSelect(cards) {
//     const randomCardIndex = Math.floor(Math.random() * cards.length);
//     const randomCardElement = cards[randomCardIndex];
//     return randomCardElement;
// }