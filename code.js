const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?", "")

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


let movieName = prompt("Один из последних просмотренных фильмов ?")
let movieRate = prompt("На сколько оцените его ?")

PersonalMovieDB.movies[movieName] = movieRate


console.log(PersonalMovieDB);