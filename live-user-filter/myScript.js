const doms = {
  result: document.getElementById("result"),
  searchIpt: document.getElementById("filter"),
};
let data = [];
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  return results;
}
function update(data = []) {
  const frag = new DocumentFragment();
  data.forEach((v) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src=${v.picture.large} alt=${v.name.first}>
                    <div class="user-info">
                      <h4>${v.name.first} ${v.name.last}</h4>
                      <p>${v.location.city}, ${v.location.country}</p>
                    </div>`;
    frag.append(li);
  });
  doms.result.replaceChildren(frag);
}
function search(val = "") {
  update(
    data.filter((v) =>
      `${v.name.first} ${v.name.last} ${v.location.city} ${v.location.country}`
        .toLowerCase()
        .includes(val.toLowerCase())
    )
  );
}
async function init() {
  data = await getData();
  update(data);
}
init();
doms.searchIpt.addEventListener("input", (e) => search(e.target.value));
