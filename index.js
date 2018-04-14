var ctx = null;
var playerX = 0;
var playerY = 100;
var playerSpeed = 1;

$(document).ready(function() {
  startGame();
});

function startGame() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  window.addEventListener('keydown', keydown);
    
  setInterval(update, 1000 / 60);
}

function keydown(e) {
  if (e.key == 'ArrowRight') {
    playerSpeed = 1;
  } else if (e.key == 'ArrowLeft') {
    playerSpeed = -1;
  }
}

function drawSquare(x, y) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(x, y, 100, 100);
}

function clearScreen() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 480, 320);
}

function update() {
  clearScreen();
  drawSquare(playerX, playerY);
  
  playerX += playerSpeed;
  if (playerX > 480) {
    playerX = 0;
  } else if (playerX < 0) {
    playerX = 480;
  }
}