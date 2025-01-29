function startGame() {
    let playerMoney = 20;
    const betInput = document.getElementById('betAmount');
    const resultDisplay = document.getElementById('result');
    const moneyDisplay = document.getElementById('money');

    moneyDisplay.textContent = `Money: $${playerMoney}`;

    document.getElementById('spinButton').addEventListener('click', function() {
        const betAmount = parseInt(betInput.value);
        
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > playerMoney) {
            alert('Invalid bet amount!');
            return;
        }

        playerMoney -= betAmount;
        moneyDisplay.textContent = `Money: $${playerMoney}`;

        const slots = [getRandomSlot(), getRandomSlot(), getRandomSlot()];
        resultDisplay.textContent = `Slots: ${slots.join(' | ')}`;

        const payout = calculatePayout(slots, betAmount);
        playerMoney += payout;
        moneyDisplay.textContent = `Money: $${playerMoney}`;
    });
}

function getRandomSlot() {
    return Math.floor(Math.random() * 10);
}

function calculatePayout(slots, betAmount) {
    const uniqueSlots = new Set(slots);
    let payout = 0;

    if (uniqueSlots.size === 1) {
        payout = betAmount * 10; // All three slots match
    } else if (uniqueSlots.size === 2) {
        payout = betAmount * 2; // Two slots match
    } else {
        payout = 0; // No match
    }

    return payout;
}

window.onload = startGame;
