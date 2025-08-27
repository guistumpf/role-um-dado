# Role um dado 
 
 
 
 Função a ser adicionada 
 
 function rollDice() {
  const dice = document.getElementById("dice");
  const result = document.getElementById("result");

  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndex = Math.floor(Math.random() * 6);

  dice.textContent = diceFaces[randomIndex];
  result.textContent = `You rolled a ${randomIndex + 1}!`;
}

