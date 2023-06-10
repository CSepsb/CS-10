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
let rectangleWidth = 150;
let rectangleHeight = 50;

// Teleport circle
function teleportCircle() {
  let minX = radius;
  let maxX = cnv.width - radius;
  let minY = radius;
  let maxY = cnv.height - radius;

  circleX = Math.random() * (maxX - minX) + minX;
  circleY = Math.random() * (maxY - minY) + minY;
}

// Teleport Rectangle
function teleportRectangle() {
  let maxX = cnv.width - rectangleWidth;
  let maxY = cnv.height - rectangleHeight;

  rectangleX = Math.random() * maxX;
  rectangleY = Math.random() * maxY;
}

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Rectangle
  ctx.fillStyle = "grey";
  ctx.fillRect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);

  // Circle
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
  ctx.fill();

  // Circle collision
  let cx = circleX - mouseX;
  let cy = circleY - mouseY;

  let distanceCircle = Math.sqrt(cx * cx + cy * cy);

  if (distanceCircle < radius) {
    teleportCircle();
  }

  // Rectangle collision
  if (
    mouseX > rectangleX &&
    mouseX < rectangleX + rectangleWidth &&
    mouseY > rectangleY &&
    mouseY < rectangleY + rectangleHeight
  ) {
    teleportRectangle();
  }

  requestAnimationFrame(draw);
}

cnv.addEventListener("mousemove", function (event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

requestAnimationFrame(draw);
