// function with two parameters
// finding area, perimeter and cirumference

console.log("Enter the length of the desired rectangle (in inches):");
var length = prompt();

console.log("Enter the length of the desired rectangle (in inches):");
var width = prompt();

var rectangle = function (length, width) {
    var area = length * width;
    var perimeter = (length * 2) + (width * 2);
    
    console.log("The perimeter of a rectangle with a length of " + length + " inches and an width of " + width + " is " + perimeter + "inches");

// ghetto space
console.log(" ");

    console.log("The perimeter of a rectangle with a area of " + length + " inches and an width of " + width + " is " + area + " inches squared");
    };

// call the function.
rectangle (length, width);


// ghetto space
console.log(" ");



// circle
console.log("Now how about a circle?");
console.log("What is the radius of the circle?");
var radius = prompt("What is the radius of the circle?");

var circle = function (radius) {
    var circumference = 2 * 3.14159 * radius;
    // keep it simple and just multiply radius by itself instead of trying to use exponets through Math.pow(radius, 2) 
    var area = 3.14159 * radius * radius; 
    
    console.log("The circumference of a circle with a radius of " + radius + " inches is " + circumference + " inches");

// ghetto space
console.log(" ");

console.log("The area of a circle with a radius of " + radius + " inches is " + area + " inches");
    };

circle(radius);






