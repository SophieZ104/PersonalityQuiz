//Initialize variables//
var restart = document.getElementById("restart");

var result = document.getElementById("result");
var redScore = 0;
var greenScore = 0;
var numAnswered = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//Link buttons to functions//
restart.addEventListener("click",restartQuiz);

q1a1.addEventListener("click", green);
q1a2.addEventListener("click", red);

q2a1.addEventListener("click", green);
q2a2.addEventListener("click", red);

q3a1.addEventListener("click", green);
q3a2.addEventListener("click", red);

//Functions//
function red() {
  redScore += 1;
  numAnswered +=1;
  console.log("numAnswered = " + numAnswered + "redScore = " + redScore);
  if (numAnswered == 3) {
    console.log("The quiz is done!")
    updateResult()
  }
}

function green() {
  greenScore += 1;
  numAnswered += 1;
  console.log("numAnswered = " + numAnswered + "greenScore = " + greenScore)
  if (numAnswered == 3) {
    console.log("The quiz is done!")
    updateResult()
  }
}

function updateResult() {
  if (greenScore >= 2) {
    console.log("You are a green flag!");
    result.innerHTML = "Congratulations, you are a green flag! You deserve a loving partner!";
  } else if (redScore >= 2) {
    console.log("You are red flag!");
    result.innerHTML = "Oh no, you are a red flag! You need to work on yourself first!";
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  redScore = 0;
  greenScore = 0;
  numAnswered = 0;
}








