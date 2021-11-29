export const IMG_API = "https://image.tmdb.org/t/p/w1280";
const API_KEY = "api_key=60431590bdfc3f044c46d9b42735282b";
export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}&page=1`;
export const CAROUSEL_API = `https://api.themoviedb.org/3/trending/movie/day?${API_KEY}&page=1`;

export const MOVIE_API = `https://api.themoviedb.org/3/trending/movie/week?${API_KEY}&page=2`;

export const TV_API = `https://api.themoviedb.org/3/trending/tv/week?${API_KEY}&page=2`;
export const GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}&page=1`;
