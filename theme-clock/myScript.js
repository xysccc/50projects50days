const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.contains("dark")
    ? (toggle.textContent = "Light mode")
    : (toggle.textContent = "Dark mode");
});
