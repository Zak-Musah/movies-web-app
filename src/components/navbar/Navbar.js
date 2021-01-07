import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  getMovies,
  setMovieType,
  setResponsePageNumber,
} from "../../redux/actions/movies";
import "./Navbar.scss";
import logo from "./images/logo.svg";

const HEADER_LIST = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: "now_playing",
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Popular",
    type: "popular",
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Top Rated",
    type: "top_rated",
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Upcoming",
    type: "upcoming",
  },
];
export const Navbar = () => {
  const [type, setType] = useState("now_playing");
  const movies = useSelector((state) => state.movies);
  const page = movies.page;
  const totalPages = movies.totalPages;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(type, page));
    dispatch(setResponsePageNumber(page, totalPages));
  }, [type]);

  const setMovieTypeUrl = (type) => {
    setType(type);
    dispatch(setMovieType(type));
  };

  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    setNavClass((p) => !p);
    setMenuClass((p) => !p);
    if (navClass) {
      document.body.classList.add("header-nav-open");
    } else {
      document.body.classList.remove("header-nav-open");
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img style={{ marginTop: "7px" }} height="45px" src={logo} alt="" />
          </div>
          <div
            className={`${
              menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"
            }`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? "header-nav header-mobile-nav" : "header-nav"
            }`}
          >
            {HEADER_LIST.map((data) => (
              <li
                key={data.id}
                className={
                  data.type === type
                    ? "header-nav-item active-item"
                    : "header-nav-item"
                }
                onClick={() => setMovieTypeUrl(data.type)}
              >
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
            {/* <input
              className="search-input"
              type="text"
              placeholder="Search for a movie"
            /> */}
          </ul>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  getMovies: PropTypes.func,
};
