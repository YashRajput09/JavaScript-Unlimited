/* In JS, Array is a object that allows to store and organize multiple values with in a single object.
It can hold various datatyes, includes number, string, boolean, objects and even other array.
In JS array is zero-indexed i.e. the array element starts from 0 not 1.
 */

const arr = [1, 2, 3, 4 ,5]; // Declaring an array of numbers
const strArr = ["Hello", "World"]; // An array of strings
const  newArr = [1, 3, "Yash", true];// array with different data types
// console.log(newArr);

// console.log(arr.length); //Returns the length of the array
// console.log(arr[4]); //1, Accessing value at index 0
// console.log(arr.push(6)); // Adding new elements to array using push() method
// console.log(arr.pop()); //remove last element from array  using pop() method
// console.log(arr.shift()); //remove first element from array  using shift() method
// console.log(arr.unshift(9)); //Adding new element at beginning of array using unshift() method
// console.log(arr.join());// add all the array elements into a string, seperated by commma
// console.log(arr.indexOf(1)); //check the index of  given element

const arr2 = [9, 8, 7, 6, 5];
// console.log(arr2.slice(1, 4));//slice() not includes last index, and it not change in orginal array
// console.log("A: ",arr2); //A:  [ 9, 8, 7, 6, 5 ]

console.log(arr2.splice(1, 4));//spice() includes last index, and it remove the elements from original array 
// console.log("B:", arr2);// B: [ 9 ]