//variables for images
let capture;
let tracker;
let tiger;

let cameraImage = true;
//video variables
let w = 640;
let h = 480;
  let sceneNum=0;
  let starArray = [];
  let spaceMusic;
  let textMoveButton;
  let comfirmButton;
  let pressedContinue;
  let changeText = 0;
  let hyperSpaceReady = false;
//  let plutoMenu;
  let choice;
  let aggressive = false;
  let practical = false;
  let friendly = false;
  let eMenu;
  let musLooped = false;
  let spaceFont;
  let showCam = false;
  let currentlyShowing = false;
  let optionSelected;
  let showComfirmButton = false;

  let flippedVideo;



class SpaceStar{
  constructor(xVal, yVal, rad1, rad2, numPoints)
  {
    this.x = xVal;
    this.y = yVal;
    this.radius1 = rad1;
    this.radius2 = rad2;
    this.npoints = numPoints;
  }

  movethis(xChange){
    this.x = this.x + xChange;
  }

  star() {
    let angle = TWO_PI / this.npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle)
    {
      let sx = this.x + cos(a) * this.radius2;
      let sy = this.y + sin(a) * this.radius2;
      vertex(sx, sy);
      sx = this.x + cos(a + halfAngle) * this.radius1;
      sy = this.y + sin(a + halfAngle) * this.radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
