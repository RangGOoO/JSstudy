const Slidediv = document.querySelector('.Slider'),
    Slideul = Slidediv.querySelector('.slide-contain'),
    Slideli = Slideul.querySelectorAll('.slide-item');

let currentIndex = 0;


function autoSlide(){
    if(currentIndex === Slideli.length){
        currentIndex = 0
        Slideul.style.marginLeft = `${currentIndex*-100}%`;
    }else{
        Slideul.style.marginLeft = `${currentIndex*-100}%`;
        currentIndex = currentIndex + 1;
    }
    console.log(currentIndex);
    console.log(Slideli.length);
}
autoSlide();
// function init(){

// }
setInterval(autoSlide, 7000);

