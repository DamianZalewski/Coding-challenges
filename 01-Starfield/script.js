console.log('test');
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

let canvasWidth = 800;
let canvasHeight = 600;


init();

function init(){
    // clearField();
    drawParticles();
}

function clearField(){
    ctx.fillStyle = "black";
    ctx.moveTo(0, 0);
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();
}

// function drawParticles(){
//     context.arc(19, 10, 5, 0, 2 * Math.PI, false);
//     context.fillStyle = 'green';
//     context.fill();
// }