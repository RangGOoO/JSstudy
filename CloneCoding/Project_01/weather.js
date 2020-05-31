const key = "216efcf7a84a1dc9b181957fae8d8811";
const CORD = 'cord';
//사용자가 위치 허용을 하여 위도와 경도를 가져올 수 있을 경우 실행 함수
function Sucessget(posit){
    const latitude = posit.coords.latitude; 
    const longitude = posit.coords.longitude;
    const cordOBJ = {
        latitude,
        longitude,
    };
    localStorage.setItem(CORD, JSON.stringify(cordOBJ));
}
//사용자가 위치 허용을 거부하여 가져올 수 없을 경우 
function Errorget(){
    console.log('We can not load your position');
}
//위치 정보를 받아오기 위한 함수 
function getCord(){
    navigator.geolocation.getCurrentPosition(Sucessget, Errorget);
}

//localstorage에 위치 정보가 저장되어 있는지 여부 판단 함수
function loadcord(){
    const loadcord = localStorage.getItem(CORD);
    if(loadcord === null){
        //위치 정보가 존재하지 않을 때
        getCord();
    }else{
        //위치정보가 존재한다면
    }
}

//위치를 읽어오는 함수
function init(){
    loadcord();
}
init();