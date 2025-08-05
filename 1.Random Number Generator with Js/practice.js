function rollDice() {
  const dice = document.getElementById("dice");
  dice.classList.add("rolling");

  setTimeout(() => {
    dice.classList.remove("rolling");
    const value = Math.floor(Math.random() * 6) + 1;
    dice.textContent = getDiceEmoji(value);
  }, 600);
}

function getDiceEmoji(num) {
  const emojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return emojis[num - 1];
}