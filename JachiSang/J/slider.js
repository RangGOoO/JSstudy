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
}
//슬라이드의 이미지 클릭시 해당 레시피 이동 함수
// function MoveUrl(){
//     Slideli.forEach(function(num){
//         if(num)
//         num.addEventListener('click', function(){
//             window.open()
//         })
//     })
// }
function init(){
    autoSlide();
    setInterval(autoSlide, 7000);
}
window.onload = init();

