window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY >= nav.clientHeight + 120) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
