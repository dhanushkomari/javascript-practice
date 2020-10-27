// METHODS AND OBJECTS IN JAVASCRIPT

var user = {
      first_name: "Dhanush",
      last_name: "Komari",
      role : "Python and Django developer",
      loginCount : 45,
      googleLogIn : true,
      courseList : [],
      buyCourse: function(courseName){
        this.courseList.push(courseName)

      },
      getCourseCount : function(){
        return (`${this.first_name} ${this.last_name} is enrolled in 5 course in total of ${this.courseList.length} courses`)
      },

      // here this reffers to the current object
}
var courseList =true
// console.log(user.first_name);
// console.log(user.getCourseCount());

user.buyCourse("ReactJs Course")   // calling buyCourse Method
user.buyCourse("Django Course")
console.log(user.getCourseCount());  // calling getCourseCount method
