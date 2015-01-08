
//function for generating any random number
function getRandomNumber( lower, upper ){
    // turns strings into integers
    lower = parseInt(lower);
    upper = parseInt(upper);
    
    //checks if arguments are numbers
    if (isNaN(lower) === false && isNaN(upper) === false){
        var randomNumber = Math.floor( Math.random() * (upper - lower) + 1) + lower;
    return randomNumber;
    } else {
        console.log("Please pick two integers. One for the lower and another for the upper range");
    }
}

console.log("Pick the lower range" );
var low = prompt("Pick the lower range");

console.log("Pick the upper range" );
var high = prompt("Pick the upper range");

console.log( getRandomNumber( low, high) );