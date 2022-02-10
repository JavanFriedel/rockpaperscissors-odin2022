// Randomly assigns what the computer will play and returns the falue
function computerPlay (){
    let choice = Math.floor(Math.random()*100) % 3;    
    return choice == 0 ? 'Rock': choice == 1 ? 'Paper': 'Scissors'
}

//takes player selection and computer selection and returns who won or tie
function playRound (playerSelection, computerSelection){
    let playerSelect = playerSelection.toLowerCase()
    let computerSelect = computerSelection.toLowerCase()


    //this is not good code for readability. I just wanted to practice using ternary operators
    if (playerSelect == 'rock'){
        return computerSelect == 'paper' ? 'Computer Wins': computerSelect == 'scissors' ? 'Player Wins' : 'Tie game'
    } else if (playerSelect == 'paper'){
        return computerSelect == 'scissors' ? 'Computer Wins': computerSelect == 'rock' ? 'Player Wins' : 'Tie game'
    } else {
        return computerSelect == 'rock' ? 'Computer Wins': computerSelect == 'paper' ? 'Player Wins' : 'Tie game'
    }
}

//plays a game and takes number of rounds as an argument
function game (numRounds) {
    let playerWins = 0;
    let computerWins = 0;

    //!needs to be refactored to play rounds untill best of is hit.
    for (let i = 0; i < numRounds; i++){
        let playerChoice = prompt('Rock, Paper or scissors');

        let outcome = playRound(playerChoice, computerPlay());

        if (outcome == 'Computer Wins'){
            computerWins++;
            console.log('Computer Wins. Current Wins' + computerWins)
        } else if (outcome == 'Player Wins'){
            playerWins++;
            console.log('Player Wins. Current ' + playerWins)
        } else {
            numRounds++;
            console.log('Tie Game!')
        }
        
    }

    return playerWins > computerWins ? 'Player Wins' : 'Player Wins'
}

// ! TO DO
// - make a function to log outcomes for each round
// - make a function to declare winner of rounds.
