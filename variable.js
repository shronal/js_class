// variable is like container that holds data.
// we can store any type of data in variable like string, number, boolean, array, object etc.
// it can be changed later in the program.
myname = "Shronal Duwal";
age = 20;
isStudent = true;
x = null;
y = undefined;
console.log(myname, age, isStudent, x, y); 

// it is not necessary to declare type of variable in JavaScript, it is a dynamically typed language.

// let , const , var

let a = 10; // it can be updated later
const b = 20; // it cannot be updated later
var c = 30; // it can be updated later and also can be redeclared

// let a = 16;  this will cause error

a = a - 3 ; // this is valid

// b = b + 5; // this will cause error

c = c * 2; // this is valid
var c = 50; // this is valid
console.log(a, b, c);