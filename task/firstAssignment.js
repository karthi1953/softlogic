//Task 1 — Introduction

let name = "Bala";
let age = 25;
let city = "Coimbatore";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
//Task 2 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
//Task 3 — Age Checker

let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
//Task 4 — Even or Odd

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//Task 5 — Positive, Negative, or Zero

let num = -10;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
//Task 6 — Pass or Fail

let marks = 65;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Task 7 — Login Check

let isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("Welcome User");
} else {
  console.log("Please Login");
}
// Task 8 — Login + Admin Check

let isUserLoggedIn = true;
let isAdmin = false;

if (isUserLoggedIn === true && isAdmin === true) {
  console.log("Admin Dashboard");
} else if (isUserLoggedIn === true && isAdmin === false) {
  console.log("User Dashboard");
} else {
  console.log("Please Login");
}
// Task 9 — Shopping Balance
let balance = 1000;
let price = 300;

if (balance >= price) {
  console.log("Purchase successful");
  balance = balance - price; 
  console.log("Remaining balance:", balance);
} else {
  console.log("Insufficient balance");
}
// Task 10 — Student Grade

let studentMarks = 82;

if (studentMarks >= 90) {
  console.log("Grade: A+");
} else if (studentMarks >= 75) {
  console.log("Grade: A");
} else if (studentMarks >= 60) {
  console.log("Grade: B");
} else if (studentMarks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}