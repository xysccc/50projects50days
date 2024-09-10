const boxs = document.querySelectorAll(".box");
document.addEventListener("scroll", scrollAddBox);
function scrollAddBox() {
  boxs.forEach((box) => {
    console.log(box.getBoundingClientRect());
    const { top } = box.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    top < (viewHeight / 5) * 4
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}
scrollAddBox();
