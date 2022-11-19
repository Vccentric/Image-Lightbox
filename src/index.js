import React from "react";
import { createRoot } from "react-dom/client";
import ImageLightbox from "./containers/ImageLightbox";
import "normalize.css";
import "./styles/image-lightbox.scss";
import img1 from "../public/images/img_mountains_wide.jpg";
import img2 from "../public/images/img_nature_wide.jpg";
import img3 from "../public/images/img_snow_wide.jpg";

// local sample images
const images = [
  { src: img1, alt: "Spring Mountains" },
  { src: img2, alt: "Fall Mountains" },
  { src: img3, alt: "Winter Mountains" },
];
const data = { images };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ImageLightbox data={data} />);
