var linkLeft;
var linkRight;
var linkUp;
var linkDown;

function Sprite(img, x, y, width, height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img){

    linkLeft =[
        new Sprite(img, 10, 10, 20, 25),
        new Sprite(img, 38, 10, 16, 24),
        new Sprite(img, 60, 10, 17, 25),
        new Sprite(img, 83, 10, 17, 25),
        new Sprite(img, 106, 10, 17, 25),
        new Sprite(img, 131, 10 , 17, 25),
        new Sprite(img, 155, 10, 17, 25),
        new Sprite(img, 194, 10, 16, 24)
    ];

    linkRight = [
        new Sprite(img, 200, 10, 17, 24),
        new Sprite(img, 220, 10, 17, 24),
        new Sprite(img, 245, 10, 17, 24),
        new Sprite(img, 268, 10, 17, 24),
        new Sprite(img, 293, 10, 17, 24),
        new Sprite(img, 316, 10, 17, 24),
        new Sprite(img, 338, 10, 17, 24),
        new Sprite(img, 360, 10, 17, 24)
    ];

    linkUp = [
        new Sprite(img, 10, 44, 16, 22),
        new Sprite(img, 36, 44, 16, 24),
        new Sprite(img, 60, 44, 16, 24),
        new Sprite(img, 84, 44, 17, 23),
        new Sprite(img, 107, 44, 17, 23),
        new Sprite(img, 130, 40, 16, 24),
        new Sprite(img, 152, 44, 16, 24),
        new Sprite(img, 174, 44, 16, 21)
    ];

    linkDown = [
        new Sprite(img, 204, 44, 17, 22),
        new Sprite(img, 226, 44, 17, 22),
        new Sprite(img, 249, 42, 17, 22),
        new Sprite(img, 269, 42, 17, 24),
        new Sprite(img, 292, 43, 17, 22),
        new Sprite(img, 314, 43, 17, 22),
        new Sprite(img, 337, 43, 17, 22),
        new Sprite(img, 356, 42, 17, 22)

    ];
}






























