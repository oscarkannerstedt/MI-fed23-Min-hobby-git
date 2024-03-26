import './style.css'
import { getAllMovies, getMoviesbyGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';

// Show all movies on first page
window.addEventListener('DOMContentLoaded', async () => {
  showAllMovies();
  
});