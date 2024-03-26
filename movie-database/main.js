import './style.css'
import { getAllMovies, getMoviesByGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';
import { showActionMovies } from './src/js/showActionMovies.js';
import { showComedyMovies } from './src/js/showComedyMovies.js';

window.addEventListener('DOMContentLoaded', async () => {
  showAllMovies();

  document.getElementById("action-button").addEventListener("click", function() {
    showActionMovies();
  });

  document.getElementById("comedy-button").addEventListener("click", function() {
    console.log("klickat på komedi button");
    showComedyMovies();
  })
  
});