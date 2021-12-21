import React from "react";
import PropTypes from "prop-types";

const Lightbox = ({ isOpen = false, images = [], currentIndex = 0 }) => {
  const toggleOpen = isOpen ? "" : "close";
  const currentImage = (Array.isArray(images) && images[currentIndex]) || {};
  return (
    <div id="lightbox" className={toggleOpen}>
      <div id="overlay"></div>
      <div id="modal">
        <button id="close">Close</button>
        <div id="controls-container">
          <button id="prev">&lt;&lt;</button>
          <div id="image-container">
            <img
              className="full-image"
              src={currentImage.src}
              alt={currentImage.alt}
            />
            <span id="caption">{currentImage.alt}</span>
          </div>
          <button id="next">&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  isOpen: PropTypes.bool,
  images: PropTypes.array,
  currentIndex: PropTypes.number,
};

export default Lightbox;
