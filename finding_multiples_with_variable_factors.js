// for loops
// finding all the multiples of a range of number
// aka find all those divisible by a number selected by user.

console.log("Enter the max number:");
var range = prompt("Enter the max number");

console.log("Enter a factor:");
var div = prompt("Enter a number");

for (i = 1; i < 11; i++){
    if (i % div === 0){
        console.log(i);
    }
    }