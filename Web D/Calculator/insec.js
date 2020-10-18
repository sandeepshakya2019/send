$(document).ready(function(){
    $(".number").click(function(event){
    var num = $(event.target).text();
    //console.log(num);
    $("input").val($("input").val()+num);
 })
$(".clear").click(function(event){
    $("input").val(" ");
 })

$(".operator").click(function(event){
    //var c = $(event.target).
    //console.log(c)
    var text = $("input").val()
    var op = $(event.target).text();
    if(text.indexOf(op) != -1){
        //console.log(op + " found");
    }else if (text == " "){
        //console.log("empty");
    }else{
        $("input").val($("input").val()+" "+op+" ");
    }

    
    
})
//console.log()
$(".equal").click(function(event){
    function thousands_separators(num)
          {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
          }
    
    
    var operator = $("input").val().split(" ");
    //console.log(typeof(operator[2]))
    //alert();

    switch(operator[2]) {
      case "+":
        var add = parseInt(operator[1]) + parseInt(operator[3]);
            var addcomma = thousands_separators(add);
            $("input").val(" "+addcomma);
        break;
      case "x":
        var mul = parseInt(operator[1]) * parseInt(operator[3]);
            var mulcomma = thousands_separators(mul);
            $("input").val(" "+mulcomma);
        break;
      case "-":
        var minus = parseInt(operator[1]) - parseInt(operator[3]);
            var minuscomma = thousands_separators(minus);
            $("input").val(" "+minuscomma);
            break;
      case "/":
        var devide = parseInt(operator[1]) / parseInt(operator[3]);
        //alert(devide)
        $("input").val(" "+devide);
        break;
      default:
        $("input").val(" ");
    }
    if($.isNumeric(operator[3]) == false) {
        $("input").val(" ");

    }
   
});
$("body").keypress(function(event){
    //console.log(event)
    //console.log($("input").text())
    if (event.key == "*"){
        $("input").val($("input").val()+" "+"x"+" ");
    }else if (event.key == "/"){
        $("input").val($("input").val()+" "+"/"+" ");
    }else if (event.key == "-"){
       $("input").val($("input").val()+" "+"-"+" ");
    }else if (event.key == "+"){
       $("input").val($("input").val()+" "+"+"+" ");
    }if(event.code == "Numpad"+event.key){
        //console.log("465")
        $("input").val($("input").val()+event.key);
    }

    if (event.key == "Enter"){
        //console.log($("input").text())
        function thousands_separators(num)
          {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
          }
    
        var operator = $("input").val().split(" ");
        //console.log(typeof(operator[2]))
        //alert();
        if (operator[2] == "+"){
            var add = parseInt(operator[1]) + parseInt(operator[3]);
            var addcomma = thousands_separators(add);
            $("input").val(" "+addcomma);
        }else if (operator[2] == "x"){
            var mul = parseInt(operator[1]) * parseInt(operator[3]);
            var mulcomma = thousands_separators(mul);
            $("input").val(" "+mulcomma);
        }else if (operator[2] == "-"){
            var minus = parseInt(operator[1]) - parseInt(operator[3]);
            var minuscomma = thousands_separators(minus);
            $("input").val(" "+minuscomma);
        }else if (operator[2] == "/"){
            var devide = parseInt(operator[1]) / parseInt(operator[3]);
            var dividecomma = thousands_separators(devide);
            $("input").val(" "+dividecomma);
        }else if ($("input").text() == NaN){
            console.log('sorry')
        }
   

    }
    //here error is occur when we use the button and keyboard same time it shows diffrent results if you get rid from this error please tell me on emailid-sandeepshakya2015@gmail.com
})
$("body").keydown(function(event){
    //console.log(event.key);
    if (event.key == "Backspace"){
        $("input").val(" ");
    }
    else{
        //console.log("Do nothing")
    }
})
})


