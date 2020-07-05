let userScore = 0,
  computerScore = 0;
const userScore_div = document.querySelector(".userScore");
const computerScore_div = document.querySelector(".computerScore");
const result = document.querySelector(".result");
const stone = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");
let user = "user".fontsize(3).sub();
let comp = "comp".fontsize(3).sub();
function main() {
  stone.addEventListener("click", () => game("r"));
  paper.addEventListener("click", () => game("p"));
  scissor.addEventListener("click", () => game("s"));
}
function game(userChoice) {
  let computerChoice = computerPlay();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function computerPlay() {
  const choice = ["r", "p", "s"];
  return choice[Math.floor(Math.random() * 3)];
}
function win(userChoice, computerChoice) {
  result.innerHTML = `${convertToWord(userChoice)}${user} beats ${convertToWord(
    computerChoice
  )}${comp}
  You win!!🔥🔥`;

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    500
  );
  userScore++;
  userScore_div.innerHTML = userScore;
}
function lose(userChoice, computerChoice) {
  result.innerHTML = `${convertToWord(
    userChoice
  )}${user} lost to ${convertToWord(computerChoice)}${comp}
    You lost!!😭😭`;

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    500
  );
  computerScore++;
  computerScore_div.innerHTML = computerScore;
}
function draw(userChoice, computerChoice) {
  result.innerHTML = `${convertToWord(
    userChoice
  )}${user} matches ${convertToWord(computerChoice)}${comp}
      It's a tie!!😐😐`;

  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("gray-glow"),
    500
  );
}
function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Stone";
    case "s":
      return "Scissor";
    case "p":
      return "Paper";
  }
}
main();
