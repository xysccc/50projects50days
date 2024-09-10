const splitLeft = document.querySelector(".split.left");
const splitRight = document.querySelector(".split.right");
const container = document.querySelector(".container");

function changeWidth() {
  if (this === splitLeft) {
    container.classList.remove("hover-right");
    container.classList.add("hover-left");
  } else {
    container.classList.remove("hover-left");
    container.classList.add("hover-right");
  }
}
splitLeft.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
splitLeft.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
splitRight.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

splitRight.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
