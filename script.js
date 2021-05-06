const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

inputBox.onkeyup= () => {
  let userData = inputBox.value;//getting user entered value
  if(userData.trim() != 0){//앞과 뒤의 공백을 제거한 값이 0이 아니라면(!==를 쓰면 else가 작동을 안함)
  addBtn.classList.add("active");//active the add button
  }
  else{
    addBtn.classList.remove("active");
  }
}

//if user click on the add button
addBtn.onclick = ()=> {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New todo");//getting localStorage, type: string
  console.log(getLocalStorage);
  if(getLocalStorage == null){
    listArr = [];
  }else{
    listArr = JSON.parse(getLocalStorage);//string객체를 json객체로 변환
  }
  listArr.push(userData);
  localStorage.setItem("New todo", JSON.stringify(listArr));//json객체를 string객체로 바꾸고 업데이트된것만 setItem.
}