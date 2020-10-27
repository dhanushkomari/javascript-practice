//collection of homogenous elements.


var countries= ["India","USA","UK","Japan"]

var states = new Array("AP","KA","TN","TS")  //another way of creating an array

console.log(states[0]);

console.log(states.length);

states[1] = "MH"
console.log(states);

var user = ["dhanush","dhanushkomari@gmail.com",3,34,true]
console.log(user);
user.pop()
console.log(user);

user.unshift("new_name")  // changes the first element value in the array
console.log(user);

user.shift()
console.log(user);      // shift gets the default array that is changes are not done(returns old array)

console.log(user.indexOf("dhanush"));

console.log(user.indexOf("red")); // returns -1


console.log(Array.from("DhanushKomari"))  // create the array with the name
var name1 = Array.from("dhanush")
console.log(name1);
document.write("dhanush Komari")
