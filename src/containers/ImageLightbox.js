import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "./Lightbox";

const ImageLightbox = ({ data = {} }) => {
  // setup lightbox state
  const [lightboxState, setLightboxState] = useState({
    toggleOpen: true,
    currentIndex: 0,
  });

  // setup images for image grid
  const imageItems = data.images?.map((image, index) => {
    const key = index * Math.random();
    return (
      <li key={key}>
        <img className="thumbnail" src={image.src} alt={image.alt} />
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

ImageLightbox.propTypes = {
  data: PropTypes.object,
};

export default ImageLightbox;
