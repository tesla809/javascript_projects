function print(message){
  document.write('<p>' + message + '</p>');
}

var right = [];
var wrong = [];
var wrongTally =[];

var questions = [
                ['Who was the first president of the USA?', 'George Washington'],
                 ['What year was the Declaration of Independance signed?', '1776'],
                 ["What does the show Family Guy take place?", 'Quahog'],
                ["What is the capital of Germany", 'Berlin']
];



//ask questions using prompt
for (var i = 0; i < questions.length; i++){
  var answer = prompt(questions[i][0].toString());
  
  //evaluate answer
  if (answer === questions[i][1]){
    //tally right and wrong answers
    right.push(questions[i][0], questions[i][1]);
  } else {
    wrongTally.push(answer);
    wrong.push(questions[i][0], questions[i][1], 'You wrote: ' + wrongTally + '</br>');
  }
}

// print right and wrong answer tally
print('You had these questions right: </br>' + right.join('</br>'));

print('You had these questions wrong: </br>' + wrong.join('</br>'));

