const doms = {
  todos: document.querySelector("ul#todos"),
  ipt: document.querySelector("input#todos"),
  form: document.getElementById("form"),
};
let todoList = getLocal() ?? [];
doms.form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(doms.ipt.value);
});

function addTodo(val) {
  if (!val) return;
  const newTodo = {
    text: val,
    completed: false,
  };
  todoList.push(newTodo);
  doms.ipt.value = "";
  updateListAndSetLocal();
}
function removeTodo(idx) {
  todoList.splice(idx, 1);
  updateListAndSetLocal();
}
function toggleTodo(idx) {
  todoList[idx].completed = !todoList[idx].completed;
  updateListAndSetLocal();
}
function updateList() {
  doms.todos.innerHTML = ``;
  const frag = new DocumentFragment();
  todoList.forEach((v, idx) => {
    const li = document.createElement("li");
    li.append(v.text);
    v.completed && li.classList.add("completed");
    li.addEventListener("click", () => toggleTodo(idx));
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      removeTodo(idx);
    });
    frag.append(li);
  });
  doms.todos.append(frag);
}
function setLocal() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
function getLocal() {
  return JSON.parse(localStorage.getItem("todoList"));
}
function updateListAndSetLocal() {
  updateList();
  setLocal();
}
updateList();
