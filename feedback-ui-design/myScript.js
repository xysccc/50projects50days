const doms = {
  ratings: document.querySelector(".ratings-container"),
  btn: document.getElementById("send"),
  panel: document.querySelector("#panel"),
};
let selectedRating = `Satisfied`;
function highLight(parentDom, target, domType, className) {
  const activeDom = parentDom.querySelector(`${domType}.${className}`);
  if (activeDom === target) return;
  if (activeDom) activeDom.classList.remove(className);
  [...parentDom.children].find((v) => v === target).classList.add(className);
}
doms.ratings.addEventListener("click", (e) => {
  const target = e.target.closest(".rating");
  highLight(doms.ratings, target, "div", "active");
  selectedRating = target.querySelector("small").innerText;
});
doms.btn.addEventListener("click", () => {
  doms.panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});
