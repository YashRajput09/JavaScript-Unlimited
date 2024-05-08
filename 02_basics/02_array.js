const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr.concat(arr2));  //[ 1, 2, 3, 4, 5, 6 ] combine  two arrays into one array using concat method
console.log([...arr, ...arr2]); //using spread operator(...), this is better then concate method, because if we wants to add more arry so we can

const multiArray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];

//flat() method  used to remove nested arrays and return a new flattened array
console.log(multiArray.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const A = 100;
const B = 200;
const C = 300;

console.log(Array.of(A , B ,C));   //[100, 200. 300]  Array.of() create an new array with the given elements 