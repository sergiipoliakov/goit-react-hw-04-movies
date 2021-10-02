import axios from 'axios';

const base_URL = 'https://api.themoviedb.org';
const api_key = '933480853a6097b3d8c2abf892df31ca';

export const getMoviesByQuery = query => {
  return axios({
    method: 'GET',
    url: `${base_URL}/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`,
  });
};

export const getTrendingMovies = pageQuery => {
  return axios({
    method: 'GET',
    url: `${base_URL}/3/trending/all/day?page=1&api_key=${api_key}`,
  }).then(response => response.data);
};

export const getPopularMovies = pageQuery => {
  return axios({
    method: 'GET',
    url: `${base_URL}/3/movie/popular?page=1&api_key=${api_key}`,
  }).then(response => response.data);
};

export const getMovieDetalsById = movieId => {
  return axios({
    method: 'GET',
    url: `${base_URL}/3/movie/${movieId}?api_key=${api_key}&language=ru-RU`,
  });
};

export const getMovieReview = movieId => {
  return axios({
    method: 'GET',
    url: `${base_URL}/3/movie/${movieId}/reviews?api_key=${api_key}&language=ru-RU`,
  });
};

export const getMovieCast = movieId => {
  return axios({
    method: 'GET',

    url: `${base_URL}/3/movie/${movieId}/credits?api_key=${api_key}&language=ru-RU`,
  });
};
