const doms = {
  dragBox: document.querySelector("[draggable]"),
  targets: document.querySelectorAll(".empty"),
};
function dragstart(e) {
  this.classList.add("hold");
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragend(e) {
  this.className = "fill";
}
function dragover(e) {
  // 一定要记住组织默认行为，不然不会触发drop事件
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}
function dragleave(e) {
  this.classList.remove("hovered");
}
function drop(e) {
  this.classList.remove("hovered");
  this.append(doms.dragBox);
}
doms.dragBox.addEventListener("dragstart", dragstart);
doms.dragBox.addEventListener("dragend", dragend);
doms.targets.forEach((v) => {
  v.addEventListener("dragover", dragover);
  v.addEventListener("dragleave", dragleave);
  v.addEventListener("dragenter", dragenter);
  v.addEventListener("drop", drop);
});
