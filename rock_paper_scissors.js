/*
Rock destroys scissors.
Scissors cut paper.
Paper covers rock.

Our code will break the game into 3 phases:
a. User makes a choice
b. Computer makes a choice
c. A compare function will determine who wins
*/


// rock, paper scissor game.

var intro = function () {
    
console.log("This is the rock, paper, scissors game.");
console.log("Pick one to play against the computer.");

};

var user_Input = function () { 
    // pick weapon.
    console.log("Type your choice: Rock, Paper, Scissor or choose, 1, 2, 3 respectively.");
    var weapon = prompt("Pick your weapon");
    return selection_List(weapon);
};

var selection_List = function (weapon){
    // ensures user picks within choices
    if (weapon === "rock" || weapon === "Rock" || weapon === "1") {
        weapon = "ROCK";
        return weapon;
        
    } else if (weapon === "paper" || weapon === "Paper" || weapon === "2") {
        weapon = "PAPER";
        return weapon;
        
    } else if  (weapon === "scissor" || weapon === "Scissor" || weapon === "3" ) {
        weapon = "SCISSOR";
        return weapon;
        
    } else {
        
        // If user did not choose from selection
        // function calls itself
        console.log("You did not choose from the selection.");
        weapon = null;
        user_Input(); 
    }
    };
    
var computer_Input = function () {
    var comp_Weapon = Math.floor(Math.random() * (4 - 1) + 1);
    // turns integer into string
    comp_Weapon = comp_Weapon.toString();
    return selection_List(comp_Weapon);
};

// some compare function
var compare_Inputs = function (human, computer) {
  console.log("The human chooses " + human + " and the computer chooses " + computer); 
  
  // rock
  if (human === "ROCK" && computer === "ROCK"){
      
      console.log("We have a tie!");
      
  } else if (human === "ROCK" && computer === "SCISSOR"){
      
      console.log("ROCK beats SCISSOR. You win!");
      
  } else if (human === "ROCK" && computer === "PAPER"){

    console.log("PAPER covers ROCK. You Lose.");
    
  } else if (human === "PAPER" && computer === "PAPER"){
      
      console.log("We have a tie!");
      
  } else if (human === "PAPER" && computer === "SCISSOR"){
      
      console.log("SCISSOR cuts PAPER. You lose.");
    
  } else if (human === "SCISSOR" && computer === "SCISSOR"){

    console.log("We have a tie!");
      
  }
  };

var game = function () {
    
    intro();
    var human = user_Input();
    
    // resolves issue if user places wrong answer first time, then program puts in undefined in choices.
    // but still asks twice...
    
    while (human === undefined) {
        // clears undefined
        human = null;
        human = user_Input();
    }
    
    var computer = computer_Input();
    compare_Inputs(human, computer);
    };

// prompt game
game();


