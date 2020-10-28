console.log(this);
var user = {
  firstName : "Dhaunsh",
  courseCount : 4,
  getCourseContent: function(){
    console.log('LINE 6', this);   // returns entire object  and window object
    console.log('lINE 7',this.courseCount);  // return courseCount
    function sayHello(){
      console.log("Hello");
      console.log("lINE 10",this);  // retuerns window object
    }
    sayHello()
  }
}
user.getCourseContent()
