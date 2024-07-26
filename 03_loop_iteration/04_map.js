// Maps --- holds the key value pair.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

//++++++++++++++++++++++++++++++++++++++++++++

for (const [key, value] of map) {
     console.log(key, ':-', value);
}

//++++++++++++++++++++++++++++++++++++++++++++

// const myObject = {
//   game1: 'NFS',             //object is not iterable
//   game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
    //console.log(key, ':-', value);       //error
                                           //use for-in obj
  // }

  //+++++++++++++++++++++++++++++++++++++++++

  //for-in obj
  const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
     console.log(`${key} shortcut is for ${myObj[key]}`);
}

//++++++++++++++++++++++++++++++++++++++++++++

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
     console.log(programming[key]);
}

//++++++++++++++++++++++++++++++++++++++++++++

const map2 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map2) {      
    console.log(key);             //not run
}


