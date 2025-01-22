const doms = {
  ipts: document.querySelector(".code-container"),
};
doms.ipts.children[0].focus();
Array.prototype.forEach.call(doms.ipts.children, (item, idx, arr) => {
  item.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // arr[idx + 1].focus()
      setTimeout(() => arr[idx + 1]?.focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => arr[idx - 1]?.focus(), 10);
    }
  });
});
