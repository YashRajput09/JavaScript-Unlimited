/*
With the hlep of getOwnPropertyDescripter() method we can check the of Ojecct property is 
Value, Writable, enumerable, and configurable. 

Syntax : 
Object.getOwnPropertyDescriptor(object_Name, Objeject_property);
*/

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);


/* 
Also we can set the Object property of any object key
for EXAMPLE
  */
const game = {
    Name: 'COD',
    Size: '250 MB',
    price: 100,
}

// Before : 
//console.log(game); //{ Name: 'COD', Size: '250 MB', price: 100 }

// console.log(Object.getOwnPropertyDescriptor(game, "Name"));
Object.defineProperty(game, "Name", {
    writable: false, //we can't change the value of Name,
    // enumerable: false, //we cant access the Name
}) 
console.log(Object.getOwnPropertyDescriptor(game, "Name"));
// After : 
//console.log(game); //{ Size: '250 MB', price: 100 }

// console.log(game.Name = 'FreeFire'); //not change in original object
console.log(game);