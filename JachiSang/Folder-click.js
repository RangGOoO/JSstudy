const clickMenudiv = document.querySelector('#Menudiv'),
    clickMenuform = clickMenudiv.querySelector('.Menu-form'),
    clickicon = clickMenuform.querySelectorAll('i');

    function Givesrc(){
        for(let i = 0; i <= clickicon.length; i++){
            clickicon[i].addEventListener("click", function(){
                if(parseInt(clickicon[i].id) === 1){
                    location.href = "KoreanFood.html";
                }
                else if(parseInt(clickicon[i].id) === 2){
                    location.href = "WestFood.html";
                }
                else if(parseInt(clickicon[i].id) === 3){
                    location.href = "ChainaFood.html";
                }
                else{
                    location.href = "JapanFood.html";
                }
            });
        }
    }

    function init(){
        Givesrc();
    };

    init();