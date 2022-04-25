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
// const numberOfFilms = +prompt("How many films did you watch already?", "");

// console.log(numberOfFilms);
// // ------2-------
// const objMovie = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };
// // ------3-----
// let a = prompt("The last watched film?", ""),
//   b = prompt("Assesment it please", ""),
//   c = prompt("The last watched film?", ""),
//   d = prompt("Assesment it please", "");

// objMovie.movies[a] = b;
// objMovie.movies[c] = d;
// console.log(objMovie);

// ----------LOGICAL OPERATORS && || --------------------

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

// ---------------------Выполняется ли условие--------------
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

// ------------Выполняется ли условие?-----------

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// ------------Выполняется ли условие?----------

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

// ----------------Циклы------------

// let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// ---------------------------
// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// ---------------

// first: for (let i = 1; i < 3; i++) {
//   console.log(`first level :${i}`);
//   for (let j = 0; j < i; j++) {
//     console.log(`second level :${j}`);
//     for (let q = 0; q < 3; q++) {
//       if (q === 2) continue first;
//       console.log(`third level :${q}`);
//     }
//   }
// }
// --------------------------------
// Место для первой задачи pri pomowi cykla vyvesti ot 5-10 vkluchitelno

// function firstTask() {
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
// }
// firstTask();

// Место для второй задачи pri pomowi cykla forvyvesti chisla ot 20-10 v obratnom poryadke.Kogda cykl dojdet do 13 ostanovit vse
// function secondTask() {
// first: for (i = 20; i > 10; i--) {
//   if (i === 13) break first;
//   console.log(i);
// }
// }
// secondTask();

// Место для третьей задачи pri pomowi for vyvesti tolko chetnye chisla ot 2-10 vkluchitelno
// function thirdTask() {
// for (i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }
// }
// thirdTask();

// Место для четвертой задачи perepisat cykl s while chtoby ostalsya tot zhe resultat, t.e vyvedet tolko nechetnye chisla

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (++i <= 16 || i % 2 === 0) {
//   console.log(i);
//   ++i;
// }

// function fourthTask() {
// let i = 2;
// while (++i <= 16 || i % 2 === 0) {
//   console.log(i);
//   ++i;
// }
// }
// fourthTask();

// -----------------5----------Место для пятой задачи zapolnite massiv 5-10-------------------

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
//   }
//   //   // Не трогаем
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }
// fifthTask();

// for (let i = 0; i < 10; i++) {
//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   console.log(i); // 1, затем 3, 5, 7, 9
// }

// ---------------------------ZADACHI S MASSIVAMI------------------------------

// ---------------------1---------------// Место для первой задачи ZAPOLNITE NOVYJ MASSIV REZULTCHISLAMI IZ STAROGO ARR.
//  KOLLICHESTVO ELEMENTOV MOZHNO POLUCHIT KAK ARR.LENGHT, K ELEMENTAM OBRAWATSYA ARR[0]

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   console.log(result);
//   return result;
// }

// firstTask();

//-------------------2----------------------------

// // Место для второй задачи
// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   // Пишем решение вот тут

//   // Не трогаем
//   return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   // Пишем решение вот тут

//   // Не трогаем
//   return result;
// }

