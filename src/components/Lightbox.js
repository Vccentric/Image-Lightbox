import React from "react";
import PropTypes from "prop-types";

// light-box component
const Lightbox = ({ toggleOpen, currentImage = {}, close, prev, next }) => {
  const toggleClass = toggleOpen ? "" : "close";
  return (
    <div id="lightbox" className={toggleClass}>
      <div id="overlay"></div>
      <div id="modal">
        <button className="close" onClick={close}>
          Close
        </button>
        <div id="controls-container">
          <button className="prev" onClick={prev}>
            &lt;&lt;
          </button>
          <div id="image-container">
            <img
              className="full-image"
              src={currentImage.src}
              alt={currentImage.alt}
            />
            <span className="caption">{currentImage.alt}</span>
          </div>
          <button className="next" onClick={next}>
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  toggleOpen: PropTypes.bool,
  currentImage: PropTypes.object,
  close: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
};

export default Lightbox;
