

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
    game.playerFlip = [];
    const randomSelect = randomCardSelect();
    game.computerCardSelection.push(randomSelect);
    cardHighlight();
    playerTurn();
}


function playerTurn() {
    const cards = document.getElementsByClassName("card");
    console.log("playerTurn called, number of cards: ", cards.length);
    
    for (let card of cards) {
        console.log("Adding event listener to card: ", card);
        
        card.addEventListener("click", (event) => {
            console.log("Card clicked: ", event.currentTarget);
            
            if (game.computerCardSelection > 0) {
                let playerChoice = event.currentTarget;
                game.playerFlip.push(playerChoice);
                console.log("playerFlip array: ", game.playerFlip);
            }
        });
        if (game.playerFlip.length === game.computerCardSelection.length) {
            let correct = game.playerFlip.every((card, index) => {
                return card === game.computerCardSelection[index];
            });
            if (correct) {
                console.log("Success!");
            } else {
                console.log("game over");
            };
        };
    }
}



function showScore() {

}

function highScore() {

}

function gameOver () {

}

function cardHighlight() {
    game.turnInProgress = true;
    const lastItem = game.computerCardSelection.slice(-1)[0];
    console.log(lastItem);
    
    lastItem.classList.add("card-highlight");
    setTimeout(() => {
        lastItem.classList.remove("card-highlight");
    }, 800);
}

function randomCardSelect() {
    const cards = [];
    $(".card").each(function () {
        cards.push(this);
    });
    return cards[parseInt(Math.random() * cards.length)];
}