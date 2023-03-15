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
ctx.fillRect(171, 120, 10, 500);
ctx.fillRect(196, 120, 10, 500);
ctx.fillRect(221, 120, 10, 500);
ctx.fillRect(246, 120, 10, 500);
ctx.fillRect(271, 120, 10, 500);
// Sqare Windows Small Building
ctx.fillRect(33, 210, 10, 10);
ctx.fillRect(57, 210, 10, 10);
ctx.fillRect(83, 210, 10, 10);
ctx.fillRect(107, 210, 10, 10);
ctx.fillRect(33, 234, 10, 10);
ctx.fillRect(57, 234, 10, 10);
ctx.fillRect(83, 234, 10, 10);
ctx.fillRect(107, 234, 10, 10);
ctx.fillRect(33, 258, 10, 10);
ctx.fillRect(57, 258, 10, 10);
ctx.fillRect(83, 258, 10, 10);
ctx.fillRect(107, 258, 10, 10);
ctx.fillRect(33, 282, 10, 10);
ctx.fillRect(57, 282, 10, 10);
ctx.fillRect(83, 282, 10, 10);
ctx.fillRect(107, 282, 10, 10);
ctx.fillRect(33, 306, 10, 10);
ctx.fillRect(57, 306, 10, 10);
ctx.fillRect(83, 306, 10, 10);
ctx.fillRect(107, 306, 10, 10);
ctx.fillRect(33, 330, 10, 10);
ctx.fillRect(57, 330, 10, 10);
ctx.fillRect(83, 330, 10, 10);
ctx.fillRect(107, 330, 10, 10);
// Windows Small Building
ctx.fillRect(21, 370, 110, 23);
ctx.fillRect(21, 415, 110, 23);
ctx.fillRect(21, 460, 110, 23);
ctx.fillRect(21, 505, 110, 23);
ctx.fillRect(21, 550, 110, 23);
ctx.fillRect(21, 595, 110, 23);