// Ex 1 Variables & Datatypes

//  How do we assign a value to a variable?
//let x = 1;

// How do we change the value of a variable?
//x = 2;

// How do we assign an existing variable to a new variable?
//let q = x;

// Remind me, what are declare, assign, and define?

// Declare: is when you initialize a variable.
// Assign: is when you give some value to a previously declared variable.
// Define: is when you declare a variable and assign some value to it.


// What is pseudocoding and why should you do it?
// Pseudo coding is jotting down all the possible list of ideas, methods and processes before you actually start writing codes.


// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// A programmer should spend more than 90% of time thinking about w=how to solve the problem


//B Strings

// Create a variable called firstVariable

// let firstVariable;

// Assign it the value of the string "Hello World"

// firstVariable = "Hello World";

// Change the value of this variable to some number

// firstVariable = 89;

// Store the value of firstVariable in a new variable called secondVariable

// let secondVariable = firstVariable;

//Change the value of secondVariable to any string.

// secondVariable = "I am the copy of first variable."

// What is the value of firstVariable?
// The value of first variable is 89, which is the very last value assigned to that variable name.


// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

// let yourName = "Sagar Chhetri";
// console.log("Hello, my name is " + yourName);

// Booleans 

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
 //console.log(false || false && false && false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//console.log(48 == '48');



// The Farm

// let animal = "dog";

// if (animal === "cow") {
//     console.log("Moo");
// }
// else {
//     console.log("Hey! You're not a cow.")
// }


// Drivers Ed

// const age = 16;
// if (age >= 16) {
//     console.log("Here are the keys!");
// }
// else {
//     console.log("Sorry, you are too young");
// }

// Loops The Basics

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let j = 10; j <= 400; j++) {
//     console.log(j);
// }

// for (let k = 12; k <= 4000; k += 3) {
//     console.log(k);
// }

// Get Even

//prints out the the number between 1 and 100 and both of them
// for (let x = 0; x <= 100; x++) {
//     console.log(x);
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let x = 0; x <= 100; x++) {
//     if (x % 2 === 0) {
//         console.log(x + " is an even number")
//     }
//     else {
//         console.log(x);
//     }
// }


// Give me five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for (y = 0; y <= 100; y++) {
//     if (y % 5 === 0) {
//         console.log("I found a " + y + " . High five!");
//     }
//     if (y % 3 === 0) {
//         console.log("I found a " + y + " . Three is a crowd");

//     }
  //      else {
//            console.log(i);
    // }
// }

// Savings account
// let bank_account = 0;
// for(let i = 1; i <= 10; i++) {
//     bank_account = bank_account + i;
// }
// console.log(bank_account);


// Array and Control Flow
// Talk about it

// Things in an array are called elements
// Yes
// 

// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ['No Pressure, no diamonds' , 'If nothing goes right, go left', 'Take the risk or lose the chance']
// console.log(quotes[0]);

// const randomThings = [1, 10, 'Hello', true];

// let firstElement = randomThings[0];

// randomThings[2] = 'world'

// console.log(randomThings);


// Change Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// const thirdElement = ourClass[2];
// ourClass[4] = 'Octocat';
// ourClass.push('Cloud City');


// console.log(ourClass);


// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();

// console.log(myArray);

//Did ypu mutate the array? what does the mutate mean? Did the .reverse method return anything?
// Yes. To change the orientation of the element in an array. It return all the elements after changing its position.

// Biggie Smalls

// let integer = 7;

// if(integer < 100) {
//     console.log("little number");
// }
// else {
//     console.log("big number");
// }


//Monkey in the middle

// let num = 3;
// if(num < 5){
//     console.log("little number");
// }
// else if(num > 10){
//     console.log("big number");
// }
// else {
//     console.log("monkeu");
// }


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// kristynsCloset[6] = 'raybans';
// kristynsCloset.splice(6,0,)

// const tops = thomsCloset[0][0];
// const bottoms = thomsCloset[1][2];
// const acces = thomsCloset[2][1];

// console.log("Thom is looking firece in a " + tops + ", " + bottoms + " and " + acces + "!");
// console.log(kristynsCloset);

// thomsCloset[1][2] = 'Footie Pajamas';
// console.log(thomsCloset);


// Functions

// printGreeting















