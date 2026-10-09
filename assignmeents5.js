// 1
class1=15000;
class2=12500;
totalCollection=class1+class2;
console.log(totalCollection)
// 2
pagesMorning=18;
pagesEvening=25;
totalPages=pagesMorning+pagesEvening;
console.log(totalPages)
// 3
soldOnMonday=125;
soldOnTuesday=178;
totalItemsSold=soldOnMonday+soldOnTuesday;
console.log(totalItemsSold)
// 4
let a = "10";
let b = 5;
let result = a + b;
console.log(result);
// output -> 105.
// 5
let x = 5;
let y = "3";
let result1 = x + y;
console.log(result1);
// output ->53
// 6
let i=15;
let j=27;
console.log(i+j);
// output -> 42
// 7
let bookCost =350;
let penCost = 45;
totalPrice=bookCost+penCost;
console.log(totalPrice)
// output-> 395
// 8
let k="25";
let h=10;
console.log(k+h)
// output -> 2510 reason (concatenation)
// 9
intialbalance=2000;
spent1=750;
spent2=320;
totalSpend=spent1+spent2;
newBalance=intialbalance-totalSpend;
console.log(newBalance);
// output -> 930
// 10
console.log(5 + "5" + 5);
console.log(5 + 5 + "5");
console.log("5" + 5 + 5);
// output-> 555-> 5+"5"+5 -> "5"+"5"+"5"
// 105 -> 5+5+"5" -> 10+"5"
// 555 -> "5"+"5"+"5" 
// topic2 - subtraction
// 1
totalSeats=80;
occupiedSeats=53;
emptySeats=totalSeats-occupiedSeats;
console.log(emptySeats);
// output-> 27
// 2
totalMarks=500;
losedMarks=35;
finalMarks=totalMarks-losedMarks;
console.log(finalMarks);
// output-> 465
// 3
totalBoxes=2500;
sends=875;
remainingBoxes=totalBoxes-sends;
console.log(remainingBoxes);
// output->1625
// 4
// let a = "10";
// let b = 3;
// let result = a - b;
// console.log(result);
// output->7
// 5
// let x = "20";
// let y = "5";
// let result = x - y;
// console.log(result);
// output->15
// 6
o=100;
p=37;
console.log(o-p);
// output->63
// 7
let total = 500;
let used = 175;
let left = total - used;
console.log(left);   // 325
// 8
// What is the result of "50" - 20 and "50" - "20"? Explain any difference.
// "50" - 20      // 30
// "50" - "20"    // 30
"50" - 20      // 30
"50" - "20"    // 30

// There is no difference in the result. Both give the number 30.

// Why they match

// The - operator has no string meaning, so it converts both operands to numbers before subtracting.

// 1. "50" - 20

// "50" is converted to 50
// 20 is already a number, so it stays 20
// 50 - 20 = 30

// 2. "50" - "20"

// "50" becomes 50
// "20" becomes 20
// 50 - 20 = 30

// The only difference is how much conversion happens: the first converts one operand, the second converts two. The final result and its type are identical.
// 9
let totalApples=240;
let soldInMorning=95;
let soldInEvening=67;
let applesLeft=totalApples-(soldInMorning+soldInEvening);
console.log(applesLeft);
// 10
console.log("100" - 50); //-> 50
console.log("abc" - 10); //->NaN
console.log(10 - "5" - "2"); //->3
console.log("10" - "5" - "2"); //->3
// 3 topic Multiplication *
// 1
const BOOKCOST=45;
let quantity=8;
let totalPrice=BOOKCOST*quantity;
console.log(totalPrice);
// 2
const BOTTLESPERHOUR=120;
let hours=6;
const TOTALPRODUCTION=BOTTLESPERHOUR*hours;
console.log(TOTALPRODUCTION);
// output=->720
// 3
const PLANTSINEACHROW=15;
const PLANTSINEACHCOLUMN= 7;
const TOTALNUMBEROFPLANTS=PLANTSINEACHROW*PLANTSINEACHROW;
console.log(TOTALNUMBEROFPLANTS);
// 4
// let a = "5";
// let b = 4;
// let result = a * b;
// console.log(result);
// output->20
// 5
// let x = "10";
// let y = "2";
// let result = x * y;
// console.log(result);
// output-> 20
// 6
// let x = "12"
// let y = "8";
// let result = x * y;
// console.log(result);
// output->96
// 7
const ONEPIZZA=299;
let quantity=4;
const TOTALCOST=ONEPIZZA*quantity;
console.log(TOTALCOST);
// 8
console.log("7"*6); //42
console.log("7"*"6"); //->42
// 9
const UNITSPRODUCEPERHOUR=45;
let hours=8;
const TOTALUNITSPRODUCE=UNITSPRODUCEPERHOUR*hours;
console.log(TOTALUNITSPRODUCE);
// 10
console.log("5" * 3 * "2"); //-> 30
console.log("abc" * 4); //->NaN
console.log(10 * "2.5"); //->25
console.log("10" * "2.5" * "0"); //0
// topic 4 Division /
// 1
const TOTALPENCILS=144;
let students=12;
const EACHSTUDENTRECIEVE=TOTALPENCILS/students;
console.log(EACHSTUDENTRECIEVE);
// output->12
// 2
const TRAVELDISTANCEIN6HOURS=360;
let HOURS=6;
const AVERAGE=TRAVELDISTANCEIN6HOURS/HOURS;
console.log(AVERAGE);
// 3
const AMOUNTDISTRIBUTED=72000;
const NUMBEROFDEPARTMENT=9;
const AMOUNTRECIEVEDPEREACHDEPARTMENT=AMOUNTDISTRIBUTED/NUMBEROFDEPARTMENT;
console.log(AMOUNTRECIEVEDPEREACHDEPARTMENT);
// 4
// let a = "20";
// let b = 4;
// let result = a / b;
// console.log(result);
// outtput->5
// 5
// let x = "100";
// let y = "5";
// let result = x / y;
// console.log(result);
// output->20
// 6
//console.log(144/12)-> 12
// 7
const TOTALSTUDENTS=360;
const CLASSROOMS=9;
const STUDENTSPERCLASSROOM=TOTALSTUDENTS/CLASSROOMS;
console.log(STUDENTSPERCLASSROOM);
// output->40
// 8
// console.log("100"/4); //output->25
// console.log("100"/"4"); //output->25
// 9
const TOTALBILL=2400;
let friends=6;
const EACHPERSONSSHARE=TOTALBILL/friends;
console.log(EACHPERSONSSHARE);
// output->400
// 10
console.log(10 / 0); //Infinity
console.log(-10 / 0);//-Infinity
console.log(0 / 0);//NaN
console.log("20" / "4" / 2);//2.5
console.log("abc" / 5);//NaN
// topic 5  Modulus %
// 1
let totalStudents=53;
let groups=5;
const NUMBEROFSTUDENTLEFT=totalStudents%groups;
console.log(NUMBEROFSTUDENTLEFT);
// output->3
// 2
const TOTALCANDIES=128;
let EACHBOX=10;
const NUMBEROFCANDIESLEFT=TOTALCANDIES%EACHBOX;
console.log(NUMBEROFCANDIESLEFT);
// 3
const TOYSPRODUCE=237;
let numberBoxes=6;
const TOYSLEFT= TOYSPRODUCE%numberBoxes;
console.log(TOYSLEFT);
// output->3
// 4
const BUSCARRY=40;
let peoplewaiting=185;
const PEOPLELEFT=peoplewaiting%BUSCARRY;
console.log(PEOPLELEFT);
// output->25
// 5
// let a = 10;
// let b = 0;
// let result = a % b;
// console.log(result);
// output->NaN
// 6
// console.log(29 % 5);
// output->4
// 7
const TOTALCHOCOLATES=23;
let numberOfBoxes=4;
const CHOCOLATELEFT=TOTALCHOCOLATES%numberOfBoxes;
console.log(CHOCOLATELEFT);
// OUTPUT->3
// 8
 console.log(0 % 7); //0 / 7 = 0 with nothing left over
Output: 0
console.log(15 % 0); //Dividing by zero has no valid remainder
// 9

// 10
console.log(17 % 5); //2
console.log(-17 % 5);//-2
console.log(17 % -5);//2
console.log(-17 % -5);//-2
console.log(10 % 0);//NaN
// topic 6  Exponentiation **
// 1
let length=6;
const VOLUMEOFCUBE=length**3;
console.log(VOLUMEOFCUBE);
// 2
const TOTALNUMBEROFCELLONEACHSIDE=9;
const TOTALNUMBEROFCELLINSQAURE=TOTALNUMBEROFCELLONEACHSIDE**2;
console.log(TOTALNUMBEROFCELLINSQAURE);
// 3
console.log(5**4); //output->625
// 4
const PIXELEACHSIDE=1024;
const TOTALNUMBEROFPIXEL=PIXELEACHSIDE** 2
console.log(TOTALNUMBEROFPIXEL);
// 5
// let base = 2;
// let power = -1;
// let result = base ** power;
// console.log(result); 
// output->0.5
// 6
console.log(3 ** 4); //output->81
// 7
let side=9;
const AREAOFASQUARE=side**2;
console.log(AREAOFASQUARE);
// 8
console.log(2 ** 5);//5 raise to 2 ->32
console.log(5 ** 2);//2 raise to 5->25
// 9
console.log(2 ** 3 ** 2); // ->512         right-associative
console.log((2 ** 3) ** 2); //64
console.log(2 ** -3);//0.125
// console.log(-2 ** 2);           // Remember: Syntax error
console.log((-2) ** 2);//4
console.log(4 ** 0.5);//2
// 10
let a = 10;
let b = 0;
let result = a ** b;
console.log(result);
// output->1
// TOPIC-B Assignment Operators
// 1
let student="priya";
let marks=92;
// 2
let score=0;
// 3
let a=b=c=50;
// 4
let x;
x = 100;
console.log(x);//output->100
// 5
let p = 15;
let q = p;
q = 30;
console.log(p, q);
//output=15 30
//topic2 Add and Assign +=
// 1
let playersScore=80;
playersScore+=25
console.log(playersScore);
// output->105
// 2
let wallet=1500;
wallet+=120;
console.log(wallet);
output->1620
// 3
let count = 10;
count += 5;
console.log(count); //Output:15
// 4
let msg = "Good";
msg += " Morning";
console.log(msg);
// Output: Good Morning
// 5
let n = 20;
n += "5";
console.log(n);//output->205->concatenation->20+"5"->"20"+"5";
// topic 3 Subtract and Assign -=
// 1
let health=100;
health-=35;
console.log(health);
// 2
let stock=400;
stock-=45;
console.log(stock);
//Output:355
// 3
let lives = 5;
lives -= 2;
console.log(lives);
//output:3
// 4
let num = "40";
num -= 15;
console.log(num);
// output->25
// 5
let x = "abc"
x -= 5;
console.log(x); //output->NaN
// topic 4 Multiply and Assign *=
// 1
let price=500;
price*=1.18;
console.log(price);
// 2
quantity=8;
quantity*=3;
console.log(quantity);
// 3
let amount = 200;
amount *= 1.1;
console.log(amount);
// output->220.0000000003
// 4
let val = "7";
val *= 3;
console.log(val);
// output->21
// 5
let y = "hello";
 y *= 2;
 console.log(y); //->NaN
//  topic 5  Divide and Assign /=
// 1
let totalChocolate=180;
totalChocolate/=6;
console.log(totalChocolate);
// output->30
// 2
let average= 300;
average /= 6;
console.log(average); //output->50
// 3
let total = 400;
total /= 8;
console.log(total); //output->50
// 4
let num = "100";
num /= 4;
console.log(num); //output->25
// 5
let z = 50;
z /= 0;
console.log(z); //Output:Infinity
// topic 6  Modulus and Assign %=
let number=47;
number%=6;
console.log(number);//output->5
// 2
counter=23;
counter%=12
console.log(counter);//output->11
// 3
let num = 29;
num %= 5;
console.log(num); //output->4
// 4
let x = "17";
x %= 3;
console.log(x);//output->2
// 5
let m = 15;
m %= 0;
console.log(m); //output->NaN
// topic 7  Exponentiation and Assign **=
// 1
let side=5;
side**=3;
console.log(side)
//output->125
// 2
let num=4;
num**=2;
console.log(num);//output->16
// 3
let base = 2;
base **= 5;
console.log(base);
//output->32
// 4
let n = 4;
n **= 0.5;
console.log(n);
//output->2
// 5
let p = 2;
 p **= -1;
 console.log(p);
 //output->0.5
//  topic C  Comparison Operators
// 1. Loose Equality ==
// 1
console.log(25 == "25"); //output->true
// 2
console.log(0 == false); //output->true
// 3
console.log(10 == "10"); //output->true
console.log(null == undefined); //output->true
// 4
console.log("" == 0); //output->true
console.log([] == false); //output->true
// 5
console.log(NaN == NaN);//output->false
// 2. Loose Inequality !=
// 1
console.log("18" != 18); //output->false
// 2

// 3
console.log(5 != "5"); //output->false
console.log(0 != false); //output->false
// 4
console.log(null != undefined); //output->false
console.log("" != 0); //output->false
// 5
console.log(NaN != NaN);//output->true
//explain
// 3. Strict Equality ===
// 1
console.log("25" === 25); //output->false
//explain
// 2
console.log(null === undefined); //output->false
console.log(0 === false); //output->false
// 3
console.log(10 === "10"); //output->false
console.log(true === 1); //output->false
// 4
console.log("" === 0); //output->false
console.log([] === false); //output->false
// 5
// Why is === preferred over == in most real-world code?
// 4. Strict Inequality !==
// 1
console.log("18" !== 18); //output->true
// 2
console.log(0 !== false); //output->true
console.log(null !== undefined); //output->true
// 3
console.log(5 !== "5"); //output->true
console.log(true !== 1); //output->true
// 4
console.log("" !== 0); //output->true
console.log(NaN !== NaN); //output->true
// 5
// Write a condition that checks if a variable input is strictly not equal to the string "0". ->

 

