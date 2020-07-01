const menuList = document.querySelectorAll('.menuList');
const iframe = document.querySelector('.iframeBox');

let pageNumber = 0;
for(let i = 0; i < menuList.length; i++){
    for(let y = 0; y < menuList[i].children.length; y++){
        menuList[i].children[y].addEventListener('click', function(){
            iframe.src = `../Recipe/Easy/Easy${i}-${y}.html`;
            console.log(iframe.src);
        })
        console.log(menuList[i].children[y]);
        pageNumber++;
    }
}

