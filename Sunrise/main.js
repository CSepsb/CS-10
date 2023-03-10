let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

// big box
cnv.width = 800;
cnv.height = 600;

// rectagle
ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50);

// square
ctx.fillStyle = "rgb(0, 225, 0)";
ctx.fillRect(225, 50, 50, 50);

// filled text
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText(`Hello Canvas`, 350, 50);

// outline text
ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText("Hello Canvas", 350, 150);

// line
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beingPath();
ctx.moveTo(500, 200);
ctz.lineTo(700, 150);
ctz.lineTo(600, 100);
ctx.stroke();