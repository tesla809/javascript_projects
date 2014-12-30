console.log("Enter a word to reverse:");
word = prompt("Enter a word to reverse:");

reverse(word);

function reverse (word) {
    return word.split("").reverse().join("").split(" ").reverse().join(" ");
}