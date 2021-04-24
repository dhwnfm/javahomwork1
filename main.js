var hours = 0;
var minutes = 0;
var seconds = 0;
var mseconds = 0;
var hoursText = document.getElementById("hours");
var minutesText = document.getElementById("minutes");
var secondsText = document.getElementById("seconds");
var msecondsText = document.getElementById("mseconds");
var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
var btnReset = document.getElementById("btnReset");
var Interval;

btnStart.addEventListener ("click", function (){
    clearInterval(Interval);
    alert('time start')
    Interval = setInterval(startTimer , 100);
});

function startTimer() {
    mseconds++;
    if(mseconds < 9) {
      msecondsText.innerHTML = 0 + mseconds ;
    } if(mseconds > 9) {
      msecondsText.innerHTML = mseconds;
      
    }
    if(mseconds >9) {
      console.log(seconds);  
      seconds++;
      secondsText.innerHTML = 0 + seconds;
      mseconds = 0;
      msecondsText.innerHTML = 0 + 0 ;
    }
    if(seconds > 9) {
      secondsText.innerHTML = seconds;
    }
    if(seconds > 9) {
        console.log(minutes);
        minutes++;
        minutesText.innerHTML = 0 + minutes;
        seconds = 0;
        secondsText.innerHTML = 0 + 0 ;
    }
    if(minutes > 9) {
        console.log(hours);
        hours++;
        hoursText.innerHTML = 0 + hours;
        minutes = 0;
        minutesText.innerHTML = 0 + 0;
    }
};

btnStop.onclick = function(){
    clearInterval(Interval);
}
btnReset.onclick = function(){
    clearInterval(Interval);
    alert('time reset');
    mseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    msecondsText.innerHTML = mseconds;
    secondsText.innerHTML = seconds;
    minutesText.innerHTML = minutes;
    hoursText.innerHTML = hours;
}