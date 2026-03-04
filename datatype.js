// We have 2 types of data in JavaScript
// 1. Primitive data types
// 2. Non-primitive data types

// Primitive data types are the basic data types in JavaScript. They include:
// 1. String: A sequence of characters enclosed in single or double quotes.
// 2. Number: A numeric value that can be an integer or a floating-point number.
// 3. Boolean: A logical value that can be either true or false.
// 4. Null: A special value that represents the absence of any object value.
// 5. Undefined: A special value that indicates that a variable has not been assigned a value.
// 6. BigInt

let price = 100; // number

let name = "Shronal Duwal"; // string
let city = 'Kathmandu';

let isStudent = true; // boolean
let isMarried = false;

let x;
let y = null;

console.log(price, name, isStudent, x, y);

// Non-primitive data types are more complex data structures that can hold multiple values. They include:
// 1. Object: A collection of key-value pairs that can represent real-world entities.
// 2. Array: An ordered list of values that can be of any type.
// 3. Function: A reusable block of code that performs a specific task.


// Object is the collection of value 
// For eg: Information about a person
// key : value
const person = {
    name: "Shronal Duwal",
    age: 21,
    city: "Kathmandu"
};

// to get individual value, person["name"] or person.name

// After 1 years

person.age = person.age + 1; // as it is const we cannot reassign person but we can change the value of age


