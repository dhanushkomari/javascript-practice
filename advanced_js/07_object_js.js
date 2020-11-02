const User = require("./06_classes.js")
const dhanush = new User("Dhanush","dhanushkomari@gmail.com")

console.log(dhanush.getInfo());
dhanush.enrollCourse("react Course");
dhanush.enrollCourse("django Course");

 console.log(dhanush.getCourseList());

 let courses = dhanush.getCourseList();
 courses.forEach(c => console.log(c))
