import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';
import './image-lightbox.css';

class ImageLightboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickThumbnail = this.clickThumbnail.bind(this);
        this.clickLightboxImage = this.clickLightboxImage.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.state = {
            lightboxOpen: false,
        };
    }

    // function to handle clicking on thumbnail
    clickThumbnail(event) {
        this.setState({ lightboxOpen: true });
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
        const { lightboxOpen } = this.state;
        return (
            <div id="image-lightbox-container">
                <h1>Image Lightbox!!!</h1>
                <ImageGrid handleClickThumbnail={this.clickThumbnail} />
                <Lightbox
                    lightboxOpen={lightboxOpen}
                    handleClickLightboxImage={this.clickLightboxImage}
                    handleCloseLightbox={this.closeLightbox}
                />
            </div>
        );
    }
}

export default hot(module)(ImageLightboxContainer);
