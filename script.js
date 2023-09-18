let user = 0;
let computer = 0;

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
function playRound(playerSelection,computerSelection = getComputerChoice() ) {
    let player = playerSelection;
    let comp = getComputerChoice()
    if (player == comp) {
        return "It's a draw!";
    }
    else if (player == "rock") {
        if (comp=="paper") {
            ++computer;
            return "You lose! Paper beats Rock";
        }
        else {
            ++user;
            return "You win! Rock beats Scissors";
        }
    }
    else if (player=="paper") {
        if (comp=="rock") {
            ++user;
            return "You win! Paper beats Rock";
        }
        else {
            ++computer;
            return "You lose! Scissors beat Paper";
        }
    }
    else {
        if (comp="rock") {
            ++computer;
            return "You lose! Rock beats Scissors";
        }
        else {
            ++user;
            return "You win! Scissors beat Paper";
        }
    }
}
function game() {
    do {
        let userchoice = prompt("Rock, Paper or Scissors?");
        if (userchoice == null) {
            user = 0;
            computer = 0;
            return alert("You quited the game");
        }
        userchoice = userchoice.toLowerCase();
        if (userchoice != "rock" && userchoice != "paper" && userchoice != "scissors") {
            user = 0;
            computer = 0;
            return alert("Please enter a valid choice: Rock, Paper or Scissors");
        }
        let result = playRound(userchoice);
        alert(result+". The score is : User "+user+" - "+computer+" Computer");
    } while (user != 3 && computer != 3);
    if (user == 3) {
        alert("You won the game! the final score is: User "+user+" - "+computer+" Computer");
        user = 0;
        computer = 0;
    }
    else if (computer == 3) {
        alert("You lost the game. the final score is: User "+user+" - "+computer+" Computer");
        user = 0;
        computer = 0;
    }
}
const play = document.getElementById("play");
play.addEventListener("click",game,false);
