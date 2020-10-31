// Destructuring the Data in Javascript

// picking data from an array
// var user = ["dhanush",5,"Python ana Django developer"]
//
// var role = user[2]
// var name = user[0]
//
// var [name, courseCount, role] = user;
//
// console.log(name +" and he is " +role);


// picking data from an Object.
const myUser = {
      name : "Dhanush",
      courseCount : 5,
      role : "Python and Django Developer"
}

console.log(myUser.courseCount); // without destructuring the data

const {name, courseCount,role} = myUser  // destructuring the data

console.log(name,courseCount);  // printing the destructuring data.
