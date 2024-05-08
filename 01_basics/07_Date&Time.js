const date = new Date();
// console.log(typeof date); //object
// console.log(date); //2024-04-10T13:45:14.766Z, show current date
// console.log(date.toLocaleDateString()); //  04/10/2024, format to dd/mm/yyyy
// console.log(date.toLocaleString()); //4/10/2024, 7:20:47 PM,show date + time,  mm/dd/yy
// console.log(date.toDateString());//Wed Apr 10 2024, show day + date, mm/dd/yy
// console.log(date.toISOString());//Wed Apr 10 2024, ISO standard, "YYYY-MM-DDTHH:mm:ss.SSSZ"
// console.log(date.getFullYear( )); // get year from the date object
// console.log(date.getDate()); // return the day of month (from 1 to 31)
// console.log(date.getMonth()); // return the month 
// console.log(date.getTime()); // return the time in ms 

//  ---------customize  date format------------

//  date.toLocaleDateString('default', {
//     weekday:  'long', //print full name (wednesday)
//     weekday:  'short', //print short name (wed)
//     weekday:  'narrow', //print one character (W)
// });