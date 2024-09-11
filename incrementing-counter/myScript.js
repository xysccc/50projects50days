const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  let count = 0;
  counter.textContent = count;
  console.dir(counter.dataset.target);
  setInterval(() => {
    if (count < counter.dataset.target) count++;
    counter.textContent = count;
  }, 1);
});
