const doms = {
  ipt: document.getElementById("range"),
  label: document.querySelector(".range-container label"),
};
function changeLabelPosition(val) {
  doms.label.style.left = `${scale(val, 0, 100, -30, 250)}px`;
}
doms.ipt.addEventListener("input", (e) => {
  doms.label.textContent = e.target.value;
  changeLabelPosition(e.target.value);
});
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
