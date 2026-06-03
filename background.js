const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 100;
let y = 100;

function animate() {

    // Clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move ball
    x += 2;

    // Draw ball
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    // Request next frame
    requestAnimationFrame(animate);
}

animate();
