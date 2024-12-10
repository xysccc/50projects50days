const ipt = document.getElementById("speed");
const text = document.getElementById("text");
let speed = 500;
let idx = 1;
ipt.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
addText("hello xys!!!", text);
function addText(str, dom) {
  const v = str.slice(0, idx);
  dom.textContent = v;
  idx++;
  if (idx > str.length) idx = 1;
  setTimeout(() => {
    addText(str, dom);
  }, speed);
}
