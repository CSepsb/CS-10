// Variables
let playerX = 200;
let playerY = 300;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let WallLeft = 325;
let WallRight = 375;
let WallTop = 250;
let WallBottom = 500;

// WASD
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode === 68) {
    rightPressed = true;
  } else if (event.keyCode === 65) {
    leftPressed = true;
  }
  if (event.keyCode === 83) {
    downPressed = true;
  } else if (event.keyCode === 87) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 68) {
    rightPressed = false;
  } else if (event.keyCode === 65) {
    leftPressed = false;
  }
  if (event.keyCode === 83) {
    downPressed = false;
  } else if (event.keyCode === 87) {
    upPressed = false;
  }
}

// Move
function move() {
  if (rightPressed === true && playerX < 650) {
    playerX += 3;
  } else if (leftPressed === true && playerX > 0) {
    playerX -= 3;
  }

  if (downPressed === true && playerY < 650) {
    playerY += 3;
  } else if (upPressed === true && playerY > 0) {
    playerY -= 3;
  }
}
// Collision
function checkCollision() {}

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
