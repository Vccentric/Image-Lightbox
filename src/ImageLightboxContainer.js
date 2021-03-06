import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';
import './image-lightbox.css';
import img1 from "../public/images/img_mountains_wide.jpg";
import img2 from "../public/images/img_nature_wide.jpg";
import img3 from "../public/images/img_snow_wide.jpg";

// global variables
const localImages = [ // local sample images
    { src: img1, alt: 'img-1' },
    { src: img2, alt: 'img-2' },
    { src: img3, alt: 'img-3' },
];

class ImageLightboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickThumbnail = this.clickThumbnail.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.changeSelectedImage = this.changeSelectedImage.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            lightboxOpen: false,
            images: [],
            selectedImage: null,
            title: 'Image Lightbox',
            firstLoad: true,
        };
    }

    componentDidMount() {
        // check which type of images to get
        const { options } = this.props;
        this.getData(options); // get images
    }

    // function to make ajax call to get data from url (Flickr feed)
    getData(options) {
        // check options
        if (options === 'flickr') {
            // set url to get public Flickr feed
            const url = 'https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=puppies&format=json&nojsoncallback=true';
            const images = [];
            fetch(url)
                .then(response => response.json()) // convert response into json
                .then((jsonData) => {
                    const items = (jsonData && jsonData.items) ? jsonData.items : [];
                    const title = (jsonData && jsonData.title) ? `Flickr Public Feed: ${jsonData.title}` : 'Flickr Public Feed: ';
                    for (let i = 0; i < items.length; i++) { // convert json into an appropriate 'key/value' object array
                        const src = items[i].media.m;
                        const alt = items[i].title;
                        images.push({ src, alt });
                    }
                    this.setState({ images, title, firstLoad: false });
                })
                .catch((error) => {
                    console.log('Error has occurred:');
                    console.log(error);
                });
        } else { // default - use local images
            this.setState({ images: localImages, firstLoad: false });
        }
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
        const {
            lightboxOpen, selectedImage, images, title, firstLoad,
        } = this.state;
        return (
            <div id="image-lightbox-container">
                <h1 id="title">{title}</h1>
                {firstLoad && <div id="loadingSpinner">Loading...</div>}
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
