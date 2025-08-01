let gameSeq = [];
let userSeq = [];

let btns = ["purple","red","green","yellow"]

let started = false;
let level = 0;
let h3 = document.querySelector("h3")

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started")
        started = true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");

    }, 150);
    let sound = document.getElementById("clickSound");
    if (sound) {
        sound.play();
    }
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");

    }, 100);
}


function levelup(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq)


}

function checkAns(idx){
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
            
        }
        console.log("same value")
    }else{
        h3.innerHTML = `game over ! Your score was  <b>${level} </b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";

         let wrongSound = document.getElementById("wrongSound");
        if (wrongSound) {
            wrongSound.play();
        }







        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(33, 170, 122)";

        }, 300);
        reset();
    }

} 

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    let isCorrect = checkAns(userSeq.length - 1);
    if (isCorrect) {
        let sound = document.getElementById("clickSound");
        if (sound) {
            sound.play();
        }
    }





    // checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




