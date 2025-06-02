window.addEventListener('load', (event) =>{

let x = document.querySelector('h2');
x.textContent = 'Video Game Cost Calculator';

let y = document.getElementById("gameList");
y.textContent = 'To calculate the cost of the game, type the price of the game within the prompt.';

let z = document.getElementById("logo");
z.src = "img/logo.png";

let response = prompt("What is the price of the game? ");
let price = parseFloat(response);

let taxRate = 0.05
let taxAmount = price * taxRate;

let totalCost = price + taxAmount;

document.getElementById("sales").value = "$" + taxAmount.toFixed(2);
document.getElementById("total").value = "$" + totalCost.toFixed(2);
    
     });