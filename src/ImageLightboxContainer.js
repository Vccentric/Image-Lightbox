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
        this.clickLightboxImage = this.clickLightboxImage.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.state = {
            lightboxOpen: false,
            images: data,
            currentImage: {},
        };
    }

    // function to handle clicking on thumbnail
    clickThumbnail(event) {
        const index = parseInt(event.currentTarget.getAttribute('data-id'), 10);
        const { images } = this.state;
        const image = images[index];
        this.setState({ lightboxOpen: true, currentImage: image });
    }

    // function to handle clicking on full image inside the lightbox
    clickLightboxImage(event) {
        console.log('click lightbox image');
        // TODO
    }

    // function to handle the closing of the lightbox
    closeLightbox(event) {
        this.setState({ lightboxOpen: false });
    }

    render() {
        const { lightboxOpen, currentImage, images } = this.state;
        return (
            <div id="image-lightbox-container">
                <h1>Image Lightbox!!!</h1>
                <ImageGrid
                    images={images}
                    handleClickThumbnail={this.clickThumbnail}
                />
                <Lightbox
                    image={currentImage}
                    lightboxOpen={lightboxOpen}
                    handleClickLightboxImage={this.clickLightboxImage}
                    handleCloseLightbox={this.closeLightbox}
                />
            </div>
        );
    }
}

export default hot(module)(ImageLightboxContainer);
