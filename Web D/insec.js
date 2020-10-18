/*
alert("Hello Here is your caculator");

var a = prompt("Enter First Number");
var b = prompt("Enter Second Number");

var d = Number(a) + Number(b);
alert(d);
*/
//Slice
/*
var a = prompt("Enter Your tweet");
b = a.toLowerCase()
if (a.length > 8){
	console.log("Sorry");
	console.log(a.slice(0,8));
}else{
console.log("Good");
}
*/
/*
var myName = prompt("Hello ! What is your Name :");
myName1 = myName.slice(1,).toLowerCase();
myCapital = myName.slice(0,1).toUpperCase();
alert("Hello! " + myCapital + myName1);
*/
/*
var a = prompt("Enter Your number");
var c = prompt("Enter Your number");
//console.log(a+c);
var b = a%2;
if (b == 0){
	console.log("Even Number");
}else{
	console.log("Odd NUmber");
}
//console.log(b)
*/
/*
var robotAskDollar = prompt("How Much Dollar you Gave me :");
robotAskNumber = Number(robotAskDollar);
function numberOfBottle(robotAskDollar){
	numberOfBottle = robotAskDollar / 1.5;
	
	numberOfBottle1 = Math.floor(numberOfBottle)
	leftRupees =robotAskDollar - (numberOfBottle1 * 1.5)
	console.log(leftRupees);
	return (numberOfBottle1);

}
number = numberOfBottle(robotAskNumber);
console.log(number);*/
/*Random number genration

var n = Math.random()
n = n*6
n = Math.floor(n)+1
console.log(n)

*/
/*
function bmiCalculator (weight, height) {
    var bmi = weight / (height*height);
    if (bmi < 18.5){
        var interpretation = "Your BMI is "+bmi +" so you are underweight.";
    }else if (bmi >= 18.5 && bmi <= 24.9){
        var interpretation = "Your BMI is "+bmi +" so you have a normal weight.";
    }else{
        var interpretation = "Your BMI is "+bmi +" so you are overweight.";
    }
    
    return interpretation;
}

console.log(bmiCalculator(60,2))

if (year % 100 === 0){
    	var leap ="year devisible by 100";
    }
    else if (year % 400 === 0){
    	var leap ="year devisible by 400";
    }
*/
/*
function isLeap(year) {
    
/**************Don't change the code above****************/    
    
  /*  if (year % 4 === 0){
        //var leap = "Leap Year.";
        if (year % 100 === 0){
        	var leap = "Leap Year.";
        	if (year % 400 === 0){
        		var leap = "Leap Year.";
        	}else{
    	var leap = "Not leap Year.";
    }
        }else{
    	var leap = "Leap Year.";
    }

    }
    else{
    	var leap = "Not leap Year.";
    }
  


    return leap;

/**************Don't change the code below****************/    
/*}*/
/*
console.log(isLeap(1948))
console.log(isLeap(1989))
console.log(isLeap(2000))
console.log(isLeap(2100))
*/
/*
var priceList = ["Aditya","Sandeep","Shivam","Vishal","Rishabh","Shivani"];

var askUser = prompt("Press 1 for take Membership and 2 for check Membership")
if (askUser == "1"){
	var myNamePush = prompt("Enter Your Name to check you are in the price list :");
	myName1Push = myNamePush.slice(1,).toLowerCase();
	myCapitalPush = myNamePush.slice(0,1).toUpperCase();
	MyFullNamePush = myCapitalPush + myName1Push;
	//alert(MyFullNamePush);
	priceList.push(MyFullNamePush);


}else if (askUser == "2"){
	var myName = prompt("Enter Your Name to check you are in the price list :");
	myName1 = myName.slice(1,).toLowerCase();
	myCapital = myName.slice(0,1).toUpperCase();
	MyFullName = myCapital + myName1
	//alert(MyFullName);
	//console.log(priceList.includes(MyFullName));
	if (priceList.includes(MyFullName) === true){
		console.log("Well Done You are a part of membership");
	}else{
		console.log("Sorry You are not a part of membership");
	}
}else{
	console.log("Sorry You Enter Wrong");
}*/
/*
var array = [];
	var i = 0;
function fizzBuzz(){
	
	array.push(i);
	i++;
	console.log(array)

}*/
/*
function whosPaying() {
    

    
    //Write your code here.
    var array = ["Angela","Ben","Jenny","Michael","Chloe"];
    var n = Math.random();
    n = n*array.length;
    n = Math.floor(n);
    
    var name = array[n];
    var lunch = name + " is going to buy lunch today";
    console.log( lunch);
    

}
whosPaying();
whosPaying();
whosPaying();
whosPaying();
*/
document.querySelector("h1").innerHTML = "Sandeep";