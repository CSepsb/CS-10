// FUNCTIONS

// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("CLICK TO START", 350, 285);

  ctx.font = "25px Consolas";
  ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
  ctx.fillText("RELEASE TO GO DOWN", 415, 480);
}

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
  wallSpeed = -3
  explosion.play();
  state = "gameover";
  if (distance > best) {
    best = distance;
  }
  setTimeout(reset, 2000);
}

function drawGame() {
  drawMainComponents();
  drawWalls();
}

// Draw Game Over Screen
function drawGameOver() {
  drawMainComponents();
  drawWalls();
  distance = 0;

  // Circle around Helicopter
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(heli.x + heli.w / 2, heli.y + heli.h / 2, 60, 0, 2 * Math.PI);
  ctx.stroke();

  // Game Over Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("GAME OVER", 350, 285);
}

// Helper Functions
function reset() {
  state = "start";
  heli = {
    x: 200,
    y: 250,
    w: 80,
    h: 40,
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
}

function drawWalls() {
  ctx.fillStyle = "green";
  ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
}

function drawMainComponents() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Green Bars
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, cnv.width, 50);
  ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

  // Green Bar Text
  ctx.font = "30px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("HELICOPTER GAME", 25, 35);
  ctx.fillText("DISTANCE: " + distance, 25, cnv.height - 15);
  ctx.fillText("BEST: " + best, cnv.width - 250, cnv.height - 15);

  // Helicopter
  ctx.drawImage(heliImg, heli.x, heli.y);
}
