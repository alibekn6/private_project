const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?", "")

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

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

