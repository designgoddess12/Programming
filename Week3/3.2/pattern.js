function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, bigCircleColor, littleMiddleCircleColor, lineSize) {
    translate(originX, originY,);
     // rectangle
    fill(primaryColor);
    stroke('black');
    strokeWeight(5);
    rect(0, 0, 200, 200);
    noStroke();
    fill('white');
    // big white circle
    noStroke();
    fill(bigCircleColor);
    circle(60, 80, 80); 
    // white lines
    stroke(secondaryColor);
    strokeWeight(lineSize);
    line(105, 180, 180, 180);
    line(180, 180, 180, 105);
    // small red circles
    noStroke();
    fill('red');
    circle(20, 180, 20); 
    circle(80, 180, 20); 
    circle(180, 20, 20); 
    circle(180, 80, 20); 
    // small middle circles
    noStroke();
    fill(littleMiddleCircleColor);
    circle(50, 180, 20); 
    circle(180, 50, 20);
}

function draw () {
    createTile(0, 0, 'orange', 'navy', 'red', 'navy', 7);
    createTile(0, 200, 'green', 'red', 'white', 'white', 2);
    createTile(0, 200, 'navy', 'orange', 'orange', 'white', 4);
    createTile(200, -400, 'navy', 'orange', 'orange', 'white', 4);
    createTile(0, 200, 'orange', 'navy', 'red', 'navy', 7);
    createTile(0, 200, 'green', 'red', 'white', 'white', 2);
    createTile(200, -400, 'green', 'red', 'white', 'white', 2);
    createTile(0, 200, 'navy', 'orange', 'orange', 'white', 4);
    createTile(0, 200, 'orange', 'navy', 'red', 'navy', 7);
    noLoop();
}

