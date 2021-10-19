"use strict";

console.log("Link Test");
console.log("---------");

// api
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"



// Without jQuery
// Define a convenience method and use it
var ready = (callback) => {
    console.log("var ready test")
  if (document.readyState != "loading") callback(loading());
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    console.log("ready function test")
getMovies()
});

function loading() {
    document.querySelector("body").innerHTML = (`<div class="loader">`);
    getMovies()
}


// BEGIN LOADING... (WITH FETCH)
// BEGIN GET MOVIES
function getMovies() {
    // var body = document.querySelector(".loader");
    // body.classList.remove("loader");
    console.log("in getMovies under remove")
    return fetch(glitchURL)
        .then((response) => response.json())
        .then()

        .then((movie) => {
            for (let i = 0; i < movie.length; i++) {
                document.querySelector(".content").innerHTML =
                    (`
                <div class="movieTitle">Title: ${movie[i].title}</div>
                <div class="movieRating">Rating: ${movie[i].rating}/10</div>
                `)
            }
            // console.log(movie)

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

