"use strict";

//let number = 5;
//const leftBordWidth = 1; 
//const obj = {
//    name: 'g',
//   age: 25,
//    isMarried: false
//};

//console.log(obj.age);

//let arr =['plum.png', 'orange.jpg', 6];
//console.log(arr[0]);



//команда для вопроса пользователю 
//const result =confirm('Are you here?');
//console.log(result);

//для вопроса и записи ответа пользователем, тип данных строка
//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);

//+prompt будет давать число 

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваше фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);

//интерполяция 
//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//Практика

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
console.log(personalMovieDB);