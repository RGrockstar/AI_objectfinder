status="";
function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Object Detecting";
    document.getElementById("name").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}
function draw(){
    image(video, 0,0, 480, 380);
}