const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열로 todo를 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // localStorage에 있는 item도 같이 삭제되어야 함
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "✅";

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDoObj.text;
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos(); // localstorage에 save
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// todo가 localStorage에 있다면 paint하기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
