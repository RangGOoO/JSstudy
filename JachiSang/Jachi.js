const Maindiv = document.querySelector('#ShowMain');
const nameForm = Maindiv.querySelector('.Name-input'),
    nameInput = nameForm.querySelector('input'),
    Menudiv = Maindiv.querySelector('#Menudiv');

const HIDE_TAG = 'hide'
const USER ='USER';

function saveUSER(name){
    localStorage.setItem(USER,name);
    nameForm.classList.add(HIDE_TAG);
}

function handleEvent(event){
    const USERNAME = nameInput.value;
    saveUSER(USERNAME);
}

//유저의 정보가 null일시 이름을 함수 
function askName(){
    nameForm.addEventListener("submit", handleEvent)
    // showMenu();
}

//lacalstorage에서 유저의 유무를 판단하는 함수
function loadName(){
    const getLocalname = localStorage.getItem(USER);
    if(getLocalname === null){
        //유저가 없다면
        Menudiv.classList.add(HIDE_TAG);
        askName();
    }else{
        nameForm.classList.add(HIDE_TAG);
        Menudiv.classList.remove(HIDE_TAG);
        //유저가 있다면 메뉴 아이콘들 표시
    }
}
function init(){
    loadName();
}
init();