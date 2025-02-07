const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const val = search.value;
  if (!val) return;
  const { data: data1 } = await axios.get(new URL(val, APIURL).href);
  displayUser(data1);
  const reposUrl = new URL(`${val}/repos`, APIURL);
  reposUrl.search = new URLSearchParams({ sort: "created" }).toString();
  const { data: data2 } = await axios.get(reposUrl.href);
  displayRepos(data2);
});
function displayRepos(data) {
  const repos = document.getElementById("repos");
  for (const v of data) {
    const a = document.createElement("a");
    a.className = "repo";
    a.target = "_blank";
    a.href = v.html_url;
    a.append(v.name);
    repos.append(a);
  }
}
function displayUser(data) {
  main.innerHTML = `<div class="card">
    <div>
      <img src=${data.avatar_url} alt="null" class="avatar">
    </div>
    <div class="user-info">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
      </ul>

    <div id="repos"></div>
    </div>
  </div>`;
}
