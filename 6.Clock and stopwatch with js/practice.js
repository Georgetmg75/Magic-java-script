function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedHours = hours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    const timeString = `${formattedHours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
/* --------stop watch------------------------ */
let stopwatchInterval;
let startTime;
let elapsed = 0;

function updateStopwatch() {
    const currentTime = Date.now();
    const timeDiff = currentTime - startTime;

    const hours = Math.floor(timeDiff / 3600000).toString().padStart(2, "0");
    const minutes = Math.floor((timeDiff % 3600000) / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((timeDiff % 60000) / 1000).toString().padStart(2, "0");
    const milliseconds = Math.floor((timeDiff % 1000) / 10).toString().padStart(2, "0");

    document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        startTime = Date.now() - elapsed;
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    elapsed = Date.now() - startTime;
}

function clearStopwatch() {
    stopStopwatch();
    elapsed = 0;
    document.getElementById("stopwatch").textContent = "00:00:00:00";
}
