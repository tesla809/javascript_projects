//tip calculator
// eliminate console.log outside of rep.it

console.log ("How much was your total bill?");

var total = prompt("How much was your total bill?");

var tip_Calculator = function (total) {
 
    // determine tip rate.
    console.log("What percentage do you want to tip? Suggested at least 15%."); 
    console.log("Enter the number as a regular integer. ie. 15 for 15%");
    
    var tip = prompt("What percentage do you want to tip? Suggested at least 15%. Enter the number as a regular integer. Ex. 15 for 15%");
    
    // converts input into percentage.
    tip = tip * .01
    
    var total_With_Tip = +total + (total * tip)
    
    console.log("Your total with tip is $" + total_With_Tip);
    };

tip_Calculator(total);