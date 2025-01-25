const doms = {
  openBtn: document.querySelector("button.open-btn"),
  closeBtn: document.querySelector("button.close-btn"),
  navs: document.querySelectorAll(".nav"),
};
doms.openBtn.addEventListener("click", () => {
  // doms.blackNav.style.transform = `translateX(0%)`;
  // doms.redNav.style.transform = `translateX(0%)`;
  doms.navs.forEach((v) => v.classList.add("visible"));
});
doms.closeBtn.addEventListener("click", () => {
  // doms.blackNav.style.transform = `translateX(0%)`;
  // doms.redNav.style.transform = `translateX(0%)`;
  doms.navs.forEach((v) => v.classList.remove("visible"));
});
