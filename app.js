

// chapter 9-11
// quiz 1
let city = prompt('Enter city name here');
            if (city.toLowerCase() === "karachi") {
                alert("Welcome to city of lights");
            } else {
                alert("Welcome to " + city);
            }
            
// quiz 2
let gender = prompt('Enter your gender');
            if (gender.toLowerCase() === "male") {
                alert("good morning sir");
            } else if (gender.toLowerCase() === "female") {
                alert("good morning mam");
            }

// quiz 3
let trafficSignal = prompt('enter traffic signal color');
            if (trafficSignal.toLowerCase() === "red") {
                alert("must stop");
            } else if (trafficSignal.toLowerCase() === "yellow") {
                alert("ready to move");
            }
             else if (trafficSignal.toLowerCase() === "green") {
                alert("move now");
            }
  
// quiz 4
let fuel = prompt("Enter the remaining fuel in your car (in litres):")
if (fuel < 0.25 ) {
    alert("Please refill the fuel in your car")
}

// quiz 5
// a.
 let a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// it will run

// b.
 let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// it will not run

// c.
let c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// condition 1:it will not run
// condition 2:it will not run
// condition 3:it will run
// condition 4:it will not run

// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// it will run

// e.
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// it will run

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}
// it will run

// quiz no 6
// Take input for marks obtained in three subjects
const subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
const subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
const subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

// Take input for total marks
const totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate total marks obtained
const totalObtainedMarks = subject1 + subject2 + subject3;

// Calculate percentage
const percentage = (totalObtainedMarks / totalMarks) * 100;

// Determine grade based on percentage

if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'Fail';
}

// Display the result
document.write("<h1>marksheet<h1>") 
document.write("Total Marks: " + totalMarks +"<br>");  
document.write("Marks Obtained: " + totalObtainedMarks +"<br>"); 
document.write("Percentage: " + percentage.toFixed(2) + "%" +"<br>");
document.write("Grade: " + grade);

// quiz 7
// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
}


 // quiz 8 
// Prompt the user to enter a number
let number = prompt("Enter a number:");
            
// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}

// quiz 9
// Prompt the user to enter a number

let input = prompt("Enter a number:");
// checkif numberinput is even or odd
if (number % 2 === 0) {
     alert("the number is even")      
}
if (number % 2 === 1) {
    alert("the number is odds")      
}

// quiz 10
let temperature = prompt("enter a temperature")
if (temperature > 40 ) {
    alert("It is too hot outside.")
}
 else if (temperature > 30 ) {
    alert("The Weather today is Normal.")
}
 else if (temperature > 20 ) {
    alert("“Today’s Weather is cool.")
}
 else if (temperature > 10 ) {
    alert("OMG! Today’s weather is so Cool.")
}

// quiz 11
let firstInput = prompt("Enter the first number:");
const firstNumber = Number(firstInput);

        // Prompt the user to enter the second number
        const secondInput = prompt("Enter the second number:");
        const secondNumber = Number(secondInput);

        // Prompt the user to enter the operation
        const operation = prompt("Enter the operation (+, -, *, /, %):");

        // Check if the inputs are valid numbers
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert("One or both of the inputs are not valid numbers.");
        } else {
            let result;

            // Perform the calculation based on the operation
            if (operation === "+") {
                result = firstNumber + secondNumber;
            } else if (operation === "-") {
                result = firstNumber - secondNumber;
            } else if (operation === "*") {
                result = firstNumber * secondNumber;
            } else if (operation === "/") {
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    alert("Division by zero is not allowed.");
                }
            } else if (operation === "%") {
                result = firstNumber % secondNumber;
            } else {
                alert("Invalid operation entered.");
            }

            // Display the result if the operation was valid
            if (result !== undefined) {
                alert("The result is: " + result);
            }
        }


        // CHAPTER 12-13
        // quiz 1 
        // Prompt the user to enter a character
const inputChar = prompt("Enter a character:");

// Check if the input is a single character
if (inputChar.length !== 1) {
    alert("Invalid input: Input should be a single character.");
} else {
    // Get the ASCII value of the character
    const asciiValue = inputChar.charCodeAt(0);

    // Determine the type of character
    if (asciiValue >= 48 && asciiValue <= 57) {  // ASCII codes for 0-9
        alert("The character is a number.");
    } else if (asciiValue >= 65 && asciiValue <= 90) {  // ASCII codes for A-Z
        alert("The character is an uppercase letter.");
    } else if (asciiValue >= 97 && asciiValue <= 122) {  // ASCII codes for a-z
        alert("The character is a lowercase letter.");
    } else {
        alert("The character is not a number, uppercase letter, or lowercase letter.");
    }
}

// quiz 2
 
// Accept two integers from the user
const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

// Check if the two integers are equal
if (num1 === num2) {
    console.log("The two integers are equal.");
} else {
    // Determine the larger integer
    if (num1 > num2) {
        console.log("The larger integer is: " + num1);
    } else {
        console.log("The larger integer is: " + num2);
    }
}


// quiz 3
let inputNumber = prompt("enter a number")
if (inputNumber >0 ) {
    alert("It is positive number.")
}
 else if (inputNumber <0 ) {
    alert("it is negative number")
}
 else if (inputNumber ===0 ) {
    alert("the number is equal to zero.")
}

// quiz 4
let character = prompt("enter a character")
// Check if the character is a vowel
if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u" ||
    character === "A" ||
    character === "E" ||
    character === "I" ||
    character === "O" ||
    character === "U"
) {
    alert (true);
} else {
    (false);
}

// quiz 5
// Store correct password in a variable
const correctPassword = "manal";

// Ask user to enter their password
const userPassword = prompt("Please enter your password:");

// Check if user has entered a password
if (userPassword === null || userPassword === "") {
    alert("Please enter your password.");
} else {
    // Check if both passwords are the same
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}

// quiz 6
// This if/else statement does not work. Try to fix it:
let greeting;
let hour = 13;
if (hour < 18) {
greeting = "Good day"; }
else {
greeting = "Good evening";
} 
alert(greeting)

// quiz 7
// Take time input from the user
const time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Implement different cases
if (time >= 0 && time <= 1200) {
    alert("Good morning!");
} else if (time > 1200 && time <= 1700) {
    alert("Good afternoon!");
} else if (time > 1700 && time <= 2100) {
    alert ("Good evening!");
} else if (time > 2100 && time <= 2359) {
    alert ("Good night!");
} else {
    alert ("Invalid time format!");
}

