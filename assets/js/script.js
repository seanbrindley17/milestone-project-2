
// Game State
const game = {
    score: 0,
    hiscore: '',
    computerCardSelection: [],
    computerCardId: [],
    turnInProgress: false,
    playerFlip: [],
    turnNumber: 0,
}

// Gets the html elements needed and sets them as constants for the following two functions
const modal = document.getElementById("how-to-play-modal");
const modalButton = document.getElementById("how-to-play-button");
const closeSpan = document.getElementsByClassName("close");

// Changes the display type of the modal from none to block
function modalOpen() {
    modal.style.display = "block";
    document.getElementById("play-btn").classList.add("hide-content");
    document.getElementById("welcome-container").classList.add("hide-content");
}

// Changes the display type of the modal from block to none when the close button is clicked
function modalCloseX() {
    modal.style.display = "none";
    document.getElementById("play-btn").classList.remove("hide-content");
    document.getElementById("welcome-container").classList.remove("hide-content");
}


// Brings up the game area and hides the play button upon clicking, then starts the game
function playButton() {
    document.getElementById("game-area").classList.remove("hide-content");
    document.getElementById("play-btn").classList.add("hide-content");
    document.getElementById("welcome-container").classList.add("hide-content");
    const buttonContainer = document.getElementById("btn-container");
    buttonContainer.remove();
    document.getElementById("header").classList.add("hide-content");
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
    highScore();
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
    game.turnInProgress = true;
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
            game.turnInProgress = false;
        }
    }, 1000);
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

function playerClick(card) {
    if (game.turnInProgress === false) {
        card.classList.add("player-card-highlight");
        setTimeout(() => {
            card.classList.remove("player-card-highlight");
            setTimeout;
        }, 800);
    };
}

// Uses a for loop to iterate through the playerFlip and computerCardId arrays and checks that the indexes are the same
function compareChoice() {
    for (let i = 0; i < game.computerCardId.length; i++) {
        if (game.playerFlip[i] !== game.computerCardId[i]) {
            highScore();
            console.log("gameover");
            return gameOver();
        }
    }
    console.log("Correct");
    success();
}


// Selects the current score element and updates it in real time using innerText
function showScore() {
    document.getElementById("score-number").innerText = game.score;
}

/* Checks if local storage is applicable. Sets highScore variable to be stored 
* in local storage and then compares against current game score. If current score is greater
* it overwrites the highScore value being stored in local storage and then displays to the user via innerText
*/
function highScore() {
    if (localStorage) {
        let highScore = localStorage.getItem('highScore');
        if (highScore === null) {
            highScore = 0;
            localStorage.setItem("highScore", highScore);
        } else {
            highScore = parseInt(highScore, 10);
        };
        
        const currentScore = game.score;
        if (currentScore > highScore) {
            localStorage.setItem('highScore', currentScore);
            highScore = currentScore;
        }
        document.getElementById("hi-score-number").innerText = highScore;
    };
}

// Hides the game area, shows the game over screen with the player's score displayed and the option to try again
function gameOver () {
    document.getElementById("game-area").classList.add("hide-content");
    document.getElementById("game-over-screen").classList.remove("hide-content");
    document.getElementById("final-score").innerText = game.score;
}

/* This function restarts the game with all arrays and number set to their default
* Functions almost exactly like startGame just without adding event listeners upon clicking as they 
* will already be there.
*/
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

// Upon successful player sequence, increases score by 1 and calls the computer to have it's turn
function success() {
    game.score++;
    showScore();
    computerTurn();
}

// Adds the card-highlight class to the card called with this function and removes it after 800ms
function cardHighlight(card) {
    card.classList.add("card-highlight");
    setTimeout(() => {
        card.classList.remove("card-highlight");
        setTimeout(200);
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