let userScore=0;
let computerScore=0;

const userScore_span = document.getElementById('userscore');
const computerScore_span = document.getElementById('computerscore');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
function getComputerChoice(){
  const choice = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choice[randomNumber];
}

function convertToWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserFont = "user".fontsize(3).sub();
  const smallCompFont = "comp".fontsize(3).sub();
  result_div.innerHTML = convertToWord(userChoice) + smallUserFont + " Beats " + convertToWord(computerChoice) + smallCompFont + " You Win !";
  document.getElementById(userChoice).classList.add('win-border');
  setTimeout(function(){  document.getElementById(userChoice).classList.remove('win-border') }, 300);
}
function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserFont = "user".fontsize(3).sub();
  const smallCompFont = "comp".fontsize(3).sub();
  result_div.innerHTML = convertToWord(computerChoice) + smallUserFont + " Beats " + convertToWord(userChoice) + smallCompFont + " You Lose ! ";
  document.getElementById(userChoice).classList.add('lose-border');
  setTimeout(function(){  document.getElementById(userChoice).classList.remove('lose-border') }, 300);
}
function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserFont = "user".fontsize(3).sub();
  const smallCompFont = "comp".fontsize(3).sub();
  result_div.innerHTML = convertToWord(userChoice) + smallUserFont +  " and " + convertToWord(computerChoice) + smallCompFont + " both are same it's draw !!";
  document.getElementById(userChoice).classList.add('draw-border');
  setTimeout(function(){  document.getElementById(userChoice).classList.remove('draw-border') }, 300);
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
    win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
    lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
    draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissor_div.addEventListener('click', function(){
    game("s");
  })
}

main();
