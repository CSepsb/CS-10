// Variables
let playerX = 175;
let playerY = 350;
let keys = {};

// WASD
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  keys[event.keyCode] = true;
}

function keyUpHandler(event) {
  keys[event.keyCode] = false;
}

// Move
function move() {
  if (keys[68] && playerX < 650) {
    playerX += 3;
  } else if (keys[65] && playerX > 0) {
    playerX -= 3;
  }

  if (keys[83] && playerY < 650) {
    playerY += 3;
  } else if (keys[87] && playerY > 0) {
    playerY -= 3;
  }
}

function checkCollision() {
  // Check collision with the wall for each direction independently
  if (keys[68] && playerX + 50 > 325 && playerX < 375 && playerY + 50 > 250 && playerY < 500) {
    playerX = 325 - 50;
  }
  if (keys[65] && playerX < 375 && playerX + 50 > 325 && playerY + 50 > 250 && playerY < 500) {
    playerX = 375;
  }
  if (keys[83] && playerY + 50 > 250 && playerY < 500 && playerX + 50 > 325 && playerX < 375) {
    playerY = 250 - 50;
  }
  if (keys[87] && playerY < 500 && playerY + 50 > 250 && playerX + 50 > 325 && playerX < 375) {
    playerY = 500;
  }
  
  // Additional check for upward collision
  if (keys[87] && playerY <= 250 && playerX + 50 > 325 && playerX < 375) {
    playerY = 250;
  }
}

// Draw
function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  // Move
  move();

  // Check collision
  checkCollision();

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

  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(325, 250, 50, 250);

  // Blue Player
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, playerY, 50, 50);

  requestAnimationFrame(draw);
}

// Start the game loop
draw();
