const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const tasksNumber = document.querySelector(".footer span");

inputBox.onkeyup= () => {
  let userData = inputBox.value;//getting user entered value
  if(userData.trim() != 0){//앞과 뒤의 공백을 제거한 값이 0이 아니라면(!==를 쓰면 else가 작동을 안함)
  addBtn.classList.add("active");//active the add button
  }
  else{
    addBtn.classList.remove("active");
  }
}

showTasks();//calling showTasks function

//if user click on the add button
addBtn.onclick = ()=> {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New todo");//getting localStorage, type: string
  //console.log(getLocalStorage);
  if(getLocalStorage == null){
    listArr = [];//배열을 만들어 값 넣을 준비함
  }else{
    listArr = JSON.parse(getLocalStorage);//string객체를 json객체(objcet)로 변환
  }
  listArr.push(userData);//json객체(objcet)에 값 추가
  localStorage.setItem("New todo", JSON.stringify(listArr));//값이 추가된 json객체(object)를 string객체로 바꾸고 setItem(업데이트된것만 추가됨)
  showTasks();//calling showTasks function
}
//!!! addBtn.onclick에다가 showTasks기능을 한번에 구현할 수도 있었지만 함수형 프로그래밍으로서 1가지 함수,메서드에는 1가지 기능을 구현하는것이 적합하다(가독성, 간결성 높아짐)

//function to add task list inside ul
function showTasks(){
  let getLocalStorage = localStorage.getItem("New todo");
  if(getLocalStorage == null){
    listArr = [];//listArr은 원래 objcet임
  }else{
    listArr = JSON.parse(getLocalStorage);//objcet화
  }
let newLiTag = '';
listArr.forEach((element, index) => {//forEach함수의 두번째 매개변수는 해당 요소의 index를 받는다
  newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
  
});
todoList.innerHTML = newLiTag;//adding new li tag inside ul tag
inputBox.value="";//once task added leave the input field blank
let listLength = listArr.length;
tasksNumber.innerText = `you have ${listLength} pending tasks`;
}

//delete task function
function deleteTask(index){
  let getLocalStorage = localStorage.getItem("New todo");
  listArr = JSON.parse(getLocalStorage);//objcet화
  listArr.splice(index, 1);//delete or remove the paricular indexed li
  // after remove the li again update the local getLocalStorage
  //splice(배열 변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 배열에 추가할 요소)
  localStorage.setItem("New todo", JSON.stringify(listArr));
  showTasks();
  let listLength = listArr.length;
  tasksNumber.innerText = `you have ${listLength} pending tasks`;
}
