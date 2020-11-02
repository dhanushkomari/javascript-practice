const uno =  () => {
  console.log("I am One");
};
const dos = () => {
    setTimeout( () => {         //
      console.log("woohoooo");  //----->  executed after three seconds
    },6000)                     //
  console.log("I am Two");
}
const tres = () => {
  console.log("I am Three");
  setTimeout( () => {console.log("Hoorrrayyyyy");},5000)
}

dos();
tres();
uno();
