/// Part -1 for THIS keyword

console.log(this)

var game = 'cricket'

function sayName(){
    name  = "dhanush"
    console.log(this);
}
sayName()


// this keyword return only scope in node(  {}  )
// but in the browser console it returns window object