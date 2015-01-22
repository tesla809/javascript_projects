//Coderbyte Problem 4 Easy- Letter Challenge
// still need to fix
// 1- finding ampersands in regular expression
// I can hack it with an if statement, but that's sloppy

// 2- special characters are shifting too, 
// I want to exit that iteration of the for loop
// and add the special character in question to the new 
// array 

// 3- refactoring obviously


function main(){
    // start
    console.log("Enter string");
    var str = prompt(" ");
    
    // final output
    console.log(LetterChanges(str));
}


function LetterChanges(str){
    var strArray = str.split("");
    var strNewArray = [];
    
    for(var i = 0; i < strArray.length; i++) {
        if (strArray[i].match(/[^\w&.\-]+/g) === true){
            strNewArray.push(strArray[i]);
            break;
        } else if (strArray[i] === " ") {
            strNewArray.push(" ");
            continue;
        } else {
            var character = strArray[i].charCodeAt(0);
            character += 1;
            character.toString();
            character1 = String.fromCharCode(character);
            strNewArray.push(character1);
        }
    }
    
        return strNewArray.join("");
        
}

main();




