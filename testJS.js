// Program: testJS.js
// Author: Xiaopu Peng
// External js file for my js practice

alert("welcome to JavaScript written in external file");
console.log("welcome to JavaScript written in external file");
document.write("<h2>welcome to JavaScript written in external file</h2>");

// define function - block of code to show welcome message
function sayHello() {
  alert("Hello All! Welcome to JavaScript!!");
}
// define function - block of code to show total of two numbers
function showTotal() {
  var num1 = 10;
  var num2 = 20;
  var total = num1 + num2;
  alert("Total is : " + total);
}
// invoke / run / call a function
// sayHello();
// showTotal();
// alert('testJS.js working');
