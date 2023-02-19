
// console.log("Hello World");

// let num1 = 20.6;
// let num2 = 20.6;

// if (num1 > num2) {
//     console.log("first number is bigger")
// }
// else if (num1 == num2) {
//     console.log("numbers are equal")
// }
// else {
//     console.log("second number is bigger")
// };


// let names = prompt("insert name");

// console.log ("Hello " + names);


// const PI = 3.14159265359;

// let rad = prompt("introduce radian");

// let result = PI * rad**2;;


// console.log(PI);
// console.log(rad);
// console.log(result);



// ---------- -> Find out if a number is EVEN OR ODD with regular expression parse and integer check <- ---------- 

let input = prompt("Enter a number");                   // Input window

let pattern = /^\d*\.?\d*\S$/;                          // Regular expression to accept only numbers with decimal point and exclude spaces

let inputCheck = pattern.test(input);                   // Variable used to check if the input is an accepted string

if (inputCheck === true) {

    let num = parseFloat(input);                        // Variable used to convert the string into number
    let integerCheck = Number.isInteger(num);           // Variable that checks if number is integer

    if (integerCheck === true) {

        let rest = (num % 2);                           // Variable to calculate the rest with % (can be 0 or 1 in this case)

        if (rest == 0) {                                // If there is NO rest the number is even.
            console.log("The number is EVEN");
        }
        else {
            console.log("the number is ODD");           // If there IS rest the number is odd.
        }

    }
    else {
        console.log("Incorrect input. Number needs to be Integer")       // Error in case the parsed number is not integer
    }

}

else {
    console.log("Incorrect input. Example: 3 or 2.6")   // // Error in case the input does not match the regular expression
};

