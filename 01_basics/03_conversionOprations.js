// Conversion in Number

let test1 = 99; //number
let test2 = "99"; //number_string("99") is convered to number(99)
let test3 = "abc"; //alphabatic_string("abc") is not converted to string, output:(NaN)
let test4 = "99abc"; //output:(Nan)
let test5 = null; //null is converted to number(0)
let test6 = undefined; //undefined in not converted to number, output:(NaN)
let test7 = true; //boolean is convertd to number true(1) and false(0)

let numConverter = Number(test7);
console.log(numConverter);   

// Conversion in Boolean

let isLoggedIn1 = 1;               //1  => true 
let isLoggedIn2 = "";            //""   => false
let isLoggedIn3 = "Yash";      //"Yash" => true
let isLoggedIn4 = null;          //null => false
let isLoggedIn5 = undefined; //undefine => false
 
let booleanConverter = Boolean(isLoggedIn5);
console.log(booleanConverter);

// Conversion in string

let some1 = 33; //33 is converted to string
let some2 = null; //null => null
let some3 = undefined;// undefined => undefined
let some4 = true; // true => true
let stringConverter = String(some4);
console.log(stringConverter);

// ************OPERATOR**************

console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(2 >= 1); //true
console.log(2 <= 1); //false
console.log(2 != 1); //true
console.log(2 == 1); //false

console.log("2" > 1); //true, because string("2") automatically is converted to number

console.log(null > 0); //false, null is converted to (NaN)
console.log(null == 0); //false, null is converted to (NaN)
console.log(null >= 0); //true,In this case, null is converted to 0 In this case

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false