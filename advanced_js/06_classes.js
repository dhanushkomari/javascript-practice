class User{
    constructor(name, email){
      this.name = name;
      this.email = email;
    }
    courseList = [];

    getInfo(){                                      /// in the getters we don't need any parameters to pass
      return {name: this.name, email: this.email};
    }
    enrollCourse(name){                             /// in the setters we have to pass the parameters
      this.courseList.push(name);
    }
    getCourseList(){
      return this.courseList;
    }
}

module.exports = User;

var rock = new User('rock','rock@actor.com')
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp")
console.log(rock.getCourseList());
console.log(rock.courseList);
