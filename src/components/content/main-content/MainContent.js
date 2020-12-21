import React, { useState } from "react";

import "./MainContent.scss";
import Slideshow from "../slide-show/Slideshow";
import Grid from "../grid/Grid";
import { images } from "../../Helpers/constants";
import Paginate from "../paginate/Paginate";

const MainContent = () => {
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
