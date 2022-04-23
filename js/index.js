"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// ------1-----
const numberOfFilms = +prompt("How many films did you watch already?", "");

console.log(numberOfFilms);
// ------2-------
const objMovie = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
// ------3-----
let a = prompt("The last watched film?", ""),
  b = prompt("Assesment it please", ""),
  c = prompt("The last watched film?", ""),
  d = prompt("Assesment it please", "");

objMovie.movies[a] = b;
objMovie.movies[c] = d;
console.log(objMovie);