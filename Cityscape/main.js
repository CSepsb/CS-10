// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);
// Windows Big Building
ctx.fillStyle = "white";
for (let windowBig = 171; windowBig <= 271; windowBig += 25) {
  ctx.fillRect(windowBig, 120, 10, 500);
}
// Sqare Windows Small Building
for (let windowRow = 210; windowRow <= 330; windowRow += 24) {
  for (let windowCol = 33; windowCol <= 107; windowCol += 24) {
    ctx.fillRect(windowCol, windowRow, 10, 10);
  }
}
// Windows Small Building
for (let windowSmall = 370; windowSmall <= 595; windowSmall += 45) {
  ctx.fillRect(21, windowSmall, 110, 23);
}
