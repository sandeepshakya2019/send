console.log("sandeep")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var css = document.querySelector(".h")
var body = document.querySelector("#gr")
console.log(body)
console.log(color1)
console.log(color2)

var gradient = function(){
    body.style.background = "linear-gradient(to right ,"
    +color1.value
    +","
    +color2.value
    +")";

    css.textContent = body.style.background + ";"
}



