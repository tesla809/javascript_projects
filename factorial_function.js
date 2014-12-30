console.log("enter a number to get the factorial");
num = prompt("factorial is: ");
FirstFactorial(num);

function FirstFactorial(num) {
    if (num < 0){
        return 0;
    }
    else if (num === 0){
        return 1;
    } else {
        //the recursion....
        return num*FirstFactorial(num-1);
    }
}

