import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '9768baa5071faaf4c13ac6e91d2a589d';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getFilmSearch = async query => {
  const response = await axios.get(
    `${URL}/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}&page=1`
  );
  return response.data;
};

export const getFilmId = async id => {
  const response = await axios.get(
    `${URL}/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getFilmsCast = async id => {
  const response = await axios.get(
    `${URL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getFilmReviews = async id => {
  const response = await axios.get(
    `${URL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
