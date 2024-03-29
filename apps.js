let userscore=0;
let compscore=0;


const choices =document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice =() => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
 const drawgame=()=>{
    console.log("game was draw");
    msg.innerText=" Game was Draw ! Play Again" ;
    msg.style.backgroundColor ="#081b31";
 }

 const showwinner =(userwin,userchoice,compchoice) =>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`Wooho You Win ! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";  
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loose");
        msg.innerText=` You Loose ! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
 }



 const playgame=(userchoice)=>{
    console.log("userchoice =",userchoice);
    
    const compchoice = gencompchoice();
    console.log("computer's choice",compchoice);

    if(userchoice === compchoice)
    {
          drawgame();
    }
    else {
        userwin=true;
        if(userchoice==="rock")
        {
            // either scissor or paper is selected 
            userwin=compchoice ==="paper" ? false:true;
        }
        else if(userchoice==="paper") {
            //rock ,scissor
            userwin= compchoice === "scissor" ? false:true;
        }
        else{
           userwin = compchoice==="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
        });
});
 