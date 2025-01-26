let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "black");
let fill1 = prompt("enter another basic color lowercase", "purple");
function setup() {
    createCanvas(1000,800);
    background("#ccc");
    //grid = loadImage("images/100px_grid.png");
}
function draw() {
    // body
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    // bottom
    ellipse(500, 580, 400);
    // middle
    ellipse(500, 400, 300);
    // head
    ellipse(500, 250, 200);
    // hat
    stroke("black");
    fill(fill1);
    strokeWeight(15);
    rect(445, 45, 110, 100);
	ellipse(500, 160, 180, 10);
    // eyes
    fill(0);
    stroke(0);
    strokeWeight(30);
    point(475, 230, 30, 30);
    point(550, 230, 30, 30);
    //arms
	stroke(139, 69, 19);
	strokeWeight(15);
    //right
	line(390, 375, 100, 330);
    //left
	line(600, 375, 850, 330);

}