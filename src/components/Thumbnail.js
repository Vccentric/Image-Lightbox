import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({ src, alt }) => {
  return <img className="thumbnail" src={src} alt={alt} />;
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Thumbnail;
