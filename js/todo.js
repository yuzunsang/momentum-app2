const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // 배열로 todo를 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "✅";

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.prepend(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos(); // localstorage에 save
}

toDoForm.addEventListener("submit", handleToDoSubmit);
