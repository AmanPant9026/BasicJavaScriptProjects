let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const generateComputerChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random() * 3);
    return options[randomIndex];
}
const showWinner=(userWin,userChoice,compChoice)=>
    {
        if(userWin==true)
            {
                userScore++;
                userScorePara.innerText=userScore;
                console.log("You Win");
                msg.innerText=`You Win!  Your ${userChoice} beats ${compChoice}`;
                body.style.backgroundColor="#90EE90";            
            }
        else
           {
                computerScore++;
                compScorePara.innerText=computerScore;
                console.log("You loose");
                msg.innerText=`You Loose!  ${compChoice} beats your ${userChoice}`;
                body.style.backgroundColor="#FF474C";
           }
    }

const drawGame=()=>{
    
    msg.innerText="Game Was Draw. Play again!";
    body.style.backgroundColor="white";
}
const playGame=(userChoice)=>{
     
     //Generate computer choice
     const compChoice=generateComputerChoice();
  
   
        let userWin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper")
                {
                    userWin=false;
                }
            else if(compChoice==="scissors")
            {
                    userWin=true;
            }    
            else(compChoice==="rock")
            {
                drawGame();
            }
        }
        if(userChoice==="paper")
            {
                if(compChoice==="scissors")
                    {
                        userWin=false;
                    }
                else if(compChoice==="rock")
                {
                        userWin=true;
                }   
                else
                {
                    drawGame();
                }    
            }
        else
        {
               
            if(compChoice==="rock")
                {
                    userWin=false;
                }
            else if(compChoice==="paper")
            {
                    userWin=true;
            }      
            else
            {
                   drawGame();
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playGame(userChoice);
    });
});