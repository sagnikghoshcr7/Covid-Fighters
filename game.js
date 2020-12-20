
function load_images() {
    // player, virus, gem
}


function init() {
    // define the objects that we will have in the game
    canvas = document.getElementById("mycanvas");
    W = 700;
    H = 400;

    canvas.width = W;
    canvas.height = H;

    // create a context
    pen = canvas.getContext('2d');

    box = {
        x : 150,
        y : 50,
        w : 60,
        h : 60
    }
}

function draw() {

}

function update() {

}

function gameloop() {
    draw();
    update();
}

load_images();
init();
var f = setInterval(gameloop, 100);