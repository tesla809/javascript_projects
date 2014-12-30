function factor_enter () {
    console.log("Enter factorial");
    factor = prompt("Enter factorial");
    return factorial(factor);
}
    

function factorial (factor){
    if (isNaN(factor) === false){
        console.log("factor!!!!");
    } else {
        console.log("Invalid, please enter a number");
        factor_enter();
    }
}

factor_enter();


//what is a factor?