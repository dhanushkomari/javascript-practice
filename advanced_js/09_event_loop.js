const uno =  () => {
  console.log("I am One");
};
const dos = () => {
    setTimeout( () => {         //
      console.log("woohoooo");  //----->  executed after three seconds
    },5000)                     //
  console.log("I am Two");
}
const tres = () => {
  console.log("I am Three");
  setTimeout( () => {console.log("Hoorrrayyyyy");},4000)
}

dos();
tres();
uno();
