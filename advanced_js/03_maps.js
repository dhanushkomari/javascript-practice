var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro")

console.log();  // for new line
console.log(`---------USING FOR... OF LOOP--------------------------`);


console.log(`----------- returning whole object myMap--------------`);
console.log(myMap);

console.log(`------------grabbing only keys from myMap-------------`);
for(let key of myMap.keys()){            // single key grabbing into for loop
  console.log(`key is : ${key}`);
}

console.log(`------------grabbing only values from myMap-----------`);
for(let value of myMap.values()){        // single value grabbing into for loop
  console.log(`value is : ${value}`);
}

console.log(`----------grabbing both keys and values from myMap------------`);
for(let [key, value] of myMap){          // both keys and values grabbing into for loop
  console.log(`key is ${key} and value is ${value}`);
}

console.log(`---------USING FOR...EACH LOOP--------------------------`);
myMap.forEach((value,i) => console.log(`${value} is exist @ index-${i}`));

console.log(`---------- deleting a key value pair using key----------`);
myMap.delete(4)
console.log(myMap);
