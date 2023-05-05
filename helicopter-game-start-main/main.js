// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let heliPos = {x: 200, y: 250};
let heliVel = {x: 0, y: 0};
let heliAcc = 0.5;
let walls = [{x: 700, y: 200, width: 50, height: 100}];
let score = 0;
let distance = 0;
let level = 1;
let gameRunning = false;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  console.log("draw");
  if(gameRunning) {
    updateHeli();
    updateWalls();
    checkCollisions();
    updateScore();
    levelUp();
  }
  drawGameElements();
  requestAnimationFrame(draw);
}

// FUNCTIONS

// Draw Start Screen
function drawStart() {
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
  ctx.fillText("CLICK TO START", 350, 285);

  // Start Text
  ctx.font = "25px Consolas";
  ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
  ctx.fillText("RELEASE TO GO DOWN", 415, 480);
}

// Draw Game Elements
function drawGameElements() {
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
  ctx.fillText("BEST: " + localStorage.getItem('highscore'), cnv.width - 250, cnv.height - 15);

  // Walls
  ctx.fillStyle = "green";
  for (let i = 0; i < walls.length; i++) {
    ctx.fillRect(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
  }

  // Helicopter
  ctx.drawImage(heliImg, heliPos.x, heliPos.y, 50, 50);
}

// Draw Game Over Screen
function drawGameOver() {
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
  ctx.fillText("BEST: " + localStorage.getItem('highscore'), cnv.width - 250, cnv.height - 15);

  // Walls
  ctx.fillStyle = "green";
  for (let i = 0; i < walls.length; i++) {
    ctx.fillRect(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
  }

  // Circle around Helicopter
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(heliPos.x+25, heliPos.y+25, 60, 0, 2 * Math.PI);
  ctx.stroke();

  // Game Over Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("GAME OVER", 350, 285);
}

// Update Helicopter Position and Velocity
function updateHeli() {
  heliPos.y += heliVel.y;
  heliVel.y += heliAcc;
}

// Update Walls
function updateWalls() {
  for (let i = 0; i < walls.length; i++) {
    walls[i].x -= 3;
    if (walls[i].x < -100) {
      walls.splice(i, 1);
      walls.push({ x: 800, y: getRandomInt(200, 400), width: 50, height: 100 });
    }
  }
}

// Check for Collisions
function checkCollisions() {
  for (let i = 0; i < walls.length; i++) {
    if (heliPos.x + 50 > walls[i].x && heliPos.x < walls[i].x + walls[i].width && heliPos.y + 50 > walls[i].y && heliPos.y < walls[i].y + walls[i].height) {
      endGame();
    }
  }
  if(heliPos.y < 0 || heliPos.y > cnv.height-50){
    endGame();
  }
}

// Update Score
function updateScore() {
  distance ++;
}

// Level Up
function levelUp() {
  if(distance % 500 === 0){
    level ++;
    heliAcc += 0.2;
    walls.push({ x: 800, y: getRandomInt(200, 400), width: 50, height: 100 });
  }
}

// Game Over
function endGame(){
  gameRunning = false;
  if(distance > localStorage.getItem('highscore')){
    localStorage.setItem('highscore', distance);
  } 
  drawGameOver();
}

// Start Game
function startGame(){
  gameRunning = true;
  heliPos = {x: 200, y: 250};
  heliVel = {x: 0, y: 0};
  heliAcc = 0.5;
  walls = [{x: 700, y: 200, width: 50, height: 100}];
  score = 0;
  distance = 0;
  level = 1;
}

// Event Listeners
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    heliVel.y = -7;
  }
});

cnv.addEventListener("mousedown", function () {
  heliVel.y = -7;
  gameRunning = true;
  startGame();
});

// Get random Int
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Initialize High Score
if(!localStorage.getItem('highscore')){
  localStorage.setItem('highscore', 0);
}

// Draw Start Screen
drawStart();
