const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.textContent = 0;
  function add() {
    const target = +counter.dataset.target;
    const increment = target / 200;
    const c = +counter.textContent;
    if (c < target) {
      counter.textContent = Math.ceil(c + increment);
      setTimeout(add, 1);
    } else {
      counter.textContent = target;
    }
  }
  add();
});
