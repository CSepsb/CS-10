// Variables
let startingX = 175;
let startingY = 350;
let playerX = 175;
let playerY = 350;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

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
  if (rightPressed === true) {
    playerX += 3;
  } else if (leftPressed === true) {
    playerX -= 3;
  }

  if (downPressed === true) {
    playerY += 3;
  } else if (upPressed === true) {
    playerY -= 3;
  }
}

// Boundaries
if (playerX >= 700 || playerY >= 700) {
  playerX = 700;
  playerY = 700;
}
requestAnimationFrame(draw);
function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  //Move
  move();
  // Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(325, 250, 50, 250);
  // Bleu Player
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, playerY, 50, 50);

  requestAnimationFrame(draw);
}
