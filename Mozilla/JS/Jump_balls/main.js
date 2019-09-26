const BALLS_COUNT= 25;
const BALL_SIZE_MIN = 7;
const BALL_SIZE_MAX = 20;
const BALL_SPEED_MAX = 7

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let balls = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.darw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

Ball.prototype.update = function() {
    if ((this.x + this.size) > width || (this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) > height || (this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        const ball = balls[j];
        if (!(this === ball)) {
            let dx = this.x - ball.x;
            let dy = this.y - ball.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + ball.size) {
                ball.color = this.color = randomColor();
            }
        }
        
    }
};

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    while (balls.length < BALLS_COUNT) {
        let ball = new Ball(
            random(0, width), 
            random(0, height), 
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX), 
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX), 
            randomColor(), 
            random(BALL_SIZE_MIN, BALL_SIZE_MAX));
        balls.push(ball);
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].darw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}

loop();