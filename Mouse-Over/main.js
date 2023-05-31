// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Variables
let mouseX = 0;
let mouseY = 0;
let radius = 50;
let circleX = 500;
let circleY = 350;
let rectangleX = 125;
let rectangleY = 325;

// Mouse track
cnv.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  mouseX = event.x;
  mouseY = event.y;
}

// Hover
function mousemoveHandler(event) {
  mouseX = event.x;
  mouseY = event.y;
}

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Rectangle
  ctx.fillStyle = "grey";
  ctx.fillRect(rectangleX, rectangleY, 150, 50);

  // Circle
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
