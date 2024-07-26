const user = {
  username: "nikhil",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function(){
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    //console.log(this);

  }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

//+++++++++++++++++++++++++++++++++++

function User1(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);

}
return this
}

const userOne = new User1("nikhil", 12, true)
const userTwo = new User1("topre", 11, false)
console.log(userTwo);
console.log(userOne.constructor);
//console.log(userTwo);


