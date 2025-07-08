let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")


const genCompChoice=()=>{
    const options=["rock",'scissors',"paper"]
    //rock,scissors,paper
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw play again"
    msg.style.backgroundColor="#9E9E9E"

    
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++
    userScorePara.innerText=userScore
    console.log("u won!!");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="#4CAF50"

    }else{
        compScore++
        compScorePara.innerText=compScore
        console.log("u lose");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="#E53935"

    }
}

const playGame=(userChoice)=>{
    console.log("user choice is  =",userChoice);
    //generate computer choice
    const compChoice=genCompChoice()
    console.log("comp choice:",compChoice);
    if(userChoice===compChoice){
        //draw condn
        drawGame()
        return
    }
    let userWin=true
    if(userChoice==='rock'){
        //scissors,paper
        userWin=compChoice==='paper'? false:true
    }else if(userChoice==='paper'){
        //rock,scissors
        userWin=compChoice==="scissors" ? false:true
    }
    else{
        //rock,paper
        userWin=compChoice==="rock" ? false:true
    }
    showWinner(userWin,userChoice,compChoice)
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log('choice was clicked',userChoice);
        playGame(userChoice)
    })
})
