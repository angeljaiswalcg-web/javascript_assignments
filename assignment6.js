
// Section 1: What Is a Function?
A function is a reusable block of code designed to perform a specific task.
Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

Functions help in:

Reusability
Cleaner code
Reduced repetition
Better structure
Easier debugging
ex.
function greeting(name){
    console.log("Good Morning!",name);
};
greeting("angel");
greeting("khushi");

2.
1.Reusability: A function can be used multiple times in a program.
2.Cleaner code: Functions make code easier to read and understand.
3.Reduced repetition: Functions avoid writing the same code again and again.
4.Easier debugging: Functions help isolate and fix errors more easily.

3. instead of writing the same code multiple times, you can define a function and call it whenever needed. This makes your code cleaner and easier to maintain.
like doing this :
function message(){
    console.log("WELCOME");
};
message();
message();
message();
message();
message();
message();
can do this can can also call the function with a single line of code instead of writing the same code multiple times.
console.log("WELCOME");
console.log("WELCOME");
console.log("WELCOME");
console.log("WELCOME");
console.log("WELCOME");
console.log("WELCOME");
this method is not efficient and can lead to errors if you need to change the message later. Using a function allows you to change the message in one place, and it will be reflected everywhere the function is called.
4. 
using function:
function message(){
    console.log("WELCOME");
};
message();
message();
without function:
console.log("WELCOME");
console.log("WELCOME");

5.A function is like a light switch: you press it, and the light turns on.
6.
Functions make debugging easier because they isolate specific tasks, allowing you to test and fix individual parts of the code without affecting the entire program.

Section 2: Function Declaration
1.function displayCourse(){
    return "JavaScript Fundamentals";
}
console.log(displayCourse());

2.
function getStudentStatus(){
    return  "Active Learner";
}
variable= getStudentStatus();
console.log(variable);
3.
getStudentStatus();
function getStudentStatus(){
   console.log ("Active Learner");
}
Function declarations are hoisted (can be called before definition).

**Hoisting** means JavaScript knows about a function declaration before it runs the code from top to bottom. So `getStudentStatus()` works even though its definition appears later. When called, it prints "Active Learner".
Section 3: Function Expression

1.
const showMotto=function(){
    return "Code. Learn. Grow."
}
console.log(showMotto());
2.
const getSemester = function(){
    return 3;
} ;
console.log(getSemester());
3.
getStudentStatus(); // ReferenceError

const getStudentStatus = function () {
  console.log("Active Learner");
};
ReferenceError: Cannot access 'getStudentStatus' before initialization. javascript know  the  function exists but can
access is value unitl it is defined. This is because function expressions are not hoisted like function declarations.
Section 4: Function Calling (Invocation)
1.
function greetUser(){
    return "All the best for your coding journey!"
}
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());
console.log(greetUser());
2.
const todayFocus =function(){
    return "Focus on functions today";
}
variable=todayFocus();
console.log(variable);
3.
function declare(name){
    return ("My name is",name);
}
const day=function(){
    return "good day"
}
console.log(declare("angel"));
console.log(declare("angel"));
console.log(day());
console.log(day());
// Section 5: Parameters vs Arguments
// 1
function subtract(a, b){
    return (a-b);
};
console.log(subtract(50,18))
// 2.
const greetUser=function(name){
    return ("Welcome, " + name + "!");
};
console.log(greetUser("Aarav"));
// 3
function calculateArea(length, breadth){
    let area=(length*breadth);
    return area;
};
console.log(caalculateArea(12,5));
console.log(calculateArea(8,9));
// 4
// parameter:Variables defined inside the function definition.
// argument:Actual values passed while calling the function.
// 5.
 Yes, it is allowed.
JavaScript does not force you to pass arguments. You can call the function with none.

Step 2: What happens inside the function.
Each parameter that gets no argument becomes undefined.

javascript
function greet(name) {
  return "Hello, " + name;
}

greet();   // "Hello, undefined"

Step 3: No error is thrown.
The function still runs. Only the value of name is undefined.

Step 4: How to avoid undefined.
Give the parameter a default value.

javascript
function greet(name = "friend") {
  return "Hello, " + name;
}

greet();   // "Hello, friend"
// Section 6: Return Statement
// 1.
function squareOfNumber(n){
    return n*n;
};
console.log(squareOfNumber(9));
// 2
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
// 3
function getFullName(firstName, lastName){
    return (firstName+" "+lastName);
}console.log(getFullName("Rohit","Sharma"));
// 4
It returns undefined.

Step 1: The function runs normally.
All the code inside executes from top to bottom.

Step 2: No value is sent back.
Without return, the function has nothing to give to the caller.

Step 3: JavaScript fills in undefined.
When the function finishes, the result is automatically undefined.

javascript
function sayHello() {
  console.log("Hello");
}

const result = sayHello();   // prints "Hello"
console.log(result);         // undefined
// 5
console.log() only shows the answer on the screen. return gives the answer back so you can keep using it later.

Think of it like a calculator: console.log() is just reading the number out loud, and return is handing you the number so you can use it in your next calculation.

javascript
function add(a, b) {
  return a + b;
}

const total = add(2, 3) * 10;   // 50
// Section 7: Why Use Functions? (Real-world Example)
// 1

function getTotal(m1, m2, m3){
    return (m1+m2+m3);
};
console.log(getTotal(90,80,80))
console.log(getTotal(70,60,80))
console.log(getTotal(60,80,40))
console.log(getTotal(30,80,70))
// 2
function calculateSimpleInterest(principal, rate, time){
   simpleInterset=((principal*rate*time)/100)
    return simpleInterset;
};
console.log(calculateSimpleInterest(3000,2,2))
console.log(calculateSimpleInterest(6000,6,2))
// 3

let m1=40,m2=30, m3=90;
 let average=m1+m2+m3;
console.log(average);
m1=90,m2=90,m3=80;
average=m1+m2+m3;
console.log(average);
// as we have declare every marks and average
// because:
// A variable stores a value.
// A function stores a calculation (it runs again each time you call it).
function findAverage(a, b, c){
    return ((a+b+c)/3);
};
console.log(findAverage(20,20,20))
console.log(findAverage(30,40,50))
// 4
A function lets you write a piece of code once and then reuse it as many times as you need by calling its name. If the logic needs to change, you fix it in one place instead of everywhere.

Real-world example: calculating the final price after discount

Imagine a shopping website that shows the final price for many products.

Without a function (repeated code):

javascript
let price1 = 1000;
let final1 = price1 - (price1 * 10) / 100;
console.log(final1);   // 900

let price2 = 2500;
let final2 = price2 - (price2 * 10) / 100;
console.log(final2);   // 2250

let price3 = 400;
let final3 = price3 - (price3 * 10) / 100;
console.log(final3);   // 360

The same calculation is written three times. If the discount changes from 10% to 20%, you must edit every line.

With a function (written once):

javascript
function finalPrice(price) {
  return price - (price * 10) / 100;
}

console.log(finalPrice(1000));   // 900
console.log(finalPrice(2500));   // 2250
console.log(finalPrice(400));    // 360
// 5.
// Less code: write the logic once, use it many times.
// Easy to change: update the formula in one place.
// Fewer mistakes: no chance of typing the formula wrong in one of the copies.
// Easier to read: finalPrice(1000) explains itself better than a long formula.


