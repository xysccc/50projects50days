const doms = {
  ipt: document.getElementById("range"),
  label: document.querySelector(".range-container label"),
};
function changeLabelPosition(target) {
  const { width: iptWidth } = target.getBoundingClientRect();
  const { width: labelWidth } = doms.label.getBoundingClientRect();
  doms.label.style.left = `${scale(
    target.value,
    target.min,
    target.max,
    -labelWidth / 2 + 10,
    iptWidth - labelWidth / 2 - 10
  )}px`;
}
doms.ipt.addEventListener("input", (e) => {
  doms.label.textContent = e.target.value;
  changeLabelPosition(e.target);
});
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
