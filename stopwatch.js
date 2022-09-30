let fHours = document.querySelector(".hours");
let fMinutes = document.querySelector(".minutes");
let fSeconds = document.querySelector(".seconds");

let startBtn = document.querySelector(".btn-1");
let stopBtn = document.querySelector(".btn-2");
let resetBtn = document.querySelector(".btn-3");

let hours = 0;
let minutes = 0;
let seconds = 0;
let watchOFF = true;

function watchOn() {
  if (watchOFF == false) {
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    seconds = seconds + 1;
    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    } else if (minutes == 60) {
      hours = hours + 1;
      minutes = 0;
      seconds = 0;
    }

    if (seconds < 10 || seconds == 0) {
      seconds = "0" + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutes = "0" + minutes;
    }
    if (hours < 10 || hours == 0) {
      hours = "0" + hours;
    }

    fHours.textContent = hours;
    fMinutes.textContent = minutes;
    fSeconds.textContent = seconds;

    setTimeout("watchOn()", 1000);
  }
}

startBtn.addEventListener("click", () => {
  if (watchOFF == true) {
    watchOFF = false;
    startBtn.textContent = "START";
    watchOn();
  }
});

stopBtn.addEventListener("click", () => {
  watchOFF = true;
  startBtn.textContent = "RESUME";
});

resetBtn.addEventListener("click", () => {
  if (watchOFF == false) {
    watchOFF = true;
  }

  startBtn.textContent = "START";

  hours = 0;
  minutes = 0;
  seconds = 0;

  fHours.textContent = "0" + hours;
  fMinutes.textContent = "0" + minutes;
  fSeconds.textContent = "0" + seconds;
});
