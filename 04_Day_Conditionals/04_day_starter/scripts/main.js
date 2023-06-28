// this is your main.js script


/*
## 💻 Exercises

### Exercises: Level 1

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   `
*/
const age =prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} year(s) to drive.`);
}
/*
1. Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who 
is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

*/

const myAge = 20;
const yourAge = prompt('Enter your age: ');

if (myAge === yourAge.value) {
  prompt('We are agemates');
} else if (myAge < yourAge.value)  {
  console.log(`You are older than me by ${yourAge - myAge} years`);
} else {
  console.log(`You are younger than me by ${myAge - yourAge} years`);
}

// 1. If a is greater than b return 'a is greater than b' else 'a is less 
// than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
//       let a = 4
//       let b = 3
//     ```

//     ```sh
//       4 is greater than 3
//     ```

let a = 20
let b = 10

if (a>b){
    console.log( `${a} is greater than ${b}`)
}
else{
  console.log( `${b} is greater than ${a}`)
}
let result = (a < b) ?'a is greater than b' :'b is greater than a'
   
  console.log(result)


/*
/*
### Exercises: Level 2

1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
*/
 let grade = prompt('Enter your grade:')
 switch(true){
  case grade >0 && grade <=49:
    console.log('F')
    break
  case grade >=50 && grade <=59:
    console.log('D')
    break
  case grade >=60 && grade <=69:
    console.log('F')
    break
  case grade >=70 && grade <=89:
    console.log('F')
    break
  case grade >=80 && grade <=100:
    console.log('F')
    break

  
 }


/*
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
*/
let userInput = prompt("Enter a month")
if (userInput ==="September" || "October" || "November"){
  console.log("The season is autumn")
}
else if(userInput === "December" || "January" || "February"){
  console.log("The season is Winter")
}
else if(userInput === "March" || "April" || "May"){
  console.log("The season is Spring")
}
else if(userInput === "June" || "July" || "August"){
  console.log("The season is Summer")
}
else{
  console.log("Invalid month");
}
/*

``






1. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```

### Exercises: Level 3

1. Write a program which tells the number of days in a month.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```

1. Write a program which tells the number of days in a month, now consider leap year.

*/