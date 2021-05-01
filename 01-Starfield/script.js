var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

let canvasWidth = 800;
let canvasHeight = 600;

let particles = [];
particles.push([centerX, centerY]);

let radius = 10;

clearField();
setInterval(init, 10);

function init(){
    clearField();
    for(let i = 0; i<particles.length; i++){
        drawCircle(radius, particles[i][0], particles[i][1]);
        particles[i][0]+=i+1;
        particles[i][1]+=i+1;

        if(particles[i][0] > canvasWidth + radius || particles[i][0] < -radius){
            particles[i][0] = centerX;
            particles[i][1] = centerY;
        }

        if(particles[i][1] > canvasHeight + radius || particles[i][1] < -radius){
            particles[i][0] = centerX;
            particles[i][1] = centerY;
        }
    }
}

function clearField(){
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();
}

function drawCircle(radius, x, y){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#fff';
    ctx.fill();
}