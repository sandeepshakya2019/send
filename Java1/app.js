

// Budget Controller
var budgetController = (function(){

    var Income = function(id ,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function(id ,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
   
   
    var data = {
        allItems :{
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc :0
        }
    };

    return {
        addItem : function (type,des,val){
            var newItem ,ID;
            // create new ID
            if(data.allItems[type].length>0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else {
                ID = 0;
            }
            // create new item based on "inc" or :exp type
            if(type === "exp"){
                newItem = new Expense(ID , des,val);
            } else if (type === "inc"){
                newItem = new Income(ID , des,val);
            }

            // push ii into an array 
            data.allItems[type].push(newItem);

            // return new element
            return newItem;
        },
        testing : function (){
            console.log(data)
        }
    }

})();

// UI Controller
var UIcontroller = (function(){
    var DOMstrings = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue : ".add__value",
        inputbtn : '.add__btn'
    }


    return{
        getInput : function(){
            return{

             type: document.querySelector(DOMstrings.inputType).value,
             description: document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings : function(){
            return DOMstrings;
        }
    };

   

})();

// Global App Controller
var controller = (function(budgetCtrl , UIctrl){
    var setupEventListeners = function(){
        var DOM = UIctrl.getDOMstrings();
        var btnclicked = document.querySelector(DOM.inputbtn);

        btnclicked.addEventListener('click',ctrlAddItem);
        btnclicked.addEventListener("keypress",function(e){
            if(e.keyCode === 13){
                ctrlAddItem();
            };
        });

    };

   
    var ctrlAddItem = function(){
        var input,newItem;
          
       //  1 - Get The Input Data 
       input = UIctrl.getInput();

       //  2 -Add The items to the budget controller
       newItem = budgetCtrl.addItem(input.type ,input.description , input.value)
       //  3 -Add The item to the UIcontroller
       //  4 -calculate the budget
       // 5 -Display The budget
        
        
    };

    return {
        init : function(){
            console.log("Application Has Started.");
            setupEventListeners();
        }
    };
    

    
})(budgetController,UIcontroller);

controller.init();