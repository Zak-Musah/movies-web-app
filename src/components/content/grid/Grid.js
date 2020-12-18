import React from "react";

import "./Grid.scss";

const Grid = (props) => {
  const { images } = props;
  return (
    <>
      <div className="grid">
        {images.map((image, i) => (
          <div key={i}>
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Details</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">Pam</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
