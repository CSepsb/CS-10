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
function getRandomPositionCircle() {
  let minX = radius;
  let maxX = cnv.width - radius;
  let minY = radius;
  let maxY = cnv.height - radius;

  let newCircleX = Math.random() * (maxX - minX) + minX;
  let newCircleY = Math.random() * (maxY - minY) + minY;

  return { x: newCircleX, y: newCircleY };
}

// Teleport Rectangle
function getRandomPositionRectangle() {
  let maxX = cnv.width - rectangleWidth;
  let maxY = cnv.height - rectangleHeight;

  let newRectangleX = Math.random() * maxX;
  let newRectangleY = Math.random() * maxY;

  return { x: newRectangleX, y: newRectangleY };
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
    let circlePos = getRandomPositionCircle();
    circleX = circlePos.x;
    circleY = circlePos.y;
  }

  // Rectangle collision
  if (
    mouseX > rectangleX &&
    mouseX < rectangleX + rectangleWidth &&
    mouseY > rectangleY &&
    mouseY < rectangleY + rectangleHeight
  ) {
    let rectPos = getRandomPositionRectangle();
    rectangleX = rectPos.x;
    rectangleY = rectPos.y;
  }

  requestAnimationFrame(draw);
}

cnv.addEventListener("mousemove", function (event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

requestAnimationFrame(draw);
