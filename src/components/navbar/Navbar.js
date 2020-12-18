import React, { useState } from "react";

import "./Navbar.scss";
import logo from "./images/logo.svg";
const HEADER_LIST = [
  // {
  //   id: 1,

  //   name: "Home",
  //   type: "home",
  // },
  {
    id: 2,

    name: "Women",
    type: "women",
  },
  {
    id: 3,

    name: "Men",
    type: "men",
  },
  {
    id: 4,

    name: "About Us",
    type: "about_us",
  },
  {
    id: 5,

    name: "Why Us",
    type: "why_us",
  },
  {
    id: 6,

    name: "Contact us",
    type: "Contact_us",
  },
];

export const Navbar = () => {
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
            <i>
              <h8 style={{ marginTop: "5px" }}>A NAME MODEL</h8>
            </i>
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
              <li key={data.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
