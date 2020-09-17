"use strict";

const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    toggleVisibleMyDB:function(){
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }
        else{
            personalMovieDB.privat = false;
        }
    },
    start: function(){
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?",'');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?",'');
    }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
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
    },
    showMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i < 4; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre != null && genre != ''){
                personalMovieDB.genres.push(genre);
            }
            else{
                i--;
            }   
        }
        personalMovieDB.genres.forEach(function(value, index){
            console.log(`Любимый жанр ${index + 1} - это ${value}`) ;
        });
    }

};


