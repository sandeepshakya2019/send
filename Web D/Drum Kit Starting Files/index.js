var number = document.querySelectorAll(".drum").length;

for (var i = 0; i<number;i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click",function (){
		//check the which button was pressed using this constructor
		var buttonscase = this.innerHTML 
		makeSound(buttonscase);
	});
}

document.addEventListener('keypress',function(event){
	var keyboard = event.key;
	  $("." + keyboard).fadeIn(100).fadeOut(100).fadeIn(100);
	makeSound(keyboard);
});

function makeSound(key){
	switch(key){
			case "w":
				var sounds = new Audio("sounds/crash.mp3");
				sounds.play();
				break;
			case "a":
				var sounds = new Audio("sounds/kick-bass.mp3");
				sounds.play();
				break;
			case "s":
				var sounds = new Audio("sounds/snare.mp3");
				sounds.play();
				break;
			case "d":
				var sounds = new Audio("sounds/tom-1.mp3");
				sounds.play();
				break;
			case "j":
				var sounds = new Audio("sounds/tom-2.mp3");
				sounds.play();
				break;
			case "k":
				var sounds = new Audio("sounds/tom-3.mp3");
				sounds.play();
				break;
			case "l":
				var sounds = new Audio("sounds/tom-4.mp3");
				sounds.play();
				break;
			default:
				console.log("button is not defined");
		}

}