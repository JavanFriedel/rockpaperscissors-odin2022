// Randomly assigns what the computer will play and returns the falue
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
        createLog('Computer Wins the Game!')
    }else if (playerWins >= bestOf){
        createLog('Player wins the game!')
    }
}

function createLog (input) {
    let newLog = document.createElement('div')
    newLog.innerText = `${input}!`
    newLog.classList.add('log-item')
    log.insertBefore(newLog, log.firstChild);
}

//global variables for keeping track of wins
let bestOf = 3
let computerWins = 0
let playerWins = 0

//scoreboard elements
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')

// Logbook
const log = document.getElementById('results-log')

// Rock event listeneer assignment
const rockBtn = document.getElementById('rock')
rockBtn.addEventListener('click', () => {
    //play a round against computer with selection
    let outcome = playRound('rock')
    createLog(outcome);
    testWinner(outcome);
})

// paper event listener assignment
const paperBtn = document.getElementById('paper')
paperBtn.addEventListener('click', () => {
    let outcome = playRound('paper')
    createLog(outcome)
    testWinner(outcome)
})

const scissorBtn = document.getElementById('scissors')
scissorBtn.addEventListener('click', () => {
    let outcome = playRound('scissors')
    createLog(outcome)
    testWinner(outcome)
})

//adds an event listener to each of the best of buttons
document.querySelectorAll('.bestOf').forEach( e => {
    e.addEventListener('click', b => {
        bestOf = parseInt(b.target.innerText) / 2 + 0.5
    })
}) 

// Event listeneers


// ! TO DO
// - make a function to log outcomes for each round
// - make a function to declare winner of rounds.
