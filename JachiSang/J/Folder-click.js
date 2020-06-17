const clickMenudiv = document.querySelector('#Menudiv'),
    clickMenuform = clickMenudiv.querySelector('.Menu-form'),
    clickicon = clickMenuform.querySelectorAll('i');
    function Givesrc(){
        for(let i = 0; i <= clickicon.length; i++){
            clickicon[i].addEventListener("click", function(){
                if(parseInt(clickicon[i].id) === 1){
                    location.href = "./H/Easyfast.html";
                }
                else if(parseInt(clickicon[i].id) === 2){
                    location.href = "./H/Highquality.html";
                }
                else if(parseInt(clickicon[i].id) === 3){
                    location.href = "./H/DrinkFood.html";
                }
                else{
                    location.href = "./H/SubFood.html";
                }
            });
        }
    }

    function init(){
        Givesrc();
    };
    
    init();