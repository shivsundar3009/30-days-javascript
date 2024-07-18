// Feature Requests 

// 01 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Declare variables of different data types
let number = 42;
let string = "JavaScript";
let boolean = true;
let object = { name: "Alice", age: 25 };
let array = [1, 2, 3, 4, 5];
let undefinedVar;
let nullVar = null;
let symbol = Symbol("unique");

// Log the value and type of each variable to the console
console.log("Value:", number, ", Type:", typeof number);       // Value: 42 , Type: number
console.log("Value:", string, ", Type:", typeof string);       // Value: JavaScript , Type: string
console.log("Value:", boolean, ", Type:", typeof boolean);     // Value: true , Type: boolean
console.log("Value:", object, ", Type:", typeof object);       // Value: { name: 'Alice', age: 25 } , Type: object
console.log("Value:", array, ", Type:", typeof array);         // Value: [ 1, 2, 3, 4, 5 ] , Type: object (arrays are objects in JavaScript)
console.log("Value:", undefinedVar, ", Type:", typeof undefinedVar); // Value: undefined , Type: undefined
console.log("Value:", nullVar, ", Type:", typeof nullVar);     // Value: null , Type: object (null is of type object due to a quirk in JavaScript)
console.log("Value:", symbol, ", Type:", typeof symbol);       // Value: Symbol(unique) , Type: symbol


// 02 . Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment. 

// Using let
let changeable = 10;
console.log("Initial value of changeable (let):", changeable); // Output: 10

// Reassigning the variable declared with let
changeable = 20;
console.log("Reassigned value of changeable (let):", changeable); // Output: 20

// Using const
const immutable = 30;
console.log("Initial value of immutable (const):", immutable); // Output: 30

// Attempting to reassign the variable declared with const
try {
    immutable = 40;
} catch (error) {
    console.error("Error when reassigning immutable (const):", error.message); // Output: Assignment to constant variable.
}

// Explanation:

// Using let: The variable changeable is declared with let, assigned an initial value of 10, and then reassigned a new value of 20. The script logs both the initial and reassigned values, showing that reassignment is allowed with let.

// Using const: The variable immutable is declared with const and assigned an initial value of 30. When the script attempts to reassign immutable to a new value, it catches the error and logs the error message, demonstrating that reassignment is not allowed with const.