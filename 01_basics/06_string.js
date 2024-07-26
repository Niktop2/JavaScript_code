const Name = "nikhil"
const repoCount = 50
console.log(Name + repoCount); //old syntax

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);  //new syntax

const gameName = new String('nikhil-hc-com')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); //{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   namaste    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove space

const url = "https://hitesh.com/nikhil%20topre"
console.log(url.replace('%20', '-'))
console.log(url.includes('com'))   //given word is present or not
console.log(gameName.split('-'));