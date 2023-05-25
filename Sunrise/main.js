let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

// big box
cnv.width = 400;
cnv.height = 400;

// sky
ctx.fillStyle = "#3131e7";
ctx.fillRect(0,0, cnv.width, 0.77*cnv.height);

// sun
ctx.beginPath();
ctx.arc(0.5*cnv.width, 0.77*cnv.height, 30, 0, 2 * Math.PI);
ctx.fillStyle = '#e60000';
ctx.fill();

// grass
ctx.fillStyle = "#208000";
ctx.fillRect(0,0.77*cnv.height, cnv.width,0.25*cnv.height);


// image
let htmlImg=document.getElementById("cloud");
ctx.drawImage(htmlImg, 0.35*cnv.width ,0.29*cnv.height,90,55);
ctx.drawImage(htmlImg, 0.45*cnv.width ,0.25*cnv.height,90,55);
