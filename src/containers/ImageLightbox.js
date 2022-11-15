import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "../components/Lightbox";

// initial state
const initState = {
  toggleOpen: false,
  currentIndex: 0,
};

// main container component
const ImageLightbox = ({ data = {}, localState = initState }) => {
  // setup state
  const [lightboxState, setLightboxState] = useState(localState);
  const { toggleOpen, currentIndex } = lightboxState;
  const max = data.images?.length || 0;

  // setup functions
  const close = () => {
    setLightboxState({
      toggleOpen: false,
      currentIndex,
    });
  };
  const prev = () => {
    let index = currentIndex - 1;
    index = index < 0 ? max - 1 : index;
    setLightboxState({
      toggleOpen,
      currentIndex: index,
    });
  };
  const next = () => {
    let index = currentIndex + 1;
    index = index >= max ? 0 : index;
    setLightboxState({
      toggleOpen,
      currentIndex: index,
    });
  };

  // setup elements
  const imageItems = data.images?.map((image, index) => {
    // setup variables
    const key = index * Math.random();

    // setup functions
    const selectedImage = () => {
      setLightboxState({
        toggleOpen: true,
        currentIndex: index,
      });
    };

    return (
      <li key={key}>
        <img
          className="thumbnail"
          onClick={selectedImage}
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
        toggleOpen={toggleOpen}
        currentImage={data?.images?.[currentIndex]}
        close={close}
        prev={prev}
        next={next}
      />
    </div>
  );
};

ImageLightbox.propTypes = {
  data: PropTypes.object,
  localState: PropTypes.object,
};

export default ImageLightbox;
