const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 200;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('../images/cardback.png');
    cardfaceArray = [
        loadImage('../images/crazyeyes-01.png'),
        loadImage('../images/curse-01.png'),
        loadImage('../images/love-01.png'),
        loadImage('../images/poop-01.png'),
        loadImage('../images/skull-01.png'),
        loadImage('../images/wink-01.png'),
    ]
}
function setup () {
    createCanvas(1625, 900,);
    background('#D3D3D3');
    // generating faces
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used face so it doesn't show again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    // cards in a loop
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 6; i++){ 
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX , startingY, faceImage));
            startingX += 260;
        }
        startingY += 350;
        startingX = 50;
    }
 }

 function draw () {
    if (gameState.numMatched === gameState.totalPairs) {
        fill('#D3204F');
        textFont('Cabin');
        textSize(55);
        textAlign(CENTER);
        text('You Win!', 813, 150);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('#D3204F');
    textFont('Cabin');
    textSize(30);
    textAlign(CENTER);
    text('Attempts ' + gameState.attempts, 813, 50);
    text('Matches ' + gameState.numMatched, 813, 90);

 }

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let j = 0; j < cards.length; j++) {
        //  frist check flipped cards length, and then
        // we can trigger the flip
        if (gameState.flippedCards.length < 2 && 
            cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[j]);
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg){
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++; 
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 2000)
        }
        }
    }

    class Card { // variable specific to class
        constructor (x, y, cardFaceImg) {
            this.x = x;
            this.y = y;
            this.width = 200;
            this.height = 300;
            this.face = DOWN;
            this.cardFaceImg = cardFaceImg;
            this.isMatch = false; 
            this.show();
        }
        // a method, similar to function but specific to class
        show () { 
            if(this.face === UP || this.isMatch) {
                rect(this.x, this.y, this.width, this.height);
                image(this.cardFaceImg, this.x, this.y, 200, 300);
        } else {
            rect(this.x, this.y, this.width, this.height)
            image(cardback, this.x, this.y, 200, 300);
        }
    }
    // mouse controls
        didHit (mouseX, mouseY) {
            if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
        }
        flip () {
            if(this.face === DOWN) {
                this.face = UP; 
            } else {
                this.face = DOWN;
            }
            this.show();
        }
    }

    function shuffleArray (array) {
        let counter = array.length;
        while (counter > 0) {
            // pick random index
            const idx = Math.floor(Math.random() * counter);
            // decrease counter by 1
            counter--;
            // swap the last element with it
            const temp = array[counter];
            array[counter] = array[idx];
            array[idx] = temp;
        }
        return array;
    }
