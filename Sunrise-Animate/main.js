let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;
let cloud2y = 100;
let sunx = 0.5 * cnv.width;
let suny = 0.77 * cnv.height;
let suns = 30;

animate();

function animate() {
  // clear the canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  cloud1x--;
  cloud2x++;

  // sky
  ctx.fillStyle = "#3131e7";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // sun
  ctx.beginPath();
  ctx.arc(sunx, suny, suns, 0, 2 * Math.PI);

  if (suny >= 150 && suns <= 60) {
    suny--;
    suns += 0.1;
    ctx.fillStyle = "#e60000";
  } else {
    ctx.fillStyle = "#ffff00";
  }

  ctx.fill();

  // grass
  ctx.fillStyle = "#208000";
  ctx.fillRect(0, 0.77 * cnv.height, cnv.width, 0.25 * cnv.height);

  // image
  let htmlImg = document.getElementById("cloud");
  ctx.drawImage(htmlImg, cloud1x, cloud1y);
  ctx.drawImage(htmlImg, cloud2x, cloud2y);

  // LOOP
  requestAnimationFrame(animate);
}
