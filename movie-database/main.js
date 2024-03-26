import './style.css'
import { getAllMovies, getMoviesbyGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';

window.addEventListener('DOMContentLoaded', async () => {
  // const movies = await getAllMovies();
  // console.log(movies);
  // const movieContainer = document.getElementById('movie-container');
  showAllMovies();
  
});