//객체 안에는 배열 객체가 들어 갈 수 있다.
// MainTitle.addEventListener("click", clickColor()) >> 함수를 바로 호출
//현재 시간을 가져온다.

const TimeInfo = document.querySelector("#js-TimeInfo"), 
    NowTime = TimeInfo.querySelector("h1"); 
//js-TimeInfo 라는 아이디를 가진 태그와 그 안의 h1태그를 가져온다

function getTime(){
    const Time = new Date();
    const Hour = Time.getHours();
    const Minute = Time.getMinutes();
    const Second = Time.getSeconds();
    NowTime.innerText = `${Hour < 10 ? `0${Hour}` : Hour }:${Minute < 10 ? `0${Minute}`: Minute}:${Second < 10 ? `0${Second}` : Second}`;
    //NoWTime = h1 태그이며 그 안의 text값에 불러온 시,분,초를 표시
}
//시간 정보를 받아오는 함수 

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();
//초기화 함수