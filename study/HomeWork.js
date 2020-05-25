const btnForm = document.querySelector(".btn"),
    Button = btnForm.getElementsByTagName("button");


function MS_show(number){
     alert(`${Button[number-1].textContent} Button Click`)
}