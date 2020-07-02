const menuList = document.querySelectorAll('.menuList'), 
    SliderBox = document.querySelector('.SliderBox');
const iframe = document.querySelector('.iframeBox');

function changeSrc(){
    for(let i = 0; i < menuList.length; i++){
        for(let y = 0; y < menuList[i].children.length; y++){
            menuList[i].children[y].addEventListener('click', function(){
                SliderBox.classList.remove('show');
                SliderBox.classList.add('hide');
                iframe.classList.remove('hide');
                iframe.classList.add('show');
                iframe.src = `../Recipe/Easy/Easy${i}-${y}.html`;
            })
        }
    }
}

function init(){
    SliderBox.classList.add('show');
    iframe.classList.add('hide');
    changeSrc();
}

init();

