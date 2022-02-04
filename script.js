function computerPlay (){
    let choice = Math.floor(Math.random()*100) % 3;    
    return choice == 0 ? 'Rock': choice == 1 ? 'Paper': 'Scissors'
}

function playRound (playerSelection, computerSelection){
    let playerSelect = playerSelection.toLowerCase()
    let computerSelect = computerSelection.toLowerCase()


    //this is not good code for readability. I just wanted to practice using ternary operators
    if (playerSelect == 'rock'){
        return computerSelect == 'paper' ? 'Computer Wins': computerSelect == 'scissors' ? 'Player Wins' : 'Tie game'
    } else if (playerSelect == 'paper'){
        return computerSelect == 'scissors' ? 'Computer Wins': computerSelect == 'rock' ? 'Player Wins' : 'Tie game'
    } else {
        return computerSelect == 'rock' ? 'Computer Wins': computerSelect == 'paper' ? 'Computer Loses' : 'Tie game'
    }
}

console.log(playRound('rock',computerPlay()))