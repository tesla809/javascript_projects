

//v1- random number generator
console.log("Pick a number to be the upper range of this random number generator:");
var inputNumber = prompt("Pick a number");
var inputNumber = parseInt(inputNumber);

var randomNumber = Math.floor(Math.random() * inputNumber) + 1;

console.log("Your random number between 0 and " + inputNumber + " is: " + randomNumber);


