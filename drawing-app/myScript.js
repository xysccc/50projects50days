const doms = {
  strokeWidth: document.getElementById("size"),
  addBtn: document.getElementById("increase"),
  delBtn: document.getElementById("decrease"),
  color: document.getElementById("color"),
  clear: document.getElementById("clear"),
  canvas: document.getElementById("canvas"),
};
let strokeWidth = +doms.strokeWidth.textContent;
let strokeColor = doms.color.value;
let isDraw = false;
let lastX;
let lastY;

const ctx = doms.canvas.getContext("2d");
function init() {
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
}
init();
function strokeWidthChange() {
  this.id === "increase"
    ? (strokeWidth += 5)
    : strokeWidth > 5 && (strokeWidth -= 5);
  doms.strokeWidth.textContent = strokeWidth;
  ctx.lineWidth = strokeWidth;
}
function colorChange() {
  strokeColor = this.value;
  ctx.strokeStyle = strokeColor;
}
function drawLine(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
}
function drawCircle(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, strokeWidth / 2, 0, Math.PI * 2);
  ctx.fillStyle = strokeColor;
  ctx.fill();
}
function mousemove(e) {
  if (isDraw) {
    drawCircle(ctx, e.offsetX, e.offsetY);
    drawLine(ctx, e.offsetX, e.offsetY);
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
}
function mousedown(e) {
  isDraw = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
}
function mouseup() {
  isDraw = false;
}
function clear() {
  ctx.clearRect(0, 0, doms.canvas.width, doms.canvas.height);
}
doms.addBtn.addEventListener("click", strokeWidthChange);
doms.delBtn.addEventListener("click", strokeWidthChange);
doms.color.addEventListener("change", colorChange);
doms.canvas.addEventListener("mousemove", mousemove);
doms.canvas.addEventListener("mousedown", mousedown);
doms.canvas.addEventListener("mouseup", mouseup);
doms.clear.addEventListener("click", clear);
