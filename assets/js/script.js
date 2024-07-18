

const game = {
    score: 0,
    hiscore: '',
    computerCardSelection: [],
    computerCardId: [],
    turnInProgress: false,
    playerFlip: [],
    turnNumber: 0,
}

const modal = document.getElementById("how-to-play-modal");
const modalButton = document.getElementById("how-to-play-button");
const closeSpan = document.getElementsByClassName("close");

function modalOpen() {
    modal.style.display = "block";
}

function modalCloseX() {
    modal.style.display = "none";
}


// Brings up the game area and hides the play button upon clicking, then starts the game
function playButton() {
    document.getElementById("game-area").classList.remove("hide-content");
    document.getElementById("play-btn").classList.add("hide-content");
    const buttonContainer = document.getElementById("btn-container");
    buttonContainer.remove();
    startGame();
}

// Sets the score to 0, empties the computer's and player's arrays and calls the computer to have it's turn.
function startGame() {
    game.score = 0;
    game.turnNumber = 0;
    game.computerCardSelection = [];
    game.computerCardId = [];
    game.playerFlip = [];
    cardEventListeners();
    computerTurn();
    showScore();
}

// Clears the player's array in preparation for another guess. Selects a random card and pushes it to computer's array
function computerTurn() {
    game.playerFlip = [];
    game.turnNumber++;
    console.log(game.turnNumber, "Turn number");
    const randomSelect = randomCardSelect();
    game.computerCardSelection.push(randomSelect);

    game.computerCardId.push(randomSelect.id);
    console.log(game.computerCardSelection, "computer card actual div");
    console.log(game.computerCardId, "computer card button id");
    playSequence();
}

// Function that iterates through the computerCardSelection array and highlights the divs sequentially
function playSequence() {
    let i = 0;
    const sequence = setInterval(() => {
        if (i < game.computerCardSelection.length) {
            const card = game.computerCardSelection[i];
            if (card) {
                cardHighlight(card);
            }
            i++;
        } else {
            clearInterval(sequence);
        }
    }, 750);
}


/* Listens for the player's click and pushes the card's ID to the player's array.
*  Checks that the computer's and player's arrays are the same length and calls compareChoice function
*/ 
function cardEventListeners() {
    const cards = document.getElementsByClassName("card");
    for (let card of cards) {
        card.addEventListener("click", (event) => {
            if (!game.turnInProgress && game.computerCardSelection.length > 0) {
                let playerChoice = event.currentTarget;
                game.playerFlip.push(playerChoice.id);
                console.log(game.playerFlip, "player choice button id");
                
                if (game.playerFlip.length === game.computerCardSelection.length) {
                    compareChoice();
                };
            };
        });
    };
}

// Uses a for loop to iterate through the playerFlip and computerCardId arrays and checks that the indexes are the same
function compareChoice() {
    for (let i = 0; i < game.computerCardId.length; i++) {
        if (game.playerFlip[i] !== game.computerCardId[i]) {
            console.log("gameover");
            return gameOver();
        }
    }
    console.log("Correct");
    success();
}



function showScore() {
    document.getElementById("score-number").innerText = game.score;
}

function highScore() {

}

 

function gameOver () {
    window.alert("Game over");
    document.getElementById("game-area").classList.add("hide-content");
    document.getElementById("game-over-screen").classList.remove("hide-content");
    document.getElementById("final-score").innerText = game.score;
}

function tryAgain () {
    document.getElementById("game-over-screen").classList.add("hide-content");
    document.getElementById("game-area").classList.remove("hide-content");
    game.score = 0;
    game.turnNumber = 0;
    game.computerCardSelection = [];
    game.computerCardId = [];
    game.playerFlip = [];
    computerTurn();
    showScore();
}

function success() {
    game.score++;
    showScore();
    computerTurn();
}

function cardHighlight(card) {
    card.classList.add("card-highlight");
    setTimeout(() => {
        card.classList.remove("card-highlight");
    }, 800);
}

// Function to get all the card elements into an array and have the computer pick one randomly
function randomCardSelect() {
    const cards = [];
    $(".card").each(function () {
        cards.push(this);
    });
    return cards[parseInt(Math.random() * cards.length)];
}