let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNan(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}


start();

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movieName = prompt("Один из последних просмотренных фильмов ?")
        const movieRate = prompt("На сколько оцените его ?")
    
        if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName < 50) {
            PersonalMovieDB.movies[movieName] = movieRate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно много фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('There is an error');
    }
}

detectPersonalLevel()


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`)
    for (let i = 0; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);


