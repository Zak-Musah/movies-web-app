import React from "react";

import "./MainContent.scss";
import Slideshow from "../slide-show/Slideshow";
import Grid from "../grid/Grid";
import { images } from "../../Helpers/constants";

const MainContent = () => {
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-model-title">
        <div className="modelType">Models</div>
        {/* <div className="paginate">Paginate</div> */}
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
