// callback and arrow functions in arrays

function isEven(element){
    // if (element % 2 === 0 ){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return element%2===0;
}

var isOdd = (element) =>{     // another way of declarin a functions
  return element %2 != 0
}

console.log(isEven(2));
console.log(isOdd(19));

var result = [2,4,6,13,8].every( (e) => (e%2===0))   // callback and array functions
console.log(result);
