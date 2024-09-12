const liters = document.getElementById("liters");
const smallCups = document.querySelectorAll(".cup-small");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((smallCup) => {
  smallCup.addEventListener("click", (e) => {
    smallCup.classList.toggle("full");
    const n = Statistical();
    changeWater(n);
  });
});
function Statistical() {
  return [...smallCups].reduce((pre, cur) => {
    return cur.classList.contains("full") && pre++, pre;
  }, 0);
}
function changeWater(n) {
  const percent = (100 * n) / smallCups.length || 0;
  if (percent === 0) {
    percentage.style.visibility = "hidden";
  } else if (percent === 100) {
    remained.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
  }
  liters.textContent = `${((100 - percent) * 2) / 100}L`;
  percentage.style.height = percentage.textContent = `${percent}%`;
}
