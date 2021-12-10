var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;
if (dice1 == 1) {
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 1.png");
}
else if(dice1 == 2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 2.png")
}
else if(dice1 == 3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 3.png")
}
else if(dice1 == 4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 4.png")
}
else if(dice1 == 5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 5.png")
}
else{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice 6.png");
}

if (dice2 == 1) {
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 1.png");
}
else if(dice2 == 2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 2.png")
}
else if(dice2 == 3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 3.png")
}
else if(dice2 == 4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 4.png")
}
else if(dice2 == 5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 5.png")
}
else{
    document.querySelectorAll("img")[1].setAttribute("src","images/dice 6.png");
}

if(dice1 > dice2){
    document.querySelector("h3").textContent = "Player 1 Wins!"
}
else if(dice1 == dice2){
    document.querySelector("h3").textContent = "It's a TIE !"
}
else{
    document.querySelector("h3").textContent = "Player 2 Wins!"
}