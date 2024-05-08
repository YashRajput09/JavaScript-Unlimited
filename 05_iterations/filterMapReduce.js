// forEach do not return anything, 
// SO insted of forEach use filter() method

const coding = ['js', 'py', 'cpp', 'rb'];

const value = coding.forEach((e) =>{
    // console.log(e);
    return e;
}) 

// console.log(value);

// filter() Method
let count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let countValue = count.filter((e) =>{
    // let val1 = e < 6;
    // console.log(e);
    return e > 3 ;
});

// console.log(countValue);

const User = [
    {
        Name : "Yash",
        Subject : "BCA",
        fees : 25500,
    },
    {
        Name : "Ravi",
        Subject : "MCA",
        fees : 85000,
    },
    {
        Name : "Brajesh",
        Subject : "BSC",
        fees : 22000,
    },
]

const data = User.filter((e) =>{
    // console.log(e);
    return e.fees >= 30000 && e.Name === "Ravi"
});

console.log(data);