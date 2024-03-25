const API_KEY = '2fb155d31c13f91b00f05dc941e6e6ea';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

async function getAllMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error while fetching movies: ", error);
        return [];
    }
}

export { getAllMovies };