
// Declaring variable
let elapsedTime = 0;
let pausedTime = 0;
let timer;
const showSeconds = document.getElementById("seconds");
const showMiliSeconds = document.getElementById('miliseconds');

// Event Delegation. Targeting events through respective ids
document.addEventListener("click", (event) => {
    let target = event.target
    switch (target.id) {
        case ("start"):
            startTimer();
            break;
        case ("stop"):
            stopTimer();
            break;
        case ("reset"):
            resetTimer();
            break;
    }
})

// Start the timer
function startTimer() {
    if (!timer) {
        let startTime = Date.now()
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime + pausedTime
            displayTime();
        }, 100)
    }
    showMiliSeconds.style.animationName = "none";
    showSeconds.style.animationName = "none";
}

// Pause the timer and keep track of current time in pausedTime variable
function stopTimer() {
    pausedTime = elapsedTime;
    clearInterval(timer);
    timer = 0;
}

// Reset the timer and add animation
function resetTimer() {
    stopTimer();
    pausedTime = 0;
    elapsedTime = 0;
    showMiliSeconds.style.animationName = "ease";
    showSeconds.style.animationName = "ease";
    showMiliSeconds.innerText = "00";
    showSeconds.innerText = "0";
}

// Get timestring in seconds and (10 * milisecond) format and display it
function displayTime() {
    let TenthMiliSecond = (Math.floor(elapsedTime / 10) % 100);
    if (TenthMiliSecond < 10) {
        showMiliSeconds.innerText = "0" + TenthMiliSecond;
        return;
    }
    showMiliSeconds.innerText = TenthMiliSecond;
    showSeconds.innerText = Math.floor(elapsedTime / 1000)
}

