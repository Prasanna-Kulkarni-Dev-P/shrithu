const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

const NUM_BALLS = 20;

for (let i = 0; i < NUM_BALLS; i++) {

    balls.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,

    radius: 10 + Math.random() * 20,

    color: `rgba(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        0.5
        )`
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const ball of balls) {

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (
            ball.x < ball.radius ||
            ball.x > canvas.width - ball.radius
        ) {
            ball.vx = -ball.vx;
        }

        if (
            ball.y < ball.radius ||
            ball.y > canvas.height - ball.radius
        ) {
            ball.vy = -ball.vy;
        }

        ctx.beginPath();
        ctx.arc(
            ball.x,
            ball.y,
            ball.radius,
            0,
            2 * Math.PI
        );

        ctx.fillStyle = ball.color;
        ctx.fill();
    }

    requestAnimationFrame(animate);
}

animate();
