const timerTab = document.getElementById("timerTab");
const stopwatchTab = document.getElementById("stopwatchTab");
const timerContent = document.querySelector(".timer-content");
const stopwatchContent = document.querySelector(".stopwatch-content");

const timerDisplay = document.getElementById("timerDisplay");
const timerStartBtn = document.getElementById("timerStart");
const timerRestartBtn = document.getElementById("timerRestart");

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const stopwatchStartBtn = document.getElementById("stopwatchStart");
const stopwatchRestartBtn = document.getElementById("stopwatchRestart");

let timerInterval;
let stopwatchInterval;

let timerRunning = false;
let stopwatchRunning = false;

timerStartBtn.addEventListener("click", () => {
  if (!timerRunning) {
    startTimer();
    timerRunning = true;
    timerStartBtn.textContent = "Stop";
  } else {
    stopTimer();
    timerRunning = false;
    timerStartBtn.textContent = "Start";
  }
});

timerRestartBtn.addEventListener("click", () => {
  resetTimer();
  timerStartBtn.textContent = "Start";
  timerRunning = false;
});

stopwatchStartBtn.addEventListener("click", () => {
  if (!stopwatchRunning) {
    startStopwatch();
    stopwatchRunning = true;
    stopwatchStartBtn.textContent = "Stop";
  } else {
    stopStopwatch();
    stopwatchRunning = false;
    stopwatchStartBtn.textContent = "Start";
  }
});

stopwatchRestartBtn.addEventListener("click", () => {
  resetStopwatch();
  stopwatchStartBtn.textContent = "Start";
  stopwatchRunning = false;
});

timerTab.addEventListener("click", () => {
  timerContent.style.display = "block";
  stopwatchContent.style.display = "none";
  resetTimer();
  timerRunning = false;
  timerStartBtn.textContent = "Start";
});

stopwatchTab.addEventListener("click", () => {
  timerContent.style.display = "none";
  stopwatchContent.style.display = "block";
  resetStopwatch();
  stopwatchRunning = false;
  stopwatchStartBtn.textContent = "Start";
});

function startTimer() {
  let remainingTime = 300; 
  timerInterval = setInterval(() => {
    remainingTime--;
    if (remainingTime >= 0) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00";
      alert("Timer has finished!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "05:00";
}

function startStopwatch() {
  let elapsedTime = 0; 
  stopwatchInterval = setInterval(() => {
    elapsedTime++;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    stopwatchDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchDisplay.textContent = "00:00";
}


