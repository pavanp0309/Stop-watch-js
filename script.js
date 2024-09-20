// 1.initial timer values
let timer;
let isRunning = false;
let [hours, min, sec, millsec] = [0, 0, 0, 0]; // let hours=0 let min=0 let sec=0

// 2. Accessing the ALL Html Elements to update the Timer
let Display = document.querySelector(".timer-display");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".Reset");


// adding the functionality for buttons to update the Timer
startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)



// function for startTimer
function startTimer(){
  if(!isRunning){
    isRunning=true;
    timer=setInterval(UpdateTimer,10);
    
  }
}
// function for stopTimer
function stopTimer(){
    if(isRunning){
        isRunning=false;
        clearInterval(timer);
    }
}
// function for resetTimer
function resetTimer(){
    clearInterval(timer)
    isRunning=false;
    [hours, min, sec, millsec] = [0, 0, 0, 0];
    DisplayTimer()
}

// function To Update the Timer
function UpdateTimer() {
  millsec = millsec + 10;
  if (millsec >= 1000) {
    millsec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      if (min >= 60) {
        min = 0;
        hours++;
      }
    }
  }

//    calling updatertimer to update display when the Button are cliked
DisplayTimer()
}

function DisplayTimer(){
    Display.textContent=`
    ${String(hours).padStart(2,0)}:
    ${String(min).padStart(2,0)}:
    ${String(sec).padStart(2,0)}:
    ${String(millsec).padStart(2,0)}`
}