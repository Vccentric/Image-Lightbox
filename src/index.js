import React from "react";
import ReactDOM from "react-dom";
import ImageLightbox from "./containers/ImageLightbox";
import "normalize.css";
import "./styles/image-lightbox.scss";
import img1 from "../public/images/img_mountains_wide.jpg";
import img2 from "../public/images/img_nature_wide.jpg";
import img3 from "../public/images/img_snow_wide.jpg";

// local sample images
const images = [
  { src: img1, alt: "img-1" },
  { src: img2, alt: "img-2" },
  { src: img3, alt: "img-3" },
];
const data = {
  images: images,
};

// there are 2 ways of getting images (local / flickr)
// pass the string 'flickr', into parameter: 'options', in order to flickr images
// otherwise by default, it will get local images
ReactDOM.render(<ImageLightbox data={data} />, document.getElementById("root"));
