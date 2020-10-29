var User = function (firstName,courseCount) {
      this.firstName = firstName;
      this.courseCount = courseCount;
      this.getCousrseCount = function (){
        console.log(`course count is : ${this.courseCount}`);
      };
};

var dhanush = new User("dhanush",5)
console.log(dhanush);

var dk = new User("Dhanush Komari",1)
console.log(dk);
