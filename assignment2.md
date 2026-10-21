<img width="1280" height="960" alt="WhatsApp Image 2026-10-09 at 9 53 51 AM (1)" src="https://github.com/user-attachments/assets/5fd97166-152a-4b55-b161-197125212dab" />
<im![Uploading WhatsApp Image 2026-10-09 at 9.53.51 AM.jpeg…]()
g width="960" height="1280" alt="WhatsApp Image 2026-10-09 at 9 53 50 AM" src="https://github.com/user-attachments/assets/0325fb4f-8e8a-49b2-80da-ffddb900f16a" />
<img width="960" height="1280" alt="WhatsApp Image 2026-10-09 at 9 53 50 AM (1)" src="https://github.com/user-attachments/assets/2ce6ef32-9657-4c02-be19-cb9c8d893e69" />
<img width="1080" height="1439" alt="image" src="https://github.com/user-attachments/assets/fa8e268c-de53-4192-a6b0-36a86dd87308" /><img width="1080" height="1439" alt="WhatsApp Image 2026-09-30 at 10 46 10 AM" src="https://github.com/user-attachments/assets/ab995600-a240-46b9-8ea0-fd4012a10dcc" />Assignment : Introduction to Variables and Datatypes
Part I : Variables (let, var, const)
Part a — 4 Questions
1. Personal Information Declare variables for name, age, and city using appropriate variable keywords. Assign values and print all three variables.

2. Change the Score Create a variable score with the value 50. Change its value to 80 and print the final value. Use the appropriate keyword for a value that can change.

3. Constant Value Create a constant variable PI with the value 3.14. Print its value. Do not try to change the value.

4. Uninitialized Variables Declare one variable having name num1 using var and one having name num2 using let without assigning values. Print both variables. Then assign values to them and print the values again.

6. Part b — 4 Questions
7. Choose the Correct Keyword Create the following variables using the most appropriate keyword:

studentName — the value will not change
marks — the value may change
schoolName — the value will not change
Assign values to all three variables. Change marks and print all variables.

6. Understand Scope Write a program where var, let, and const variables are declared inside an if block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.

7. Test Re-declaration Declare a variable named user using var and declare it again with a different value. Then perform the same experiment using let. Observe what happens and identify which declaration allows re-declaration.

8. Test Re-assignment Create three variables using var, let, and const. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.

Part c — 2 Questions
9. Predict and Explain Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.

var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
10. Fix the Program The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for initialization, re-declaration, re-assignment, and scope.

const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;


Part d — 2 Question
11. Predict the Hoisting Behavior
Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of hoisting for var, let, and const.

console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
12. Fix the Hoisting Errors
The following program contains errors related to hoisting. Fix the code so that it runs correctly without any errors. Make sure your solution follows the rules of hoisting for var, let, and const (you may reorder declarations/assignments or change keywords only where necessary to make it work properly).

console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
let y = "World";
const z = "!";

console.log(x + " " + y + z);
Questions on Primitive vs Non-Primitive Data Types

Part e — Basic Identification (4 Questions)
1. Classify the Types
Declare one variable of each of the following types and print both the value and its type using typeof:

A whole number
A decimal number
A piece of text
A true/false value
2. Undefined vs Null
Declare two variables:

a using let without assigning any value
b and intentionally assign null to it
Print both variables and their typeof results. Explain the difference between undefined and null.

3. Number Special Values
Create variables for the following and print each value along with its type:

Positive Infinity
Negative Infinity
Not-a-Number (NaN)
A large number written with scientific notation (e.g., 2.5e3)
A number written with underscores for readability (e.g., 1_000_000)
4. String Styles
Create three string variables using:

Single quotes
Double quotes
Template literals (backticks) that include another variable
Print all three strings.

Part f — Advanced Primitive Types (3 Questions)
5. Symbol Uniqueness
Create two Symbols with the same description ('id').
Compare them using === and print the result.
Then use both Symbols as keys in an object and retrieve the values.
Explain why the comparison returns false.

6. BigInt Precision
Create a regular number with the value 9007199254740991 (Number.MAX_SAFE_INTEGER).
Add 1, 2, and 3 to it and print the results.
Now create the same value as a BigInt and perform the same additions.
Print the results and explain the difference.

7. Choose the Correct Type
For each description below, write the most appropriate primitive data type and give an example declaration:

A unique identifier that is never equal to another value with the same description
A very large integer that must keep exact precision
A variable that has been declared but not yet given a value
An intentional empty 

Part g — Prediction & Fixing (3 Questions)
8. Predict the Output
Without running the code, predict what each console.log will print (value + type). Explain your reasoning.

let a;
let b = null;
let c = 42;
let d = "Hello";
let e = true;
let f = Symbol("key");
let g = 123n;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
9. Fix the Code
The following program has mistakes related to primitive types. Fix it so that it runs correctly and prints meaningful values.

let num = 10;
let text = Hello;
let flag = True;
let empty;
let nothing = Null;
let unique = symbol("id");
let big = 9007199254740991;

console.log(num, text, flag, empty, nothing, unique, big);
10. Primitive vs Non-Primitive
Answer the following questions in your own words and give one example for each:

a) What is the main difference between Primitive and Non-Primitive data types?
b) Why are Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt called Primitive?
c) Give one example of a Non-Primitive data type and explain why it is considered Non-Primitiv

Part H] - Non-Primitive Data Types Basic Creation & Usage (4 Questions)
1. Create an Object
Create an object named student with the following properties:

name → "Riya"
age → 18
isEnrolled → true
Print the entire object and then print each property individually.

2. Work with Arrays
Create two arrays:

scores containing only numbers: 85, 92, 78, 90
mixedData containing different types: a number, a string, a boolean, and null
Print both arrays. Also print the first and last element of the scores array using index.

3. Declare and Call a Function
Write a function named calculateArea that takes two parameters (length and width) and returns the area of a rectangle.
Call the function twice with different values and print the results.

4. Check Types with typeof
Create variables of the following types and print both the value and its type using typeof:

A number
A string
A boolean
null
An object
An array
A function
Observe and note any surprising results (especially with null and arrays).


Part I] - Naming Rules & Best Practices (3 Questions)
5. Valid vs Invalid Variable Names
Identify which of the following variable names are valid and which are invalid. For invalid ones, explain why.

let userName;
let 2ndPlace;
let _privateData;
let $price;
let my-age;
let function;
let totalCount;
let const;
6. Apply Best Practices
Rewrite the following poorly written code using best practices (const/let, meaningful names, camelCase, UPPERCASE for constants):

let x = 10;
let y = 5;
let a = x * y;
let b = 100;
7. Declaration & Assignment
Write code that demonstrates:

Declaring a variable without assigning a value, then assigning a value later
Declaring and assigning a value in one step
Creating a constant that cannot be changed
Print all variables.



Part J] - Prediction & Fixing (3 Questions)
8. Predict the Output
Without running the code, predict what each console.log will print. Explain your reasoning (especially for typeof).

let person = { name: "Amit", age: 22 };
let colors = ["red", "green", "blue"];
function sayHi() {
  return "Hi!";
}
let empty = null;

console.log(typeof person);
console.log(typeof colors);
console.log(typeof sayHi);
console.log(typeof empty);
console.log(person.name);
console.log(colors[1]);
console.log(sayHi());
9. Fix the Program
The following code has multiple errors related to objects, arrays, functions, naming rules, and best practices. Fix it so that it runs correctly.

let 1student = { name: "Neha", Age: 19 }
let scores = 90, 85, 88
function greet {
  return "Hello " + name
}
const maxScore = 100
maxScore = 95
console.log(1student.name)
console.log(scores[0])
console.log(greet("Neha"))
