
function play() {
console.log("Enter upper limit of guessing");
var upper = parseInt(prompt());
    
    function guessNum() {
        function randomNumber(upper){
            var randomNum = Math.floor(Math.random() * upper) + 1;
            return randomNum;
        }
        
        // set random numbers
        var randNum = randomNumber(upper);
        var guessNumber = randomNumber(upper);
        var counter = 0;
    
        // guess loop
        while(randNum !== guessNumber){
            console.log("number: " + guessNumber + " is not it");
            counter += 1;
            
            // re-guess
            guessNumber = randomNumber(upper);
            }
            
        console.log("It took " + counter + " tries to guess the random number: " + randNum);
    }
guessNum(upper);
}

play();
