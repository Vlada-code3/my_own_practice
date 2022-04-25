"use strict";
const str = "test";
console.log(str[2]);

//-----------METHODS----------

const string = "test";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//-------------METHOD KOTORYJ POMOGAET NAJTI KUSOCHEK STROKI I SKAZHET
// S KAKOGO INDEKSA ONA NACHINAETSYA

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //numeraciya nachinaetsya s 0
console.log(fruit.indexOf("k")); // ----otvet -1, esli takogo net

//-------------METODY KOTORYE IZMENYAYUT STROKI--------

const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.slice(3));
console.log(logg.slice(-5));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 3)); //ukaket s kakogo vyrezat i skolko simvolov

//-------------METODY RABOTY S CHISLAMI-------------

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
console.log(parseInt(test)); //12
console.log(parseFloat(test)); //12.2

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы



3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

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
showMyDB(objMovie.privat); // zavisit ot znacheniya v objekte privat, esli true - to objekt ne vyvedetsya, a jesli false to pokazhet v konsole

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    // zapisat mozhno tak
    //objMovie.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`)=>tak kod rabotaet bystree na mm sec
    objMovie.genres[i - 1] = genre; // zapisyvaem tak , potomu chto dlya polzovatelya budet vse nachinatsya s 1, a v massive zapisyvatsya dolzno s 0!!!
  }
}
writeYourGenres();
