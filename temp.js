let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

let sketches = [];

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


let mainSketch = (p) => {
    p.setup = () => {
        p.createCanvas(windowWidth, windowHeight);
    };

    p.draw = () => {
        p.clear();
        p.background('lightblue');

        // Draw start button
        p.fill(150, 0, 150, 150);
        p.noStroke();
        var buttonWidth = windowWidth * 0.175;
        var buttonHeight = windowHeight * 0.12;
        var buttonX = windowWidth / 2 - buttonWidth / 2;
        var buttonY = windowHeight / 2 - buttonHeight / 2;
        p.rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

        // Draw start button text
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(buttonHeight * 0.5);
        p.text('Start', windowWidth / 2, windowHeight / 2);

        // Draw instructions text
        let textY = windowHeight / 2 - windowHeight * 0.12 - 30;
        p.textSize(buttonHeight * 0.4);
        p.text('Click to start', windowWidth / 2, textY);
    };

    p.mousePressed = () => {
        console.log('worked');
        p.remove();
        document.querySelector('canvas').remove();
        genPlayers();
    };
};

new p5(mainSketch);