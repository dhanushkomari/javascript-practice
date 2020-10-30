// Borrow a method using Bind in javascript

const dhanush = {
  firstName : "Dhanush",
  lastName : "Komari",
  role :  "Django Developer",
  courseCount : 3,
  getInfo : function(){
    console.log(`
    First name is : ${this.firstName}
    Last name is : ${this.lastName}
    His role is : ${this.role}
    and he is studying courses ${this.courseCount} courses.
    `);
  }
};

const dj = {
  firstName : "Rock",
  lastName : "DJ",
  role : "actor",
  courseCount : 4,
}
// var djInfo = dhanush.getInfo.bind(dj)   //bind is store the referrence of the function
// djInfo()
dhanush.getInfo.call(dj)  //call prints the function info
