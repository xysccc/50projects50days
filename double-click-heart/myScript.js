let count = 0;
const card = document.querySelector(".loveMe");
const times = document.getElementById("times");
function doubleClick(fn) {
  let lastTime;
  return function () {
    const timeStamp = Date.now();
    if (lastTime && timeStamp - lastTime <= 500) {
      fn.apply(this, arguments);
    }
    lastTime = Date.now();
  };
}
function handleDoubleClick(e) {
  const { offsetX: x, offsetY: y } = e;
  const i = document.createElement("i");
  i.style.top = `${y}px`;
  i.style.left = `${x}px`;
  i.classList.add("fas", "fa-heart");
  card.append(i);
  renderCount(++count);
  setTimeout(() => i.remove(), 600);
}
card.addEventListener("click", doubleClick(handleDoubleClick));
function renderCount(count) {
  times.textContent = count;
}
