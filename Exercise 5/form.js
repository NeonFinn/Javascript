window.addEventListener('load', (event) =>{

const restaurants = ["Rally's", "Subway", "Panda Express", "Chipotle", "Massey's Pizza"];
fav = prompt("Enter your favorite restaurant");

restaurants.push(fav);

restaurants.sort();

document.getElementById("rest1").textContent = restaurants[0];
document.getElementById("rest2").textContent = restaurants[1];
     });