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
          X
        </button>
        <div className="image-container">
          <div className="full-image">
            <img
              className="selected-image"
              src={currentImage.src}
              alt={currentImage.alt}
              onClick={close}
            />
          </div>
          <span className="caption">{currentImage.alt}</span>
        </div>
        <div className="controls-container">
          <button className="prev" onClick={prev}>
            &lt;&lt; PREV
          </button>
          <button className="next" onClick={next}>
            NEXT &gt;&gt;
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
