let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if ((Math.abs(humanGuess - targetNumber)) < (Math.abs(computerGuess - targetNumber))) {
        return true
    } else {
        return false
    }
}

const updateScore = () => {
    if (updateScore === 'human') {
        humanScore++;
    } else (updateScore === 'computer') 
        computerScore++;
    
}

const advanceRound = () => {
    currentRoundNumber++;
}