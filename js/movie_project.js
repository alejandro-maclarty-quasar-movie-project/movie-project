"use strict";

console.log("Link Test");
console.log("---------");

// api
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"

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
    let html = "";
    console.log("in getMovies under remove")
    return fetch(glitchURL)
        .then((response) => response.json())
        .then((movies) => {
            var movieList = document.querySelector(".content")
            movies.forEach((movie) => {
                var html = `
                    <div class="movieTitle">Title: ${movie.title}</div>
                    <div class="movieRating">Rating: ${movie.rating}/10</div>
                    <div class="movieYear">Year: ${movie.year}</div>
                    <div class="moviePlot">Plot: ${movie.plot}</div>
                    <div class="movieGenre">Genre: ${movie.genre}</div>
                    <button type="submit" class="button removeMovie ${movie.id}" data-id=${movie.id}>Remove Movie</button>
                    <button type="submit" class="button editMovie ${movie.id}" data-id=${movie.id}>Edit Movie</button>
                    <hr>`
                movieList.innerHTML += html;
            })
        });
}

// document.querySelector(".editMovie")addEventListener("click", function (e) {
//                     console.log("editmovie click test")
//     }
// END GET MOVIES
// END LOADING...

// BEGIN REMOVE MOVIE BY ID
document.query(".editMovie").addEventListener("click", function () {
        console.log("editmovie click:")
        // console.log(e.target.getAttribute("data-id"))
        // removeMovieById(e.target.getAttribute("data-id"));
    }
)
document.addEventListener("click", function (e) {
        console.log("on click message:")
        console.log(e.target.getAttribute("data-id"))
        removeMovieById(e.target.getAttribute("data-id"));
    }
)

function removeMovieById(id) {
    let options = {
        method: 'DELETE'
    }
    fetch(`${glitchURL}/${id}`, options).then(movie => {
        console.log(movie)
        getMovies()
    })
}

// END REMOVE MOVIE BY ID


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



