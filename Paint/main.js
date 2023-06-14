// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

// Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
  // Draw circle if mouse is pressed
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }
  requestAnimationFrame(loop);
}

// Event Listener
document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);
document.addEventListener("keydown", keyDownHandler);

function mouseDownHandler(event) {
  mouseIsPressed = true;
}

function mouseUpHandler() {
  mouseIsPressed = false;
}

function mouseMoveHandler(event) {
  pmouseX = mouseX;
  pmouseY = mouseY;

  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keyDownHandler(event) {
  console.log(event.code);

  if (event.code == "Space") {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  } else if (event.code == "Digit1") {
    penColor = "red";
  } else if (event.code == "Digit2") {
    penColor = "green";
  } else if (event.code == "Digit3") {
    penColor = "blue";
  }
}

document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);

function setRed() {
  penColor = "red";
}

function setGreen() {
  penColor = "green";
}

function setBlue() {
  penColor = "blue";
}

document.getElementById("colorPicker").addEventListener("change", changeColor);

function changeColor() {
  penColor = document.getElementById("colorPicker").value;
}
