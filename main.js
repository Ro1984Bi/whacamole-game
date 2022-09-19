const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timer = null

const randomSquare = () => {
    square.forEach(squares => {
        squares.classList.remove('mole')
    }) 

    let random = square[Math.floor(Math.random() * 9)]
    random.classList.add('mole') 
    hitPosition = random.id
}

square.forEach(squares => {
    squares.addEventListener('mousedown', () => {
        if (squares.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

const moveMole = () => {

    timer = setInterval(randomSquare, 1000)
}

moveMole()

const countDown = () => {
currentTime--
timeLeft.textContent = currentTime

if (currentTime == 0) {
    clearInterval(timerCountDown)
    clearInterval(timer)
    alert('Game Over! Your final score is ' + result)
}
}

let timerCountDown = setInterval(countDown, 1000)