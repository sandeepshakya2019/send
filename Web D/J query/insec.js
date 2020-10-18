//J query
/*
$("button").css("background-color","orange");
$("button").css("border-style","none");
$("button").css("border-radius","50px");
$("button").css("padding","5px");
//$("h1").hide(); //hide elemet
//J query to add the class
$("h1").addClass("head");
//Change the text
$("h1").text("Good Work");
//we can use the html text also
$("h1").html("<em>Good Work</em>");
*/
//Adding class to tags
$("h1").addClass("head");
$("button").addClass("btn");

$("h1").html("<em>Click on Button</em>");

function clickMe(){
    alert("hello");
}

//Get and set attribute
//Event Listner
/*
$("h1").click(function(){
    $("h1").css("background-color","green")
})

$("body").keypress(function(event){
    console.log(event.key)
    $("h1").text(event.key)
})

//another
$("h1").on("mouseover",function(){
    
    $("h1").text("event.key");

})

*/
//Animations with jwury
