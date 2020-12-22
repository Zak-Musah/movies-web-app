import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MainContent.scss";
import Slideshow from "../slide-show/Slideshow";
import Grid from "../grid/Grid";
// import { images } from "../../Helpers/constants";
import Paginate from "../paginate/Paginate";
import { getMovies } from ".../../../src/redux/actions/movies";
import { IMAGE_URL } from "../../../services/service";

const MainContent = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  const moviesArray = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies("now_playing", 1));
  }, []);

  useEffect(() => {
    if (moviesArray.length > 0) setMovies(moviesArray);
  }, [moviesArray]);

  const randomMovies = moviesArray
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`,
        },
        {
          id: 2,
          url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`,
        },
        {
          id: 3,
          url: `${IMAGE_URL}${randomMovies[2].backdrop_path}`,
        },
        {
          id: 4,
          url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`,
        },
      ];
      setImages(IMAGES);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-model-title">
        <div className="modelType">Now Playing</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={10}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
