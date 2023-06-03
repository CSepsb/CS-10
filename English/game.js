// Helicopter Game Start
// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = document.documentElement.clientWidth;
cnv.height = 600;

cnv.height = 600;

// Global Variables
let PigImg = document.createElement("img");
PigImg.src = "img/images-removebg-preview.png";
PigImg.style.width = "auto";
PigImg.style.height = "auto";

let death = document.createElement("audio");
death.src = "sound/080190_pig-86603.mp3";

let propeller = document.createElement("audio");
propeller.src = "sound/pigeons-flying-6351.wav";

let mouseIsPressed = false;

let distance = 0;

let best = 0;

let wallSpeed = -3;

let state;
let heli;
let wall1, wall2, wall3;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }
  // Request Animation Frame
  requestAnimationFrame(draw);
}

// // Event for keys
// document.addEventListener("keydown", keydownHandler);
// document.addEventListener("keyup", keyupHandler);

// function keydownHandler(event) {
//   // heli sound
//   propeller.CurrentTime = 0;
//   propeller.play();

//   mouseIsPressed = true;

//   // Start Game on Mousedown
//   if (state === "start") {
//     state = "gameon";
//   }
// }

// function keyupHandler() {
//   mouseIsPressed = false;
//   propeller.pause();
// }

// Event for mouse
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler(event) {
  const rect = cnv.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (
    mouseX >= 0 &&
    mouseX <= cnv.width &&
    mouseY >= 197 &&
    mouseY <= pageHeight
  ) {
    // heli sound
    propeller.currentTime = 0;
    propeller.play();

    mouseIsPressed = true;

    // Start Game on Mousedown
    if (state === "start") {
      state = "gameon";
    }
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause();
}
// FUNCTIONS

// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = `${document.documentElement.clientWidth * 0.05}px Consolas`;
  ctx.fillStyle = "lightblue";
  ctx.fillText(
    "PRESS TO START",
    window.innerWidth * 0.35,
    heli.y + heli.h - 70 + window.innerWidth * 0.05
  );
}

// Start Text for mouse
//   ctx.font = "40px Consolas";
//   ctx.fillStyle = "lightblue";
//   ctx.fillText("CLICK TO START", 350, 285);

//   ctx.font = "25px Consolas";
//   ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
//   ctx.fillText("RELEASE TO GO DOWN", 415, 480);
// }

// Draw Game Elements
function runGame() {
  // Logic
  moveHeli();
  moveWalls();
  checkCollisions();
  distance += 1;
  // Draw
  drawGame();
  // Distance
}

function moveHeli() {
  // Accelerate upward is mouse is pressed
  if (mouseIsPressed) {
    heli.speed += -1;
  }
  // Apply Gravity (accel)
  heli.speed += heli.accel;

  // Constrain Speed (accel)
  if (heli.speed > 5) {
    heli.speed = 5;
  } else if (heli.speed < -5) {
    heli.speed = -5;
  }

  // Move Heli by Speed
  heli.y += heli.speed;
}

function moveWalls() {
  // Incress speed
  wallSpeed -= 0.001;

  // Wall1
  wall1.x += wallSpeed;
  if (wall1.x + wall1.w < 0) {
    wall1.x = wall3.x + 500;
    wall1.y = Math.random() * 300 + 100;
  }

  // Wall2
  wall2.x += wallSpeed;
  if (wall2.x + wall2.w < 0) {
    wall2.x = wall1.x + 500;
    wall2.y = Math.random() * 300 + 100;
  }

  // Wall3
  wall3.x += wallSpeed;
  if (wall3.x + wall3.w < 0) {
    wall3.x = wall2.x + 500;
    wall3.y = Math.random() * 300 + 100;
  }
}

function checkCollisions() {
  // Collision with Top and Bottom Green Bars
  if (heli.y < 50 || heli.y + heli.h > cnv.height - 50) {
    gameOver();
  } else if (
    (heli.x < wall1.x + wall1.w &&
      heli.x + heli.w > wall1.x &&
      heli.y < wall1.y + wall1.h &&
      heli.y + heli.h > wall1.y) ||
    (heli.x < wall2.x + wall2.w &&
      heli.x + heli.w > wall2.x &&
      heli.y < wall2.y + wall2.h &&
      heli.y + heli.h > wall2.y) ||
    (heli.x < wall3.x + wall3.w &&
      heli.x + heli.w > wall3.x &&
      heli.y < wall3.y + wall3.h &&
      heli.y + heli.h > wall3.y)
  ) {
    gameOver();
  }
  // Collision with the Walls
}

function gameOver() {
  wallSpeed = -3;
  death.play();
  state = "gameover";
  if (distance > best) {
    best = distance;
  }
  distance = 0;
  setTimeout(reset, 1500);
}

function drawGame() {
  drawMainComponents();
  drawWalls();
}

// Draw Game Over Screen
function drawGameOver() {
  drawMainComponents();
  drawWalls();

  // Circle around Helicopter
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(heli.x + heli.w / 2, heli.y + heli.h / 2, 60, 0, 2 * Math.PI);
  ctx.stroke();

  // Game Over Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("GAME OVER", heli.x + heli.w / 2 + 100, heli.y + heli.h / 2);
}

// Helper Functions
function reset() {
  state = "start";
  heli = {
    x: 200,
    y: 250,
    w: 120,
    h: 80,
    speed: 0,
    accel: 0.7,
  };
  wall1 = {
    x: cnv.width,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
  wall2 = {
    x: cnv.width + 500,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
  wall3 = {
    x: cnv.width + 1000,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };

  distance = 0; // Reset the distance to 0 here
}

function gameOver() {
  wallSpeed = -3;
  death.play();
  state = "gameover";
  if (distance > best) {
    best = distance;
  }
  setTimeout(reset, 1500);
}

function drawWalls() {
  ctx.fillStyle = "green";
  ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
}
// Define an array to store the blood drops
bloodDrops = [];

function drawMainComponents() {
  // Background
  ctx.fillStyle = "#151515";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Banner
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, cnv.width, 50);
  ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

  // Green Bar Text
  ctx.font = "30px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("PIGGY FLY", 25, 35);
  ctx.fillText("DISTANCE: " + distance, 25, cnv.height - 15);
  ctx.fillText("BEST: " + best, cnv.width - 250, cnv.height - 15);

  // Update and draw the blood drops
  for (let i = 0; i < bloodDrops.length; i++) {
    const drop = bloodDrops[i];
    drop.y += drop.speed;

    ctx.fillStyle = "red";
    drawCurvedShape(drop.x, drop.y, 30, 20); // Call custom function to draw a curved shape (adjust width to 15)

    // Remove blood drops that go beyond the canvas
    if (drop.y > cnv.height) {
      bloodDrops.splice(i, 1);
      i--;
    }
  }

  // Generate new blood drops randomly
  if (Math.random() < 0.05) {
    bloodDrops.push({
      x: Math.random() * cnv.width,
      y: 50,
      speed: Math.random() * 2 + 1, // Random speed between 1 and 3
    });
  }

  // Helicopter
  ctx.drawImage(PigImg, heli.x, heli.y, heli.w, heli.h);
}

// Custom function to draw a curved shape
function drawCurvedShape(x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + width / 2, y + height, x - width / 2, y + height, x, y);
  ctx.closePath();
  ctx.fill();
}
