// var A = Math.max(1,23,12,34,213.22,45,555.9,432)
// console.log(A);
//
// var myObj = {}
// Object.assign(myObj, {a:1, b:2, c:3, p:9})
// console.log(myObj);


//    part -1 (Spread Operator)
function sumOne(a,b){
  return a+b;
}
var myA  = [3,4]
console.log(sumOne(...myA));   // Spread Operator


//    Part-2 (REST Operator)
function sumTwo(a, b, ...args){   // REST operator.
      let sum = 0;                // here a,b is responsible for starting two elements
      let multi =a*b;             //   and the rest elements are responsible for ...args.
      for (var arg of args) {
        sum += arg;
      }
      return [multi,sum];
}
console.log(sumTwo(2,3,5,7,8));  // args converts individual objects into an array

//    Part-3
