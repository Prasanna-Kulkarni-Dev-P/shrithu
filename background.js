const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2);

ctx.fillStyle = "red";     // Change color here
ctx.fill();
