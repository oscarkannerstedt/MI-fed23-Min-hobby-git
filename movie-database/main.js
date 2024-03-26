import './style.css'
import { getAllMovies, getMoviesByGenre } from './src/js/movies.js';
import { showAllMovies } from './src/js/showAllMovies.js';
import { showActionMovies } from './src/js/showActionMovies.js';
import { showComedyMovies } from './src/js/showComedyMovies.js';
import { showDramaMovies } from './src/js/showDramaMovies.js';

window.addEventListener('DOMContentLoaded', async () => {
  const actionMoviesContainer = document.getElementById("action-movies");
  const comedyMoviesContainer = document.getElementById("comedy-movies");
  const dramaMoviesContainer = document.getElementById("drama-movies");


  showAllMovies();

  document.getElementById("action-button").addEventListener("click", function() {
    actionMoviesContainer.innerHTML = "";
    showActionMovies();
  });

  document.getElementById("comedy-button").addEventListener("click", function() {
    comedyMoviesContainer.innerHTML = "";
    showComedyMovies();
  });

  document.getElementById("drama-button").addEventListener("click", function() {
    dramaMoviesContainer.innerHTML = "";
    showDramaMovies();
  })
  
});