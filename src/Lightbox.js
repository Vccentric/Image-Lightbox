import React from 'react';
import { hot } from 'react-hot-loader';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.clickImage = this.clickImage.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.keyDownClose = this.keyDownClose.bind(this);
    }

    componentDidMount() {
        document.getElementById("lightbox").focus();
    }

    componentDidUpdate() {
        document.getElementById("lightbox").focus();
    }

    // function to handle clicking full image
    clickImage(event) {
        const { handleClickLightboxImage } = this.props;
        handleClickLightboxImage(event);
    }

    // function to handle clicking of close
    clickClose(event) {
        const { handleCloseLightbox } = this.props;
        handleCloseLightbox(event);
    }

    // function to handle keypress of 'ESC' to close
    keyDownClose(event) {
        if (event.key === 'Escape') {
            const { handleCloseLightbox } = this.props;
            handleCloseLightbox(event);
        }
    }

    render() {
        const { lightboxOpen, image } = this.props;
        const { src, alt } = image;
        const classNames = lightboxOpen ? 'show' : '';
        return (
            <div>
                <div id="lightboxOverlay" className={classNames} />
                <div id="lightbox" className={classNames} onKeyDown={this.keyDownClose} tabIndex="0">
                    <div id="close" onClick={this.clickClose}>X</div>
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
