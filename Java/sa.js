
alert("Welcome To Java Script Tutorial")

function displaydate () {
	var a=prompt("Do You Want To see majic say yes")
	if (a === "yes" ) {
		document.getElementById('demo').innerHTML = Date();
	}
	else{
		alert("Sorry You Enter Wrong Syntax ");
		var b = prompt("Try Again say yes");
		if (b === "yes" ) {
			document.getElementById('demo').innerHTML = Date();
		}
		else{
			alert("Sorry You Lost The chance to see majic");
		}

	}
};

function bulb () {
	var a=prompt("Do You Want To see majic say yes")
	if (a === "yes" ) {
		document.getElementById('myImage').src='on.jpg';

	}
	else{
		alert("Sorry You Enter Wrong Syntax ");
		var b = prompt("Try Again say yes");
		if (b === "yes" ) {
			document.getElementById('myImage').src='on.jpg'
		}
		else{
			alert("Sorry You Lost The chance to see majic");
		}

	}
};


