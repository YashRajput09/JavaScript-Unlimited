// The reduce() method executes a reducer function on each element of the array and returns a single output value.
// syntax :
// array.reduce(callback(accumulator, currentValue), initialValue);

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNum = Numbers.reduce((acc, crrVal) =>{
    return acc + crrVal;
}, 0);

console.log(newNum); //45

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

const totalFee = User.reduce((acc, cv) =>{
    return acc + cv.fees;
},0)

console.log(totalFee);