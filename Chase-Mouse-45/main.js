// Variables
let playerX = 350;
let playerY = 350;
let mouseX = 0;
let mouseY = 0;
let radius = 25;
let speed = 0.05;

// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

function move() {
  if (playerY > mouseY && playerX > mouseX) {
    playerY--;
    playerX++;
  } else if (playerY < mouseY && playerX < mouseX) {
    playerY++;
    playerX--;
  } else if (playerY == mouseY) {
    // allow diagonal movement
    if (playerY > mouseX) {
      playerX--;
    } else if (playerY < mouseX) {
      playerX--;
    } else if 
  }

  // Boundaries
  if (playerX >= cnv.width - radius) {
    playerX = cnv.width - radius;
  } else if (playerX <= 0 + radius) {
    playerX = 0 + radius;
  }

  if (playerY >= cnv.height - radius) {
    playerY = cnv.height - radius;
  } else if (playerY <= 0 + radius) {
    playerY = 0 + radius;
  }
}

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Blue Player
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(playerX, playerY, radius, 0, 2 * Math.PI, true);
  ctx.fill();
}

function gameLoop() {
  move();
  draw();
  requestAnimationFrame(gameLoop);
}

// Track Mouse
cnv.addEventListener("mousemove", function (event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

gameLoop();
