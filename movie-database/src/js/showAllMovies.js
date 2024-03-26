import { getAllMovies } from "./movies.js";

async function showAllMovies() {
    const movies = await getAllMovies();
    const movieContainer = document.getElementById("movie-container");

    movies.forEach(movie => {
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
        movieContainer.appendChild(movieCard);
    });
}

export { showAllMovies };