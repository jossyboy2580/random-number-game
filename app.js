const start = document.getElementById('startBtn');
const numbers = document.querySelector('.numbers');
const quiz = document.querySelector('.modal.quiz')
const nameModal = document.querySelector('.modal.modal-for-name')
const nameForm = document.querySelector('.name-form')
const named = document.querySelector('.name')
const nameInput = document.querySelector('.form-input')
const updatedScore = document.querySelector('.score')

let totalScore = 0; // Initializing the score
let level = 1; // Initializing the score
let nameCollected = false;
let playerName = ""


start.addEventListener('click', () => {
    startGame()
})

const createNumbers = (digit) => {
    console.log(digit)
    let number = document.createElement('div')
    number.setAttribute('class', 'number row')
    number.setAttribute('id', digit)
    number.textContent = String(digit)
    return number
}


const randomNumber = (range) => {
    let x = Math.random()
    return Math.floor(x * range + 1);
}

const play = () => {
    let numbersList = Array()
    numbers.innerHTML = ""
    quiz.classList.remove('hide')
    let randomValue = randomNumber((level + 1))
    for (let i = 1; i <= (level + 1); i++) {
        numbers.appendChild(createNumbers(i))
    }
    let num = document.querySelectorAll('.number')
    num.forEach(numItem => {
        numItem.addEventListener('click', () => {
            let selectedNum = numItem.id
            if (selectedNum == randomValue) {
                alert('Wow, you guessed right. you just got a point')
                level++
                totalScore++
                updatedScore.textContent = totalScore
                play()
            } else {
                alert('Aww, you missed it, ' + String(randomValue) + ' would have been right')
                level++
                play()
            }
        })
    })

}

const startGame = () => {
    if (!nameCollected) {
        nameModal.classList.remove('hide')
        nameInput.focus()
        nameForm.addEventListener('submit', () => {
            if (nameInput.value === "") {
                window.alert('Please enter your name')
            } else {
                nameCollected = true
                playerName = nameInput.value
                named.textContent = playerName
                nameModal.classList.add('hide')
                play()
            }
        })

    } else {

    }
}

const changeLevel = () => {
    level += 1
    for (i = 1; i <= level; i++) {
        console.log(i)
    }
}