import './style.css'
import { getAllMovies, getMoviesbyGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';

window.addEventListener('DOMContentLoaded', async () => {
  showAllMovies();

  document.getElementById('action-button').addEventListener('click', function() {
    console.log("klickat på action button");
  });
  
});