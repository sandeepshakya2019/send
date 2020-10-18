function myFunction(){
	//To genrate the random number for first user 
	var randomNumber1 = Math.random();
	randomNumber1 = randomNumber1*6;
	randomNumber1 = Math.floor(randomNumber1) + 1;
	//To genrate the random number for second user 
	var randomNumber2 = Math.random();
	randomNumber2 = randomNumber2*6;
	randomNumber2 = Math.floor(randomNumber2) + 1;
	//console log 
	console.log(randomNumber1,randomNumber2);
	//Check Which number is grater on that behalf we chage the text
	if (randomNumber1 > randomNumber2){
		document.querySelector("h1").innerHTML = "User 1 Wins";
	}else if (randomNumber1 < randomNumber2){
		document.querySelector("h1").innerHTML = "User 2 Wins";
	}else{
		document.querySelector("h1").innerHTML = "Draw";
	}
	//Check the images on the base on number genrated by random number
	if (randomNumber1 == 1){
		document.querySelector(".img1").setAttribute("src","images/dice1.png");
	}else if (randomNumber1 == 2){
		document.querySelector(".img1").setAttribute("src","images/dice2.png");
	}else if (randomNumber1 == 3){
		document.querySelector(".img1").setAttribute("src","images/dice3.png");
	}else if (randomNumber1 == 4){
		document.querySelector(".img1").setAttribute("src","images/dice4.png");
	}else if (randomNumber1 == 5){
		document.querySelector(".img1").setAttribute("src","images/dice5.png");
	}else if (randomNumber1 == 6){
		document.querySelector(".img1").setAttribute("src","images/dice6.png");
	}else{
		alert("Sorry Game Crashes");
	}
	//Check the images on the base on number genrated by random number
	if (randomNumber2 == 1){
		document.querySelector(".img2").setAttribute("src","images/dice1.png");
	}else if (randomNumber2 == 2){
		document.querySelector(".img2").setAttribute("src","images/dice2.png");
	}else if (randomNumber2 == 3){
		document.querySelector(".img2").setAttribute("src","images/dice3.png");
	}else if (randomNumber2 == 4){
		document.querySelector(".img2").setAttribute("src","images/dice4.png");
	}else if (randomNumber2 == 5){
		document.querySelector(".img2").setAttribute("src","images/dice5.png");
	}else if (randomNumber2 == 6){
		document.querySelector(".img2").setAttribute("src","images/dice6.png");
	}else{
		alert("Sorry Game Crashes");
	}
	console.log("Hello");
}