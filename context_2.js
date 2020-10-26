
tipper("80")

function tipper(a){
    var bill = parseInt(a); // parseInt returns integer value
    console.log(bill+5);
}

///// hoisting in javascript /////
var bigTipper = function (a){   // bigTipper Function(another way of declaring functions)
    var bill = parseInt(a);
    console.log(`The bill with tip is :`, (bill+15));
}
bigTipper("230")

console.log(name);
var name = 'Dhanush';

function sayName(){
    var name = "Mr. D"
    console.log(name);
}
sayName();

console.log(name);

