// Program: testJS.js
// Author: Xiaopu Peng
// External js file for my js practice

// alert("welcome to JavaScript written in external file");
// console.log("welcome to JavaScript written in external file");
// document.write("<h2>welcome to JavaScript written in external file</h2>");

// define function - block of code to show welcome message
function sayHello() {
  alert("Hello All! Welcome to JavaScript!!");
}
// define function - block of code to show total of two numbers
function showTotal() {
  var num1 = 10;
  var num2 = 20;
  var total = num1 + num2;
  console.log('total is:' + total);
  document.write('total is:' + total);
}
// invoke / run / call a function
// sayHello();
// showTotal();
// alert('testJS.js working');

// Writing text string inside an element
document.getElementById('mainHeadingText').innerHTML = 'Heading Text change dynamically on run-time';

var paraText = document.getElementById('mainParaText');
paraText.innerHTML = '<strong>This Paragraphic text inserted dynamically through innerHTMLmethod.</strong>';

// variables defined to hold different types of data
var techName = 'JavaScript'; // String literal 
var version = 6; // Number literal
var isDone = true; // Boolean literal

console.log('Learning '+techName+version);