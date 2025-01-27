let stroke1 = prompt("enter a basic color name in lowercase", "black");
let fill1 = prompt("enter another basic color lowercase", "purple");
let fill2 = prompt("enter a third basic color lowercase", "pink");

function preload(){
    img =loadImage("../Part2/snowybkgrnd.png");
}

function setup() {
    createCanvas(1000,800);
}
function draw() {
    image(img,0,0,1000,800);

    // body
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    // bottom
    ellipse(500, 580, 400);
    // middle
    ellipse(500, 400, 300);
    // scarf
    fill(fill2);
    ellipse(500, 330, 250, 110);
    // head
    fill("#f1f1f1");
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

    // carrot 
	noStroke();
    fill(255, 165, 0);
	triangle(520, 260, 520, 285, 335, 300);

    // arms
	stroke(139, 69, 19);
	strokeWeight(15);
    // right
	line(390, 400, 100, 330);
    //left
	line(600, 400, 850, 330);

    //buttons
	noStroke(0);
    fill(0);
	ellipse(500, 420, 25, 25);
	ellipse(500, 465, 25, 25);
	ellipse(500, 510, 25, 25);
}