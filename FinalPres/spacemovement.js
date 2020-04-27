//Author: Boris Pisabaj
//For ART 151
//Game simulates Oregon Trail but in space with interactions with
//different alien races
function preload(){


  spaceFont = loadFont('txt/CasanovaScotia-Xm0K.ttf');
  spaceMusic = loadSound("audio/spacealt1.mp3");
  sceneArray.push(loadImage("images/8bitSpace0.png"));
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  sceneArray.push(loadImage("images/8bit_pluto_2.png"));
  sceneArray.push(loadImage("images/8bit_galaxyOne_2.png"))
  sceneArray.push(loadImage("images/8bit_spaceRand1.png"));
  sceneArray.push(loadImage("images/8bit_spaceRand2.png"));
//  sceneArray.push(loadImage("images/8bitufoSpace.png"));
//  sceneArray.push(loadImage("images/8bit_spaceCorp.png"));


  ship = loadImage("images/ship2.png");

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LYmOsF6QG/' + modelText);

  comfirmButton = createButton("Comfirm Option");
  comfirmButton.mousePressed(toggleComfirm);


  hyperspaceButton = createButton("Jump to FTL");
  hyperspaceButton.mousePressed(toggleHyperspace);

  textMoveButton = createButton("Continue");
  textMoveButton.mousePressed(toggleTextContinue);

}

function setup(){

  canvas = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  canvas.style("z-index", "-1");
  canvas.background(sceneArray[sceneIndex]);
  spaceMusic.loop();

  //flip the video feed
  flippedVideo = ml5.flipImage(capture);

 //run the classify video functioncap
  classifyVideo();
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(capture);
  //what are we going to classify? The video. When that is ready call the
  //gotResults function to update the label
  classifier.classify(flippedVideo, gotResults);
}


function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  //label is the first in the array, which is the most likely label
  label = results[0].label;
  //after we get the new label,
  //we call classifyVideo again to analyze the video and update the label
  classifyVideo();
}

function draw(){

  if(inHyperspace == true && hyperSpaceReady == true){
  //  let someStar = new SpaceStar(100, 100, )
    canvas.background(9,9,9);
    hyperspaceMode();
  }
  else if(sceneNum == 0){
    intro();
  }
  else if(sceneNum == 1){
    leavingEarth();
  }
  else if(sceneNum == 2){
    startPluto();
  }
  else if(sceneNum == 3){
    toGalaxy();
  }
  else if(sceneNum == 4){
    encounter1();
  }
  else if(sceneNum == 5){
    shortEnding();
  }

  //  image(ship, 200, 200, 50, 50);
}

function shortEnding(){
  canvas.background(sceneArray[sceneIndex]);

  if(changeText == 0){
    eMenu.hide();
    textSize(30);
    textFont(spaceFont);
    text("You arrive to a newly colonized planet..", 100, 100);
    text("Alien ships nearby raise concern \n They normally avoid human contact..", 100, 200);
    text("Soon we might have to interact with the aliens, obviously enraged that \n Earthlings are colonizing so quickly...", 100, 350);

    fill(255);
  }
}

function intro(){

  sceneIndex = 0;
  canvas.background(sceneArray[sceneIndex]);

  if(changeText == 0){
    textSize(30);
    textFont(spaceFont);
    text("In the year 2134, 30 years after humanity's first venture \nbeyond the Solar System...", 100, 100);
    text("The development and mass production of hyperspace \nhas allowed many upstanding \ncivilians to venture into the new universe", 100, 200);
    fill(255);
  }
  else if(changeText == 1){
    textSize(30);
    textFont(spaceFont);
    text("But.. what was thought to be a new age of exploration...", 100, 100);
    text("turned into various global corporations\n quickly claiming regions of space for themselves...", 100, 200);
    fill(255);
  }
  else if(changeText == 2){
    textSize(30);
    textFont(spaceFont);
    text("Despite this, many common folk have siezed the opportunity \nto venture out to the unexplored galaxy...", 100, 100);
    text("Many troubles await ahead... \nnatural dangers, new alien species, and even our\n fellow man making sure their property is protected....", 100, 250);
    fill(255);
  }
  else if(changeText == 3){
    textSize(30);
    textFont(spaceFont);
    text("You and 3 others are aboard your new ship, \nwhich cost your entire life savings... The Resilience", 100, 100);
    text("You head for the Pluto Depot \nto stock up before you begin your journey to \nsettle somewhere anew in the galaxy", 100, 220);
    fill(255);
  }
  else if(changeText == 4){
    textSize(50);
    textFont(spaceFont);
    text("Welcome to... the Nebula Trail", 300, 300);
    fill(255);
  }
  else{
    changeScene();
  }

}

function leavingEarth(){
  canvas.background(sceneArray[sceneIndex]);
  image(ship, 200, 200, 50, 50);
  if(changeText == 0){
    textSize(30);
    textFont(spaceFont);
    text("Your ship is a simple one... but enough supplies\n for a few lightyears of travel", 100, 100);
    fill(255);
  }
  else{
    changeScene();
  }

}
function startPluto(){

  var menuMade = false;
  canvas.background(sceneArray[sceneIndex]);
  image(ship, 50, 300, 50, 50);
  if(changeText == 0){
    textSize(30);
    textFont(spaceFont);
    text("Here at the Pluto Depot, \nyou can stock up before your journey...", 100, 100);
    fill(255);
  }
  else if(changeText == 1){
    capture.show();
    textSize(20);
    textFont(spaceFont);
    text("IMPORTANT DIRECTIONS!", 100, 100);
    text("Use the webcam interface to select: \nright arm over head is option 1", 100, 150);
    text("\nright arm bent next to head is option 2\n,left arm bent next to head is option 4\n", 100, 250)
    text("right arm bent next to head is option 4\n,otherwise, neutral (no selection)\n", 100, 350);
    fill(255);



  }
  else if(changeText == 2){
    textSize(30);
    textFont(spaceFont);
    text("Select from the menu using signals,\nYou have 20 seconds to select", 100, 100);
    text("You have 12000 credits", 100, 200);
    fill(255);

  }
  else if(changeText == 3){
    atBase = true;
    textSize(30);
    text("Option1: Buy mostly food and supples...",windowWidth/2, windowHeight/2 -50 );
    text("Option2: Buy arms and defense mods....",windowWidth/2, windowHeight/2);
    text("Option3: Buy spare parts for the ship....", windowWidth/2, windowHeight/2 + 50);
    text("Option4: Choose to save money", windowWidth/2, windowHeight/2 + 100)

    text("Currently selected: " + label,windowWidth/2, windowHeight/2 + 200 );

    aTimer();
    fill(255);
  }
  else if(changeText == 10){
    //clear
  }
  else{

    changeScene();
  }
}

function changeWebCam(){
  if(showCam == true && currentlyShowing != true){
    capture.show();
    currentlyShowing = true;
  }
  else{
    showCam = false;
    capture.hide();
    currentlyShowing = false;

  }
}
function buyingSupplies(){
  if(timer < 0 && timerSet == false){
    timer = 30;
    timerSet = true;
  }
  suppliesMenu = 1;
  canvas.background(sceneArray[sceneIndex]);
  textSize(30);
  text("Option1: Buy food, clothes, and extra supplies for your party of 4 completely: 3000cx",windowWidth/2, windowHeight/2 -50 );
  text("Option2: Buy food and clothesfor your party of 4 completely: 2000cx",windowWidth/2, windowHeight/2);
  text("Option3: Buy only some food for your party of 4 completely: 1000cx", windowWidth/2, windowHeight/2 + 50);
  text("Option4: Choose to save money...", windowWidth/2, windowHeight/2 + 100)

  text("Currently selected: " + label,windowWidth/2, windowHeight/2 + 200 );

  aTimer();
  fill(255);


}

function buyingArms(){
  if(timer < 0 && timerSet == false){
    timer = 30;
    timerSet = true;
  }
  armsMenu = 1;
  canvas.background(sceneArray[sceneIndex]);
  textSize(30);
  text("Option1: Buy weapons for each crew member and fully load ship: 3000cx.",windowWidth/2, windowHeight/2 -50 );
  text("Option2: Load the ship with Offensive weaponry and only load yourself: 2000 cx",windowWidth/2, windowHeight/2);
  text("Option3: Load the ship with Defensive measures, small sidearm for yourself: 1000cx", windowWidth/2, windowHeight/2 + 50);
  text("Option4: Choose to save money...", windowWidth/2, windowHeight/2 + 100)

  text("Currently selected: " + label,windowWidth/2, windowHeight/2 + 200 );


  aTimer();
  fill(255);

}

function buyingParts(){
  if(timer < 0 && timerSet == false){
    timer = 30;
    timerSet = true;
  }
  partsMenu = 1;
  canvas.background(sceneArray[sceneIndex]);
  textSize(30);
  text("Option1: Buy extra parts and extra fuel: 3000cx.",windowWidth/2, windowHeight/2 -50 );
  text("Option2: Buy extra parts: 2000 cx",windowWidth/2, windowHeight/2);
  text("Option3: buy extra fuel: 1000cx", windowWidth/2, windowHeight/2 + 50);
  text("Option4: Choose to save money...", windowWidth/2, windowHeight/2 + 100)

  text("Currently selected: " + label,windowWidth/2, windowHeight/2 + 200 );


  aTimer();
  fill(255);

}



function toGalaxy(){
//  spaceMusic = loadSound("audio/space2.mp3");

  canvas.background(sceneArray[sceneIndex]);
  if(changeText == 0){
    textSize(30);
    text("So your jounrey begins... \n a lot of places to choose from... but for now", 100, 100);
    text("Eyes are set on the Perses Arm of the galaxy", 100, 200);
    fill(255);
  }
  else if(changeText == 1){
    hyperSpaceReady = true;
    textSize(30);
    text("Ready to jump to hyperspace!", 100, 100);
    text("Click on the 'Jump to FTL' button when ready!", 100, 200);
    fill(255);
  }
}

function encounter1(){

  canvas.background(sceneArray[sceneIndex]);
  if(changeText == 0){
    textSize(30);
    text("You arrive at a nearby outpost", 100, 100);
    text("You see another ship nearby...", 100, 200);
    fill(255);
  }
  else if(changeText == 1){
    textSize(30);
    text("A transmission comes through: ", 100, 100);
    text("Orion Corp has taken our supples, said its a 'tax'...", 100, 200);
    text("We could use some supplies...", 100, 300);
    fill(255);
    if(!eMenu){
      eMenu = createSelect();
      eMenu.style("z-index", "1");
      eMenu.position(windowWidth/2, 200);
      eMenu.option("Give supplies...");
      eMenu.option("Give weapons...");
      eMenu.option("Give repair equipment...");
    }

  }
  else if(changeText == 2){
    textSize(30);
    text("You decide to", 100, 100);
    fill(255);
  }
  else if(changeText == 3){
    choice = eMenu.value();
    if(choice == 'Give supplies...' && friendly == true){
      textSize(30);
      text("Thank you for the supplies!", 100, 100);
      fill(255);
    }
    else if(choice == "Give weapons..." && aggressive == true){
      textSize(30);
      text("We can probably go hunting for food on some planet with this \n thanks!", 100, 100);
      fill(255);
    }
    else if(choice == 'Give repair equipment...' && practical){
      textSize(30);
      text("With this we can probably sell some of our old parts for some food \n thanks!", 100, 100);
      fill(255);
    }
    else{
        textSize(30);
        text("Umm.. I think we'd rather deal with someone esle...", 100, 100);
        fill(255);

    }
  }
  else{

    textSize(30);
    text("Ship is ready for hyperspace\n Click button when ready", 100, 100);
    fill(255);
    hyperSpaceReady = true;
    hyperSpaceSetUp = false;
  }

}
function hyperspaceMode(){
  if(hsSetUpDone == false){
    //print("Setting up. ONLY RUN ONCE!!!");
    hyperSpaceSetUp();
    print("Should get here");
    hsSetUpDone = true;
  }
  else{
    hyperspace();
  }
}

function hyperSpaceSetUp(){
  for(let j = 0; j < 15; j++)
  {
    starArray.push(new SpaceStar(random(windowWidth/2, windowWidth-50), random(windowHeight - 50), 10, 30, 4));
    starArray[j].star();
  }
}


function hyperspace(){
  image(ship, width/2, height/2, 50, 50);
  for(let i = 0; i < 15; i++){
    starArray[i].movethis(-10);
    starArray[i].star();
  }
  if(starArray[14].x < 0){
    inHyperspace = false;
    hyperSpaceReady = false;
    changeScene();
  }

}

function keyTyped(){
  if(key === 'd'){
    if(debugging == false)
    {
      debugging = true;
    }
    else
    {
      debugging = false;
    }
  }
}

function toggleComfirm(){

}



function toggleHyperspace(){
  if(hyperSpaceReady == false){
    textSize(40);
    text("ERROR: Engines Not Prepped for Hyperspace...", 300, 300);
    fill(255);
  }
  else if(hyperSpaceReady == true && inHyperspace == false){
    inHyperspace = true;
  }
}

function toggleTextContinue(){
  canvas.background(sceneArray[sceneIndex]);
  changeText++;
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  canvas.background(sceneArray[sceneIndex]);
}

function changeScene(){
  sceneNum++;
  sceneIndex++;
  changeText = 0;
}

function aTimer(){
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    textSize(30);
    text("Timer" + timer, windowWidth/2, windowHeight - 50);
    fill(255);
    timer --;
  }
  if (timer == 0) {
    text("Comfirmed!", windowWidth/2, windowHeight - 50);
    if(atBase == true){
      if(label == "Op1" ){
        changeText = 10;
        buyingSupplies();
      }
      else if(label == "Op2"){
        changeText = 10;
        buyingArms();
      }
      else if(label == "Op3"){
        changeText = 10;
        buyingParts();
      }
      else if(label == "Op4"){
        text("Not buying anything? A bit risky but ok", windowWidth/2, windowHeight - 100);
        changeScene();
      }
      else{
        text("Still there? Resetting timer", windowWidth/2, windowHeight - 100);
        timer = 20;
      }

    }
    else if(suppliesMenu == 1){
      if(label == "Op1" ){
        values[0] = 3;
        money=money - 3000;
        changeText = 3;
      }
      else if(label == "Op2"){
        values[1] = 2;
        money=money - 2000;
        changeText = 3;
      }
      else if(label == "Op3"){
        values[0] = 1;
        money=money - 1000;
        changeText = 3;
      }
      else if(label == "Op4"){
        text("Not buying anything? A bit risky but ok", windowWidth/2, windowHeight - 100);
        changeText = 3;
      }
      else{
        text("Still there? Resetting timer", windowWidth/2, windowHeight - 100);
        timer = 20;
      }
    }
    else if(armsMenu == 1){
      if(label == "Op1" ){
        values[1] = 3;
        money=money - 3000;
        changeText = 3;
      }
      else if(label == "Op2"){
        values[1] = 2;
        money=money - 2000;
        changeText = 3;
      }
      else if(label == "Op3"){
        values[1] = 1;
        money=money - 1000;
        changeText = 3;
      }
      else if(label == "Op4"){
        text("Not buying anything? A bit risky but ok", windowWidth/2, windowHeight - 100);
        changeText = 3;
      }
      else{
        text("Still there? Resetting timer", windowWidth/2, windowHeight - 100);
        timer = 20;
      }
    }
    else if(partsMenu == 1){
      if(label == "Op1" ){
        values[2] = 3;
        money=money - 3000;
        changeText = 3;
      }
      else if(label == "Op2"){
        values[2] = 2;
        money=money - 2000;
        changeText = 3;
      }
      else if(label == "Op3"){
        values[2] = 1;
        money=money - 1000;
        changeText = 3;
      }
      else if(label == "Op4"){
        text("Not buying anything? A bit risky but ok", windowWidth/2, windowHeight - 100);
        changeText = 3;
      }
      else{
        text("Still there? Resetting timer", windowWidth/2, windowHeight - 100);
        timer = 20;
      }

    }
  }
  timer = -1;
  timerSet = false;
}
