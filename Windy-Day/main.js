// Windy Day Asgn Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudImg = document.getElementById("cloud");

let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;
let cloud2y = 100;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // UPDATE
  // Animate cloud 1
  cloud1x++; // Move right

  // If cloud goes off right side of canvas, teleport to left side at random height
  if (cloud1x > 400) {
    cloud1x = 0;
    cloud1y = Math.random() * 200;
  }
  // Animate cloud 1
  cloud2x++; // Move right

  // If cloud goes off right side of canvas, teleport to left side at random height
  if (cloud2x > 400) {
    cloud2x = 0;
    cloud2y = Math.random() * 200;
  }

  // DRAW
  // Blue Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Green Grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100);

  // Draw Clouds
  ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
  ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2

  // LOOP
  requestAnimationFrame(animate);
}
