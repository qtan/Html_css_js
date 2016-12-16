var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
// after page loaded
window.onload = function () {
  generateFaces();
  cloneFace();

  theLeftSide.lastChild.onclick = nextLevel;
  theBody.onclick = gameOver;
}
function nextLevel(event) {
  event.stopPropagation();
  numberOfFaces += 5;
  while (theLeftSide.firstChild)
    theLeftSide.removeChild(theLeftSide.firstChild);
  while (theRightSide.firstChild)
    theRightSide.removeChild(theRightSide.firstChild);
  generateFaces();
  cloneFace();
  theLeftSide.lastChild.onclick = nextLevel;
}
function gameOver() {
  alert("Game Over!");
  theBody.onclick = null;
  theLeftSide.lastChild.onclick = null;
}

function generateFaces() {
  for (var i = 0; i < numberOfFaces; i++) {
    var img = document.createElement("img");
    img.src = "smile.png";
    img.style.top = getRandNum() + "px";
    img.style.left = getRandNum() + "px";
    theLeftSide.appendChild(img);
  }
}
function cloneFace() {
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}
function getRandNum() {
  return Math.floor(Math.random() * 400);
// 
