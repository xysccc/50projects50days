const doms = {
  boxes: document.getElementById("boxes"),
  btn: document.getElementById("btn"),
};
function computedPosition(idx = 0) {
  let left = 0;
  let top = 0;
  const referenceWidth = 125;
  const n = 4;
  const row = Math.floor((idx - n) / n) + 1;
  left = (idx - row * n) * referenceWidth;
  top = row * referenceWidth;
  return `-${left}px -${top}px`;
}
function createBox(n) {
  const frag = new DocumentFragment();
  for (let i = 0; i < n; i++) {
    const box = document.createElement("div");
    box.className = `box`;
    box.style.backgroundPosition = computedPosition(i);
    frag.append(box);
  }
  doms.boxes.append(frag);
}
createBox(16);
function change() {
  doms.boxes.classList.toggle("big");
}
doms.btn.addEventListener("click", change);
