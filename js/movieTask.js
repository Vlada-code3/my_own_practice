/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания
//------------1-------
// const numberOfFilms = +prompt("how many films you have already watched", "");
// const objMovie = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };
// for (let i = 0; i < 2; i++) {
//   const a = prompt("The last watched film?", ""),
//     b = prompt("Assesment it please", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     objMovie.movies[a] = b;
//     console.log("done)))");
//   } else {
//     console.log("error");
//     i--; //vozrawaemsya nazad na odnu itteraciyu, t.e ewe raz zadaem voprosy
//   }
//   break;
// }
// if (objMovie.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (objMovie.count >= 10 && objMovie.count < 30) {
//   console.log("Вы классический зритель");
// } else if (objMovie.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("smth went wrong...oops");
// }

// console.log(objMovie);

