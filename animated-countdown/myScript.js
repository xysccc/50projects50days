const doms = {
  nums: document.querySelectorAll(".nums span"),
  replay: document.getElementById("replay"),
  counter: document.querySelector(".counter"),
  final: document.querySelector(".final"),
};
let idx = 0;
function showCounter() {
  for (const v of doms.nums) {
    v.classList.value = "";
  }
  doms.nums[0].classList.add("in");
  doms.counter.classList.remove("hide");
  doms.final.classList.remove("show");
}
function hideCounter() {
  doms.counter.classList.add("hide");
  doms.final.classList.add("show");
}
function runAnimation() {
  const length = doms.nums.length - 1;
  doms.nums.forEach((v, idx) => {
    v.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== length) {
        v.classList.remove("in");
        v.classList.add("out");
      } else if (e.animationName === "goOut" && v.nextElementSibling) {
        v.nextElementSibling.classList.add("in");
      } else {
        hideCounter();
      }
    });
  });
}
runAnimation();
doms.replay.addEventListener("click", () => {
  showCounter();
  runAnimation();
});
