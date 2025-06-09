window.addEventListener('load', (event) =>{

const score = prompt("What was your score?");

const average = 50;
message = "";

if (score >= average) {
message = "WOW, you scored higher than most gamers";}
else {
message = "Better luck next time!";}

document.getElementById("gameList").textContent = message;

});