import React from "react";
import { createRoot } from "react-dom/client";
import ImageLightbox from "./containers/ImageLightbox";
import "normalize.css";
import "./styles/image-lightbox.scss";
import images from "../data/images";

// setup sample images
const data = { images };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ImageLightbox data={data} />);
