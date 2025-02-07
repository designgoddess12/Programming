function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0,);
     // rectangle
    fill('navy');
    stroke('black');
    strokeWeight(5);
    rect(0, 0, 200, 200);
    noStroke();
    fill('white');
     // big white circle
     noStroke();
     fill('white');
     circle(60, 80, 80); 
     // white lines
     stroke('white');
     strokeWeight(5);
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
     fill('white');
     circle(50, 180, 20); 
     circle(180, 50, 20);
 }

function draw () {
    createTile();
    noLoop();
}

