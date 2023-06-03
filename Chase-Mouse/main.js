// Variables
let playerX = 350;
let playerY = 350;

// Draw
function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  // Boundaries
  if (playerX >= 650) {
    playerX = 650;
  } else if (playerX <= 0) {
    playerX = 0;
  }

  if (playerY >= 650) {
    playerY = 650;
  } else if (playerY <= 0) {
    playerY = 0;
  }

  // Blue Player
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(playerX, playerY, 35, 0, 2 * Math.PI, true);
  ctx.fill();

  requestAnimationFrame(draw);
}

// Start the game loop
draw();
