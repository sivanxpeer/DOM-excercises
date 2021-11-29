const start = document.querySelector(".start-here");
start.innerText = "main title";

const sub4 = document.createElement("li");
sub4.innerText="sub 4";
const subs = start.nextElementSibling.children[0];
const sub1 = subs.children[0];
subs.appendChild(sub4);
subs.removeChild(sub1);

const title = start.parentElement.parentElement.previousElementSibling.children[2].innerText= "Master of the DOM";
console.dir(title);

start.parentElement.nextElementSibling.children[0].innerText = "What a wonderful world";
