function sayMyName(){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
sayMyName();

// ++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2){
     console.log(number1 + number2);
}
  
addTwoNumbers(2, 4);

//++++++++++++++++++++++++++++++++++

function addNumbers(number1, number2){

  let result = number1 + number2
  return result
  //return number1 + number2
}

const result = addNumbers(3, 5)
console.log("Result: ", result);

//+++++++++++++++++++++++++++++++++++


function loginUserMessage(username){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("nikhil"))

//+++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 700, 2000))

//+++++++++++++++++++++++++++++++++++++++

const user = {
  username: "nikhil",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user);
handleObject({
  username: "sam",
  prices: 399
});

//+++++++++++++++++++++++++++++++++++++++

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));

//++++++++++++++++++++++++++++++++++++++

function add(a, b) { 
  return a + b 
}
const sum = add(5,9);
console.log(sum);

//+++++++++++++++++++++++++++++++++++++
//scope
let a = 300
let b = 400
if (true) {
    let a = 10      //inner scope
    const b = 20
    console.log("INNER: ", a, b);
    
}


console.log(a); //outof scope
console.log(b);

//+++++++++++++++++++++++++++++++++++++++++

function one(){
  const username = "nikhil"

  function two(){
      const website = "youtube"
      console.log(username);
  }
    //console.log(website);

   two()

}

one()

//+++++++++++++++++++++++++++++++++

if (true) {
  const username = "nikhil"
  if (username === "nikhil") {
      const website = " youtube"
      console.log(username + website);
  }
   //console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}



// addTwo(5)            // error
// const addTwo = function(num){
//     return num + 2
// }

//+++++++++++++++++++++++++++++++++++++++
//++++++++++  arrow function  ++++++++++++

const newuser = {
  username: "nikhil",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
  }

}

newuser.welcomeMessage()
newuser.username = "sam"
newuser.welcomeMessage()

console.log(this);     //{}

//++++++++++++++++++++++++++++++++

function chai(){
      let username = "hitesh"
      console.log(this.username);  //undefined not used in function
  }
  
  chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


  //++++++++++++++++++++++++++++++++

 const newname =  () => {
    let username = "nikhil"
    console.log(this);      //undefined
}
newname()

//++++++++++++++++++++++++++++++++++++

const addTwo = (num1, num2) => {
      return num1 + num2
  }
console.log(addTwo(3, 4))

const addnum = (num1, num2) =>  num1 + num2
console.log(addnum(5, 5))

const addTwonum = (num1, num2) => ( num1 + num2 )
console.log(addTwonum(5, 6))

const addTwoo = (num1, num2) => ({username: "hitesh"})
console.log(addTwoo())

//+++++++++++++++++++++++++++++++++++

// Immediately Invoked Function Expressions (IIFE)


// ( function newfun(){
//   // named IIFE
//   console.log(`DB CONNECTED`);
// } )();

// ( (name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh');