function girardado(){
      const dado = document.querySelector("section");
  const result = document.getElementById("resultado");

  const dados = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomIndex = Math.floor(Math.random() * 6);

  dado.textContent = dados[randomIndex];
  result.textContent = `Você tirou ${randomIndex + 1}!`;


}
 