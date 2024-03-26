import './style.css'
import { getAllMovies, getMoviesByGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';
import { showActionMovies } from './src/js/showActionMovies.js';

window.addEventListener('DOMContentLoaded', async () => {
  showAllMovies();

  document.getElementById('action-button').addEventListener('click', function() {
    console.log("klickat på action button");

    showActionMovies();
  });
  
});