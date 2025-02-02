const message = 'Play Cookie Clicker Online' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// script.js
let score = 0;
let pointsPerClick = 1;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const upgradeButton = document.getElementById('upgrade-button');

// Function to update score display
function updateScore() {
    scoreDisplay.innerText = score;
}

// Click button event
clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    updateScore();
});

// Upgrade button event
upgradeButton.addEventListener('click', () => {
    const upgradeCost = parseInt(upgradeButton.getAttribute('data-cost'));
    if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick++;
        
        // Increase upgrade cost
        const newCost = upgradeCost * 2;
        upgradeButton.setAttribute('data-cost', newCost);
        upgradeButton.innerText = `Upgrade (Cost: ${newCost})`;
        
        updateScore();
    } else {
        alert('Not enough points for an upgrade!');
    }
});

updateScore();
