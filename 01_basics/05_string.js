// String is a sequence of characters, enclosed eith in single('') or double("") quods

const Name = " Yash "; //"Yash" is a string 
// console.log(Name);
// console.log(Name.length);

//String Methods 
// console.log(Name.toUpperCase()); 
// console.log(Name.toLowerCase());
// console.log(Name.trim()); //trim white space
// console.log(Name.trimStart()); //trim white space from start
// console.log(Name.trimEnd());   //trim white space from end
// console.log(Name.charAt(2));    //get character at index 2
// console.log(Name.indexOf('s'));
// console.log(Name.substring(0,3));// (n-1)last index  not included, 
// console.log(Name.slice(-6,4  ));  // slice() takes negetive index also

const url = "https://yash.com/yashr%20rajput";
// console.log(url.replace('%20','-'));
// console.log(url.includes('yash')); //true ,  if the string contains 'yash' it returns true otherwise false

const me = "Yash-is-here";
// console.log(me.split("-"));//  split() method splits a string into an array  of substrings based on the specified separator or regular

// This is another way to define Sting
const str = new String("Yash Rajput");
// console.log(str);