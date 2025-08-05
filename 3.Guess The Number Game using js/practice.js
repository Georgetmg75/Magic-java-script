const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById('guessInput');
    const result = document.getElementById('result');
    let guess = Number(input.value);

    if (isNaN(guess)) {
        result.textContent = "⚠️ Please enter a valid number.";
    } else if (guess < minNum || guess > maxNum) {
        result.textContent = `⚠️ Number must be between ${minNum} and ${maxNum}.`;
    } else {
        attempts++;
    if (guess < answer) {
          result.textContent = "⬇️ Too low! Try again.";
        } else if (guess > answer) {
          result.textContent = "⬆️ Too high! Try again.";
        } else {
          result.textContent = `✅ Correct! The number was ${answer}. Attempts: ${attempts}`;
        }
    }

      input.value = "";
      input.focus();
    }