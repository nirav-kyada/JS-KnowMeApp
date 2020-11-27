var game = require("readline-sync");
var name = game.question("Hey there.... What should I call you dear..? ");
console.log(name + "     Welcome!!! Let's see how much I am known and reachable to you.. hehe.. :) ");
var score = 0;

var maxRank = 
  {
    name: "mySelf",
    score: 3,
  };

  
var questions = [
  {
  question: "what is my name??? ",
  answer: "Nirav"
}, {
  question: "What is my net identity?",
  answer: "neo"
},
{
  question: "In which city I live?",
  answer: "Rajkot"
}
];

function quiz(question, answer) 
{
  var userAnswer = game.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())//creates answer to upper case so it will not give caseSensitive erorrs.
   { 
    console.log("Thats Corrects... Bingo! ");
    score++;
    
  } else {
    console.log("Really?!!! You should be in touch with me and know me... lol..!");
  }
  console.log('your score is: '+score);
  console.log("-----x-----");
}


for (var i=0; i<questions.length; i++)
 {
  quiz(questions[i].question, questions[i].answer);
 }


if(maxRank.score > score);
{
    console.log("------------------------------------------");
    console.log("----> Person who knows me best is <-------");
    console.log(maxRank.name + " knows me batter and having rank:  ",+ maxRank.score);
    console.log("------------------------------------------");
}

console.log("Your final score is: ", score);
console.log("Quiz ended");