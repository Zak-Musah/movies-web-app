import axios from "axios";

require("dotenv").config();

const REQUEST_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

const API_KEY = `d5d55fb3718e0d405401600febe23ead`;

export const MOVIE_API_URL = async (type, page) => {
  const response = await axios.get(
    `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  return response;
};
