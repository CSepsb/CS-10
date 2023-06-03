// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";

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
  } else if (state == "gameover") {
    drawGameOver();
  }
  // Request Animation Frame
  requestAnimationFrame(draw);
}

// Event for keys
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  // heli sound
  propeller.CurrentTime = 0;
  propeller.play();

  mouseIsPressed = true;

  // Start Game on Mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function keyupHandler() {
  mouseIsPressed = false;
  propeller.pause();
}

// Event for mouse
// document.addEventListener("mousedown", mousedownHandler);
// document.addEventListener("mouseup", mouseupHandler);

// function mousedownHandler() {
//   // heli sound
//   propeller.CurrentTime = 0;
//   propeller.play();

//   mouseIsPressed = true;

//   // Start Game on Mousedown
//   if (state === "start") {
//     state = "gameon";
//   }
// }

// function mouseupHandler() {
//   mouseIsPressed = false;
//   propeller.pause();
// }
