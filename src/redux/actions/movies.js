import {
  MOVIE_LIST,
  SET_ERROR,
  RESPONSE_PAGE,
  LOAD_MORE_RESULTS,
  MOVIE_TYPE,
} from "../types";
import { MOVIE_API_URL } from "../../services/service";

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = response.data;
    const payload = {
      page,
      totalPages: total_pages,
    };

    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = response.data;
    const payload = {
      page,
      totalPages: total_pages,
    };

    dispatchMethod(
      LOAD_MORE_RESULTS,
      { list: results, page: payload.page, totalPages: payload.totalPages },
      dispatch,
    );
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error.response.data.message || error.response.data.status_message,
        statusCode: error.response.status,
      };
      dispatchMethod(SET_ERROR, payload, dispatch);
    }
  }
};

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
  const payload = { page, totalPages };
  dispatchMethod(RESPONSE_PAGE, payload, dispatch);
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};

export const setMovieType = (type) => async (dispatch) => {
  dispatchMethod(MOVIE_TYPE, type, dispatch);
};
