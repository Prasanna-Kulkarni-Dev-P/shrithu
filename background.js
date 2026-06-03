const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;

let vx = 2;   // velocity in x direction
let vy = 1.5; // velocity in y direction

const radius = 30;

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x += vx;
    y += vy;

    // Bounce on left/right walls
    if (x < radius || x > canvas.width - radius) {
        vx = -vx;
    }

    // Bounce on top/bottom walls
    if (y < radius || y > canvas.height - radius) {
        vy = -vy;
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    requestAnimationFrame(animate);
}

animate();
