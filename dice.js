var randomNumber1=(Math.floor(Math.random()*6+1));
var randomImage1="images/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomNumber2=(Math.floor(Math.random()*6+1));
var randomImage2="images/"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="player 1 won";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="draw";

}


