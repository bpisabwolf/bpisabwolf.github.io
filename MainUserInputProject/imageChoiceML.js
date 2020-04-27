let canvas;
let video;
let classifier;
let flippedVideo;

let label = "...waiting";
let modelText = "model.json";

function imageChoiceMLSetUp(){
video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 //flip the video feed
 flippedVideo = ml5.flipImage(video);

//run the classify video function
 classifyVideo();
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  //what are we going to classify? The video. When that is ready call the
  //gotResults function to update the label
  classifier.classify(flippedVideo, gotResults);
}


function gotResults(error, results){
  if(error){
    console.log(error);
    return;
  }
  //label is the first in the array, which is the most likely label
  label = results[0].label;
  //after we get the new label,
  //we call classifyVideo again to analyze the video and update the label
  classifyVideo();
  console.log(results);
}

function draw() {
  background(0);
  image(video, 0, 0);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);

  //draw the label on teh canvas
  text(label, width/2, height - 16);


}
