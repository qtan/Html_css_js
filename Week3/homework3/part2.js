var numberOfFaces = 5;
var theLeftSide;
var theRightSide;
var random_side;

function generateFaces() {

    for (var i = 0; i < numberOfFaces; i++) {
        random_side = Math.floor(math.random() * 401);
        smile_img = document.createElement("img");
        smile_img.src = "smile.png";
        theLeftSide = document.getElementById("leftSide");
        theRightSide = document.getElementById("rightSide");
        smile_img.style.top = random_side;
        smile_img.style.left = random_side;
        theLeftSide.appendChild(smile_img);
    }
}
