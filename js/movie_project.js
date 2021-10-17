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
getMovies().then((movies) => console.log(movies))


// BEGIN ADD MOVIE
function addMovie(dog) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)
    }
    return fetch(glitchURL, options)
        .then((response) => response.json())
}

newMovie = {
    title: movieTitle,
    // title: "Foundation",
    rating: movieRating,
    // rating: 8
};
// END ADD MOVIE
// addMovie(newMovie).then((newMovie)=>console.log(newMovie));



//Delete dog by ID
// function deleteDog(id) {
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     fetch(`${API_URL}/${id}`, options)
// }tps://spectacled-slender-reaper.glitch.me/movies"