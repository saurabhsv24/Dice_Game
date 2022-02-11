var number1 = Math.floor((Math.random()*6))+1; // 1-6 number

var randomImageSource = "images/dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var number2 = Math.floor((Math.random()*6))+1; // 1-6 number
 
var randomImageSource2 = "images/dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//if player 1 wins
if(number1 > number2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}  //if player 2 wins
else if(number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}