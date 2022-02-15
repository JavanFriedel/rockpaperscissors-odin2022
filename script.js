// Randomly assigns what the computer will play and returns the value
function computerPlay (){
    let choice = Math.floor(Math.random()*100) % 3;    
    return choice == 0 ? 'rock': choice == 1 ? 'paper': 'scissors'
}

//takes player selection and computer selection and returns who won or tie
function playRound (playerSelection){
    let playerSelect = playerSelection.toLowerCase()
    let computerSelect = computerPlay().toLowerCase()


    //this is not good code for readability. I just wanted to practice using ternary operators
    if (playerSelect == 'rock'){
        return computerSelect == 'paper' ? 'Computer Wins': computerSelect == 'scissors' ? 'Player Wins' : 'Tie game'
    } else if (playerSelect == 'paper'){
        return computerSelect == 'scissors' ? 'Computer Wins': computerSelect == 'rock' ? 'Player Wins' : 'Tie game'
    } else if (playerSelect == 'scissors') {
        return computerSelect == 'rock' ? 'Computer Wins': computerSelect == 'paper' ? 'Player Wins' : 'Tie game'
    }
}

function testWinner (check) {
    if (check == 'Computer Wins'){
        computerWins++
        computerScore.innerText = computerWins;
        computerScore.style.color = 'red';
        playerScore.style.color = 'white';
    } else if (check == 'Player Wins'){
        playerWins++
        playerScore.innerText = playerWins
        playerScore.style.color = 'green';
        computerScore.style.color =  'white';
    }

    //check if game is over
    if (computerWins >= bestOf){
        gameOverStatus = true;
        showReset();
        createLog('Computer Wins the Game!')
    }else if (playerWins >= bestOf){
        gameOverStatus = true;
        showReset();
        createLog('Player wins the game!')
    }
}

// a function for creating a new game log output
function createLog (input) {
    let newLog = document.createElement('div')
    newLog.innerText = `${input}!`
    newLog.classList.add('log-item')

    if (gameOverStatus) {
        if(computerWins > playerWins){
            newLog.style.cssText = 'color:red;'
        }else {
            newLog.style.cssText = 'color:green;'
        }
    }

    log.insertBefore(newLog, log.firstChild);
}

//resets the game after a game win
function resetGame () {
    computerWins = 0
    playerWins = 0
    playerScore.innerText = 0
    resetBtn.style.display = "none";
    computerScore.style.color =  'white';
    playerScore.style.color =  'white';
    computerScore.innerText = 0
}

function showReset () {
    resetBtn.style.display = "flex";
}

//global variables for keeping track of wins
let bestOf = 3
let computerWins = 0
let playerWins = 0
let gameOverStatus = false;

//scoreboard elements
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')

// Log output box
const log = document.getElementById('results-log')

// Reset Button
const resetBtn = document.querySelector('.reset-game')



//  --- Rock, Paper, Scissors Event Listeners ---
// Rock
const rockBtn = document.getElementById('rock')
rockBtn.addEventListener('click', () => {
    
    if (gameOverStatus) {
        resetGame()
        gameOverStatus = false;
        return
    }

    let outcome = playRound('rock')
    createLog(outcome);
    testWinner(outcome);
})

// Paper
const paperBtn = document.getElementById('paper')
paperBtn.addEventListener('click', () => {
    
    if (gameOverStatus) {
        resetGame()
        gameOverStatus = false;
        return
    }
    
    let outcome = playRound('paper')
    createLog(outcome)
    testWinner(outcome)
})
// Scissors
const scissorBtn = document.getElementById('scissors')
scissorBtn.addEventListener('click', () => {
    if (gameOverStatus) {
        resetGame()
        gameOverStatus = false;
        return
    }
    let outcome = playRound('scissors')
    createLog(outcome)
    testWinner(outcome)
})


// ---- Best Of Button Event Listeners ----
const bestOf3 = document.getElementById('bo3')
const bestOf5 = document.getElementById('bo5')
const bestOf7 = document.getElementById('bo7')

bestOf3.addEventListener('click', () => {
    bestOf = parseInt(bestOf3.innerText) / 2 + 0.5
    bestOf3.classList.add('selected-bo')
    bestOf5.classList.remove('selected-bo')
    bestOf7.classList.remove('selected-bo')
})

bestOf5.addEventListener('click', () => {
    bestOf = parseInt(bestOf5.innerText) / 2 + 0.5
    bestOf5.classList.add('selected-bo')
    bestOf3.classList.remove('selected-bo')
    bestOf7.classList.remove('selected-bo')
})

bestOf7.addEventListener('click', () => {
    bestOf = parseInt(bestOf7.innerText) / 2 + 0.5
    bestOf7.classList.add('selected-bo')
    bestOf3.classList.remove('selected-bo')
    bestOf5.classList.remove('selected-bo')
})

// --- Reset Button Event Listener ---
resetBtn.addEventListener('click', () => {
    resetGame()
    gameOverStatus = false;
})


// ! TO DO
// - Make it look pretty
