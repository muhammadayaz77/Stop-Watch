let hours = 00;
let minutes = 00; 
let seconds = 00;
let milliseconds = 00;
let interval;

let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let millisecondsContainer = document.getElementById('milliseconds');

let start = document.getElementById('start');
let stop= document.getElementById('stop');
let reset = document.getElementById('reset');

let startTimer = () => {
    clearInterval(interval);
    interval = setInterval(startWatch,10);
}
let stopTimer = () => {
    clearInterval(interval);
}
let resetTimer = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hoursContainer.textContent = '00';
    minutesContainer.textContent = '00';
    secondsContainer.textContent = '00';
    millisecondsContainer.textContent = '00';

    clearInterval(interval);
}

function startWatch(){
    milliseconds++;
    if(milliseconds < 9)
    {
        millisecondsContainer.textContent = `0${milliseconds}`;
    }
    else if(milliseconds > 99)
    {
        milliseconds = 0;
        millisecondsContainer.textContent = '00';
        seconds++;
    }
    else{
        millisecondsContainer.textContent = milliseconds;
    }

    if(seconds < 10)
    {
        secondsContainer.textContent = `0${seconds}`;
    }
    else if(seconds > 59)
    {
        seconds = 0;
        millisecondsContainer.textContent = '00';
        minutes++;
    }
    else{
        secondsContainer.textContent = seconds;
    }

    if(minutes < 10)
    {
        minutesContainer.textContent = `0${minutes}`;
    }
    else if(minutes >  59)
    {
        minutes = 0;
        minutesContainer.textContent = minutes;
        hours++;
    }
    else{
        minutesContainer.textContent = seconds;
    }

    if(hours < 10)
    {
        hoursContainer.textContent = `0${hours}`;
    }
    
    else{
        hoursContainer.textContent = hours;
    }
}

start.addEventListener('click',startTimer);
reset.addEventListener('click',resetTimer);
stop.addEventListener('click',stopTimer);