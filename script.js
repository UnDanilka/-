"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


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
console.log(personalMovieDB);


