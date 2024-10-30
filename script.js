// let playerState = 'run';
// const dropdown = document.getElementById("animations");
// dropdown.addEventListener("change", function(e) {
//     playerState = e.target.value;
// });

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 19200/32;
const spriteHeight = 600;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

let isAnimating = false;

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", () => {
    isAnimating = !isAnimating;
    if (isAnimating) animate();
});

const foxImg = document.getElementById('foxImg');

function animate(){
    if (!isAnimating) return;
    
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);
    ctx.drawImage(foxImg, frameX * spriteWidth, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 33) frameX++;
        else frameX = 0;    
    }

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

