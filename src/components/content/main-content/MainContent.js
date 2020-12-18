import React from "react";

import "./MainContent.scss";
import Slideshow from "../slide-show/Slideshow";
const MainContent = () => {
  const images = [
    {
      url:
        "https://pam-gallery.s3.eu-central-1.amazonaws.com/IMG_7954_1.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url:
        "https://pam-gallery.s3.eu-central-1.amazonaws.com/DSC03171.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url:
        "https://pam-gallery.s3.eu-central-1.amazonaws.com/IMG_7477.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url:
        "https://pam-gallery.s3.eu-central-1.amazonaws.com/IMG_7925.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-model-title">
        {/* <div className="modelType">Models</div>
        <div className="paginate">Paginate</div> */}
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
