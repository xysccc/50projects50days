const labels = document.querySelectorAll(".form-control label");
labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (item, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${item}</span>`
    )
    .join("");
});

// const labels = document.querySelectorAll(".form-control label");
// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });
