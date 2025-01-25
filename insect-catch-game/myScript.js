const doms = {
  startBtn: document.getElementById("start-btn"),
  screens: document.querySelectorAll(".screen"),
  insects: document.querySelectorAll(".insects-list li"),
  gameContainer: document.getElementById("game-container"),
  score: document.getElementById("score"),
  time: document.getElementById("time"),
  message: document.getElementById("message"),
};
let count = 0;
let chooseInsectSrc = ``;
let second = 0;
function up(idx) {
  doms.screens[idx].classList.add("up");
}
function chooseInsect() {
  chooseInsectSrc = this.querySelector("img").src;
  up(1);
  addRandomInsect(chooseInsectSrc, 1);
  startTiming();
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function showMessage() {
  doms.message.classList.add("visible");
}
async function clickInsect() {
  doms.score.textContent = ++count;
  if (count === 20) showMessage();
  await removeDom(this);
  addRandomInsect(chooseInsectSrc, Math.floor(random(1, 3)));
}
function removeDom(taget) {
  const { promise, resolve } = Promise.withResolvers();
  taget.classList.add("caught");
  taget.addEventListener("transitionend", function () {
    this.remove();
    resolve();
  });
  return promise;
}
function addRandomInsect(src, n) {
  const frag = new DocumentFragment();
  for (let i = 0; i < n; i++) {
    const insect = document.createElement("div");
    insect.className = `insect`;
    insect.style.top = `${random(100, window.innerHeight - 100)}px`;
    insect.style.left = `${random(100, window.innerWidth - 100)}px`;
    insect.innerHTML = `<img src="${src}" alt="mosquito" style="transform: rotate(${random(
      0,
      360
    )}deg)">`;
    insect.addEventListener("click", clickInsect);
    frag.append(insect);
  }
  doms.gameContainer.append(frag);
}
function startTiming() {
  setInterval(() => {
    second++;
    let min = Math.floor(second / 60);
    let sec = second % 60;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    doms.time.textContent = `Time: ${min}:${sec}`;
  }, 1000);
}
doms.insects.forEach((v) => {
  v.addEventListener("click", chooseInsect);
});
doms.startBtn.addEventListener("click", () => up(0));
