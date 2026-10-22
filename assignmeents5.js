1.
for(let i = 1 ; i<=15 ; i++){
    console.log(i)
    
}
 
2.
for(let i = 1 ; i<=40 ; i++){
    if(i%2==0){
        console.log(i)
    }
}
3.
for(let i = 1 ; i<=40 ; i++){
    if(i%2!=0){
        console.log(i)
    }
}
4.
total=0
for(i = 10 ; i<=100 ; i=i+10){
    total+=i
}console.log("Total savings after 10 days:",total)
5.
num=12;
for(i =1;i<=10;i++){
    console.log(num*i)
}
6.
glass=3;
for(i=1;i<=7;i++){
    console.log(i,":",glass*i)
}
7.
cost=15
for(i=1;i<=10;i++){
    console.log(i,"chocolate",cost*i)
}
8.
sum=0;
for(i=1;i<=30;i++){
    if(i%2==0){
        sum+=i
    }
}console.log("Sum of even numbers:",sum)
9.
pushUp=5;
for(i=1;i<=7;i++){
    console.log("Day",i,":",pushUp*i,"Push-Up")
}
10.
cost=150;
for(i=1;i<=8;i++){
    console.log(i,"Person : ₹"+cost*i)
}
// Part B] For Loop (Additional advanced questions)
// 1
let arr=[28, 32, 25, 40, 18, 35];
let count=0;
for(let i=0;i<arr.length;i++){
    if (arr[i]>=30){
      ++count
}}
console.log(count)
// 2
const num = 4729;
let sum = 0;

for (let n = num; n > 0; n = Math.floor(n / 10)) {
  sum += n % 10;   // last digit
}

console.log(sum); // 22
// or
let sum2 = 0;
const str = String(num);

for (let i = 0; i < str.length; i++) {
  sum2 += Number(str[i]);
}
// 3
for (let i=1;i<=100;i++){
    if( i%3===0 && i%5===0 && i%7!==0){
        console.log(i)
    }
}
// 4
spelling="JavaScript";
consonants=""
for(let i=0;i<spelling.length;i++){
   if  (!"aeiou".includes(spelling[i].toLowerCase())) {
    consonants += spelling[i];
}
    
}
console.log(consonants)
// 5
arr=[11,16,13,15,17,19,52]
let largest=0;
for(let i=0;i<arr.length;i++){
    if (arr[i]>largest){
        largest=arr[i]
    }
}console.log(largest)
// 6
let num=6;
let sum=0
for(i=1;i<num;i++){
    if(num%i===0){
        sum+=i
}
}
if(sum===num){
        console.log(num,"is a perfect number")
}
else{
        console.log("not a perfect number")
}
// 7
for (let i=0;i<=7;i++){
    console.log(2**i)
}
// 8
let a = 0, b = 1;

for (let i = 0; i < 20; i++) {
  console.log(a);
  const next = a + b;
  a = b;
  b = next;
}
// 9
const scores = [45, 78, 90, 32, 56, 88];

let total = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
const average = total / scores.length;

let countAbove = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > average) countAbove++;
}

console.log(average, countAbove); // 64.83 3
// 10
let sum = "";

for (let n = 10; n > 0; n = Math.floor(n / 2)) {
    sum = (n % 2) + sum;
}

console.log(sum); // 1010
// Part C-a] break inside a for Loop 
// 1       
arr=[3,4,5,6,6,7,9,8,8];
for(i=1;i<arr.length;i++){
    if(arr[i]===7){
        console.log(i)
        break
    }
}
// 2
const password = "angelic";
const maxAttempts = 5;
const guesses = ["a", "b", "c", "d", "e"];

for (let i = 1; i <= maxAttempts; i++) {
  if (guesses[i - 1] === password) {
    console.log("Access granted");
    break;
  } else if (i === maxAttempts) {
    console.log("Account locked");
  }
}
// 3
sum=0;
for(i=1;i<=100;i++){
    sum+=i;
    if (sum>100){
        console.log(i);
        break;
    }
}
// 4



