let furby;
let moveX;
let moveY;
let posX;
let posY;
let edgeCount;
let bluePressed;
let redPressed;
let redCoolDown;
let blueCoolDown;
let drawnX = [];
let drawnY = [];
let colCoolDown;
let mode;
let origmX;
let origmY;
function preload(){
    virus = loadImage("images/virus.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight/150);
  colCoolDown = 0;
  blueCoolDown = 0;
  redCoolDown = 0;
  mode = 0;
  moveX = random(10);
  moveY = random(10);
  origmX = moveX;
  origmY = moveY;
  edgeCount = int(random(10,20));

  var decideNeg = random(2);
  if(int(decideNeg) === 1){
    moveX = moveX * -1;
  }

  if(int(decideNeg) === 1){
    moveY = moveY * -1;
  }
  posX = windowWidth/2;
  posY = windowHeight/2;


  bluePressed = 0;
  redPressed = 0;
}

function printDebug(){
  print("");
}
function draw() {
  background(0);

  textSize(40);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Don't let the virus reach the edges!!", windowWidth/2, 200);
  textSize(10);
  textAlign(CENTER);
  fill(255, 255, 255);
  text("Misses allowed: " + edgeCount, windowWidth/2, 100);
  if(bluePressed == 1){
    textSize(10);
    textAlign(CENTER);
    fill(255, 255, 255);
    text("Current mode: BLUE", windowWidth/2, 150);
  }
  else if (redPressed == 1) {
    textSize(10);
    textAlign(CENTER);
    fill(255, 255, 255);
    text("Current mode: RED", windowWidth/2, 150);
  }
  else{
    textSize(10);
    textAlign(CENTER);
    fill(255, 255, 255);
    text("Current mode: NORMAL ", windowWidth/2, 150)
  }
  if(redCoolDown == 0 && blueCoolDown == 0 && (moveX != origmX || moveX != origmX * -1) && (moveY != origmY || moveY != origmY * -1)){
    if(moveX < origmX){
      moveX = origmX * -1;
    }
    if(moveY < origmX){
      moveY = moveY * -1;
    }
    else{
      moveX = origmX;
      moveY = origmY;
    }
  }
  propX = posX + moveX;
  propY = posY + moveY;
  if(propX >= windowWidth || propX <= 0){
    edgeCount--;
    moveX = moveX * -1.00;
  }
  posX = posX + moveX;
  if(propY >= windowHeight - 100 || propY <= 0){
    edgeCount--;

    moveY = moveY * -1.00;
  }
  posY = posY + moveY;
  image(virus, posX, posY, 50, 50);
  rectMode(CENTER);
  fill(00, 00, 255);
  rect(100, windowHeight - 70, 50, 50);

  rectMode(CENTER);
  fill(255,00,00);
  rect(200, windowHeight - 70, 50, 50);

  if(mouseIsPressed && (mouseY >= windowHeight - 95 && mouseY <windowHeight - 45) && (mouseX >= 75 && mouseX < 125) && blueCoolDown == 0 && redPressed != 1){
    blueCoolDown = 200;
    bluePressed = 1;
    edgeCount -= 5;
  }
  else if(mouseIsPressed && (mouseY >= windowHeight - 95 && mouseY <windowHeight - 45) && (mouseX >= 175 && mouseX < 225) && redCoolDown == 0 && bluePressed != 1){
    redCoolDown = 200;
    redPressed = 1;
    edgeCount += 10;
  }
  else if(mouseIsPressed){
    fill(255,255,0);
    print("drawing line");
    ellipse(mouseX, mouseY, 20, 20);
    drawnX.push(mouseX);
    drawnY.push(mouseY);
  }
  else{
    drawnX = [];
    drawnY = [];
  }
  if(mouseX != []){
    for(let i = 0; i < drawnX.length; i++){
      fill(255,255,0);
      ellipse(drawnX[i], drawnY[i], 20, 20);
    }
  }
  for(let j = 0; j < drawnX.length; j++){
    if(collidePointEllipse(posX, posY,drawnX[j], drawnY[j], 50, 50) && colCoolDown === 0){
      if(bluePressed === 1){
        moveX = (moveX * -1) * 0.5;
        moveY = (moveY * -1) * 0.5;
      }
      else if (redPressed === 1) {
        moveX = (moveX * -1) * 2;
        moveY = (moveY * -1) * 2;
      }
      else{
        moveX = moveX * -1;
        moveY = moveY * -1;
      }
      colCoolDown = 100;
    }
  }
  if(colCoolDown != 0){
    colCoolDown--;
  }
  if(blueCoolDown != 0){
    blueCoolDown--;
  }
  if(redCoolDown != 0 ){
    redCoolDown--;
  }



if(edgeCount === 0){
  for(let k = 0; k < 10000; k++){
    background(0,0,0);
    textSize(50);
    text("YOU LOSE. You're computer has a virus", windowWidth/2, 300);
  }
}

  //moving furby
}

/*
function mouseDragged(){
  print("Mouse dragging");
  fill(255,255,0);
  ellipse(mouseX, mouseY, 20, 20);
  drawnX.push(mouseX);
  drawnY.push(mouseY);
  for(let j = 0; j < drawnX.length; j++){
    ellipse(drawnX[j], drawnY[j], 20, 20);
  }
  drawnX = [];
  drawnY = [];
}*/


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
