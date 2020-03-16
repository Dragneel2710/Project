var boxes = [];
var Slider;
 
function setup() {
    createCanvas(400, 400);
    Slider = createSlider(0, 100, 50);
    Slider.position(40, 365);
    Slider.input = map(engine.world.gravity, Slider.min, Slider.max, 0, 1);
}
 
function mousePressed() {
    if (mouseY < 350) {
    }
}
 
function draw() {
    background(51);
    var fVal = Slider.value();
}
 
function Box(x, y, w, h, options) {

   
    var options = {

    }
 
    this.show = function () {
    }
  }