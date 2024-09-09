const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
let idx = 0;
const changWith = () => {
  progress.style.width = `${(idx * 100) / (circles.length - 1)}%`;
};
const update = () => {
  if (idx === 0) {
    btnPrev.disabled = true;
  } else if (idx === circles.length - 1) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
  circles.forEach((circle, i) => {
    i <= idx
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });
  changWith();
};

const next = () => {
  // ++idx === circles.length - 1
  //   ? btnNext.toggleAttribute("disabled")
  //   : btnPrev.removeAttribute("disabled");
  // circles.forEach((circle, i) => {
  //   circle.classList.toggle("active", i === idx);
  // });
  // changWith();
  idx < circles.length - 1 && idx++;
  update();
};
const prev = () => {
  // --idx === 0
  //   ? btnPrev.toggleAttribute("disabled")
  //   : btnNext.removeAttribute("disabled");
  // circles.forEach((circle, i) => {
  //   circle.classList.toggle("active", i === idx);
  // });
  // changWith();
  idx > 0 && idx--;
  update();
};
btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);
