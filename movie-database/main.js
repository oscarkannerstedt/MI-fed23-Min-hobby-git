import './style.css'
import { getAllMovies, getMoviesbyGenre } from './src/js/movies.js';

window.addEventListener('DOMContentLoaded', async () => {
  const movies = await getAllMovies();
  console.log(movies);
  const movieContainer = document.getElementById('movie-container');
  
});