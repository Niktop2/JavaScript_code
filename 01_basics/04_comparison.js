console.log("2" > 1);  //true
console.log("02" > 1); //true

//Avoid this types of camparision
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);