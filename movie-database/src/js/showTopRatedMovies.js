import { getTopRatedMovies } from "./movies.js";

async function showTopRatedMovies() {
    const topRatedMovies = await getTopRatedMovies();
    const topRatedMoviesContainer = document.getElementById("top-rated-movies");
    const actionMoviesContainer = document.getElementById("action-movies");
    const movieContainer = document.getElementById("movie-container");
    const comedyMoviesContainer = document.getElementById("comedy-movies");
    const scienceFictionMoviesContainer = document.getElementById("science-fiction-movies");
    const dramaMoviesContainer = document.getElementById("drama-movies");
    const upcomingMoviesContainer = document.getElementById("upcoming-movies");

    movieContainer.innerHTML = "";
    movieContainer.classList.add("hide");
    movieContainer.classList.remove("padded");

    comedyMoviesContainer.innerHTML = "";
    comedyMoviesContainer.classList.add("hide");
    comedyMoviesContainer.classList.remove("padded");

    dramaMoviesContainer.innerHTML = "";
    dramaMoviesContainer.classList.add("hide");
    dramaMoviesContainer.classList.remove("padded");

    scienceFictionMoviesContainer.innerHTML = "";
    scienceFictionMoviesContainer.classList.add("hide");
    scienceFictionMoviesContainer.classList.remove("padded");

    actionMoviesContainer.innerHTML = "";
    actionMoviesContainer.classList.add("hide");
    actionMoviesContainer.classList.remove("padded");

    upcomingMoviesContainer.innerHTML = "";
    upcomingMoviesContainer.classList.add("hide");
    upcomingMoviesContainer.classList.remove("padded");

    topRatedMoviesContainer.classList.remove("hide");
    topRatedMoviesContainer.classList.add("padded");

    topRatedMovies.forEach(movie => {
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
        topRatedMoviesContainer.appendChild(movieCard);
    });
}

export { showTopRatedMovies };