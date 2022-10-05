// Aim: Refactor or Recreate the Stopwatch using strict Typescript
window.onload = function () {
    let seconds:number;
    let tens: number;
    
seconds = 0o0;
tens = 0o0;

    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let Interval ;

buttonStart.onclick = function() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
buttonStop.onclick = function(){
    clearInterval(Interval);
}
buttonReset.onclick = function(){
    clearInterval(Interval);
    tens = 0o0;
    seconds = 0o0;
    appendTens.innerHTML = tens;
appendSeconds.innerHTML = seconds;
}

function startTimer () {
    tens++;

    if (tens <=9){
        appendTens.innerHTML = "0" + tens;
    }
if (tens > 9){
    appendTens.innerHTML = tens;
}
if (tens > 99){
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
}

if (seconds > 9){
    appendsSeconds.innerHTML = seconds;
}

}

}