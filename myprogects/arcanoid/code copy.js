// Atari Brakeout или просто Arcanoid на JS.
// определяем переменные для последующего использования
const canvas = document.getElementById("myCanvas"); // определяем окно и 2d измерение игры
const ctx = canvas.getContext("2d");

const ballRadius = 10; // радиус шара. можно менять. тем больше радиус, тем больше шар

let x = canvas.width / 2; // ширина, высота пигрового поля
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

let rightPressed = false; // изначальное значиение назатия клавиш (не нажаты)
let leftPressed = false;

const paddleHeight = 10; // длина, ширина ракетки и ее позиция в начале игры по оси x
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let interval = 0;//
let score = 0;// первоначальный счет игрока

const brickRowCount = 3; // определяем размеры кирпичей
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let lives = 3; // даем игроку жизни

document.addEventListener("keydown", keyDownHandler, false); // создаем событие нажатия клавиш и движения мыши
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

const bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function keyDownHandler(e) { // определяет действие при нажатии клавиш
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }
  
  function keyUpHandler(e) { // определяет действие при отжатии клавиш
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  }

function drawBall() {// функция, рисующая шарик
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#6b6b6b";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() { // функция, рисующая рокетку
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#6b6b6b";
    ctx.fill();
    ctx.closePath();
  }

function drawBricks() { //функция, рисующая блоки
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#6b6b6b";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
function collisionDetection() { // функция, определяющая столкновение шарика с блоками
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          if (
            x > b.x &&
            x < b.x + brickWidth &&
            y > b.y &&
            y < b.y + brickHeight
          ) {
            dy = -dy;
            b.status = 0;
            score++;
            if (score === brickRowCount * brickColumnCount) {
              alert("🥳Вы Победили! Поздравляем!🥳"); // выводим сообщение о поздравлении игрока при победе
              document.location.reload();
              clearInterval(interval); // нужно для окончания игра в браузере
            }
          }
        }
      }
    }
  }

function drawScore() { // функция, рисующая счет игрока
    ctx.font = "16px Arial";
    ctx.fillStyle = "#6b6b6b";
    ctx.fillText(`Score: ${score}`, 8, 20);
  }
function mouseMoveHandler(e) { // функция, привязывающая движения мыши к ракетки
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  }
function drawLives() { // функция, отрисовывающая жизни игрока 
    ctx.font = "16px Arial";
    ctx.fillStyle = "#6b6b6b";
    ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
  }

function draw() { // функция отрисовывает все обьекты игры на экране
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();


  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) { // проверяем не столкнулся ли шарик с нижней стороной игрового поля
    dx = -dx;
  }
  if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) { // и если столкнулся то убавляем у игрока жизни
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    lives--;

if (!lives) { // если жизней не осталось то заканчиваем игру и оповещаем игрока
  alert("💀Вы проиграли, игра закончена💀"); // выодим сообщение об окончании игры при проигрыше
  document.location.reload();
  clearInterval(interval); // нужно для того, чтобы закончить игру в браузере
} else { // если же жизни еще есть, то убавляем их на 1 и продолжаем игру
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
};
  }
}

  x += dx;
  y += dy;

  if (rightPressed) { // определяем движение рокетки при нажатии стрелок
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
}

function startGame() { // функция, отвечающая за начало игры
  interval = setInterval(draw, 10);
}

document.getElementById("runButton").addEventListener("click", function () { // привязываем начало игры к кнопке на сайте
  startGame();
  
  this.disabled = true;
});