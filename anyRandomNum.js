
//function for generating any random number
function getRandomNumber( lower, upper ){
  var randomNumber = Math.floor( Math.random() * (upper - lower) + 1) + lower;
  randomNumber = parseInt(randomNumber);
  return randomNumber;
}

console.log( getRandomNumber( 22, 24) );