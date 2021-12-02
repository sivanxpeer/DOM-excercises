

//26 letters, pass 10 numbers 
let randomLetter = (Math.random() + 1).toString(29).replace(/[^a-z]+/g, '').slice(0,1);
console.log("random", randomLetter);
let guesses=["a","v","y","c"];
let gameOver = false;

// let element =document.createElement()
const letterEl= document.querySelector(".letter");
const messageEl = document.querySelector(".display");
const keyGuessedEl = document.querySelector(".keys-guessed"); 
const guessesEl = document.querySelector(".guesses");

// console.log(guessesEl.includes("a"));


function display(message,color){
    messageEl.innerText= message;
    messageEl.style.color =color;
}


window.addEventListener("keydown",function(e){
    if(e.key===randomLetter){
        letterEl.innerHTML = e.key;
        display("You guessed it!!","green");

    }


    console.log(e.key)

    // else if{
    //     e
    // }a.
})




