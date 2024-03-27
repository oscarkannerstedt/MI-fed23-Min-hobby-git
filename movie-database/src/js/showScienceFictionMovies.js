import { getMoviesByGenre } from "./movies.js";

async function showScienceFictionMovies() {
    const scienceFictionMovies = await getMoviesByGenre('878');
    const scienceFictionMoviesContainer = document.getElementById("science-fiction-movies");
    const movieContainer = document.getElementById("movie-container");
    const actionMoviesContainer = document.getElementById("action-movies");
    const comedyMoviesContainer = document.getElementById("comedy-movies");
    const dramaMoviesContainer = document.getElementById("drama-movies");
    const topRatedMoviesContainer = document.getElementById("top-rated-movies");

    movieContainer.innerHTML = "";
    movieContainer.classList.add("hide");
    movieContainer.classList.remove("padded");

    actionMoviesContainer.innerHTML = "";
    actionMoviesContainer.classList.add("hide");
    actionMoviesContainer.classList.remove("padded");

    comedyMoviesContainer.innerHTML = "";
    comedyMoviesContainer.classList.add("hide");
    comedyMoviesContainer.classList.remove("padded");

    dramaMoviesContainer.innerHTML = "";
    dramaMoviesContainer.classList.add("hide");
    dramaMoviesContainer.classList.remove("padded");

    topRatedMoviesContainer.innerHTML = "";
    topRatedMoviesContainer.classList.add("hide");
    topRatedMoviesContainer.classList.remove("padded");

    scienceFictionMoviesContainer.classList.remove("hide");
    scienceFictionMoviesContainer.classList.add("padded");

    scienceFictionMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const movieTitle = document.createElement("h2");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = movie.title;

        const movieReleaseYear = document.createElement('p');
        movieReleaseYear.classList.add("movie-release-year");
        movieReleaseYear.textContent = `Release Year: ${movie.release_date.substring(0, 4)}`;

        const movieRating = document.createElement("p");
        movieRating.classList.add("movie-rating");
        movieRating.textContent = `Rating: ${movie.vote_average}`;

        const moviePoster = document.createElement("img");
        moviePoster.classList.add("movie-poster");
        moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        moviePoster.alt = `${movie.title} Poster`;

        movieCard.append(movieTitle, moviePoster, movieReleaseYear, movieRating);
        scienceFictionMoviesContainer.appendChild(movieCard);
    });
}

export { showScienceFictionMovies };