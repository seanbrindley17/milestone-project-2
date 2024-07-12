

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
    const randomSelect = randomCardSelect();
    game.computerCardSelection.push(randomSelect);
    cardHighlight();
    game.computerCardId.push(randomSelect.id);
    console.log(game.computerCardSelection, "computer card actual div");
    console.log(game.computerCardId, "computer card button id");
    playerTurn();
}

/* Listens for the player's click and pushes the card to the player's array.
*  Currently not working as the arrays will never match due to the class added in the highlight function
*  to the computer array.
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
        });
        if (game.playerFlip.length === game.computerCardSelection.length) {
            if (game.playerFlip === game.computerCardId) {
                return correct
            }
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