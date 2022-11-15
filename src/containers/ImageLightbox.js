import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "./Lightbox";

// initial state
const initState = {
  toggleOpen: false,
  currentIndex: 0,
};

// main container component
const ImageLightbox = ({ data = {}, localState = initState }) => {
  // setup state
  const [lightboxState, setLightboxState] = useState(localState);

  // setup elements
  const imageItems = data.images?.map((image, index) => {
    // setup variables
    const key = index * Math.random();
    return (
      <li key={key}>
        <img
          className="thumbnail"
          onClick={() => selectedImage(index, setLightboxState)}
          src={image.src}
          alt={image.alt}
        />
      </li>
    );
  });

  return (
    <div id="image-lightbox">
      <h1 id="header">Image Lightbox</h1>
      <ul id="image-grid">{imageItems}</ul>
      <Lightbox
        images={data.images}
        lightboxState={lightboxState}
        setLightboxState={setLightboxState}
      />
    </div>
  );
};

export const selectedImage = (index, setLightboxState) => {
  setLightboxState({
    toggleOpen: true,
    currentIndex: index,
  });
};

ImageLightbox.propTypes = {
  data: PropTypes.object,
  localState: PropTypes.object,
};

export default ImageLightbox;
