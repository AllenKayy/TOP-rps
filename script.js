let userName = prompt('Hey there! Kindly input your username...')
// if (userName = null || '') {
//     alert('Kindly input a valid username')
// }
alert(`Welcome ${userName}!`);

const getComputerChoice = () => {
    let randomChoice = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * randomChoice.length)
    return randomChoice[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (!(['rock', 'paper', 'scissors'].includes(playerSelection))) {
        return `Invalid input! Kindly choose between Rock, Paper or Scissors`
    } else if (playerSelection === computerSelection) {
        return `It is a tie, you both played ${playerSelection}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore= 0;

    for (let i = 0; i <= 5; i++) {
        const playerSelection = prompt('Choose between Rock, Paper, or Scissors');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(alert(result));

        if (result.includes('win')) {
            playerScore++;
        }  else if (result.includes('lose')) {
            computerScore++
        }
    } 

    if (playerScore > computerScore) {
        console.log(alert('Congratulations! You win'))
    } else if (computerScore > playerScore) {
        console.log(alert('Oops! You lose'));
    } else {
        console.log(alert("It's a tie!"));
    }
}

game();