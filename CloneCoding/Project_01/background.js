const body = document.querySelector("body");
const IMG_MAXNUMBER = 5;


function paintBackground(backgroundNum){
    const image = new Image();
    image.src = `Images/${backgroundNum + 1}.jpg`;
    image.classList.add("backimg");
    body.prepend(image);
}

function RandomNumber(){
    const Random = Math.floor(Math.random() *IMG_MAXNUMBER)
    return Random;
}

function init(){
    const backgroundNumber = RandomNumber();
    paintBackground(backgroundNumber);
}
init();
