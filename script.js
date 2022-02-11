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
    } else {
        return computerSelect == 'rock' ? 'Computer Wins': computerSelect == 'paper' ? 'Player Wins' : 'Tie game'
    }
}

let bestOf = 3
let computerWins = 0
let playerWins = 0

const rockBtn = document.getElementById('rock')

rockBtn.addEventListener('click', () => {
    //play a round against computer with selection
    let outcome = playRound('rock')
    //log the outcome
    console.log(outcome)

    //update standing score
    if (outcome == 'Computer Wins'){
        computerWins++
    } else if (outcome == 'Player Wins'){
        playerWins++
    }

    //check if game is over
    if (computerWins >= bestOf){
        console.log('Computer Wins the Game')
    }else if (playerWins >= bestOf){
        console.log('Player wins the game!')
    }
})

// Event listeneers


// ! TO DO
// - make a function to log outcomes for each round
// - make a function to declare winner of rounds.
