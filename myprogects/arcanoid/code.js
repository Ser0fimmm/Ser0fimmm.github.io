let canvas = document.getElementById ("myCanvas")
let ctx = canvas.getContext ("2d")//двумерный

let x = canvas.width / 2;
let y = canvas.hight - 30;
// что бы увидеть движение шарика надо его рисовать на новых координатах
//dx u dy - величины которые смещают шарик
function draw() { //хранить код
canvas.width / 2;


ctx.beginPath();//включить режим черчения
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "0095DD";
ctx.fill();
x +=dx
y +=dy

ctx.closePath()// выключить режим черчения
}
setInterval(draw,10)