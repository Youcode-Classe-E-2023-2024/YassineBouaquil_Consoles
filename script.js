const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);

    showResult(winner, computerChoice);
}

function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
        return 'rock';
    } else if (random < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'Egalite!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        return 'Vous avez gagne!';
    } else {
        return 'L\'ordinateur a gagne!';
    }
}

function showResult(winner, computerChoice) {
    result.textContent = `Vous avez choisi ${computerChoice}. ${winner}`;
}
