// forEach() method - allow to iterate over an array and perform an operation on each element of an array.
// NOTE : forEach() doesnot return anything,so it's not suitable if we need to create a new array based on the elements of the original array.
// syntax: array.foreach(callback(element, index, arr), thisValue);

const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach((ele) => {
//   console.log(ele);
});

const cbFun = (item) =>{
    // console.log(item);
}
coding.forEach(cbFun);

coding.forEach((element, index, arr)=>{
    // console.log(element);
    // console.log(index);
    // console.log(arr);
})

const User = [
    {
        Name : "Yash",
        Subject : "BCA",
    },
    {
        Name : "Ravi",
        Subject : "MCA",
    },
    {
        Name : "Brajesh",
        Subject : "BSC",
    },
]

User.forEach((ele, ind, arr) =>{
    // console.log(ele.Name);
    // console.log(ind);
    // console.log(ele[0]); // IMP ******* can not access using index number
    if(ele.Name === 'Yash'){
        console.log(ele.Name);
    }
})
