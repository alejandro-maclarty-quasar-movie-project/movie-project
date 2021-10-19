"use strict";

console.log("Link Test");
console.log("---------");

// api
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"

function loading() {
    document.querySelector("body").innerHTML = (`<div class="loader">`);
}


// BEGIN LOADING... (WITH FETCH)
// BEGIN GET MOVIES
function getMovies() {
    return fetch(glitchURL)
        .then((response) => response.json())
        .then((movie) => {
            for (let i = 0; i < movie.length; i++) {
                document.querySelector(".content").append
                (`
                <div class="movieTitle">Title: ${movie[i].title}</div>
                <div class="movieRating">Rating: ${movie[i].rating}/10</div>
                `)

            }
            console.log(movie)
        });
}

// END GET MOVIES
// END LOADING...

// getMovies().then((movies) => console.log(movies))
// var allMovies = getMovies().then((movies) => document.querySelector("#content").innerHTML = `${JSON.stringify(rendered)}`)

// BEGIN ADD MOVIE
function addMovie(newMovie) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie)
    }
    return fetch(glitchURL, options)
        .then((response) => response.json())
}

// let addMovieButton = document.getElementById("#submitNewMovie")
document.querySelector("#submitNewMovie").addEventListener("click", function (e) {
    e.preventDefault()
    console.log("hello")
    let addMovieSubmit = document.querySelector("#newMovieName").value
    let addMovieRateSubmit = document.querySelector("#newMovieRating").value
    let newMovie = {title: addMovieSubmit, rating: addMovieRateSubmit};
    console.log(newMovie)
    addMovie(newMovie)
})
// END ADD MOVIE


// BEGIN EDIT MOVIE
function editMovie(movie) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    }
    return fetch(`${glitchURL}/${movie.id}`, options)
        .then((response) => response.json())
}

// END EDIT MOVIE


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

