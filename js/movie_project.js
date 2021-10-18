"use strict";

console.log("Link Test");
console.log("---------");

// api(s)
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"

// new movie
// let newMovie;
let movieTitle = "";
let movieRating = ""; // #/10
let alteredMovie;

const loadingImage = (`<img src="../img/loading-1.gif">`)


document.querySelector(".content").innerHTML = (`${loadingImage}`)


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
// function addMovie(newMovie) {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie)
//     }
//     return fetch(glitchURL, options)
//         .then((response) => response.json())
// }

function addMovie(newMovie) {
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
let newMovie = {name: newMovieName, rating: newMovieRating};

console.log(newMovie)


// newMovie =
//     {
//         title: movieTitle,
//         // title: "Back to the Future",
//         rating
// :
// movieRating,
// // rating: 8
// }
;
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

function editMovie(movie) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie) //Convert the JS object into a JSON string before sending it up to the server.
    }
    return fetch(`${glitchURL}/${movie.id}`, options)
        .then((response) => response.json())
}

alteredMovie =
    {
        title: "Down",
        rating
:
"5",
    poster
:
"You got it" ,
    year
:
"2001",
    genre
:
"drama,history,war",
    director
:
"Ridely Scott",
    plot
:
"lorem" ,
    actors
:
"Daniel Craig",
    id
:
2
}