const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");
btn.addEventListener("click", message);
let index = 0;
const desArr = ["One", "Two", "Three", "Four"];
const classArr = ["info", "success", "error"];
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function message() {
  const frag = new DocumentFragment();
  const toast = document.createElement("div");
  toast.textContent = `message ${desArr[random(desArr.length - 1, 0)]}`;
  toast.classList.add("toast", classArr[random(classArr.length - 1, 0)]);
  frag.append(toast);
  toasts.append(frag);
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
