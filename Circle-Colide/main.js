// Canvas
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 700;

// Variables
let mouseX = 0;
let mouseY = 0;
const blueRadius = 20;
const orangeRadius = 50;
let orangeX = 350;
let orangeY = 350;

// Objects

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Move the blue circle to the mouse location
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, blueRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the orange circle at its current location
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeX, orangeY, orangeRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Check for collision between the two circles
  const dx = orangeX - mouseX;
  const dy = orangeY - mouseY;
  const distance = Math.sqrt(dx*dx + dy*dy);
  if (distance < blueRadius + orangeRadius) {
     // Teleport the orange circle to a random location on the canvas
     orangeX = Math.random() * cnv.width;
     orangeY = Math.random() * cnv.height;
  }
  
  // Request the next animation frame
  requestAnimationFrame(draw);
}

// Track the mouse position relative to the canvas
cnv.addEventListener("mousemove", function(event) {
  const rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

// Program Loop
requestAnimationFrame(draw);
``