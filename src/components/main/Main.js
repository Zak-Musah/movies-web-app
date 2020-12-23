import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainContent from "../content/main-content/MainContent";
import Spinner from "../spinner/Spinner";
import {
  loadMoreMovies,
  setResponsePageNumber,
} from ".../../../src/redux/actions/movies";
import "./Main.scss";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const movies = useSelector((state) => state.movies);
  const moviesArray = movies.list;
  const page = movies.page;
  const totalPages = movies.totalPages;
  const dispatch = useDispatch();
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    dispatch(loadMoreMovies("now_playing", page));
    // dispatch(setResponsePageNumber(currentPage, totalPages));
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (moviesArray.length > 0) setMovieData(moviesArray);
  }, [moviesArray]);
  console.log(page);
  console.log(moviesArray);

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const {
      top: bottomLineTop,
    } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      // fetch data
      fetchData();
    }
  };
  const fetchData = () => {
    let pageNumber = page;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      dispatch(loadMoreMovies("now_playing", pageNumber));
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll}>
        {loading ? <Spinner /> : <MainContent />}
      </div>
      <div ref={bottomLineRef}></div>
    </>
  );
};

export default Main;
