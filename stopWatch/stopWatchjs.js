let min = 0;
let sec = 0;
let millisec =0;
let minBtn = document.getElementById("min");
let secBtn = document.getElementById("sec");
let millisecBtn = document.getElementById("millisec");
let interval;

function timer(){
    millisec++
    millisecBtn.innerHTML=millisec
    if(millisec>=100){
        sec++
        secBtn.innerHTML=sec
        millisec =0
    }else if(sec >=10){
        min++
        sec =0
        minBtn.innerHTML=min
    }
}

function start(){
    interval = setInterval(timer, 10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0
   sec = 0
   millisec = 0
   minBtn.innerHTML=min
   secBtn.innerHTML=sec
   millisecBtn.innerHTML=millisec
   stop()
}


