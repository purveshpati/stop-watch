// Get the required elements
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let intervalId; // Stores the interval ID for the stopwatch
let isRunning = false; // Tracks if the stopwatch is already running

// Start the stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;

        let minutes = 0;
        let seconds = 0;
        let milliseconds = 0;

        intervalId = setInterval(() => {
            milliseconds += 1;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }

            // Display the updated time
            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            millisecondsElement.textContent = formatTime(milliseconds);
        }, 10);
    }
}

// Stop the stopwatch
function stopStopwatch() {
    clearInterval(intervalId);
    isRunning = false;
}

// Reset the stopwatch
function resetStopwatch() {
    stopStopwatch();
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
}

// Format time values to have leading zeros
function formatTime(value, length = 2) {
    return String(value).padStart(length, '0');
}

// Attach event listeners to buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
