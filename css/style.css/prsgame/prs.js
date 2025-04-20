let userScore = 0;
let compScore = 0;




const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScorePara = document.querySelector("#comp-score");
const userScorePara = document.querySelector("#user-score");
// const resetGame = document.querySelector("#restart-btn");





const geneCompChoice =  ()=>{
    const options = ["rock", "paper", "scissors"];
   const randidx = Math.floor( Math.random() *3);
   return options[randidx];
    // rock , paper, scissors
};

const drawGame = ()=>{
// console.log("draw game");
msg.innerText = ("draw game");

};

const showWinner = (userWin, userChoice, compchoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `you win your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"

    }else{
   compScore++;
   compScorePara.innerText = compScore;
        msg.innerText = `you lose ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"


    }

};


const playGame = (userChoice) =>{
    console.log("user choices = ", userChoice);
    const compChoice = geneCompChoice();
    console.log("comp choices = ", compChoice);
    // generate computer choice -> modular 

if(userChoice === compChoice){
    drawGame();
    // draw game
}else{
    let userWin = true;
   if(userChoice === "rock"){
    // scissors, paper
      userWin = compChoice === "paper"? false : true;
   }else if(userChoice === "paper"){
    userWin = compChoice === "scissors"? false : true;
   }else{
    userWin = compChoice === "rock" ? false : true;

   }

   showWinner(userWin, userChoice, compChoice)
};


};






choices.forEach((choice) =>{
    // console.log(choice);

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice)
    });
});




