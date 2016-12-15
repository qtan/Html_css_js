var numberOfFaces = 5;
var theLeftSide;
var theRightSide;
var random_top;
var random_left;
var leftSideImages;
var theBody = document.getElementsByTagName("body")[0];
theLeftSide = document.getElementById("leftSide");
theRightSide = document.getElementById("rightSide");

function generateFaces() {

    for (var i = 0; i < numberOfFaces; i++) {
        smile_img = document.createElement("img");
        smile_img.src = "smile.png";
        random_top = Math.floor(Math.random() * 401);
        random_left = Math.floor(Math.random() * 401);
        smile_img.style.top = random_top;
        smile_img.style.left = random_left;
        theLeftSide.appendChild(smile_img);

    }
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener("click",nextLevel);
}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces + = 5;
    generateFaces();
}

function gameOver(event) {
    event.stopPropagation();
    alert("Game Over!");

    theBody.removeEventListener = ("click",gameOver);
    theLeftSide.lastChild.removeEventListener = ("click",nextLevel);
}

}
