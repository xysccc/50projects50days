const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", change);
});
function change(e) {
  this?.parentNode.classList.toggle("active");
}
