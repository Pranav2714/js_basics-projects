let userScore = 0;
let compScore = 0;
let displayMsg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userPoints = document.querySelector("#user");
let compPoints = document.querySelector("#computer");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    let genComp = options[randIdx];
    return genComp;
}
const isDraw = () => {
    displayMsg.innerText = "It was a Draw.Play Again!";
    displayMsg.style.backgroundColor = "black";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        displayMsg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        displayMsg.style.backgroundColor = "green";
        userPoints.innerText = `${userScore}`;
    }
    else {
        compScore++;
        displayMsg.innerText = `You Lose!  ${compChoice} beats your ${userChoice}`;
        displayMsg.style.backgroundColor = "red";
        compPoints.innerText = `${compScore}`;
    }
}
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (compChoice === userChoice) {
        isDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



//else if(userChoice==="rock" && compChoice==="paper"){
//     dispmsg.innerHTML="<b>You Lost :( paper beats rock</b>";
//   }
//   else if(userChoice==="paper" && compChoice==="rock"){
//     dispmsg.innerHTML="<b>You Win! paper beats rock</b>";
//   }
//   else if(userChoice==="scissors" && compChoice==="paper"){
//     dispmsg.innerHTML="<b>You Win! scissors beats paper</b>";
//   }
//   else if(userChoice==="scissors" && compChoice==="rock"){
//     dispmsg.innerHTML="<b>You Lost :( rock beats scissors</b>";
//   }
//   else if(userChoice==="scissors" && compChoice==="rock"){
//     dispmsg.innerHTML="<b>You Lost :( rock beats scissors</b>";
//   }