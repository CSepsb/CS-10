// COIN FLIP SIMULATOR

// HTML Variables
let outputEL = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEL = document.getElementById("tails-out");

// Coin Variables
let numHeads = 0;
let numTails = 0;

// Button Listener
document.getElementById("btn").addEventListener("click", bntClicked);

function bntClicked() {
  // Generate a random number
  let ranNum = Math.random();
  console.log(ranNum);

  // Coin Flip
  if (ranNum < 0.5) {
    outputEL.innerHTML = "<img src='img/heads.png' >";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEL.innerHTML = "<img src='img/tails.png' >";
    numTails = numTails + 1;
    tailsEL.innerHTML = numTails;
  }
}
