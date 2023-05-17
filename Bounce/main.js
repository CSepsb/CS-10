// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Variables
let blueX = 0;
let blueY = 200;
let orangeX = 650;
let orangeY = 0;
let greenX = 450;
let greenY = 0;
let speed = 3;
let directionB = 1;
let directionG = 1;
let directionO = 1;

// Objects

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Blue
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, blueY, 50, 50);

  // Orange
  ctx.fillStyle = "orange";
  ctx.fillRect(orangeX, orangeY, 50, 50);

  // Green
  ctx.fillStyle = "green";
  ctx.fillRect(greenX, greenY, 50, 50);

  // Move Blue
  if (blueX >= 0 && blueX < cnv.width - 50) {
    blueX += speed * directionB;
  } else {
    directionB = -directionB;
    blueX += speed * directionB;
  }
  // Move Green
  if (greenY >= 0 && greenY < cnv.height - 50) {
    greenY += speed * directionG;
  } else {
    directionG = -directionG;
    greenY += speed * directionG;
  }
  // Move Orange

  // Request the next frame
  requestAnimationFrame(draw);
}

// Program Loop
requestAnimationFrame(draw);
