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
    
};

var rules_Explain = function (){
    
    console.log("See rules? Yes or No");
    var see_Rules = prompt ("See rules? Yes or No");
    see_Rules =  see_Rules.toUpperCase();
    
    //rules
    if (see_Rules === "YES" || see_Rules === "Y"){
        console.log ("\n The Rules:\n There are three dice.");
        console.log (" Each player rolls once.");
        console.log (" Must roll untill pattern is found.\n");
        console.log ("The Patterns: \n 4-5-6 highest pattern");
    console.log (" Trips- triples of dice. higher triples wins");
    console.log (" Point- doubles with number. Higher single wins");
    console.log (" 1-2-3 - loses automatically"); 
     
    } else if (see_Rules === "NO" || see_Rules === "N") {
        // enter game
        console.log("enter game place holder");
    } else {
        console.log("Pick a valid entry yo");
        rules_Explain();
    }
};


var game = function()  {
    intro();
    rules_Explain();
};

// start game.
game();


