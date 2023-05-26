// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Variables

// Objects

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Blue
  ctx.fillStyle = "blue";
  ctx.fillRect(475, 350, 50, 50);
  // Green
  ctx.fillStyle = "green";
  ctx.fillRect(175, 350, 50, 50);
  // Request the next frame
  requestAnimationFrame(draw);
}

// Program Loop
requestAnimationFrame(draw);
