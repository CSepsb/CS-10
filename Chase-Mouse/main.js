// Variables
let playerX = 350;
let playerY = 350;
let mouseX = 0;
let mouseY = 0;
let radius = 25;

// Draw
function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  // Boundaries
  if (mouseX >= cnv.width) {
    mouseX = cnv.width;
  } else if (mouseX <= 0 + radius + 200) {
    mouseX = 0 + radius + 200;
  }
  if (mouseY >= cnv.height - radius - 100) {
    mouseY = cnv.height - radius - 100;
  } else if (mouseY <= 0) {
    mouseY = 0;
  }

  // Line Horizontal
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(mouseX - 100, mouseY);
  ctx.stroke();

  // Line Diagonal
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(mouseX - 200, mouseY + 100);
  ctx.lineTo(mouseX - 100, mouseY);
  ctx.stroke();

  // Blue Player
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouseX - 200, mouseY + 100, radius, 0, 2 * Math.PI, true);
  ctx.fill();

  requestAnimationFrame(draw);

  // Track Mouse
  cnv.addEventListener("mousemove", function (event) {
    let rect = cnv.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
  });
}

draw();