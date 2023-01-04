let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')

function displayTimeLeft(seconds) {
    const minutestoDisplay = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutestoDisplay}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function displayEndTime(seconds) {
    let endTime = new Date(seconds);
    const endHours = endTime.getHours();
    const endMinutes = endTime.getMinutes();
    const endSeconds = endTime.getSeconds();
    endTimeDisplay.textContent = `Be back at ${endHours}:${endMinutes}:${endSeconds}`;
}
function timer(seconds) {
    clearInterval(countdown);
    displayTimeLeft(seconds);
    const timeNow = Date.now();
    const timeThen = timeNow + seconds * 1000;
    displayEndTime(timeThen);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((timeThen - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset;
});
