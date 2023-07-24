import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '9768baa5071faaf4c13ac6e91d2a589d';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
