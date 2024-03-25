import './style.css'
import { getAllMovies } from './src/js/movies.js';

window.addEventListener('DOMContentLoaded', async () => {
  const movies = await getAllMovies();
  console.log(movies);
});