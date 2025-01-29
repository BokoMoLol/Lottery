document.addEventListener('DOMContentLoaded', () => {
    let money = 20;
    const moneyDisplay = document.getElementById('money');
    const betAmountInput = document.getElementById('betAmount');
    const betButton = document.getElementById('betButton');
    const slotResults = document.getElementById('slotResults');
    const message = document.getElementById('message');

    betButton.addEventListener('click', () => {
        const betAmount = parseInt(betAmountInput.value);
        if (isNaN(betAmount) || betAmount < 1 || betAmount > money) {
            message.textContent = 'Invalid bet amount';
            return;
        }

        money -= betAmount;
        moneyDisplay.textContent = money;

        const slots = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        slotResults.textContent = slots.join(' ');

        let winnings = 0;

        if (slots[0] === slots[1] && slots[1] === slots[2]) {
            winnings = betAmount * (slots[0] === 7 ? 20 : 7);
        } else if (slots[0] === slots[1] || slots[1] === slots[2] || slots[0] === slots[2]) {
            if (slots[0] === 7 && slots[1] === 7 || slots[1] === 7 && slots[2] === 7) {
                winnings = betAmount * 7;
            } else if (slots[0] === 7 || slots[1] === 7 || slots[2] === 7) {
                winnings = betAmount * 3;
            } else {
                winnings = betAmount * 2;
            }
        }

        money += winnings;
        moneyDisplay.textContent = money;
        message.textContent = winnings > 0 ? `You won ${winnings}!` : 'You lost!';
    });
});
