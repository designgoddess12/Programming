let rotateBy = 5;
function setup(){
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
// radial design
function makeArm(rotateBy, primaryColor, secondaryColor, thirdColor) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    // light pink ellipse
    stroke(primaryColor);
    strokeWeight(1);
    ellipse(150, 150 / alt, 130 * 1.2 + alt, 80);
    // grey circle
    stroke(secondaryColor);
    strokeWeight(2);
    circle(50, 50, 75);
    // hot pink circle
    stroke(thirdColor);
    strokeWeight(0.5);
    circle(25, 25, 50);
}
// Draw radial
function draw() {
    translate(300, 300,);
    rotate(rotateBy);
    makeArm(rotateBy, '#ffc0cb', '#DEDEDE', '#FF007F');
    rotateBy += 12;
}
// Stop loop
function mousePressed() {
    noLoop();
}