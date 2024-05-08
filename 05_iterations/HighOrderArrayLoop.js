// for of loop : is used ti iterate over a iterable objects like array, string, map, set etc
// syntax: for(variable of object){}

// to ARRAY
const arr = [1, 2, 3, 4, 5];
for(let  value of arr){
    // console.log(value);
}

// to STRING 
const str = "Yash Rajput";
for(const value of str){
    // console.log(value);
}

// to MAP 
const map = new Map();
map.set("Name", "Yash");
map.set("age", 18);
map.set("email", "rajputyash@gmail.com");

// console.log(map);

for(let val of map){
    // console.log(val); //[ 'Name', 'Yash' ] all value 
}

for(let [key, value] of map){
    // console.log(`${key} : ${value}`);
}

// Objects is not iteracle by for of loop 
// for in loop is used to iterate on Object
const myObj = {
    Name : "Yash",
    age : 19,
    address : "Indore",
}
// console.log(myObj);

for(let val of myObj){
    console.log(val);
}
