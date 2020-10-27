firstName = 'Dhanush'
lastName = 'Komari'
email = 'Dhanushkomari@gmail.com'
address = 'Nellore'
pincode = 524344
salary = 20000

console.log(`
*********** THE PERSON DETAILS ARE **************
First Name: ${firstName}
Second Name: ${lastName}
email : ${email}
salary per month : ${salary}
address: ${address}
Pincode : ${pincode}
Permanant address: ${firstName}  ${lastName},
                ${address},
                ${pincode}.
                ${email}

*************************************************
The total package is: ${salary*12}
*************************************************
`);
/* i=0
if (i>1) {
    console.log('Welcome To conditions');
}
else{
    console.log('you are not allowed')
}
*/

email = true;
facebook = true;
github =  true;

if (email || facebook || github){
    console.log('user is successfuly logged in')
    userIn =true;
    if (userIn){
        console.log('allowed create posts');
    }
}
function sayHello() {
    console.log(`welcome to functions, ${firstName}`)
}
var fun1 = sayHello();
// console.log(fun1);
