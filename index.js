const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

function getZero(num) { // добавляет 0 перед числом которое 1 десяток составляет
    if (num >= 0 && num < 10) {
        return `0${num}`;
    }
    return num;
}

function getTimeRemaining(endtime) {
    const hours = Math.floor(endtime / (60 * 60));
    const minutes = Math.floor((endtime / 60) % 60);
    const seconds = Math.floor(endtime % 60);

    let time = `${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
    return(time);

}

const createTimerAnimator = () => {

    return (seconds) => {
        let endtime = seconds;
        const timeInterval = setInterval(() => {
            if (endtime <= 0) {
                clearInterval(timeInterval);
                timerEl.innerHTML = '00:00:00';
            }
                timerEl.innerHTML = getTimeRemaining(endtime);
                endtime--;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    e.target.value = e.target.value.replaceAll(/[A-Za-zА-Яа-я ]+/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});