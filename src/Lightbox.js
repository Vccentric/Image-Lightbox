import React from 'react';
import { hot } from 'react-hot-loader';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.clickClose = this.clickClose.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.clickPrev = this.clickPrev.bind(this);
        this.clickNext = this.clickNext.bind(this);
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
        const { handleCloseLightbox } = this.props;
        switch (event.key) {
            case 'Escape':
                handleCloseLightbox(event);
                break;
            case "ArrowLeft":
                this.clickPrev();
                break;
            case 'ArrowRight':
                this.clickNext();
                break;
            default:
                break;
        }
    }

    // function to handle clicking prev arrow
    clickPrev() {
        const { handleChangeSelectedImage, selectedImage } = this.props;
        const index = (selectedImage === undefined || ((selectedImage - 1) < 0)) ? 0 : (selectedImage - 1);
        handleChangeSelectedImage(index);
    }

    // function to handle clicking next arrow
    clickNext() {
        const { handleChangeSelectedImage, selectedImage, images } = this.props;
        const max = images.length - 1;
        const index = (selectedImage === undefined || ((selectedImage + 1) >= max)) ? max : (selectedImage + 1);
        handleChangeSelectedImage(index);
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
                        <div id="prev" onClick={this.clickPrev}>&lt;&lt;</div>
                        <div id="imageContainer">
                            <img id="fullImage" src={src} alt={alt} />
                            <div id="caption">{alt}</div>
                        </div>
                        <div id="next" onClick={this.clickNext}>&gt;&gt;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Lightbox);
