//Author: Boris Pisabaj
//For ART 151
//Game simulates Oregon Trail but in space with interactions with
//different alien races

//variables for images
  let sceneNum=0;
  let starArray = [];
  let spaceMusic;
  let textMoveButton;
  let pressedContinue;
  let changeText = 0;
  let hyperSpaceReady = false;
  let plutoMenu;
  let choice;
  let aggressive = false;
  let practical = false;
  let friendly = false;
  let eMenu;

function preload(){
  spaceMusic = loadSound("audio/spacealt1.mp3");
  sceneArray.push(loadImage("images/8bitSpace0.png"));
  sceneArray.push(loadImage("images/8bit_earth1.png"));
  sceneArray.push(loadImage("images/8bit_pluto_2.png"));
  sceneArray.push(loadImage("images/8bit_galaxyOne_2.png"))
  sceneArray.push(loadImage("images/8bit_spaceRand1.png"));
  sceneArray.push(loadImage("images/8bit_spaceRand2.png"));
//  sceneArray.push(loadImage("images/8bitufoSpace.png"));
//  sceneArray.push(loadImage("images/8bit_spaceCorp.png"));


  ship = loadImage("images/bitShip1.png");


  hyperspaceButton = createButton("Jump to FTL");
  hyperspaceButton.mousePressed(toggleHyperspace);

  textMoveButton = createButton("Continue");
  textMoveButton.mousePressed(toggleTextContinue);

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.background(sceneArray[sceneIndex]);
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
    text("You arrive to a newly colonized planet..", 100, 100);
    text("Alien ships nearby raise concern \n They normally avoid human contact..", 100, 200);
    text("Soon we might have to interact with the aliens, obviously enraged that \n Earthlings are colonizing so quickly...", 100, 350);

    fill(255);
  }
}

function intro(){
  spaceMusic.loop();
  sceneIndex = 0;
  canvas.background(sceneArray[sceneIndex]);
  if(changeText == 0){
    textSize(30);
    text("In the year 2134, 30 years after humanity's first venture beyond the Solar System...", 100, 100);
    text("The development and mass production of hyperspace has allowed many upstanding \ncivilians to venture into the new universe", 100, 200);
    fill(255);
  }
  else if(changeText == 1){
    textSize(30);
    text("But.. what was thought to be a new age of exploration...", 100, 100);
    text("turned into various global corporations quickly claiming regions of space for themselves...", 100, 200);
    fill(255);
  }
  else if(changeText == 2){
    textSize(30);
    text("Despite this, many common folk have siezed the opportunity to venture out to the unexplored galaxy...", 100, 100);
    text("Many troubles await ahead... natural dangers, new alien species, and even our\n fellow man making sure their property is protected....", 100, 200);
    fill(255);
  }
  else if(changeText == 3){
    textSize(30);
    text("You and 3 others are aboard your new ship, which cost your entire life savings... The Resilience", 100, 100);
    text("You head for the Pluto Depot to stock up before you begin your journey to \nsettle somewhere anew in the galaxy", 100, 200);
    fill(255);
  }
  else if(changeText == 4){
    textSize(50);
    text("Welcome to... the Milky Way Trail", 400, 300);
    fill(255);
  }
  else{
    changeScene();
  }

}

function leavingEarth(){
  spaceMusic.loop();
  canvas.background(sceneArray[sceneIndex]);
  image(ship, 200, 200, 50, 50);
  if(changeText == 0){
    textSize(30);
    text("Your ship is a simple one... but enough supplies\n for a few lightyears of travel", 100, 100);
    fill(255);
  }
  else{
    changeScene();
  }

}
function startPluto(){
  spaceMusic.loop();
  var menuMade = false;
  canvas.background(sceneArray[sceneIndex]);
  image(ship, 50, 300, 50, 50);
  if(changeText == 0){
    textSize(30);
    text("Here at the Pluto Depot, you can stock up before your journey...", 100, 100);
    fill(255);
    if(!plutoMenu){
      plutoMenu = createSelect();
      plutoMenu.style("z-index", "1");
      plutoMenu.position(windowWidth/2, 200);
      plutoMenu.option("Buy mostly food and supples...");
      plutoMenu.option("Buy arms and defense mods....");
      plutoMenu.option("Buy spare parts for the ship....");
    }


  }
  else if(changeText == 1){
    textSize(30);
    text("Select from the menu... click continue when done", 100, 100);
    fill(255);

  }
  else{
    choice = plutoMenu.value();
    if(choice == 'Buy mostly food and supples...'){
      friendly = true;
    }
    else if(choice == "Buy arms and defense mods...."){
      aggressive = true;
    }
    else if(choice == "Buy spare parts for the ship...."){
      practical = true;
    }
    changeScene();
  }
}



function toGalaxy(){
//  spaceMusic = loadSound("audio/space2.mp3");

  canvas.background(sceneArray[sceneIndex]);
  if(changeText == 0){
    plutoMenu.hide();
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


function toggleHyperspace(){
  if(hyperSpaceReady == false){
    textSize(40);
    text("ERROR: Engines Not Prepped for Hyperspace...")
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
