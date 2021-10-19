"use strict";

console.log("Link Test");
console.log("---------");

// api(s)
const glitchURL = "https://spectacled-slender-reaper.glitch.me/movies"

// new movie
// let newMovie;
// let movieTitle = "";
// let movieRating = ""; // #/10
// let editMovie;

// const loadingImage =
const loadingImage = (`<img src="../img/loading-1.gif">`);

function loading() {
    document.querySelector("#content").innerHTML = (`${loadingImage}`);
}

// BEGIN LOADING... (WITH FETCH)
// BEGIN GET MOVIES
// var ready = (callback) => {
//     if (document.readyState != "loading") callback(loading);
//     else document.addEventListener("DOMContentLoaded", callback);
// }

function getMovies() {
    return fetch(glitchURL)
        .then((response) => response.json())
        .then((movie) => {
            for (let i = 0; i < movie.length; i++) {
                document.querySelector(".content").append(`
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

let rendered = function renderMovies(movies) {
    console.log(movies)
    var html = '';
    for (var i = 0; i < movies.length; i++) {
        html += renderCoffee(movies[i]);
    }
    return html;
}

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

// editMovie =
//     {
//       "title": "resident evil",
//       "rating": "5",
//       "poster": "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
//       "year": "2002",
//       "genre": "Action, Horror, Sci-Fi",
//       "director": "Paul W.S. Anderson",
//       "plot": "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
//       "actors": "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt",
//       // "id": 3
// }
// END EDIT MOVIE


// newMovie =
//     {
//         title: movieTitle,
//         // title: "Back to the Future",
//         rating
// :
// movieRating,
// // rating: 8
// }
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

