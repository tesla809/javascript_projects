// list of cities I want to visit

console.log("How many cities do you want to visit?");

var range = prompt("How many cities do you want to visit?");

console.log("Name the list of cities that you want to visit:");

var cities = [];

for (i = 1; i <= range; i++){
    console.log("City number " + i + " of " + range);
    cities.push(prompt("Add a city"));
    }

console.log("These are the cities that you want to visit: ");

for (i = 0; i <= cities.length; i++){
    console.log(cities[i]);
}

