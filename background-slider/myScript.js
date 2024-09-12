const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");
let idx = 0;
const maxIdx = slides.length - 1;
function prev() {
  idx-- === 0 && (idx = maxIdx);
  changeImage();
}
function next() {
  idx++ === maxIdx && (idx = 0);
  changeImage();
}
function changeImage() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[idx].classList.add("active");
  changeBgToBody();
}
function changeBgToBody() {
  body.style.backgroundImage = slides[idx].style.backgroundImage;
}
left.addEventListener("click", prev);
right.addEventListener("click", next);
changeBgToBody();
