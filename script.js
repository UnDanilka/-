"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
}
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        let movie = prompt('Один из последних просмотренных фильмов?');
        let rate = prompt('Как вы оцените его');
        if (movie != null && rate != null && movie != '' && rate != '' && movie.length < 50 && rate.length < 50 ){
            personalMovieDB.movies[movie] = rate;
        }
        else{
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }
    else if (10 <= personalMovieDB.count <= 30){
        alert('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30){
        alert('Вы киноман');
    }
    else{
        alert('Ошибка');
    }    
}
detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();


function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();


