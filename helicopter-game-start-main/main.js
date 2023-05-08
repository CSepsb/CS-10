// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let state = "start";
let mouseIsPressed = false;
let heli = {
  x: 200,
  y: 250,
  w: 80,
  h: 40,
  speed: 0,
  accel: 0.7,
};
let wall1 = {
  x: cnv.width,
  y: Math.random() * 300 + 100,
  w: 50,
  h: 100,
};
let wall2 = {
  x: cnv.width + 500,
  y: Math.random() * 300 + 100,
  w: 50,
  h: 100,
};
let wall3 = {
  x: cnv.width + 1000,
  y: Math.random() * 300 + 100,
  w: 50,
  h: 100,
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state == "gameover") {
    drawGameOver();
  }
  // Request Animation Frame
  requestAnimationFrame(draw);
}

// Event
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true;

  // Start Game on Mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
}
