let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("how many films you have already watched", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("how many films you have already watched", "");
//   }
// }

// start();

const objMovie = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("The last watched film?", ""),
//       b = prompt("Assesment it please", "");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       objMovie.movies[a] = b;
//       console.log("done)))");
//     } else {
//       console.log("error");
//       i--; //vozrawaemsya nazad na odnu itteraciyu, t.e ewe raz zadaem voprosy
//     }
//     break;
//   }
// }
// rememberMyFilms();
// function detectPersonalLevel() {
//   if (objMovie.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (objMovie.count >= 10 && objMovie.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (objMovie.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("smth went wrong...oops");
//   }
// }

// detectPersonalLevel();

//----reshenie zadachi 2------
function showMyDB(hidden) {
  // hidden eto argumenty s objMovie
  if (!hidden) {
    // esli oni ne skryty
    console.log(objMovie);
  }
}
showMyDB(objMovie.privat);
