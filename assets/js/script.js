
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
    playerFlip = [];
    const randomSelect = randomCardSelect();
    game.computerCardSelection.push(randomSelect);
    cardFlip();
}

function playerTurn() {

}

function showScore() {

}

function highScore() {

}

function cardFlip() {
    game.turnInProgress = true;
    const lastItem = game.computerCardSelection.slice(-1);
    console.log(lastItem);
    setTimeout(() => {
    document.getElementById("computer-area");
    }, 800);

}

function randomCardSelect() {
    const cards = [];
    $(".card").each(function () {
        cards.push(this.id);
    });
    return cards[parseInt(Math.random() * cards.length)];
}