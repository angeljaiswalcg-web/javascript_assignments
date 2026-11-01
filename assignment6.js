
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