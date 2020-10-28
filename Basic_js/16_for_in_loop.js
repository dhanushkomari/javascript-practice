const names = ["Youtube","Facebook","Instagram","Yahoo","Amazon"]

// names.forEach((i) => console.log(i));  // forEach in JS

// for...of   javascript

for(const i of names){
  console.log(i);
}


// for...in

const symbols = {
      yt : "youtube",
      fb : "Facebook",
      ig : "instagram",
      ud : "udemy"
}
for(const n in symbols){
  console.log(`key is ${n} and the value is ${symbols[n]}`);
}
