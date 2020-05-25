// localstorage에는 데이터를 저장 할 수 없다 오직 스트링만 저장 가능 
//따라서 객체를 저장시에 스트링으로 변환이 필요하다.
//이를 위해서는 JSON.stringify메소드를 사용 

const TodoForm = document.querySelector(".toDoform"),
    TodoInput = TodoForm.querySelector("input"),
    TodoList = document.querySelector(".TodoList");

const Todos = "Todos"; //localStorage의 키 값 이름 

let TodoAry = []; //Todo 값을 저장하기 위한 배열


//할 일을 TodoAry에 저장 후 localstorage에 저장하기 위한 함수
function saveTodo(){
    localStorage.setItem(Todos, JSON.stringify(TodoAry));
    //JSON.stringify는 todoary가 기본적으로 local 저장될때 데이터로 저장이 안되고 
    //배열 안의 값이 아닌 형태로 저장되기 때문에(예를 들어 12같은 값이 아닌 object 이런식)
    //형태를 string으로 변환시켜 데이터로 저장
}
function delTodo(event){
    const btn = event.target; //현재 버튼이 눌린 대상을 불러옴
    const parentli = btn.parentNode;//대상의 부모를 데려온다.
    TodoList.removeChild(parentli);//대상 부모의 부모에게서 removechild 메소드를 통해 버튼이 눌린 대상의 부모를 삭제
    const cleanTodo = TodoAry.filter(function(Todo){
        return (Todo.id !== parseInt(parentli.id));
    })
    TodoAry = cleanTodo;
    console.log(cleanTodo, TodoAry);
    console.log(parentli);
    saveTodo();
}

function paintTodo(ToDoValue){
    const li = document.createElement("li"); //li생성
    const span = document.createElement("span"); //span태그 생성
    const delbtn = document.createElement("button");//삭제버튼 생성
    delbtn.innerText = "✖"; //삭제 버튼의 값 
    delbtn.addEventListener("click", delTodo);
    li.appendChild(span); //span태그를 li태그 안에 삽입
    li.appendChild(delbtn); //span태그 삽입 후 삭제버튼 태그 삽입
    span.innerText = ToDoValue; //span태그 안에 입력창 안의 값 대입
    TodoList.appendChild(li); //마지막으로 li구성이 끝나면 ul태그에 삽입
    const AryObj = { 
        Todo : ToDoValue,
        id : TodoAry.length + 1,
    }; //할일을 객체를 만들어 해야될 일의 이름과 id부여
    TodoAry.push(AryObj); //객체를 todoAry배열안에 집어넣기
    saveTodo(); //localstorage안에 todoAry 값 저장 하기 위한 함수 
}
//todo리스트 값 입력시 발생 함수
function addTodo(event){
    event.preventDefault(); //이벤트 발생시 기본적으로 실행되는 현상 막기
    const currentTodo = TodoInput.value; //todo입력창의 값 가져오기
    paintTodo(currentTodo); //입력창의 값을 목록으로 표시하기 
    TodoInput.value = "";//입력창 비우기 
}

//Todo의 값 불러오기
function loadTodo(){
    const getTodo = localStorage.getItem(Todos);
    //localstorage의 todos키의 값들을 불러오기 위한 상수 
    if(getTodo !== null){
        const parsegetTodo = JSON.parse(getTodo);
        parsegetTodo.forEach(function(todoValue){
            paintTodo(todoValue.Todo);
        })
        //parsegetTodo는 배열이며 배열에서 제공하는 forEach메소드를 통해 parsegetTodo배열 내의
        //모든 요소들에 대하여 function적용 function의 내용은 배열 안의 객체안의 Todo값을 불러오는것
        //불러온 후 paintTodo함수를 통해 리스트로 표시 
    }
     //Todo의 값이 널이 아니라면 전에 적어놓은 할 일을 화면에 표시하기 위한 부분
}


function init(){
    loadTodo(); //전에 있던 todo값을 불러오기 위한 함수
    TodoForm.addEventListener("submit", addTodo) 
    //값을 불러오는거와 별개로 할 일이 새로 추가되어 엔터를 누르면 발생하는 함수 부여
}
init();