const blurPx = 30;
const doms = {
  background: document.getElementById("background"),
  password: document.getElementById("password"),
};
doms.password.addEventListener("input", (e) => {
  console.log(e.target.value.length);
  const passwordLength = e.target.value.length;
  if (passwordLength > blurPx / 2) return;
  doms.background.style.filter = `blur(${blurPx - passwordLength * 2}px)`;
});
