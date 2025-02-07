// global setup
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

let sketches = [];

let gameState = 0

// function preload() {

// }

// function handling
function nearestPowerOf2(n) {
    return 1 << 31 - Math.clz32(n);
}

function createSketch(index, containerId) {
    return (p) => {
        p.setup = () => {
            let canvas = p.createCanvas();
            canvas.parent(containerId);
            p.background(50,50,100);
        }

        p.draw = () => {
            p.fill(255);
            p.textSize(20);
            p.text(`Player ${index + 1}`, 50, 100);
        }
    }
}

function genPlayers() {
    let container = document.createElement("div");
    container.className = "playerContainer";
    container.innerHTML = "";

    for (var i = 0; i < 2; i++) {
        let playerDiv = document.createElement("div");
        playerDiv.id = `player-${i}`;
        container.appendChild(playerDiv);
        sketches.push(new p5(createSketch(i, playerDiv.id)));
    }
}



// intro screen
function setup() {
    createCanvas()
}

function draw() {
    clear();
    background('lightblue');

    let startButton = new Sprite(windowWidth / 2, windowHeight / 2, windowWidth * .175, windowHeight * .12, 'k');
    startButton.text = 'Start';
    if (startButton.height < startButton.width) {startButton.textSize = startButton.height * .8} 
    else if (startButton.height > startButton.width) {startButton.textSize = startButton.width * .8}
    else {startButton.textSize = .8 * startButton.width}
    startButton.color = color('purple');
    startButton.color.setAlpha(75);
    startButton.stroke = color(0, 0);

    let startText = new Sprite(windowWidth / 2, windowHeight / 2 - windowHeight * .12, windowWidth * .175, windowHeight * .10, 'n');
    startText.text = 'click the mouse to start';
    if (startText.height < startText.width) {startText.textSize = startText.height * .5} 
    else if (startText.height > startText.width) {startText.textSize = startText.width * .5}
    else {startText.textSize = .5 * startText.width}
    startText.color = color('purple');
    startText.color.setAlpha(50);
    startText.stroke = color(0, 0);
}

if (gameState = 0 && mouse.presses()) {
    console.log('worked')
    startButton.remove();
    document.querySelector('canvas').remove();

    var players = document.getElementById('players');
    genPlayers();
}