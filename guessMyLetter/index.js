
//get a valid random letter
// ---- 26 letters, pass 10 numbers , replace non abc with empty string
let randomLetter = (Math.random()).toString(36).replace(/[^a-z]+/g, '').slice(0, 1);
console.log("random", randomLetter);

let guesses = ["a", "v", "y", "c"];
let gameOver = false;

const letterEl = document.querySelector(".letter");
const messageEl = document.querySelector(".display");
const keysGuessedEl = document.querySelector(".keys-guessed");
const guessesEl = document.querySelector(".guesses");



function addButton() {
    keysGuessedEl.style.display = "flex";
    keysGuessedEl.style.flexDirection = "column";
    const button = document.createElement("button");
    button.innerText = "Yes";
    button.style.width="50px";
    keysGuessedEl.style.justifyContent="center";
    keysGuessedEl.appendChild(button);
}

function display(message, color) {
    messageEl.innerText = message;
    messageEl.style.color = color;
}

function isValid(guess) {
    if (guess.match(/[a-z]/i)) {
        return true;
    }
    return false;
}


window.addEventListener("keydown", function (e) {
    //check guess validity
    if (!isValid(e.key))
        display("please enter a valid letter!", "red");

    //correct guess
    else if (e.key === randomLetter) {
        letterEl.innerHTML = e.key;
        display("Right Letter!!", "green");
        keysGuessedEl.innerHTML = "";
        keysGuessedEl.innerHTML = "would you like to play again?";
        addButton();
        button.addEventListener("click",function(){
            //reload page 
        })
    }

    //already tried the letter
    else if(keysGuessedEl.innerText.includes(e.key)){
        display(`${e.key} has already been guessed`);
    }

    //wrong guess
    else {
        display("nope, wrong letter", "red");
        //make letter appear on same row but a row under the header
        keysGuessedEl.innerHTML += "</br>" + e.key;
    }

    console.log(e.key)

})




