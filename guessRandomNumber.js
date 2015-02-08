function guessNum() {
    // set random numbers
    var randomNumber = Math.floor(Math.random() * 10000) + 1;
    var guessNumber = Math.floor(Math.random() * 10000) + 1;
    var counter = 0;

    // guess loop
    while(randomNumber != guessNumber){
        console.log("number: " + guessNumber + " is not it");
        counter += 1;
        
        // re-guess
        guessNumber = Math.floor(Math.random() * 10000) + 1;
        }
        
    console.log("It took " + counter + " tries to guess the random number: " + randomNumber);
}
    
guessNum();