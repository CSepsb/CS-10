// Functionize Minecraft Fishing Start Code

// Fish Var
let numCod = 0;
let numSalmon = 0;
let NumTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Caracter
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    let ranNum = Math.random();
    if (ranNum < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (ranNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (ranNum > 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      NumTropical++;
      document.getElementById("num-tropical").innerHTML = NumTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    let ranNum = Math.random();
    if (ranNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (ranNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (ranNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      NumTropical++;
      document.getElementById("num-tropical").innerHTML = NumTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
  if (character === "villager") {
    let ranNum = Math.random();
    if (ranNum < 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (ranNum < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (ranNum < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      NumTropical++;
      document.getElementById("num-tropical").innerHTML = NumTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
}
