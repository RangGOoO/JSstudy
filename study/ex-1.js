//태그 생성
const body = document.body;
const div = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const form = document.createElement('form');

// 바디에 태그 삽입
document.body.append(div);
div.textContent = '컴퓨터';

document.body.append(form);
form.append(input);
form.append(btn);
btn.textContent = '입력';
const result = document.createElement('span');
document.body.append(result);
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(div.textContent[div.textContent.length-1] === input.value[0]){
        div.textContent = input.value;
        input.value = '';
        result.textContent = '딩동댕';
        input.focus();
    }else{
        result.textContent = '땡';
        input.value = '';
        input.focus();
    }
})

