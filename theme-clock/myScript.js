const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const toggle = document.querySelector(".toggle");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.contains("dark")
    ? (toggle.textContent = "Light mode")
    : (toggle.textContent = "Dark mode");
});
function showTime() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();
  const second = d.getSeconds();
  const day = d.getDay();
  const hoursForClock = hour > 12 ? hour % 12 : hour;
  const circleEl = document.createElement("span");
  circleEl.classList.add("circle");
  circleEl.textContent = `${date}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} ${circleEl.outerHTML}`;
  timeEl.innerHTML = `${hoursForClock}:${min < 10 ? `0${min}` : min} ${
    hour > 12 ? "PM" : "AM"
  }`;
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    min,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    60,
    0,
    360
  )}deg)`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(() => {
  showTime();
}, 1000);

const init = () => {
  showTime();
};
init();
