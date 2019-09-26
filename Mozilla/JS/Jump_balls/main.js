const BALLS_COUNT= 25;
const BALL_SIZE_MIN = 7;
const BALL_SIZE_MAX = 20;
const BALL_SPEED_MAX = 7

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const para = document.querySelector("p");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let balls = [];

let count = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
}

class Shape {
    constructor(x, y, velX, velY, exists) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }
}

class EvilCircle extends Shape {
    constructor(x, y, exists) {
        super(x, y, 20, 20, exists);
        this.color = "white";
        this.size = 40;
        this.setControls();
    }

    draw() {
        ctx.beginPath(3);
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    update() {
        if ((this.x + this.size) > width) {
            this.x -= this.size;
        }
        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }
    
        if ((this.y + this.size) > height) {
            this.y -= this.size;
        }
        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    collisionDetect() {
        for (let j = 0; j < balls.length; j++) {
            const ball = balls[j];
            if (ball.exists) {
                let dx = this.x - ball.x;
                let dy = this.y - ball.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    count--;
                    para.textContent = "还剩" + count + "个球";
                }
            } else {
    
            }
        }
    }

    setControls() {
        window.onkeydown = e => {
            if (e.key === "a") {
                this.x -= this.velX;
            } else if (e.key === "d") {
                this.x += this.velX;
            } else if (e.key === "w") {
                this.y -= this.velY;
            } else if (e.key === "s") {
                this.y += this.velY;
            }
        };
    }
}

class Ball extends Shape {
    constructor(x, y, velX, velY, exists, color, size) {
        super(x, y, velX, velY, exists);
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) > width || (this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
    
        if ((this.y + this.size) > height || (this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect() {
        for (let j = 0; j < balls.length; j++) {
            const ball = balls[j];
            if (!(this === ball)) {
                let dx = this.x - ball.x;
                let dy = this.y - ball.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + ball.size && ball.exists) {
                    ball.color = this.color = randomColor();
                }
            }
            
        }
    }
}

const evilCircle = new EvilCircle(
    random(0, width), 
    random(0, height), 
    true);

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    evilCircle.draw();
    evilCircle.update();
    evilCircle.collisionDetect();

    while (balls.length < BALLS_COUNT) {
        let ball = new Ball(
            random(0, width), 
            random(0, height), 
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX), 
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
            true, 
            randomColor(), 
            random(BALL_SIZE_MIN, BALL_SIZE_MAX));
        balls.push(ball);
        count++;
        para.textContent = "还剩" + count + "个球";
    }

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    requestAnimationFrame(loop);
}

loop();