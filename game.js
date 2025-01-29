let windowWidth = document.documentElement.clientWidth 
let windowHeight = document.documentElement.clientHeight

// this is the shortcut approach to using instance mode; which 
// actually I'd argue is clearer as it reinforces the fact the callback function
// is passed as an argument to p5 and that its naming is arbitrary
// to the point of not being necessary
new p5(function (p) {

    "use strict";
    // declare here any variables that should be global to your sketch
    // JS has function level scope so you don't have
    // to worry about this polluting the other sketches
    // DO NOT attach variables/methods to p!!!
    var colour = 0;
  
    p.setup = function () {
      p.createCanvas(600, 400);
    };
  
    p.draw = function () {
      p.background(colour);
    };
  
    p.mousePressed = function () {
      console.info("sketch01");
      colour = (colour + 16) % 256;
    };
  },
  // This second parameter targets a DOM 'node' - i.e.
  // an element in your hard-coded HTML or otherwise added via a script.
  // You can pass a direct reference to a DOM node or the element's 
  // id (simplest to manually set this in the HTML) can be used, as here:
  "sketch01");
  
  // Now creating a separate instance of p5.
  // Note that since this is being passed a separate callback function
  // we can reuse the variable name 'p' which here references this
  // second instance of p5
  new p5(function (p) {
    "use strict";
  
    // this colour variable is totally separate
    var colour = "#f90";
  
    p.setup = function () {
      p.createCanvas(600, 400);
    };
  
    p.draw = function () {
      p.background(colour);
    };
  
    // it's worth noting that mousePressed does nothing to 
    // check which sketch was clicked on.  It simply registers a click 
    // anywhere on the current page!!!
    p.mousePressed = function () {
      console.info("sketch02");
    };
  },
  // here I'm targeting a different container
  "sketch02");
  
  
    // function setup() {
    //     new Canvas()
    
    //     // start button
    //     startButton = new Sprite(665, 382.5, 60, 25, 'k');
    //     startButton.text = 'Start';
    //     startButton.textSize = 15;
    //     startButton.color = color('purple');
    //     startButton.color.setAlpha(75);
    //     startButton.stroke = color(0, 0);