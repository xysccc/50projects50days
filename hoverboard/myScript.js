const doms = {
  container: document.getElementById("container"),
};
function setColor(dom, backgroundStr, boxShadowStr) {
  dom.style.background = backgroundStr;
  dom.style.boxShadow = boxShadowStr;
}
function setDefaultColor(dom) {
  setColor(dom, `rgb(29, 29, 29)`, `rgb(0, 0, 0) 0px 0px 2px`);
}
function randomColor(dom) {
  const rgb = randomRgb();
  setColor(dom, rgb, `${rgb} 0px 0px 2px, ${rgb} 0px 0px 2px`);
}
function creatSquare(n) {
  const fragment = new DocumentFragment();
  for (let i = 0; i < n; i++) {
    const square = document.createElement("div");
    square.className = `square`;
    setDefaultColor(square);
    square.addEventListener("mouseenter", () => randomColor(square));
    square.addEventListener("mouseleave", () => setDefaultColor(square));
    fragment.append(square);
  }
  doms.container.append(fragment);
}
function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
creatSquare(500);
