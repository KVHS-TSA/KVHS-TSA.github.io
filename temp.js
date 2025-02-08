// global setup
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

let sketches = [];

let gameState = 0

// function preload() {

// }

// function handling
let mainSketch = (p) => {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
    };

    p.draw = () => {
        p.clear();
        p.background('lightblue');

        let startButton = new Sprite(windowWidth / 2, windowHeight / 2, windowWidth * .175, windowHeight * .12, 'k');
        startButton.text = 'Start';
        startButton.textSize = Math.min(startButton.height, startButton.width) * 0.8;
        startButton.color = p.color('purple');
        startButton.color.setAlpha(75);
        startButton.stroke = p.color(0, 0);

        let startText = new Sprite(windowWidth / 2, windowHeight / 2 - windowHeight * .12, windowWidth * .175, windowHeight * .10, 'n');
        startText.text = 'click the mouse to start';
        startText.textSize = Math.min(startText.height, startText.width) * 0.5;
        startText.color = p.color('purple');
        startText.color.setAlpha(50);
        startText.stroke = p.color(0, 0);

        if (p.mouseIsPressed) {
            console.log('worked');
            startButton.remove();
            document.querySelector('canvas').remove();
            genPlayers();
        }
    };
};

new p5(mainSketch);

function createSketch(index, containerId) {
    return (p) => {
        p.setup = () => {
            let canvas = p.createCanvas(400, 400);
            canvas.parent(containerId);
            p.background(50, 50, 100);
        };

        p.draw = () => {
            p.fill(255);
            p.textSize(20);
            p.text(`Player ${index + 1}`, 50, 100);
        };
    };
}

function genPlayers() {
    let container = document.createElement("div");
    container.className = "playerContainer";
    container.id = "players";
    container.innerHTML = "";
    document.body.appendChild(container);

    for (let i = 0; i < 2; i++) {
        let playerDiv = document.createElement("div");
        playerDiv.id = `player-${i}`;
        container.appendChild(playerDiv);
        new p5(createSketch(i, playerDiv.id));
    }
}
