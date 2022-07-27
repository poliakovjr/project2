let numberOfFilms = +prompt("How much films have you seen?", " ");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false

};
const a = prompt("what movie did you watch last?", ""),
      b = prompt("What is your rating for this film?", ""),
      c = prompt("what movie did you watch last?", ""),
      d = prompt("What is your rating for this film?", "");

personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

let result = "";
const maxLen = 7;
for(let i = 1;i <= maxLen; i++){
    for(let j = 0; j < i; j++){
        result += "*";

    }

result += "\n";
}
console.log(result);