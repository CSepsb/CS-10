// Variables
let greenplayerX = 175;
let greenplayerY = 350;
let blueplayerX = 475;
let blueplayerY = 350;
let greenRightPressed = false;
let greenLeftPressed = false;
let greenUpPressed = false;
let greenDownPressed = false;
let blueRightPressed = false;
let blueLeftPressed = false;
let blueUpPressed = false;
let blueDownPressed = false;

// WASD and Arrows
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  if (event.keyCode === 68) {
    greenRightPressed = true;
  } else if (event.keyCode === 65) {
    greenLeftPressed = true;
  }
  if (event.keyCode === 83) {
    greenDownPressed = true;
  } else if (event.keyCode === 87) {
    greenUpPressed = true;
  }
  if (event.keyCode === 39) {
    blueRightPressed = true;
  } else if (event.keyCode === 37) {
    blueLeftPressed = true;
  }
  if (event.keyCode === 40) {
    blueDownPressed = true;
  } else if (event.keyCode === 38) {
    blueUpPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 68) {
    greenRightPressed = false;
  } else if (event.keyCode === 65) {
    greenLeftPressed = false;
  }
  if (event.keyCode === 83) {
    greenDownPressed = false;
  } else if (event.keyCode === 87) {
    greenUpPressed = false;
  }
  if (event.keyCode === 39) {
    blueRightPressed = false;
  } else if (event.keyCode === 37) {
    blueLeftPressed = false;
  }
  if (event.keyCode === 40) {
    blueDownPressed = false;
  } else if (event.keyCode === 38) {
    blueUpPressed = false;
  }
}

// Move
function move() {
  if (greenRightPressed && greenplayerX < cnv.width - 50) {
    greenplayerX += 3;
  } else if (greenLeftPressed && greenplayerX > 0) {
    greenplayerX -= 3;
  }

  if (greenDownPressed && greenplayerY < cnv.height - 50) {
    greenplayerY += 3;
  } else if (greenUpPressed && greenplayerY > 0) {
    greenplayerY -= 3;
  }

  if (blueRightPressed) {
    blueplayerX = (blueplayerX + 3) % cnv.width;
  } else if (blueLeftPressed) {
    blueplayerX = (blueplayerX - 3 + cnv.width) % cnv.width;
  }

  if (blueDownPressed) {
    blueplayerY = (blueplayerY + 3) % cnv.height;
  } else if (blueUpPressed) {
    blueplayerY = (blueplayerY - 3 + cnv.height) % cnv.height;
  }
}

// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Draw
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Move
  move();

  // Blue
  ctx.fillStyle = "blue";
  ctx.fillRect(blueplayerX, blueplayerY, 50, 50);

  // Green
  ctx.fillStyle = "green";
  ctx.fillRect(greenplayerX, greenplayerY, 50, 50);

  // Request the next frame
  requestAnimationFrame(draw);
}

// Start the game loop
draw();
