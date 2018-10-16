import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';
import './image-lightbox.css';

// global variables
const data = [ // sample data
    { src: "./images/img_mountains_wide.jpg", alt: 'img-1' },
    { src: "./images/img_nature_wide.jpg", alt: 'img-2' },
    { src: "./images/img_snow_wide.jpg", alt: 'img-3' },
];

class ImageLightboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickThumbnail = this.clickThumbnail.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.changeSelectedImage = this.changeSelectedImage.bind(this);
        this.state = {
            lightboxOpen: false,
            images: data,
            selectedImage: null,
        };
    }

    // function to handle clicking on thumbnail
    clickThumbnail(event) {
        const index = parseInt(event.currentTarget.getAttribute('data-id'), 10);
        this.setState({ lightboxOpen: true, selectedImage: index });
    }

    // function to handle the closing of the lightbox
    closeLightbox(event) {
        this.setState({ lightboxOpen: false });
    }

    // function to handle of changing of the selected image
    changeSelectedImage(index) {
        this.setState({ selectedImage: index });
    }

    render() {
        const { lightboxOpen, selectedImage, images } = this.state;
        return (
            <div id="image-lightbox-container">
                <h1>Image Lightbox!!!</h1>
                <ImageGrid
                    images={images}
                    handleClickThumbnail={this.clickThumbnail}
                />
                <Lightbox
                    images={images}
                    selectedImage={selectedImage}
                    lightboxOpen={lightboxOpen}
                    handleCloseLightbox={this.closeLightbox}
                    handleChangeSelectedImage={this.changeSelectedImage}
                />
            </div>
        );
    }
}

export default hot(module)(ImageLightboxContainer);
