let clickCount = 0;
let frases = [];

const button = document.getElementById("glitch-button");
const countDisplay = document.getElementById("click-count");
const oracle = document.getElementById("oracle");

fetch('frases.json')
  .then(response => response.json())
  .then(data => {
    frases = data.frases;
  })
  .catch(error => {
    frases = ["Error cargando la sabiduría artificial."];
    console.error("No se pudo cargar frases.json", error);
  });

button.addEventListener("click", () => {
  clickCount++;
  countDisplay.textContent = `Has hecho clic ${clickCount} veces.`;

  if (clickCount % 10 === 0 && frases.length > 0) {
    const randomIndex = Math.floor(Math.random() * frases.length);
    oracle.textContent = frases[randomIndex];
  }
});
