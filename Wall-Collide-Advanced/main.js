// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Variables
let playerX = 175;
let playerY = 350;

// Objects
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(325, 250, 50, 250);
  // Bleu Player
  ctx.fillStyle = "blue";
  ctx.fillRect(175, 350, 50, 50);
  // Request the next frame
  requestAnimationFrame(draw);
}

// Program Loop
requestAnimationFrame(draw);
