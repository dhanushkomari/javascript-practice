// Self Executing anonymous Functions.catch
// Anonymous function - A function without having a name.
// Self executing Function -  executes without calling a function, it can called by using () at the end and whole functions should wrap with peranthesis()

(function () {
    console.log("Hiii");                                          // function without name
    console.log("welcome to anonymous functions");
})()

function sayHello(name){
  console.log(`name is ${name}`);
}
sayHello("dhanush")
