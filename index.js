let userScore=0;
let compScore=0;
let choice=document.querySelectorAll(".choice img");
let p=document.querySelector("#result-board");
let you=document.querySelector("#your-choice p");
let comp=document.querySelector("#computer-choice p");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let option=['rock','paper','scissor'];
    let randInd=Math.floor(Math.random()*3);
    return option[randInd];
}

const draw=()=>{
    p.innerHTML="<p>It's Draw...</p>";;
}

const showWin=(userWin)=>{
    if(userWin==true){
        userScore++;
        p.innerHTML="<p>Congraluion!! You win's</p>";
        uScore.innerText=userScore;

    } else {
        p.innerHTML="<p>Ohh!! Computer Win's</p>";
        compScore++;
        cScore.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    you.innerHTML=userChoice;
    comp.innerHTML=compChoice;
    if(userChoice==compChoice){
        draw();
    } else{
        let userWin=true;
        if(userChoice=='rock'){
            userWin=compChoice=='paper'? false : true;
        } else if(userChoice=='paper'){
            userWin=compChoice=='scissor'? false : true;
        } else {
            userWin=compChoice=='rock'? false : true;
        }
        showWin(userWin);
    }
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});