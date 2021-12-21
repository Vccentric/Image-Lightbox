import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "../components/Thumbnail";

const ImageLightbox = ({ data }) => {
  // setup images for image grid
  const images = data?.images?.map((image, index) => {
    const key = index * Math.random();
    return (
      <li key={key}>
        <Thumbnail src={image.src} alt={image.alt} />
      </li>
    );
  });

  return (
    <div id="image-lightbox">
      <h1 id="header">Image Lightbox</h1>
      <ul id="image-grid">{images}</ul>
    </div>
  );
};

ImageLightbox.propTypes = {
  data: PropTypes.object,
};

export default ImageLightbox;
