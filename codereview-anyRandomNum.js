/*
Great code. I have a small edit though.

How about just having all the code related to the function in the function itself. 

That way you keep all the actions local to the function you are working with and avoid global variables.

It keeps things nice and modular.
- AA
*/

function genNumber(high,low) {
    
//get values
high = parseInt(prompt('Give me a positive integer GREATER than 1'));
low = parseInt(prompt('Give me a positive integer LESSER than the first one'));

// sort out to include higher or lower
// great way to address problem by the way.
while (low >= high || high<1) {
    console.log("Let's try that again. Please follow instructions");
    high = parseInt(prompt('Give me a positive integer GREATER than 1'));
    low = parseInt(prompt('Give me a positive integer LESSER than the first one'));
}

return Math.floor(Math.random() * (high - low+1)) + low;
}


console.log(genNumber(high,low));