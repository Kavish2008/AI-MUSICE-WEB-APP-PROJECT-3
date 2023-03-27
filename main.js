song1 = "";
song2 = "";
leftwristx=0 ;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload() {
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded) ;
poseNet.on('pose',gotPoses) ;
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet is Initialized') ;
}

function gotPoses(result) {
    if(result.length>0) 
    {
        console.log(result) ;
        leftwristx= result[0].pose.leftWrist.x;
        leftwristy= result[0].pose.leftWrist.y;
        rightwristx= result[0].pose.rightWrist.x;
        rightwristy= result[0].pose.rightWrist.y;
        console.log("leftwirstx = " + leftwristx + "leftwristy = " + leftwristy);
        console.log("rightwirstx = " + rightwristx + "rightwristy = " + rightwristy);
    }
}