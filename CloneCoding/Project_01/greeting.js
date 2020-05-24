const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const USER = "currentUser";
const SHOWING = "showing";
const greeting = document.querySelector(".js-greeting");

//locaslstorage에 사용자 이름을 저장 
function saveName(Name){
    localStorage.setItem(USER, Name);
}
//유저의 이름을 입력하고 엔터를 누른 후 발생하는 이벤트 
function handleEvent(event){
    event.preventDefault();
    const Uservalue = input.value;
    paintnHello(Uservalue);
    saveName(Uservalue);

}
//유저의 이름을 묻는 함수 
function askName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleEvent)
}
//유저가 없을때는 유저를 묻고 난 후 호출, 유저가 있을때는 바로 호출
function paintnHello(Name){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${Name}`;
}

function roadName(){
    const currentUser = localStorage.getItem(USER); //localstorage에서 currentUser라는 키의 값을 가져와 currentUser에 저장
    if(currentUser === null){
        askName(); 
        //유저가 없다면 유저의 이름을 묻는 askName() 함수를 호출
    }else {
        paintnHello(currentUser);
        //유저가 있다면 이름에 색칠을 하면서 인사
    }
}


function init(){
    roadName();
}
init();