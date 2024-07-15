

const game = {
    score: 0,
    hiscore: '',
    computerCardSelection: [],
    computerCardId: [],
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

// Sets the score to 0, empties the computer's and player's arrays and calls the computer to have it's turn.
function startGame() {
    game.score = 0;
    game.computerCardSelection = [];
    game.playerFlip = [];
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
    cardHighlight();
    game.computerCardId.push(randomSelect.id);
    console.log(game.computerCardSelection, "computer card actual div");
    console.log(game.computerCardId, "computer card button id");
    playComputerSequence();
    // playerTurn();
}

function playComputerSequence() {
    let i = 0;
    const sequence = setInterval(() => {
        if (i < game.computerCardSelection.length) {
            cardHighlight(game.computerCardSelection[i]);
            i++;
        } else {
            clearInterval(sequence);
            game.turnInProgress = false;
            playerTurn();
        }
    }, 750);
}

/* Listens for the player's click and pushes the card's ID to the player's array.
*  Checks that the computer's and player's arrays are the same length
*  Uses a for loop to iterate through the two array and check that the indexes of the playerFlip and computerCardId match 
*/ 
function playerTurn() {
    const cards = document.getElementsByClassName("card");
    for (let card of cards) {
        card.addEventListener("click", (event) => {
            if (game.computerCardSelection.length > 0) {
                let playerChoice = event.currentTarget;
                game.playerFlip.push(playerChoice.id);
            }
            console.log(game.playerFlip, "player choice button id");

            if (game.playerFlip.length === game.computerCardSelection.length) {
                for (let i = 0; i < game.computerCardId.length; i++) {
                    if (game.playerFlip[i] !== game.computerCardId[i]) {
                        console.log("gameover");
                        gameOver();
                    } else {
                        console.log("Correct");
                        success();
                    };
                };
            };
        });
    };
}


function showScore() {
    document.getElementById("score-number").innerText = game.score;
}

function highScore() {

}

function gameOver () {

}

function success() {
    game.score++;
    showScore();
    computerTurn();
}

// Highlights last card the computer selected
function cardHighlight() {
    game.turnInProgress = true;
    const lastItem = game.computerCardSelection.slice(-1)[0];
    console.log(lastItem);
    
    lastItem.classList.add("card-highlight");
    setTimeout(() => {
        lastItem.classList.remove("card-highlight");
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