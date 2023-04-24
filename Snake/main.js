//board
var blockSize = 25;
var rows = 20;
var colon = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

var gameOver = false;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = colon * blockSize;
  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);

  setInterval(update, 1000 / 10);
};

function update() {
  if (gameOver) {
    return;
  }

  // Draw the chess board background
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colon; j++) {
      if ((i + j) % 2 == 0) {
        context.fillStyle = "white";
      } else {
        context.fillStyle = "DimGray";
      }
      context.fillRect(j * blockSize, i * blockSize, blockSize, blockSize);
    }
  }

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // Draw the border
  context.strokeStyle = "black";
  context.lineWidth = 5;
  context.strokeRect(0, 0, board.width, board.height);

  //game over conditions
  if (
    snakeX < 0 ||
    snakeX > colon * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    alert("Game Over");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over");
    }
  }
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * colon) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}
