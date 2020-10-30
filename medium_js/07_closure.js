// // closures in javascript
//
//
// function init(){
//     var firstName = "Dhanush"
//     console.log("i am init");
//     function sayfirstName(){
//       console.log(firstName);
//     }
//     return sayfirstName;
// }
// var value = init();
// value()


function addition(x){
  return function(y){
    return x+y;
  }
}

var add5 = addition(4);
console.log(add5(5));          //

console.log(addition(5)(5));  //another way  //also known as curring
