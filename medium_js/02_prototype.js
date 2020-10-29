// prototype in js

var User = function (firstName,courseCount) {
      this.firstName = firstName;
      this.courseCount = courseCount;
      this.getCousrseCount = function (){
          console.log(`course count of ${firstName} is : ${this.courseCount}`);
      };
};

User.prototype.getFirstName = function () {
  console.log(`your first name is : ${this.firstName}`);
};

var dhanush = new User("dhanush",5)
console.log(dhanush);
dhanush.getCousrseCount();
dhanush.getFirstName();
console.log(``);
var dk = new User("Dhanush Komari",1)
console.log(dk);
dk.getCousrseCount();
dk.getFirstName();
