const loadingText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");
let percent = 0;
const blurring = () => {
  percent > 99 ? clearInterval(int) : percent++;
  loadingText.textContent = `${percent}%`;
  loadingText.style.opacity = scale(percent, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(percent, 0, 100, 30, 0)}px)`;
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const int = setInterval(blurring, 40);
