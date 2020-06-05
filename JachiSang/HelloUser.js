const headdiv = document.querySelector('.head'),
    hellospan = headdiv.querySelector('.hello'),
    timespan = headdiv.querySelector('.time');

const localUSER = 'USER';

function Hello(User){
    hellospan.innerText = `Hello <${User}>`;
}

function TimeShow(){
    const Time = new Date();
    const Hour = Time.getHours();
    const Minute = Time.getMinutes();
    const Second = Time.getSeconds();
    timespan.innerText = `${Hour < 10 ? `0${Hour}` : Hour }:${Minute < 10 ? `0${Minute}`: Minute}:${Second < 10 ? `0${Second}` : Second}`;
}
function init(){
    const getUser = localStorage.getItem(localUSER);
    Hello(getUser);
    TimeShow();
    setInterval(TimeShow, 1000);
}

init();