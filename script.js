let user = 0;
let computer = 0;
const options = document.querySelector(".options");
options.addEventListener("click",(e) => game(e.target.textContent));

function getComputerChoice() {
    let choice = Math.floor(Math.random()*100);
    if (choice < 33.33) {
        choice = "rock";
    }
    else if (choice > 33.33 && choice < 66.66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}
let resultDiv = document.querySelector(".results");
function playRound(playerSelection,computerSelection = getComputerChoice() ) {
    let player = playerSelection;
    let comp = getComputerChoice();
    console.log(player);
    console.log(comp);
    if (player == comp) {
        return "It's a draw!";
        console.log(matchResult);
    }
    else if (player == "rock") {
        if (comp=="paper") {
            ++computer;
            return "You lose! Paper beats Rock";
            console.log(matchResult);
        }
        else {
            ++user;
            return "You win! Rock beats Scissors";
            console.log(matchResult);
        }
    }
    else if (player=="paper") {
        if (comp=="rock") {
            ++user;
            return "You win! Paper beats Rock";
            console.log(matchResult);
        }
        else {
            ++computer;
            return "You lose! Scissors beat Paper";
            console.log(matchResult);
        }
    }
    else {
        if (comp="rock") {
            ++computer;
            return "You lose! Rock beats Scissors";
            console.log(matchResult);
        }
        else {
            ++user;
            return "You win! Scissors beat Paper";
            console.log(matchResult);
        }
    }
}
let textClass;
function game(userchoice) {
    userchoice = userchoice.toLowerCase();
    let result = playRound(userchoice);
    const userScore = document.querySelector("#userScore");
    const computerScore = document.querySelector("#computerScore");
    const userDiv = document.querySelector("#user");
    const compDiv = document.querySelector("#computer");
    const finalScore = document.querySelector("#finalScore");
    const matchResult = document.querySelector("#matchResult");
    const restart = document.querySelector("#restart");
    matchResult.classList.remove(textClass);
    matchResult.textContent = result;
    finalScore.textContent = "";
    restart.textContent = "";
    if (result.includes("win")) {
        matchResult.classList.add("win")
        textClass = "win"
    }
    else if (result.includes("lose")) {
        matchResult.classList.add("lose")
        textClass = "lose"
    }
    else {
        matchResult.classList.add("draw")
        textClass = "draw"
    }
    userDiv.textContent = "User";
    compDiv.textContent = "Computer";
    userScore.textContent = user;
    computerScore.textContent = computer;
    if (user == 5) {
        finalScore.textContent = "You won the game!";
        resultDiv.appendChild(finalScore);
        user = 0;
        computer = 0;
        restart.textContent = "Select an option to play again"
    }
    else if (computer == 5) {
        finalScore.textContent = "You lost the game.";
        resultDiv.appendChild(finalScore);
        user = 0;
        computer = 0;
        restart.textContent = "Select an option to play again"
    }
}
