// Program: testJS.js
// Author: Xiaopu Peng
// External js file for my js practice

// variables defined to hold different types of data
var techName = "JavaScript"; // String literal
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log("Learning " + techName + version);

// Declaring Variable
var userName;

// Assigning value
userName = "Dinanath";

console.log("Welcome " + userName);

// Declaring multiple variables
var firstName = "Dinanath",
  lastName = "Jayaswal",
  age = 35,
  isMarried = "true";

console.log("I am " + firstName + " " + lastName);

// ----------------------------

// global variable
var globalName = "Global";

window.alert(globalName);

function showName() {
  // local variable
  var localName = "Local";

  window.alert(localName);
  window.alert(globalName); // recall global variable
}

// invoke/call/run function
// showName();

// error - as local variable not exist/available outside of block { }
// window.alert(localName);


function showNameII() {
  // local variable
  var globalName = 'Local';

  window.alert(globalName);

  // define global variable with window
  window.globalVersion = 29;
  window.alert('global variable from inside function: ' + window.globalVersion);
}

// invoke/call/run function
// showName();

// access global variable defined inside function
window.alert('global variable from outside function: ' + window.globalVersion);

// ---------------------------

// traditional var syntax
var techName1 = 'JavaScript';

for(var i = 1; i <= 5; i++) {
  console.log('i : ' + i); // 1,2,3,4,5
  console.log('inside block:' + techName1);
  var version1 = 100;
}
console.log('outside: ' + i); 
console.log('outside: ' + version1); 

// ES6 syntax
let techName2 = 'LiveScript';

for(let n = 1; n <= 5; n++) {
  console.log('n : ' + n); // 1,2,3,4,5
  console.log('inside block:' + techName2);
  let version2 = 100;
}

// console.log(n); // undefined
// console.log('outside: ' + version2);  // undefined

// ---------------------------
// traditional var syntax
var PI1 = 3.14;
console.log(PI1); // 3.14

PI1 = 100;
console.log(PI1); // 100

// ES6 syntax
const PI2 = 6.28;
console.log('ES6 syntax const: ' + PI2); // 6.28

// PI2 = 100; // error

//---------------------------
// use typeof to find data type of variables
// Strings
alert(typeof "Hello"); // "string"
alert(typeof '12'); // "string"

// Numbers
console.log(typeof(100)); // "number"
console.log(typeof(100.29)); // "number"

// Booleans
alert(typeof true); // "boolean"
alert(typeof(1 == 2)); // "boolean"

// Undefined
console.log(typeof undefined); // "undefined"

var x;
console.log('type of x: ' + typeof x); // "undefined"

// Null
console.log(typeof null); // "object"
var x = null;
console.log('type of x: ' + typeof x);  // "object"

// Objects
alert(typeof {name: 'Dinanath', age: 35}); // "object"
alert(typeof document); // "object"
alert(typeof window); // "object"

// Arrays
var x = [];
console.log('type of x: ' + typeof x);  // "object"
console.log(typeof ['JavaScript', 'jQuery', 'Angular']);  // "object"
console.log(typeof ['Dinanath', 35, 'India']);  // "object"

// Functions
console.log(typeof function(){}); // "function"
console.log(typeof alert); // "function"
console.log(typeof window.alert); // "function"

// Symbol
alert(typeof Symbol("dob")); // "symbol"


//-----------------------
// Number to String conversion
var num1 = 100;
console.log(num1);
console.log(typeof num1);
console.log(num1.length); //error as number type variables does not have length
num1 = String(num1);
console.log(num1);
console.log(typeof num1);
console.log(num1.length);
// Boolean to String conversion
let boolValue1 = String(false);
console.log(boolValue1);
console.log(typeof boolValue1);
// Date to String conversion
let curDate = String(new Date());
console.log(curDate);
console.log(typeof curDate);
// Array to String conversion
let numArray = String([1,2,3,4,5]);
console.log(numArray);
console.log(typeof numArray);
// toString() method
var curString = (1000).toString
var curString = (true).toString
// String to Number conversion
var num2 = '100';
console.log(typeof num2);
console.log(num2.toFixed(2)); 
//helps to fix decimals - error as string type variables does not have any properties or methods related to number
num2 = Number(num2);
console.log(num2);
console.log(typeof num2);
console.log(num2.toFixed(2));
// Boolean to Number conversion
let boolValue2 = Number(false);
// parseInt() method
var curNumber = parseInt('100');
var curNumber = parseFloat('100.41');

var num1 = '20';
var num2 = 10;
const sum = (num1) + (num2);
console.log(sum);
console.log(typeof sum);
