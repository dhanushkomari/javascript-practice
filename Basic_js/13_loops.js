// for loops In Javascript
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


const myStates = ["AP","TN","KA",1947,"TS","KL"]

for (var i=0; i < myStates.length; i++) {
      if (typeof myStates[i] !== 'string') continue;   //using if condition
      console.log(myStates[i]);
}
