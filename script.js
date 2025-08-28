function girardado(){
      const dice = document.querySelector("section");
  const result = document.getElementById("resultado");

  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndex = Math.floor(Math.random() * 6);

  dice.textContent = diceFaces[randomIndex];
  result.textContent = `Você tirou ${randomIndex + 1}!`;
}
