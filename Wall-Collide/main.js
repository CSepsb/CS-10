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
  if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 37) {
    leftPressed = true;
  }
  if (event.keyCode === 40) {
    downPressed = true;
  } else if (event.keyCode === 38) {
    upPressed = true;
  }
}

function keyUpHandler(event) {
  rightPressed = false;
  leftPressed = false;
  downPressed = false;
  upPressed = false;
}

requestAnimationFrame(draw);
function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  // Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(325, 250, 50, 250);
  // Bleu Player
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, playerY, 50, 50);

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(draw);
}
