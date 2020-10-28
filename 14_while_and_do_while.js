var myStates = [
        "Telangana",
        "Karnataka",
        "AndhraPradesh",
        "Tamilnadu",
        1947,
      ];


/////    While Loop   //////////////
let i = 0;
while(i < myStates.length){
        if (myStates[i]==="Telangana") {
          console.log(`hyderabadi dum biriyani`);
          console.log(myStates[i]);
        }
        else if (myStates[i]==="AndhraPradesh") {
          console.log(`Vizag Beach`);
          console.log(myStates[i]);
        }

        else if (myStates[i]==="Karnataka") {
          console.log(`Silicon Valley`);
          console.log(myStates[i]);
        }
        else if (myStates[i]==="Tamilnadu") {
          console.log(`Chennai super kings`);
          console.log(myStates[i]);
        }
        else {
          console.log('India');
        }
    i++;
}

///////////////// Do-While Loop /////////////////////
let j = 20;
do {
  console.log(j);
  i++;

} while (j < 10);
