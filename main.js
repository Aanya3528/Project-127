hp_sorting_hat="";
hp_theme_song="";

function preload(){
    hP_sorting_Hat = "left.mp3";
    hp_theme_song = "right.mp3";
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.position(950, 300);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}
    