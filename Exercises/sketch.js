function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(40);
  } else {
    fill("purple");
  }
  ellipse(mouseX, mouseY, 100, 100);
}