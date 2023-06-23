// this is your main.js script

/*
1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
*/
var js = "30 Days of JavaSCript"

// 2. Print the string on the browser console using __console.log()__

console.log(js)

// 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(js.length);

// 4. Change all the string characters to capital letters using __toUpperCase()__ method
console.log(js.toUpperCase());

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log(js.toLowerCase());

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log(js.substr(0,1));

// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
console.log(js.slice(3,21));

// 8. Check if the string contains a word __Script__ using __includes()__ method

console.log(js.includes("Script"));

// 9. Split the __string__ into an __array__ using __split()__ method


// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
console.log(js.split(' '));

