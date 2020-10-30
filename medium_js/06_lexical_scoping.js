  // lexical scoping is a classical way of wring a javascript


function init(){
    var firstName = "Dhanush"
    function sayfirstName(){
      console.log(firstName);
    }
    sayfirstName();
}
init();
