const subMenu = document.querySelectorAll('.Menubar');

const act = 'active';
const show = 'show';
//메인 메뉴 아래에 서브 메뉴들에게 시작화면에 hide클래스로 숨김 
function GiveHide(){
    subMenu.forEach(function(now){
        now.children[0].classList.add('hide');
    });
}
//menu클릭시 서브 메뉴들을 보여주기 위한 함수
function showMenu(){
    subMenu.forEach(function(now){
        now.children[0].classList.remove('show');
    })
    const activeMenu = document.querySelector('.active');
    activeMenu.children[0].classList.add(show);
}
//Menubar 클래스를 가진 div에 클릭시 이벤트 부여
function active(){
    subMenu.forEach(function(now){
        //Menu div에 active 클래스 부여 
        now.addEventListener('click', function(){
            //해당 menu클릭시 다른 메뉴에 있는 active 클래스를 제거하고 target에 
            // active 클래스 부여 
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




