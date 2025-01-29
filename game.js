// global setup
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

let numPlayers;
let sketches = [];

// function preload() {

// }



// function handling
function createSketch(index, containerId) {
    return (p) => {
        p.setup = () => {
            let canvas = p.createCanvas(windowWidth / 4 - 7, windowHeight / 4 - 7);
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

function genPlayers(num) {
    let container = document.getElementById("players");
    container.innerHTML = "";

    for (let i = 0; i < numPlayers; i++) {
        let playerDiv = document.createElement("div");
        playerDiv.id = `player-${i}`;
        playerDiv.style.width = "220px";
        playerDiv.innerHTML = `<h3>Player ${i + 1}</h3>`; // Title

        container.appendChild(playerDiv);
        sketches.push(new p5(createSketch(i, playerDiv.id)));
    }
}



// intro screen
function setup() {
    createCanvas()
}

function draw() {
    background('lightblue');

    let startButton 
    startButton = new Sprite(windowWidth / 2, windowHeight / 2, windowWidth * .175, windowHeight * .12, 'n');
    startButton.text = 'Start';
    startButton.textSize = startButton.height * .8;
    startButton.color = color('purple');
    startButton.color.setAlpha(75);
    startButton.stroke = color(0, 0);

    if (startButton.mouse.presses()) {
        remove();
    }
}