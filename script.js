const btnStart = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const colors = ['red', 'blue', 'green', 'yellow', 'purple',
    '#e4460f', '#1ea2ca', '#da5381', '#499332', '#929632', '#230e32',
'#ac0e32','#b66682']
let time = 0;
let score = 0;
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
        console.log(score)
    }
})

btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
       time = parseInt(e.target.getAttribute('data-time'));
       screens[1].classList.add('up')
       startGame() 
    }
})

function startGame() {
    setInterval(timer, 1000)
    createRandomCircle();
    setTime(time)
}

function timer() {
    if (time === 0) {
        finishGame()
        
    } else {

        let current = --time;
    if (current < 10) {
        current = `0${current}`
    }
    setTime(current)}
    
}

function setTime(val) {
    timeEl.innerHTML = `00:${val}`
}

function finishGame() {
    timeEl.parentNode.remove();
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
    
}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle')
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor();
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    circle.style.background = color;
    console.log(circle.style.backgroundColor)
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}