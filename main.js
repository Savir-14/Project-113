function setup() {
    canvas = createCanvas(600,350);
    canvas.position(430,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    circle(10,10,100);
    circle(590,10,100);
    circle(10,340,100);
    circle(590,340,100);
}

function preload() {

}

function take_snapshot() {
    save('Picture #1.png');
}