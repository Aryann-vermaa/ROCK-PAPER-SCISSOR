let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-play");

const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = " Ahhh!! Game was Draw. Play again.";
  msg.style.backgroundColor = "#0000e6";
  msg.style.backgroundImage = "none";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreMsg.innerText = userScore;
    msg.innerText = `Congrats You Win!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#40ff19";
    msg.style.backgroundImage = "none";
  } else {
    compScore++;
    compScoreMsg.innerText = compScore;
    msg.innerText = ` Ohh No!! You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#FF0000";
    msg.style.backgroundImage = "none";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});