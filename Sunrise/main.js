let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

// big box
cnv.width = 800;
cnv.height = 600;

// sky
ctx.fillStyle = "#3131e7";
ctx.fillRect(0, 0, 900, 900);

// sun
ctx.beginPath();
ctx.arc(400, 400, 50, 1, 2 * Math.PI);
ctx.fillStyle = '#e60000';
ctx.fill();

// grass
ctx.fillStyle = "#208000";
ctx.fillRect(0, 400, 900, 900);

// image
let htmlImg=document.getElementById("cloud");
ctx.drawImage(htmlImg, 400 ,400);
ctx.drawImage(htmlImg, 400 ,400);