// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const doms = {
  playBtn: document.getElementById("play"),
  timer: document.getElementById("timer"),
  resetBtn: document.getElementById("reset"),
};
let sec = 60;
let timer = null;
let isPlaying = false;
function renderTime() {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  doms.timer.textContent = `${m}:${s}`;
  setDeg(scale(sec, 60, 0, 0, 360));
}
renderTime();
function start() {
  timer = setInterval(() => {
    sec--;
    if (sec <= 0) reset();
    renderTime();
  }, 1000);
}
function suspend() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
function setDeg(val) {
  document.documentElement.style.setProperty("--degrees", `${val}deg`);
}
function updatePlayBtn(isPlaying) {
  doms.playBtn.classList.toggle("bg-green-500", isPlaying);
  doms.playBtn.children[0].classList.toggle("fa-pause", isPlaying);
  doms.playBtn.children[0].classList.toggle("fa-play", !isPlaying);
}
function reset() {
  suspend();
  sec = 60;
  setDeg(0);
  renderTime();
  isPlaying = false;
  updatePlayBtn(false);
}

doms.playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  isPlaying ? start() : suspend();
  updatePlayBtn(isPlaying);
});
doms.resetBtn.addEventListener("click", reset);
