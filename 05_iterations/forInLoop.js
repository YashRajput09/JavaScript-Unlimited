// for in loop - is used to iterate over the properties of an Object

const myObj = {
    Name : "Yash",
    class : "BCA",
    section: "M-16",
}

// console.log(myObj);

for (let key in myObj){
    // console.log(key); //print only myObj key 
    // console.log(myObj[key]); //print only value of myObj
    // console.log(`${key} : ${myObj[key]}`);// print both key and value 
}

// to array
const arr = ['js', 'java', 'c', 'c++'];
// console.log(arr);
for(let key in arr){
    // console.log(key); // print array defalut(key) which is (0 1 2 3)
    // console.log(arr[key]); // print value hod by key which is js java c c++
}

// NOTE : Map is not iterable using for in loop