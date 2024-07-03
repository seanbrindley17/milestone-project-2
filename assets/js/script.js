const game = {
    score: 0,
    hiscore: '',
    computerCardFlip: [],
    turnInProgress: false,
    playerTurn: [],
}

function playButton() {
    document.getElementById("game-area").classList.remove("hide-content");
    document.getElementById("play-btn").classList.add("hide-content");
    const buttonContainer = document.getElementById("btn-container");
    buttonContainer.remove();
}