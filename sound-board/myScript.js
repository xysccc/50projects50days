const btnGroup = document.getElementById("buttons");
const audios = document.querySelectorAll("audio");
const btnArr = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const btns = btnGroup.getElementsByClassName("btn");
btnGroup.innerHTML = btnArr
  .map((btn) => `<button class="btn">${btn}</button>`)
  .join("");
btnGroup.addEventListener("click", playSound);
function playSound(e) {
  audios.forEach((audio) => {
    if (audio.id === e.target.textContent) {
      stopSound();
      audio.play();
    }
  });
}
function stopSound() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
