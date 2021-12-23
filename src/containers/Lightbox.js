import React from "react";
import PropTypes from "prop-types";

const Lightbox = ({ images = [], lightboxState, setLightboxState }) => {
  const { toggleOpen, currentIndex } = lightboxState;
  const toggleClass = toggleOpen ? "" : "close";
  const currentImage = (Array.isArray(images) && images[currentIndex]) || {};
  return (
    <div id="lightbox" className={toggleClass}>
      <div id="overlay"></div>
      <div id="modal">
        <button
          id="close"
          onClick={() => close(lightboxState, setLightboxState)}
        >
          Close
        </button>
        <div id="controls-container">
          <button
            id="prev"
            onClick={() => prev(lightboxState, setLightboxState)}
          >
            &lt;&lt;
          </button>
          <div id="image-container">
            <img
              className="full-image"
              src={currentImage.src}
              alt={currentImage.alt}
            />
            <span id="caption">{currentImage.alt}</span>
          </div>
          <button
            id="next"
            onClick={() =>
              next(images.length - 1, lightboxState, setLightboxState)
            }
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export const close = (lightboxState, setLightboxState) => {
  setLightboxState({
    ...lightboxState,
    toggleOpen: false,
  });
};

export const prev = (lightboxState, setLightboxState) => {
  const { currentIndex } = lightboxState;
  const index = currentIndex - 1;
  if (index >= 0) {
    setLightboxState({
      ...lightboxState,
      currentIndex: index,
    });
  }
};

export const next = (max, lightboxState, setLightboxState) => {
  const { currentIndex } = lightboxState;
  const index = currentIndex + 1;
  if (index <= max) {
    setLightboxState({
      ...lightboxState,
      currentIndex: index,
    });
  }
};

Lightbox.propTypes = {
  images: PropTypes.array,
  lightboxState: PropTypes.object,
  setLightboxState: PropTypes.func,
};

export default Lightbox;
