import React from 'react';
import { hot } from 'react-hot-loader';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.clickClose = this.clickClose.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.getElementById("lightbox").focus();
    }

    componentDidUpdate() {
        document.getElementById("lightbox").focus();
    }

    // function to handle clicking of close
    clickClose(event) {
        const { handleCloseLightbox } = this.props;
        handleCloseLightbox(event);
    }

    // function to handle keypress of 'ESC' to close
    handleKeyDown(event) {
        const {
            handleCloseLightbox, handleChangeSelectedImage, selectedImage, images,
        } = this.props;
        let index = 0;
        const max = images.length - 1;
        switch (event.key) {
            case 'Escape':
                handleCloseLightbox(event);
                break;
            case "ArrowLeft":
                index = (selectedImage === undefined || ((selectedImage - 1) < 0)) ? 0 : (selectedImage - 1);
                handleChangeSelectedImage(index);
                break;
            case 'ArrowRight':
                index = (selectedImage === undefined || ((selectedImage + 1) >= max)) ? max : (selectedImage + 1);
                handleChangeSelectedImage(index);
                break;
            default:
                break;
        }
    }

    render() {
        const { lightboxOpen, images, selectedImage } = this.props;
        const src = (selectedImage !== null && images[selectedImage] !== undefined) ? images[selectedImage].src : '';
        const alt = (selectedImage !== null && images[selectedImage] !== undefined) ? images[selectedImage].alt : '';
        const classNames = (lightboxOpen) ? 'show' : '';
        return (
            <div>
                <div id="lightboxOverlay" className={classNames} />
                <div id="lightbox" className={classNames} onKeyDown={this.handleKeyDown} tabIndex="0">
                    <div id="close" onClick={this.clickClose}>X</div>
                    <div id="controlsContainer">
                        <div id="prev">&lt;&lt;</div>
                        <div id="imageContainer">
                            <img id="fullImage" src={src} alt={alt} />
                            <div id="caption">{alt}</div>
                        </div>
                        <div id="next">&gt;&gt;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Lightbox);
