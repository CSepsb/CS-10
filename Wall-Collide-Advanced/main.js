// Variables
let playerX = 175;
let playerY = 350;
let W = false;
let A = false;
let S = false;
let D = false;

// WASD
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  if (event.keyCode === 87) {
    W = true;
  } else if (event.keyCode === 65) {
    A = true;
  }
  if (event.keyCode === 83) {
    S = true;
  }
  if (event.keyCode === 68) {
    D = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 68) {
    D = false;
  } else if (event.keyCode === 65) {
    A = false;
  }
  if (event.keyCode === 83) {
    S = false;
  } else if (event.keyCode === 87) {
    W = false;
  }
}

// Move
function move() {
  if (D && playerX < 650) {
    playerX += 3;
  } else if (A && playerX > 0) {
    playerX -= 3;
  }

  if (S && playerY < 650) {
    playerY += 3;
  } else if (W && playerY > 0) {
    playerY -= 3;
  }
}

function checkCollision() {
  if (
    W &&
    playerY < 500 &&
    playerY + 50 > 250 &&
    playerX + 50 > 325 &&
    playerX < 375
  ) {
    playerY = 500;
  }

  if (
    A &&
    playerX < 375 &&
    playerX + 50 > 325 &&
    playerY + 50 > 250 &&
    playerY < 500
  ) {
    playerX = 375;
  }
  if (
    S &&
    playerY + 50 > 250 &&
    playerY < 500 &&
    playerX + 50 > 325 &&
    playerX < 375
  ) {
    playerY = 250 - 50;
  }
  if (
    D &&
    playerX + 50 > 325 &&
    playerX < 375 &&
    playerY + 50 > 250 &&
    playerY < 500
  ) {
    playerX = 325 - 50;
  }

  if (W && playerY <= 250 && playerX + 50 > 325 && playerX < 375) {
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
