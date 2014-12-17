// Ce-lo dice game
// for the streets.
// the rules:
// there are three dice
// each player rolls the dice once.
// they must roll until a recongized pattern is found
// whichever player gets the bets pair wins.

// Patterns
// 4-5-6- highest
// Trips- triples of dice. higher triples wins
// Point- doubles with number. Higher single wins
// 1-2-3 - loses automatically

//prompts:
// comp or number of people playing?

var intro = function (){
    console.log ("Welcome to Celo Dice!\n");
};

var players = function (){
    //play against computer?
    console.log("\n Do you want to play against a computer or against a friend. Press 1 for computer, 2 for friend.");
    var opponent = prompt("Do you want to play against a computer or against a friend. Press 1 for computer, 2 for friend.");
    opponent =  Number(opponent);
    if (opponent === 1){
        console.log("You are playing against the computer: Hal 9000");
    } else if (opponent === 2){
        console.log("You are playing against a human, player 2");
    } else {
        console.log("enter a either 1 for the computer or 2 for another human");
    }
};

var game_mech = function () {
        dicePattern = [];
        for (var x = 0; x < 3; x += 1){
            var dice = Math.floor((Math.random() * 6 ) + 1);
            dicePattern.push(dice);    
        }
        dicePattern = dicePattern.join("");
        // test to output
        console.log("game mech dicePattern " + dicePattern);
        
        // return dice pattern to pattern function.
        return pattern_ID(dicePattern);
    };

var pattern_ID = function (dicePattern){
    // test to output
    console.log("patter_ID dicePattern " + dicePattern);

    //what is best way to hardcode pattern?
    
};


var rules_Explain = function (){
    
    console.log("See rules? Yes or No");
    var see_Rules = prompt ("See rules? Yes or No");
    see_Rules =  see_Rules.toUpperCase();
    
    //rules
    if (see_Rules === "YES" || see_Rules === "Y"){
        console.log ("\n The Rules:\n There are three dice.");
        console.log (" Each player rolls once.");
        console.log (" Each player must roll until a recongized pattern is  found.\n");
        console.log ("The Patterns: \n 4-5-6-: highest pattern.");
    console.log (" Trips: Triples of dice. The higher triples wins.");
    console.log (" Point: Doubles with a single number. The higher single wins.");
    console.log (" 1-2-3: loses automatically."); 
     
    } else if (see_Rules === "NO" || see_Rules === "N") {
        
        // enter game
        console.log("\nOk, let's play!");
        
    } else {
        console.log("Yo, pick a valid entry");
        rules_Explain();
    }
};


var game = function()  {
    intro();
    rules_Explain();
    players();
    game_mech();
};

// start game.
game();





