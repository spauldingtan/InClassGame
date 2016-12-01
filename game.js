/**
 * Created by GodaiYuusaku on 12/1/16.
 */
var renderingContext,
    width,
    height,
    gameSprite,
    currentKey = 0;

var keys = {up: 87, left: 65, down: 83, right: 68},
    frames = 0;

function MySprite() {
    this.frame = 0;
    this.animation = [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
    this.x = width * 0.2;
    this.y = height * 0.2;
    this.velocity = 10;
    this.update = function () {
        var n = 5;
        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;            // makes sure that we stay within the animation array
        switch (currentKey) {
            case keys.up:
                this.y -= this.velocity;
                break;
            case keys.left:
                this.x -= this.velocity;
                break;
            case keys.right:
                this.x += this.velocity;
                break;
            case keys.down:
                this.y += this.velocity;
                break;
            default:
                this.x = this.x;
                this.y = this.y;

        }
    };

    this.draw = function () {
        renderingContext.save();

        var n = this.animation[this.frame];
        switch (currentKey) {
            case keys.up:
                linkDown[n].draw(renderingContext, this.x, this.y);
                break;
            case keys.left:
                linkLeft[n].draw(renderingContext, this.x, this.y);
                break;
            case keys.right:
                linkRight[n].draw(renderingContext, this.x, this.y);
                break;
            case keys.down:
                linkDown[n].draw(renderingContext, this.x, this.y);
                break;
            default:
                linkDown[0].draw(renderingContext, this.x, this.y);
        }
        // linkDown[n].draw(renderingContext, this.x, this.y);
        renderingContext.restore();
    }
}

function main() {
    windowSetup();
    canvasSetup();
    loadGraphics();
    gameSprite = new MySprite();
}

function windowSetup() {
    width = window.innerWidth / 2;
    height = window.innerHeight / 2;
}

function canvasSetup() {
    var canvas = "<canvas id='canvasArea' width='" + width + "' height='" + height + "'></canvas>";
    $("body").append(canvas);
    renderingContext = $("#canvasArea")[0].getContext("2d");
}

function loadGraphics() {
    var img = new Image();
    img.src = "image/link.gif";

    img.onload = function () {
        initSprites(this);
        gameLoop();
    };
}

function gameLoop() {
    update();
    render();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;
    gameSprite.update();
}

function render() {
    renderingContext.clearRect(0, 0 , width, height);
    gameSprite.draw();
}

$("body").keydown(function (event) {
    event.preventDefault();
    switch (event.keyCode) {
        case keys.up:
            currentKey = keys.up;
            break;
        case keys.left:
            currentKey = keys.left;
            break;
        case keys.right:
            currentKey = keys.right;
            break;
        case keys.down:
            currentKey = keys.down;
            break;
    }
});

$("body").keyup(function () {
    currentKey = 0;
    console.log("stop!");
});