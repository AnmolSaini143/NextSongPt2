harry_potter = "music.mp3";
peter_pan = "music2.mp3"


function preload() {
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400)
}