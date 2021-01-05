import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Rating from "../rating/Rating";
import "./Grid.scss";
import { getMovies } from ".../../../src/redux/actions/movies";
import { IMAGE_URL } from "../../../services/service";

const Grid = (props) => {
  const moviesArray = useSelector((state) => state.movies.list);

  return (
    <>
      <div className="grid">
        {moviesArray.map((data, i) => (
          <div key={uuidv4()}>
            <div
              className="grid-cell"
              style={{
                backgroundImage: `url(${IMAGE_URL}${data.poster_path})`,
              }}
            >
              <div className="grid-read-more">
                {/* <button className="grid-cell-button">Read More</button> */}
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
