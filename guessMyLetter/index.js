

//26 letters, pass 10 numbers 
let randomLetter = (Math.random() + 1).toString(29).replace(/[^a-z]+/g, '').slice(0,1);
console.log("random", randomLetter);
let guesses=["a","v","y","c"];
let gameOver = false;

// let element =document.createElement()
const letterEl= document.querySelector(".letter");
const message = document.querySelector(".display");
const keyGuessedEl = document.querySelector(".keys-guessed"); 
const guessesEl = document.querySelector(".guesses");

// console.log(guessesEl.includes("a"));

function getInput(e){
    console.log(e.key);
    return e.key;
}

function guessMyLetter(){
   const usersGuess=document.addEventListener('keypress',getInput);
   console.log(usersGuess);
}

window.addEventListener("keydown",function(e){
    if(e.key===randomLetter){
        letterEl.innerHTML = e.key;
        message.innerText="You guessed it!"
        message.style.color = "green";
    }


    console.log(e.key)

    // else if{
    //     e
    // }a.
})




