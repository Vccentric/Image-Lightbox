import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';
import './image-lightbox.css';

class ImageLightboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickThumbnail = this.clickThumbnail.bind(this);
    }

    clickThumbnail(event) {
        console.log('click thumbnail');
        // TODO
    }

    render() {
        return (
            <div id="image-lightbox-container">
                <h1>Image Lightbox!!!</h1>
                <ImageGrid handleClickThumbnail={this.clickThumbnail} />
            </div>
        );
    }
}

export default hot(module)(ImageLightboxContainer);
