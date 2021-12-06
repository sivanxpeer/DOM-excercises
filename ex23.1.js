// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);

//Answer 1:
// this will reference the window object


// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
     name: "Timmy",
     greet: () => {
         console.log(`Hello ${this.name}`);
         },
};
myObj.greet();


//Answer 2:
//it will print "hello undefined", referencing the window object - 
//a. correct with a function not an arrow function 
//b. this.name = myObj.name;


//Question 3
const myObj = {
     name: "Timmy",
     greet: function(){
         console.log(`Hello ${this.name}`);
         },
};
this.name = myObj.name;
myObj.greet();


//Answer 3:
const myFuncDec = function () {
    console.log(this);
};

myFuncDec();


// Question 4:
const myFuncArrow = () => {
    console.log(this);
};

myFuncArrow();


//Answer 4:
// prints the global this because arrow function does not have a this binding it inherits from parent->
// in this case the parent is the global scope, the window. lexical scopingu.


//Answer 5:
// a. d is in the global scope (which is window) and the event listener inherits the parent 
// (d) this.
const d = document.querySelector(".element");
d.addEventListener('click', () => {
    console.log(this);
});

// b. we can fix it by puting it in a function declarion. d will get the this of the func function.
d.addEventListener('click', func);
function func(){
    console.log(this);
}