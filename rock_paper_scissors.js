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

}

var user_Input = function () { 
    // pick weapon.
    console.log("Type your choice: Rock, Paper, Scissor or choose, 1, 2, 3 respectively.");
    var weapon = prompt("Pick your weapon");
    return selection_List(weapon);
};

var selection_List = function (weapon){
    // ensures user picks within choices
    if (weapon === "rock" || weapon === "Rock" || weapon === "1") {
        console.log("Rock!");
        return weapon;
        
    } else if (weapon === "paper" || weapon === "Paper" || weapon === "2") {
        console.log("Paper!");
        return weapon;
    } else if  (weapon === "scissor" || weapon === "Scissor" || weapon === "3" ) {
        console.log("Scissor!");
        return weapon;
    } else {
        
        // If user did not choose from selection
        // function calls itself
        console.log("You did not choose from the selection.");
       user_Input(); 
    }
    };

var computer_Input = function () {
    var comp_Weapon = Math.floor(Math.random() * (4 - 1) + 1);
    // turns integer into string
    comp_Weapon = comp_Weapon.toString();
    return selection_List(comp_Weapon);
};

var game = function () {
    
    intro();
    var human = user_Input();
    var computer = computer_Input();

    };
    
game();


