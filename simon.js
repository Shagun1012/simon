let gameseq = [];
let userseq = [];

let btns=["yellow","red","green","purple"];
let start = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start==false){
        console.log("Game Started")
        start=true;

        levelup();
    }
});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },100);
}

function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },100);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randnum=Math.floor(Math.random()*3);
    let randcolor = btns[randnum];
    let randbtn=document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level} </b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    gameFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}