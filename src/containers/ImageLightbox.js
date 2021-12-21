import React from "react";
import PropTypes from "prop-types";
import Lightbox from "./Lightbox";

const ImageLightbox = ({ data = {} }) => {
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
      <Lightbox isOpen={true} images={data.images} currentIndex={0} />
    </div>
  );
};

ImageLightbox.propTypes = {
  data: PropTypes.object,
};

export default ImageLightbox;
