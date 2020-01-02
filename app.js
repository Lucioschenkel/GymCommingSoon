let timeInput;
let time = {
    hours: 24,
    minutes: 59,
    seconds: 12
};
let task;

$(document).ready(function(evt) {
    timeInput = document.querySelector('#time');
    task = setInterval(showTime, 1000);
});

function showTime() {
    clockTick();
    timeInput.innerHTML = n(time.hours) + ':' + n(time.minutes) + ':' + n(time.seconds) 
}

function clockTick() {
    if(time.seconds == 0) {
        time.seconds = 59;
        if(time.minutes == 0) {
            time.minutes = 59;
        } else {
            time.minutes--;
            if(time.minutes == 59 && time.hours > 0) {
                time.hours--;
            }
        }
    } else {
        time.seconds--;
    }
    if(time.hours == 0 && time.minutes == 0 && time.seconds == 0)
    {
        clearInterval(task);
    }
}

function n(n) {
    return n > 9? n : "0" + n; 
}