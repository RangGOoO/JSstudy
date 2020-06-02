const viMenudiv = document.querySelector('#Menudiv'),
    Menuform = Menudiv.querySelector('.Menu-form'),
    icon = Menuform.querySelectorAll('i');
const vibrate = 'vibrate';
// 진동 제어 함수
function zoomIn(event){
    event.target.style.transform = "scale(1.5)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
    event.target.classList.add(vibrate);
};
function zoomOut(evet){
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.classList.remove(vibrate);
};

function init(){
    icon.forEach(function(i){
        i.addEventListener("mouseenter", zoomIn);
    })
    icon.forEach(function(i){
        i.addEventListener("mouseleave", zoomOut);
    })
};
init();