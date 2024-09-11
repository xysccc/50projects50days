const text = document.getElementById("textarea");
const tags = document.getElementById("tags");
const boxs = tags.getElementsByClassName("tag");
text.focus();
text.addEventListener("keyup", (e) => {
  createChoice(tags, text);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect(tags);
  }
});
function createChoice(tags, text) {
  tags.innerHTML = text.value
    .split(",")
    .filter((v) => v.trim() !== "")
    .map((choice) => `<span class="tag">${choice.trim()}</span>`)
    .join("");
}
function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    randomTag && highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 10);
  }, times);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function pickRandomTag() {
  return boxs[Math.floor(Math.random() * boxs.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
