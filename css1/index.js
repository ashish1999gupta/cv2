
var random1=Math.random();
random1=random1*6;
random1=Math.floor(random1);
random1++;
document.querySelectorAll(".img")[0].setAttribute("src","images/dice"+random1+".png");


var random2=Math.random();
random2=random2*6;
random2=Math.floor(random2);
random2++;
document.querySelectorAll(".img")[0].setAttribute("src","images/dice"+random2+".png");
if(random1>=random2){
  document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else{
  document.querySelector("h1").innerHTML= "Player 2 Wins";
}
