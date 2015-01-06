//v2 random number generator

console.log("high number:");
var max = prompt("high num");
max = parseInt(max);

console.log("low number:");
var min = prompt("low num");
min = parseInt(min);

var randomRange = Math.floor(Math.random() * (max - min +1)) + min;


console.log("Your random number between " + min + " and " + max + " is: " + randomRange);