const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
async function getMovies(str) {
  const res = await fetch(str);
  const { results } = await res.json();
  showMovies(results);
  console.log(results);
}
function showMovies(movies) {
  main.innerHTML = movies
    .map(
      (movie) => `<div class="movie">
            <img src="${IMG_PATH}${movie.poster_path}" alt="Borderlands">
            <div class="movie-info">
          <h3>${movie.title}</h3>
          <span class="${getvoteAverage(movie.vote_average)}">${
        movie.vote_average
      }</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${movie.overview}
        </div>
        </div>`
    )
    .join("");
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");

  this[0].value !== ""
    ? getMovies(`${SEARCH_API}${this[0].value}`)
    : window.location.reload();
});
function getvoteAverage(mark) {
  if (mark >= 8) {
    return "green";
  } else if (mark >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
getMovies(API_URL);
