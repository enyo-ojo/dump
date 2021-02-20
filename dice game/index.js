let player1Score = 0
let player2Score = 0
let player1Turn = true

//once a playerhas above 20 the player has won

const turns = document.getElementById('turns')
const player2Dice = document.getElementById('player-2Dice')
const player1Dice = document.getElementById('player-1Dice')
const player1ScoreBoard = document.getElementById('player-1-score')
const player2ScoreBoard = document.getElementById('player-2-score')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

function showButton(params) {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

rollBtn.addEventListener('click', function(params) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum)
    if (player1Turn) {
        player1Score += randomNum
        player1ScoreBoard.textContent = player1Score
        player1Dice.textContent = randomNum
        player1Dice.classList.remove('active')
        turns.textContent = 'Player 2 Turn '
        player2Dice.classList.add('active')
    } else {
        player2Score += randomNum
        player2ScoreBoard.textContent = player2Score
        player2Dice.textContent = randomNum
        turns.textContent = 'Player 1 Turn '
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
    }


    if (player1Score >= 23) {
        turns.textContent = 'Player 1 Has Won 🎉 '
        player1Dice.classList.add('active')
        player2Dice.classList.remove('active')
        showButton()
    } else if (player2Score >= 20) {
        turns.textContent = 'Player 2 Has Won 🎉 '
        player2Dice.classList.add('active')
        player2Dice.classList.remove('active')
        showButton()
    }
    player1Turn = !player1Turn
})

function reset(params) {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1ScoreBoard.textContent = 0
    player1Dice.textContent = '-'
    player1Dice.classList.remove('active')
    player2ScoreBoard.textContent = 0
    player2Dice.textContent = '-'
    player2Dice.classList.remove('active')
    resetBtn.style.display = 'none'
    rollBtn.style.display = 'block'
    turns.textContent = 'Player 1 Turn '
    player1Dice.classList.add('active')
}
resetBtn.addEventListener('click', reset)