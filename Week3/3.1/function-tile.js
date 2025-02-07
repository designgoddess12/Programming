function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0,);
    fill('navy');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(10);
    line(0, 0, 200, 200);
    line(30, -20, 200, 200);
    line(0, -150, 200, 200);
    line(0, -300, 200, 200);
    line(0, 40, 200, 200);
    line(0, 80, 200, 200);
    line(0, 115, 200, 200);
    noStroke();
    fill('red');
    circle(20, 180, 20); 
    circle(80, 180, 20); 
    circle(180, 20, 20); 
    circle(180, 80, 20); 
    fill('white');
    circle(50, 180, 20); 
    circle(180, 50, 20);
}

function draw () {
    createTile();
    noLoop();
}

