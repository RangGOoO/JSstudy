const Userbar = document.querySelector('.UserNtime'),
    Userdiv = Userbar.querySelector('.UserInfo'),
    Timediv = Userbar.querySelector('.TimeInfo');

const localUSER = 'USER';

function Hello(User){
    Userdiv.innerHTML = `<i class=" icon-user"></i>${User}`;
}

function TimeShow(){
    const Time = new Date();
    const Hour = Time.getHours();
    const Minute = Time.getMinutes();
    const Second = Time.getSeconds();
    Timediv.innerText = `${Hour < 10 ? `0${Hour}` : Hour }:${Minute < 10 ? `0${Minute}`: Minute}:${Second < 10 ? `0${Second}` : Second}`;
}

function init(){
    const getUser = localStorage.getItem(localUSER);
    Hello(getUser);
    TimeShow();
    setInterval(TimeShow, 1000);
}

init();