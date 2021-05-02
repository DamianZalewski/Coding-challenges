var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

let canvasWidth = 800;
let canvasHeight = 600;

let particles = [];

let radius = 10;
let moveX = 10;
let moveY = 10;

for(let i = 0; i<300; i++){
    min = Math.ceil(-25);
    max = Math.floor(25);

    let moveX = 0;
    let moveY = 0;

    while(moveX == 0){
        moveX = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    while(moveY == 0){
        moveY = Math.floor(Math.random() * (max - min + 1)) + min;
    }
   

    let obj = {
        x: centerX,
        y: centerY,
        oldX: centerX,
        oldY: centerY,
        radius: 1,
        moveX: moveX,
        moveY: moveY,
    }

    particles.push(obj)
}

clearField();
setInterval(init, 20);

function init(){
    clearField();
    for(let i = 0; i<particles.length; i++){
        drawParticle(particles[i].radius, particles[i].x, particles[i].y, particles[i].oldX, particles[i].oldY);

        particles[i].oldX = particles[i].x;
        particles[i].oldY = particles[i].y;

        particles[i].x += 1*particles[i].moveX;
        particles[i].y += 1*particles[i].moveY;

        if(particles[i].radius < 2) particles[i].radius+=0.1;

        if(particles[i].x > canvasWidth + radius || particles[i].x < -radius || particles[i].y > canvasHeight + radius || particles[i].y < -radius){
            particles[i].x = centerX;
            particles[i].y = centerY;
            particles[i].oldX = centerX;
            particles[i].oldY = centerY;
            particles[i].radius = 1;

            moveX = 0;
            moveY = 0;

            while(moveX == 0){
                moveX = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        
            while(moveY == 0){
                moveY = Math.floor(Math.random() * (max - min + 1)) + min;
            }

            particles[i].moveX = moveX;
            particles[i].moveY = moveY;
        }
    }

    clearBox();
}

function clearField(){
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();
}

function drawParticle(radius, x, y, oldX, oldY){
    ctx.beginPath();
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#aaaaaa';
    ctx.stroke();
}

function clearBox(){
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(0, 0);
    ctx.rect(0, centerY-2, canvas.width, 4);
    ctx.fill();
}