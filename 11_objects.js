// Objects in javascript.
var user = {
    first_name : "Dhanush",
    last_name : "Komari",
    role : "django developer",
    loginCount : 32,
    googleSignedIn : true,
};
user.role = "Python and Django Developer"

console.log(user.first_name);         // accessing the object first_name
console.log(user["last_name"]);       //accesing a value like array, we need to provide the field in quotes
console.log("old login count: ",user.loginCount);
user.loginCount = 45
console.log("new login count: ",user.loginCount);
console.log(user);          // returns the user as a dictionary(key:value) pairs.
console.table(user);        // returns the objects as table
/*  ┌────────────────┬───────────────────────────────┐
    │    (index)     │            Values             │
    ├────────────────┼───────────────────────────────┤
    │   first_name   │           'Dhanush'           │
    │   last_name    │           'Komari'            │
    │      role      │ 'Python and Django Developer' │
    │   loginCount   │              45               │
    │ googleSignedIn │             true              │
    └────────────────┴───────────────────────────────┘      */


console.count(user)         // returns the no.of objects
