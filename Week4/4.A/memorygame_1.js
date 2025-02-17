const rectWidth = 200;
let startingX = 50;
let startingY = 50;
let myRects = [];
let startingId = 0;
function setup () {
    createCanvas(1080, 1080,);
    background('#D3D3D3');
    // rectangles
    for (let k = 0; k < 3; k++) { // rows
        for (let i = 0; i < 4; i++){ //columns
            rect(startingX, startingY, 200, 300);
            myRects.push({ x: startingX, y: startingY, id: startingId });
            startingX += 260;
            startingId++;
    }
    startingY += 350;
    startingX = 50;
}
    console.log(myRects);
}

function mousePressed() {
    for(let j = 0; j < myRects.length; j++){
        let distance = dist(mouseX, mouseY, myRects[j].x, myRects[j].y);
        if (distance < rectWidth) {
            console.log('Card has been clicked', myRects[j].id);
    }
    }
}
