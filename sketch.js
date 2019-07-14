var X = 0;
var Y = 0;
var R = 0;
function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    for (var i = 0; i < 100; i++) {
        drawPoints();
        generatePoints();
    }
}

function drawPoints() {
    fill(R, 204, 0);
    strokeWeight(2);
    var px = map(X, -2.1820, 2.6558, 30, width - 30);
    var py = map(Y, 0, 9.9983, height - 30, 30);
    point(px, py);
}

function generatePoints() {
    var nextX;
    var nextY;
    var r = random(1);

    //Stem
    if (r < 0.02) {
        R = 0;
        nextX = 0;
        nextY = 0.16 * Y;
    }

    //Successively smaller leaflets
    else if (r < 0.85) {
        R = 0;
        nextX =  0.85 * X + 0.04 * Y;
        nextY = -0.04 * X + 0.85 * Y + 1.6;
    }

    //Largest left-hand leaflet
    else if (r < 0.93) {
        R = 0;
        nextX = 0.20 * X - 0.26 * Y;
        nextY = 0.23 * X + 0.22 * Y + 1.6;
    }

    //Largest right-hand leaflet
    else {
        R = 0;
        nextX = -0.15 * X + 0.28 * Y;
        nextY =  0.26 * X + 0.24 * Y + 0.44;
    }

    X = nextX;
    Y = nextY;
}