// Objects fro MDN Docs

var User = {
  name : "",
  email : "",
  getUserDetails : function() {
    console.log(`UserName is : ${this.name} and ${this.email}`);
  }
};

// creating objects 
var dhanush = Object.create(User)
dhanush.name = "Dhanush Komari"
dhanush.email = "dhanushkomari@gmail.com"
// console.log(dhanush);
dhanush.getUserDetails()


///  creating objects in various ways
var sekhar =Object.create(User, {
  name : {value:'Sekhar'},
  email : {value:'sekharkomari94@gmail.com'}
})
sekhar.getUserDetails()
