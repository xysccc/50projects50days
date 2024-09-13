const btn = document.querySelector(".ripple");
btn.addEventListener("click", function (e) {
  console.log(e);
  const { offsetX, offsetY } = e;
  console.log(offsetX, offsetY);
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${offsetY}px`;
  circle.style.left = `${offsetX}px`;
  this.append(circle);
  setTimeout(() => circle.remove(), 500);
});
