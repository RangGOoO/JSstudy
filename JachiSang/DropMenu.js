const subMenu = document.querySelectorAll('.Menubar');

const act = 'active';
const show = 'show';

function GiveHide(){
    subMenu.forEach(function(now){
        now.children[1].classList.add('hide');
    });
}

function showMenu(){
    subMenu.forEach(function(now){
        now.children[1].classList.remove('show');
    })
    const activeMenu = document.querySelector('.active');
    activeMenu.children[1].classList.add(show);
}

function active(){
    subMenu.forEach(function(now){
        now.addEventListener('click', function(){
            //Menu div에 active 클래스 부여 
            subMenu.forEach(function(all){
                all.classList.remove(act);
            })
            now.classList.add(act);
            showMenu();
        })
    })
}
function init(){
    active();
    GiveHide();
}
init();
// 자식들에게 display:none 효과 적용




