

//generate random numbers
var randomVar = Math.floor(Math.random()* 5)+1;
var randomVar2 = Math.floor(Math.random()* 5)+1;

//generate random dice pictures
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomVar+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomVar2+".png");

//random result base on dice
if (randomVar > randomVar2) {
    document.querySelector("h1").innerHTML = "Player 1 win!!"
}
else if(randomVar < randomVar2) {
    document.querySelector("h1").innerHTML = "Player 2 win!!"

}
else {
    document.querySelector("h1").innerHTML = "It's a tie!!"

}


