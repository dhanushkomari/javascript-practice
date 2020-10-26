var name  = "Dhanush"

console.log("line number 3", name);

function sayName(){
    var name = 'Mr. D'
    console.log("line number 6", name);
    function sayName2(){
        var name = 'Mr.DK'
        console.log("line number 9",name);
    }
    sayName2()
}
sayName()