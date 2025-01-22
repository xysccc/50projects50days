let idx = 0;
const doms = {
  tabs: document.querySelector("nav ul"),
  imgs: document.querySelector(".phone"),
};
function highLight(parentDom, idx, domType, className) {
  const activeDom = parentDom.querySelector(`${domType}.${className}`);
  if (activeDom) activeDom.classList.remove(className);
  parentDom.children[idx].classList.add(className);
}
function highLighttabs(idx) {
  highLight(doms.tabs, idx, "li", "active");
}
function showImg(idx) {
  highLight(doms.imgs, idx, "img", "show");
}
doms.tabs.addEventListener("click", function (e) {
  const activeIdx = [...doms.tabs.children].findIndex(
    (v) => v === e.target.closest("li")
  );
  if (activeIdx === idx) return;
  highLighttabs(activeIdx);
  showImg(activeIdx);
  idx = activeIdx;
});
