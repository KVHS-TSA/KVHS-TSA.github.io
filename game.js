// global setup
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

let sketches = [];

// function preload() {

// }



// function handling
function nearestPowerOf2(n) {
    return 1 << 31 - Math.clz32(n);
 }

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

function genPlayers(numPlayers) {
    let container = document.getElementById("players");
    container.innerHTML = "";

    for (let i = 0; i <= numPlayers; i++) {
        let playerDiv = document.createElement("div");
        playerDiv.id = `player-${i}`;
        if (numPlayers = 2) {
            playerDiv.style.width = windowWidth / 2 - windowWidth * .015;
            playerDiv.style.height = windowHeight / 2  - windowHeight * .015;
        }
        else if (numPlayers = 3) {
            playerDiv.style.width = windowWidth / 3 - windowWidth * .015;
            playerDiv.style.height = windowHeight / 3 - windowHeight * .015;
        } 
        else if (numPlayers = 4) {
            playerDiv.style.width = windowWidth / 4 - windowWidth * .015;
            playerDiv.style.height = windowHeight / 4 - windowHeight * .015;
        }
        else if (numPlayers > 4) {
            console.log("Player Number Error: numPlayer > 4")
        }
        else if (numPlayers < 2) {
            console.log("Player Number Error: numPlayer < 2")
        }
        else {
            console.log("Player Number Error: unknown")
        }
        
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
    startButton = new Sprite(windowWidth / 2, windowHeight / 2, windowWidth * .175, windowHeight * .12, 'k');
    startButton.text = 'Start';
    startButton.textSize = startButton.height * .8;
    startButton.color = color('purple');
    startButton.color.setAlpha(75);
    startButton.stroke = color(0, 0);
    startButton.z = 100;
    startButton.debug();

    if (startButton.mouse.presses()) {
        console.log('worked')
        startButton.remove();
        document.querySelector('main').remove();

        var players = document.getElementById('players');
        players.style.border = ".5vw";
        players.style.borderColor = 'rgb(255, 250, 243)';
        players.style.borderStyle = 'solid';

        genPlayers();
    }
}