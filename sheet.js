let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const com = document.querySelector("#com-score");

const showWinner = (win,choice1, choice2) => {
    if(win){
        userScore++;
        user.innerText = userScore;
        mess.innerText = `You Win! Yours ${choice1} beats ${choice2}`;
        mess.style.backgroundColor = "#32de84";
    }
    else{
        compScore++;
        com.innerText = compScore;
        mess.innerText = `OPPS! You Lose! ${choice2} beats ${choice1}`;
        mess.style.backgroundColor = "#AA0000";
    }
}

const drawGame = (choiceD) => {
    mess.innerText = `Match Draw both choose ${choiceD}`;
    mess.style.backgroundColor = "#081b31";
};

const generateChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random()*3);
    return option[index];
};

const playGame = (userChoice) => {
    const comChoice = generateChoice();
    if(userChoice === comChoice){
        drawGame(userChoice);
    }
    else{
        let userWin =  true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }
        else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});