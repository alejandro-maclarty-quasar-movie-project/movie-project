"use strict";

console.log("Link Test");
console.log("---------");

// api(s)
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"

// new movie
let newMovie;
let movieTitle = "";
let movieRating = ""; // #/10


// BEGIN LOADING... (WITH FETCH)
// BEGIN GET MOVIES
function getMovies() {
    return fetch(glitchURL)
        .then((response) => response.json())
}
// END GET MOVIES
// END LOADING...
// getMovies().then((movies) => console.log(movies))
var allMovies = getMovies().then((movies) => document.querySelector(".content").innerHTML = `${JSON.stringify(movies)}`)


// BEGIN ADD MOVIE
function addMovie(movie) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    }
    return fetch(glitchURL, options)
        .then((response) => response.json())
}

// newMovie = {
//     title: movieTitle,
    // title: "Back to the Future",
    // rating: movieRating,
    // rating: 8
// };
// END ADD MOVIE
// addMovie(newMovie).then((newMovie)=>console.log(newMovie));


// BEGIN REMOVE MOVIE BY ID
function removeMovieById(id) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch(`${glitchURL}/${id}`, options)
}
// END REMOVE MOVIE BY ID
