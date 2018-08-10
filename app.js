// A set range of numbers
// Player must guess a number
// There is a limited amount of tries
// Player gets message whether winning or loosing

// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNumber(min,max);
let guessesLeft = 3;

// UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message =  document.querySelector(".message");

// Assign min and max number with UI elements
// minNum.textContent = min;
// maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});
// Listen for guess
guessBtn.addEventListener("click",function(){
    let guess = parseInt(guessInput.value);

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number that is between ${min} and ${max}.`, "red");
    }

    // Check if won
    if (guess === winningNum) {
        // Winning message
        gameOver(true,`Number ${winningNum} is the CORRECT guess. Ding ding.`);

    } else{
        // wrong number
        guessesLeft = guessesLeft - 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Number ${winningNum} was the winning answer, you lost.`);
        }else{
            //Orange color of border
            guessInput.style.borderColor = "orange";
            // Clear input
            guessInput.value = "";
            // Game continues - answer again 
            setMessage(`Guess is not correct. You have ${guessesLeft} guesses left.`, "orange");
        }
    }
});
// Game over
function gameOver(won,msg) {
    let color;
    won === true ? color = "green" : color = "red";
    
    // Input gets disabled
    guessInput.disabled = true;
    // Color of border
    guessInput.style.borderColor = color;
    // Text color
    message.style.color = color;
    // Set message to win win
    setMessage(msg);
    // Play again
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
};
// Generate Random Number
function getRandomNumber(min,max) {
   console.log (Math.floor(Math.random()*(max-min+1)+min));
};

// Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
