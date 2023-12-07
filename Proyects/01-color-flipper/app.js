const colors = ["green", "red", "blue", "yellow", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // Get radndom number beetween 0 and 3
  const randomNumber = getRandomNum();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Arrays colors
getRandomNum = () => Math.floor(Math.random() * colors.length);
