const insert = document.getElementById("insert");
document.addEventListener("keydown", showKeyInfo);
function showKeyInfo(e) {
  console.log(e);
  const Info = {
    key: e.key,
    code: e.code,
    keyCode: e.keyCode,
  };
  insert.innerHTML = Object.entries(Info)
    .map(
      ([key, val]) =>
        `<div class="key">${
          val === " " ? "Space" : val
        }<small>event.${key}</small></div>`
    )
    .join("");
}
