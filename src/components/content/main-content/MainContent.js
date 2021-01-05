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
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const movies = useSelector((state) => state.movies);
  const moviesArray = movies.list;
  const page = movies.page;
  const movieType = movies.movieType;
  const total_pages = movies.totalPages;

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
  const HEADER_TYPE = {
    now_playing: "Now Playing",
    popular: "Popular",
    top_rated: "Top Rated",
    upcoming: "Upcoming",
  };

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
        <div className="modelType">{HEADER_TYPE[movieType]}</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={total_pages}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
