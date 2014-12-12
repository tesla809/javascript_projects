// for loops
// finding all the multiples of a range of number
// aka find all those divisible by a number selected by user.



console.log("Enter the max number:");
var range = prompt("Enter the max number:");

console.log("Enter a factor:");
var div = prompt("Enter a factor:");

for (i = 1; i < range; i++){
    if (i % div === 0){
    	// console output for testing on repl.it
        console.log(i);

        // for output on html
        document.write(i + ", ");
    }
    }