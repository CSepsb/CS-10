// Variables
let playerX = 350;
let playerY = 350;
let mouseX = 0;
let mouseY = 0;
let radius = 25;
let baseSpeed = 0.1;

function draw() {
  // Canvas
  let cnv = document.getElementById("my-canvas");
  let ctx = cnv.getContext("2d");
  cnv.width = 700;
  cnv.height = 700;

  // Boundaries
  if (mouseX >= cnv.width - radius) {
    mouseX = cnv.width - radius;
  } else if (mouseX <= 0 + radius) {
    mouseX = 0 + radius;
  }
  if (mouseY >= cnv.height - radius) {
    mouseY = cnv.height - radius;
  } else if (mouseY <= 0 + radius) {
    mouseY = 0 + radius;
  }

  // Distance
  let dx = mouseX - playerX;
  let dy = mouseY - playerY;
  let distance = dx * dx + dy * dy;
  let speed = baseSpeed * (distance / cnv.width, 0.5);

  // Update player position
  playerX += dx * speed;
  playerY += dy * speed;

  // Blue Player
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(playerX, playerY, radius, 0, 2 * Math.PI, true);
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
