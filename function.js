let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's']; 
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}`;
    const smallUserWord = "user".fontsize(3).sup();
    const smallcompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = "you win";
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "you lose";
}

function draw(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "It's a draw!";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
        break;
        case "rp":
        case "ps":
        case "sr":
            lose();
        break;
        case "rr":
        case "pp":
        case "ss":
            draw();
        break;
    }

}

game("cs");

function main() {
    rock_div.addEventListener('click', () =>  game("r"));
   
    
    paper_div.addEventListener('click', () => game("p"));
    
    
    scissors_div.addEventListener('click', () => game("s"));
};

main();