let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let status = 'stop';
let interval;

function displayTime(){
    if (seconds<10){
        displaySeconds='0'+seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (hours<10){
        displayHours="0"+ hours.toString();
    } else {
        displayHours = hours;
    }

    if (minutes<10){
        displayMinutes='0'+minutes.toString();
    } else {
        displayMinutes = minutes;
    }
};

function watch(){

    seconds++;

    if(seconds / 60 == 1){
        seconds = 0
        minutes++

        if(minutes / 60 == 1){
            minutes = 0;
            hours++
        }
    }
    displayTime(); 
    document.getElementById('watch').innerHTML= displayHours+':'+displayMinutes+':'+displaySeconds;
}

function startStop(){
    if (status==='stop'){
        interval = window.setInterval(watch, 1000);
        document.getElementById('start').innerHTML="Stop";
        status='start'
    }
     else {
        window.clearInterval(interval);
        document.getElementById('start').innerHTML="Start";
        status='stop'
    }
}

function reset(){

    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('watch').innerHTML='00:00:00'
    document.getElementById('start').innerHTML='Start'

}