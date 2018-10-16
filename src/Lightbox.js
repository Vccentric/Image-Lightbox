import React from 'react';
import { hot } from 'react-hot-loader';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.clickImage = this.clickImage.bind(this);
        this.close = this.close.bind(this);
    }

    // function to handle clicking full image
    clickImage(event) {
        const { handleClickLightboxImage } = this.props;
        handleClickLightboxImage(event);
    }

    // function to handle close
    close(event) {
        const { handleCloseLightbox } = this.props;
        handleCloseLightbox(event);
    }

    render() {
        const { lightboxOpen, image } = this.props;
        const { src, alt } = image;
        const classNames = lightboxOpen ? 'show' : '';
        return (
            <div>
                <div id="lightboxOverlay" className={classNames} />
                <div id="lightbox" className={classNames}>
                    <div id="close" onClick={this.close}>X</div>
                    <div id="imageContainer">
                        <img id="fullImage" src={src} alt={alt} />
                        <div id="caption">{alt}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Lightbox);
